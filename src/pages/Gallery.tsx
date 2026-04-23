import React, { useState, useRef, useEffect } from 'react';
import { Image as ImageIcon, Upload, X, Maximize2, Trash2, LogIn, Download, CheckCircle2, Circle, Check, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  deleteDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db, auth } from '../firebase';

// Error handling types
enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface Photo {
  id: string;
  url: string;
  createdAt: any;
}

const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
};

export default function Gallery() {
  const [images, setImages] = useState<Photo[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isDownloading, setIsDownloading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query(collection(db, 'photos'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const photoData: Photo[] = [];
      snapshot.forEach((doc) => {
        photoData.push({ id: doc.id, ...doc.data() } as Photo);
      });
      setImages(photoData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'photos');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      const fileArray = Array.from(files) as File[];
      
      try {
        for (const file of fileArray) {
          try {
            const resizedBase64 = await resizeImage(file, 1200, 1200);
            await addDoc(collection(db, 'photos'), {
              url: resizedBase64,
              createdAt: serverTimestamp()
            });
          } catch (error) {
            console.error("Fehler beim Verarbeiten/Hochladen des Bildes:", error);
          }
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, 'photos');
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    }
  };

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDownloadSingle = async (url: string, id: string) => {
    // Try Web Share API first for mobile devices (allows "Save to Photos")
    if (navigator.share && navigator.canShare) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], `erinnerung_${id.slice(0, 5)}.jpg`, { type: 'image/jpeg' });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Foto speichern',
          });
          return;
        }
      } catch (error) {
        console.error("Sharing failed, falling back to direct download:", error);
      }
    }

    // Fallback to traditional download
    const link = document.createElement('a');
    link.href = url;
    link.download = `erinnerung_${id.slice(0, 5)}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSelected = async () => {
    if (selectedIds.size === 0) return;
    
    setIsDownloading(true);
    try {
      const selectedImages = images.filter(img => selectedIds.has(img.id));
      
      // Try Web Share API for multiple files (best for mobile "Save X Images")
      if (navigator.share && navigator.canShare) {
        const files: File[] = [];
        for (const photo of selectedImages) {
          const response = await fetch(photo.url);
          const blob = await response.blob();
          files.push(new File([blob], `erinnerung_${photo.id.slice(0, 5)}.jpg`, { type: 'image/jpeg' }));
        }

        if (navigator.canShare({ files })) {
          await navigator.share({
            files,
            title: 'Erinnerungen speichern',
          });
          setIsSelecting(false);
          setSelectedIds(new Set());
          return;
        }
      }

      // Fallback for devices without share capability: Trigger sequential downloads
      // Note: Browsers usually block this or ask for permission
      for (const photo of selectedImages) {
        const link = document.createElement('a');
        link.href = photo.url;
        link.download = `erinnerung_${photo.id.slice(0, 5)}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Small delay to help browser handle multiple clicks
        await new Promise(r => setTimeout(r, 100));
      }
    } catch (error) {
      console.error("Download/Share failed:", error);
    } finally {
      setIsDownloading(false);
      setIsSelecting(false);
      setSelectedIds(new Set());
    }
  };

  const toggleSelectionMode = () => {
    setIsSelecting(!isSelecting);
    if (isSelecting) {
      setSelectedIds(new Set());
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-serif text-stone-800 mb-3">Galerie</h1>
          <p className="text-stone-500">Erinnerungen an unseren Familienausflug.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={toggleSelectionMode}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all shadow-sm ${
              isSelecting 
                ? 'bg-stone-200 text-stone-800 hover:bg-stone-300' 
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {isSelecting ? (
              <>
                <X className="w-4 h-4" />
                Ausbrechen
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Bilder auswählen
              </>
            )}
          </button>

          {isSelecting && selectedIds.size > 0 && (
            <button 
              onClick={handleDownloadSelected}
              disabled={isDownloading}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-50"
            >
              {isDownloading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {selectedIds.size} {selectedIds.size === 1 ? 'Bild' : 'Bilder'} sichern
            </button>
          )}

          {!isSelecting && (
            <>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleUpload} 
                multiple 
                accept="image/*" 
                className="hidden" 
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-colors shadow-sm ${isUploading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isUploading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                {isUploading ? 'Wird hochgeladen...' : 'Fotos hochladen'}
              </button>
            </>
          )}
        </div>
      </div>

      {images.length === 0 ? (
        <div className="bg-stone-100 rounded-3xl p-16 flex flex-col items-center justify-center text-center border-2 border-dashed border-stone-300">
          <ImageIcon className="w-16 h-16 text-stone-400 mb-4" />
          <h3 className="text-xl font-serif text-stone-700 mb-2">Noch keine Fotos</h3>
          <p className="text-stone-500 max-w-xs">Lade die ersten Bilder vom Wochenende hoch, um sie hier mit allen zu teilen!</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((photo) => (
            <motion.div 
              key={photo.id} 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`break-inside-avoid rounded-2xl overflow-hidden shadow-sm group relative bg-stone-100 cursor-pointer transition-all ${
                isSelecting && selectedIds.has(photo.id) ? 'ring-4 ring-emerald-500 sm:scale-[0.98]' : ''
              }`}
              onClick={() => isSelecting ? toggleSelection(photo.id) : setSelectedImage(photo.url)}
            >
              <img 
                src={photo.url} 
                alt="Erinnerung" 
                className={`w-full h-auto object-cover transition-transform duration-500 ${!isSelecting ? 'group-hover:scale-105' : ''}`}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {isSelecting && (
                <div className="absolute top-3 right-3 z-10">
                  {selectedIds.has(photo.id) ? (
                    <div className="bg-emerald-500 text-white p-1 rounded-full shadow-lg">
                      <Check className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="bg-white/50 backdrop-blur-sm border-2 border-white/80 p-1 rounded-full shadow-lg">
                      <div className="w-5 h-5" />
                    </div>
                  )}
                </div>
              )}

              {!isSelecting && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(photo.url);
                    }}
                    className="p-3 bg-white/90 rounded-full text-stone-800 hover:bg-white transition-all hover:scale-110 shadow-lg"
                    title="Vergrößern"
                  >
                    <Maximize2 className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadSingle(photo.url, photo.id);
                    }}
                    className="p-3 bg-white/90 rounded-full text-stone-800 hover:bg-white transition-all hover:scale-110 shadow-lg"
                    title="Herunterladen"
                  >
                    <Download className="w-6 h-6" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-6 right-6 flex items-center gap-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadSingle(selectedImage, 'full');
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                title="Herunterladen"
              >
                <Download className="w-8 h-8" />
              </button>
              <button 
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Vergrößerte Ansicht" 
              className="max-w-full max-h-full rounded-lg shadow-2xl ring-1 ring-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
