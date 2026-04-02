import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-gpx';
import { Navigation, MapPin, AlertCircle } from 'lucide-react';

// Fix for default marker icons in Leaflet with React
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const UserIcon = L.divIcon({
  className: 'custom-user-icon',
  html: `<div class="w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-lg"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

L.Marker.prototype.options.icon = DefaultIcon;

function GPXLayer({ gpxFile }: { gpxFile: string }) {
  const map = useMap();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!map) return;

    let isMounted = true;
    let gpxLayer: any = null;

    const loadGPX = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(gpxFile);
        if (!isMounted) return;

        if (!response.ok) {
          throw new Error(`Die Datei "${gpxFile}" wurde nicht auf dem Server gefunden (Status ${response.status}). Bitte lade sie hoch.`);
        }
        
        const text = await response.text();
        if (!isMounted) return;

        if (!text || !text.includes('<gpx')) {
          throw new Error('Die Datei enthält kein gültiges GPX-Format.');
        }

        // Only initialize L.GPX if we have valid-looking XML
        // @ts-ignore - L.GPX is added by the leaflet-gpx plugin
        gpxLayer = new L.GPX(text, {
          async: true,
          marker_options: {
            startIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.7.0/pin-icon-start.png',
            endIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.7.0/pin-icon-end.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.7.0/pin-shadow.png'
          },
          polyline_options: {
            color: '#0055ff',
            opacity: 0.8,
            weight: 5,
            lineCap: 'round'
          }
        });

        gpxLayer.on('loaded', (e: any) => {
          if (isMounted) {
            map.fitBounds(e.target.getBounds());
            setError(null);
            setIsLoading(false);
          }
        });

        gpxLayer.on('error', (e: any) => {
          if (isMounted) {
            console.error("GPX Parse Error:", e);
            setError("Die Wanderroute konnte nicht verarbeitet werden. Das GPX-Format ist möglicherweise fehlerhaft.");
            setIsLoading(false);
          }
        });

        gpxLayer.addTo(map);
      } catch (err) {
        if (isMounted) {
          console.error("GPX Load Error:", err);
          setError(err instanceof Error ? err.message : 'Fehler beim Laden der Route');
          setIsLoading(false);
        }
      }
    };

    loadGPX();

    return () => {
      isMounted = false;
      if (gpxLayer && map.hasLayer(gpxLayer)) {
        map.removeLayer(gpxLayer);
      }
    };
  }, [map, gpxFile]);

  if (isLoading && !error) {
    return (
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-[1000] bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-medium text-stone-700">Lade Wanderroute...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-[1000] bg-red-50 border border-red-200 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[90%]">
        <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
        <p className="text-sm text-red-700 font-medium">{error}</p>
      </div>
    );
  }

  return null;
}

function MapController({ centerPos }: { centerPos: [number, number] | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (centerPos) {
      map.flyTo(centerPos, 16, {
        duration: 1.5
      });
    }
  }, [centerPos, map]);

  return null;
}

function LocationMarker({ onLocationFound }: { onLocationFound: (pos: [number, number]) => void }) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const newPos: [number, number] = [latitude, longitude];
        setPosition(newPos);
        onLocationFound(newPos);
      },
      (err) => console.error("Geolocation error:", err),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [onLocationFound]);

  return position === null ? null : (
    <Marker position={position} icon={UserIcon}>
      <Popup>
        <div className="text-center font-sans">
          <span className="font-bold text-blue-600">Du bist hier</span>
        </div>
      </Popup>
    </Marker>
  );
}

export default function HikeMap() {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [centerRequest, setCenterRequest] = useState<[number, number] | null>(null);
  const gpxFile = '/t7973072_kleine saffenburgrunde.gpx';

  const handleLocateMe = () => {
    if (userPos) {
      setCenterRequest([...userPos] as [number, number]);
      setTimeout(() => setCenterRequest(null), 100);
    } else {
      navigator.geolocation.getCurrentPosition((pos) => {
        const newPos: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserPos(newPos);
        setCenterRequest(newPos);
        setTimeout(() => setCenterRequest(null), 100);
      }, (err) => {
        console.error("Geolocation error:", err);
      });
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
        <MapContainer 
          center={[50.519, 7.028]} 
          zoom={14} 
          scrollWheelZoom={true} 
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapController centerPos={centerRequest} />
          <GPXLayer gpxFile={gpxFile} />
          <LocationMarker onLocationFound={setUserPos} />
        </MapContainer>

        <button
          onClick={handleLocateMe}
          className="absolute bottom-6 right-6 z-[1000] bg-white p-4 rounded-2xl shadow-2xl border border-stone-100 hover:bg-stone-50 transition-all active:scale-95 group/btn"
          title="Meinen Standort finden"
        >
          <Navigation className={`w-6 h-6 transition-colors ${userPos ? 'text-blue-500 fill-blue-500' : 'text-stone-400 group-hover/btn:text-stone-600'}`} />
        </button>

        <div className="absolute top-6 left-6 z-[1000] bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-stone-100 hidden sm:block">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-stone-700">Wanderroute (GPX Track)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-xs font-bold text-stone-700">Dein Standort</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <a 
          href="https://www.komoot.com/de-de/smarttour/33710104/zoom" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-4 bg-stone-100 text-stone-700 rounded-2xl font-bold hover:bg-stone-200 transition-all border border-stone-200"
        >
          <MapPin className="w-5 h-5" />
          In Komoot öffnen
        </a>
      </div>
    </div>
  );
}
