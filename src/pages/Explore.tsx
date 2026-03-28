import { Map, Utensils, Info, Leaf, Wine } from 'lucide-react';

export default function Explore() {
  const restaurants = [
    {
      name: "Bahnsteig 1",
      location: "Mayschoß (am Bahnhof)",
      desc: "Feste vegane & vegetarische Hauptgerichte. Gemütlich, gruppentauglich, direkt am Bahnhof.",
      vegan: "Sehr gut"
    },
    {
      name: "May Hotel Mayschoss",
      location: "Mayschoß",
      desc: "Vegane Menüs auf Voranmeldung (1-2 Wochen vorher). Ideal für Gruppen & Hotelgäste.",
      vegan: "Auf Voranmeldung",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg"
    },
    {
      name: "Weinhaus Kläs & Sohn",
      location: "Mayschoß",
      desc: "Vegetarisch sicher. Vegan nach Absprache möglich, aber nicht garantiert. Klassisch & gemütlich.",
      vegan: "Nach Absprache"
    },
    {
      name: "Weinhaus Michaelishof",
      location: "Mayschoß",
      desc: "Einzelne vegane Gerichte nach Anmeldung. Nicht vegan spezialisiert, aber tolle Aussicht.",
      vegan: "Nach Anmeldung"
    },
    {
      name: "Neuenahrer Brauhaus",
      location: "Bad Neuenahr (ca. 20 Min. per Bahn)",
      desc: "Vegane Optionen fest auf der Karte. Urige Brauhaus-Atmosphäre.",
      vegan: "Sehr gut"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Entdecken & Kulinarik</h1>
        <p className="text-stone-500">Highlights und Restaurant-Optionen für unsere Gruppe.</p>
      </div>

      {/* Hike Highlight */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <Map className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif text-stone-800">Die Wanderung</h2>
        </div>
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row">
          <div className="md:w-2/5 h-64 md:h-auto bg-stone-200 relative">
            <img 
              src="https://i.imgur.com/lYuGaaj.png" 
              alt="Weinberge in Mayschoß" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wider">
              Highlight
            </div>
          </div>
          <div className="p-8 md:w-3/5">
            <h3 className="text-2xl font-serif mb-2">Kleine Saffenburgrunde</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-md text-xs font-medium">8,7 km</span>
              <span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-md text-xs font-medium">215 Höhenmeter</span>
              <span className="px-2.5 py-1 bg-stone-100 text-stone-600 rounded-md text-xs font-medium">2,5 - 3 Stunden</span>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium">Leicht - Mittel</span>
            </div>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Start und Ziel ist der Bahnhof Mayschoß. Der Weg führt direkt in die Weinberge mit einem stetigen, aber moderaten Anstieg. Das Highlight der tour ist die <strong>Saffenburg</strong> – eine Ruine mit 360°-Panoramablick, perfekt für eine Rast und Fotos.
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
              <h4 className="font-medium text-stone-800 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-stone-500" />
                Gut zu wissen
              </h4>
              <ul className="text-sm text-stone-600 space-y-1 ml-6 list-disc">
                <li>Geeignet für Familien mit Hunden und Senioren mit normaler Kondition.</li>
                <li>Zwischenstopp in Rech (Pausenort mit Bahnhof).</li>
                <li>Rückweg von Rech entweder zu Fuß über den Rotweinwanderweg oder kurz mit der Ahrtalbahn.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Wine */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
            <Wine className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif text-stone-800">Wein & Kultur</h2>
        </div>
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row-reverse">
          <div className="md:w-2/5 h-64 md:h-auto bg-stone-200 relative">
            <img 
              src="https://mayschoss.de/wp-content/uploads/2024/08/dummy-winzergenossenschaft.webp" 
              alt="Winzergenossenschaft Mayschoß" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wider">
              Geplant
            </div>
          </div>
          <div className="p-8 md:w-3/5">
            <h3 className="text-2xl font-serif mb-2">Winzergenossenschaft Mayschoß</h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Die älteste Winzergenossenschaft der Welt! Wir planen hier eine Kellerführung durch die historischen Gewölbe, einen Besuch im Weinbaumuseum und eine anschließende Weinprobe.
            </p>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-500" />
                Status: In Planung
              </h4>
              <p className="text-sm text-purple-700">
                Der Termin ist noch nicht fest bestätigt. Das Bild dient als Platzhalter, da die Details noch finalisiert werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 text-orange-700 rounded-lg">
            <Utensils className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif text-stone-800">Abendessen Optionen</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {restaurants.map((rest, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              {rest.image && (
                <div className="h-40 w-full overflow-hidden border-b border-stone-100">
                  <img 
                    src={rest.image} 
                    alt={rest.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-stone-800">{rest.name}</h3>
                  <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded-full">
                    <Leaf className="w-3 h-3" />
                    {rest.vegan}
                  </div>
                </div>
                <p className="text-xs font-medium text-stone-400 mb-3 uppercase tracking-wider">{rest.location}</p>
                <p className="text-sm text-stone-600">{rest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
