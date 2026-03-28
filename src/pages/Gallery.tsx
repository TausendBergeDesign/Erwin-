import { Image as ImageIcon, Upload } from 'lucide-react';

export default function Gallery() {
  // Placeholder images for the masonry grid
  const photos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ahrtal_bei_Mayscho%C3%9F.jpg/1200px-Ahrtal_bei_Mayscho%C3%9F.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Burgruine_Saffenburg_Mayscho%C3%9F.jpg/1200px-Burgruine_Saffenburg_Mayscho%C3%9F.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mayscho%C3%9F_-_Panoramio.jpg/1200px-Mayscho%C3%9F_-_Panoramio.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Mayscho%C3%9F_Winzergenossenschaft.jpg/1200px-Mayscho%C3%9F_Winzergenossenschaft.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mayscho%C3%9F_-_Pfarrkirche_St._Nikolaus_und_St._Rochus.jpg/1200px-Mayscho%C3%9F_-_Pfarrkirche_St._Nikolaus_und_St._Rochus.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Mayscho%C3%9F_-_Blick_auf_die_Saffenburg.jpg/1200px-Mayscho%C3%9F_-_Blick_auf_die_Saffenburg.jpg"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-serif text-stone-800 mb-3">Galerie</h1>
          <p className="text-stone-500">Erinnerungen an unseren Familienausflug.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-colors shadow-sm">
          <Upload className="w-4 h-4" />
          Fotos hochladen
        </button>
      </div>

      {/* Masonry-style Grid (CSS Columns) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {/* Empty State / Upload Prompt */}
        <div className="break-inside-avoid bg-stone-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-stone-300 min-h-[200px]">
          <ImageIcon className="w-10 h-10 text-stone-400 mb-3" />
          <h3 className="font-medium text-stone-700 mb-1">Noch keine neuen Fotos</h3>
          <p className="text-sm text-stone-500">Lade die ersten Bilder vom Wochenende hoch!</p>
        </div>

        {/* Placeholder Photos */}
        {photos.map((src, idx) => (
          <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm group relative">
            <img 
              src={src} 
              alt={`Erinnerung ${idx + 1}`} 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">Ahrtal 2026</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
