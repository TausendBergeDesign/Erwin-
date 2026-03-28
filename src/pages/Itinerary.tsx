import { Clock, MapPin, Coffee, Wine, Bed, Utensils, Info } from 'lucide-react';

export default function Itinerary() {
  const saturdayEvents = [
    {
      time: "11:00",
      title: "Ankunft & Gepäckabgabe",
      location: "May Hotel Mayschoss",
      description: "Ankunft der Familie. Gepäck deponieren (Check-in regulär ab 15:00 Uhr). Kurzes Sammeln, Toilette, evtl. erster Kaffee im Ort.",
      icon: Bed,
      color: "bg-blue-100 text-blue-700",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg"
    },
    {
      time: "11:30",
      title: "Kleine Saffenburgrunde",
      location: "Start: Bahnhof Mayschoss",
      description: "Rundwanderung (ca. 8,7 km, 215 hm, 2:30–3:00 Std). Leicht-mittel, geeignet für Senioren & Hunde. Aufstieg zur Saffenburg (360°-Panorama), Abstieg nach Rech (Pause), Rückweg nach Mayschoß (zu Fuß oder Bahn).",
      icon: MapPin,
      color: "bg-emerald-100 text-emerald-700",
      image: "https://i.imgur.com/lYuGaaj.png"
    },
    {
      time: "15:15",
      title: "Check-in & Pause",
      location: "May Hotel Mayschoss",
      description: "Zimmerbezug, frisch machen. Optional: Kaffee, Kuchen, Ruhezeit.",
      icon: Coffee,
      color: "bg-amber-100 text-amber-700",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg"
    },
    {
      time: "16:30",
      title: "Weinprobe",
      location: "Winzergenossenschaft Mayschoss",
      description: "Kellerführung (ohne Hunde!), Weinbaumuseum, 5er- oder 6er-Weinprobe inkl. Wasser & Brot. Kosten ca. 220 Euro für die Gruppe. Ende ca. 18:30–18:45 Uhr. (Termin noch nicht fest bestätigt)",
      icon: Wine,
      color: "bg-purple-100 text-purple-700",
      image: "https://mayschoss.de/wp-content/uploads/2024/08/dummy-winzergenossenschaft.webp"
    },
    {
      time: "19:00",
      title: "Gemeinsames Abendessen",
      location: "Ort noch offen",
      description: "Verschiedene Optionen (z.B. Bahnsteig 1, May Hotel, Weinhaus Kläs & Sohn). Vegane Optionen verfügbar.",
      icon: Utensils,
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Reiseplan</h1>
        <p className="text-stone-500">Unser Programm für das Wochenende im Ahrtal.</p>
      </div>

      {/* Saturday */}
      <div className="mb-12">
        <div className="sticky top-0 bg-[#f5f5f0]/90 backdrop-blur-md py-4 z-10 mb-6 border-b border-stone-200">
          <h2 className="text-2xl font-serif text-stone-800">Samstag, 11. April 2026</h2>
          <p className="text-sm text-stone-500">Genuss & Wandern in Mayschoß</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
          
          {saturdayEvents.map((event, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#f5f5f0] ${event.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10`}>
                <event.icon className="w-4 h-4" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-white shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-stone-400" />
                  <span className="font-mono text-sm font-medium text-stone-500">{event.time}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-1">{event.title}</h3>
                <p className="text-sm font-medium text-stone-600 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">
                  {event.description}
                </p>
                {event.image && (
                  <div className="rounded-xl overflow-hidden border border-stone-100 shadow-sm">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-auto object-cover max-h-48"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Sunday Placeholder */}
      <div>
        <div className="sticky top-0 bg-[#f5f5f0]/90 backdrop-blur-md py-4 z-10 mb-6 border-b border-stone-200">
          <h2 className="text-2xl font-serif text-stone-800">Sonntag, 12. April 2026</h2>
          <p className="text-sm text-stone-500">Abreise & Ausklang</p>
        </div>
        <div className="p-8 rounded-2xl border-2 border-dashed border-stone-300 text-center">
          <Info className="w-8 h-8 text-stone-400 mx-auto mb-3" />
          <h3 className="font-medium text-stone-700 mb-1">Programm noch offen</h3>
          <p className="text-sm text-stone-500">Gemütliches Frühstück und individuelle Abreise.</p>
        </div>
      </div>

    </div>
  );
}
