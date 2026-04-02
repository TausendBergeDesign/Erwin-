import { Utensils, Leaf, Wine, ExternalLink, Coffee, Globe, Info, Bed } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Explore() {
  const restaurants = [
    {
      name: "May Hotel Mayschoß",
      location: "Mayschoß",
      desc: "Unsere Wahl für das gemeinsame Abendessen. Hier gibt es für alle etwas zu essen (auch vegan/vegetarisch).",
      vegan: "Sehr gut",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg",
      selected: true,
      menu: "https://mayhotel.de/getraenkekarte/",
      website: "https://mayhotel.de/",
      hotelLink: "/hotel"
    },
    {
      name: "Bahnsteig 1",
      location: "Mayschoß (am Bahnhof)",
      desc: "Feste vegane & vegetarische Hauptgerichte. Gemütlich, gruppentauglich, direkt am Bahnhof.",
      vegan: "Sehr gut",
      image: "https://bahnsteig1.org/wp-content/uploads/2024/07/Fotograf_Eric_Bubacz_240514_0050DSC00242-scaled-1.jpg",
      website: "https://bahnsteig1.org/",
      menu: "https://bahnsteig1.org/restaurant/"
    },
    {
      name: "Weinhaus Kläs & Sohn",
      location: "Mayschoß",
      desc: "Vegetarisch sicher. Vegan nach Absprache möglich, aber nicht garantiert. Klassisch & gemütlich.",
      vegan: "Nach Absprache",
      image: "https://www.rotweinwanderweg.de/fileadmin/_processed_/csm_klaes-front1_e52be13ca2.jpg",
      website: "https://www.weinhaus-klaes.de/"
    },
    {
      name: "Weinhaus Michaelishof",
      location: "Mayschoß",
      desc: "Einzelne vegane Gerichte nach Anmeldung. Nicht vegan spezialisiert, aber tolle Aussicht.",
      vegan: "Nach Anmeldung",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/Michaelishof_DAS-WEINHAUS-scaled-1-768x512.jpg",
      website: "https://www.michaelishof-mayschoss.de/"
    },
    {
      name: "Neuenahrer Brauhaus",
      location: "Bad Neuenahr (ca. 20 Min. per Bahn)",
      desc: "Vegane Optionen fest auf der Karte. Urige Brauhaus-Atmosphäre.",
      vegan: "Sehr gut",
      image: "https://images.happycow.net/venues/1024/45/61/hcmp456131_3515184.jpeg",
      website: "https://www.neuenahrer-brauhaus.de/",
      menu: "https://www.neuenahrer-brauhaus.de/essen-trinken/"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Entdecken & Kulinarik</h1>
        <p className="text-stone-500">Highlights und Restaurant-Optionen für unsere Gruppe.</p>
      </div>

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
              Die älteste Winzergenossenschaft der Welt! Dies ist unsere <strong>optionale Schlechtwetter-Option</strong>. Bei Regen oder Kälte können wir hier eine Kellerführung durch die historischen Gewölbe, einen Besuch im Weinbaumuseum und eine anschließende Weinprobe genießen.
            </p>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-500" />
                Status: Optional / Schlechtwetter-Alternative
              </h4>
              <p className="text-sm text-purple-700">
                Wird kurzfristig je nach Wetterlage und Lust der Gruppe entschieden.
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
          <h2 className="text-2xl font-serif text-stone-800">Restaurants in der Nähe</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {restaurants.map((rest, idx) => (
            <div key={idx} className={`bg-white rounded-3xl shadow-sm border transition-all overflow-hidden flex flex-col ${rest.selected ? 'ring-2 ring-emerald-500 border-emerald-100' : 'border-stone-100 hover:shadow-md'}`}>
              {rest.image && (
                <div className="h-48 w-full overflow-hidden border-b border-stone-100 relative">
                  <img 
                    src={rest.image} 
                    alt={rest.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {rest.selected && (
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Unsere Wahl
                    </div>
                  )}
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-stone-800">{rest.name}</h3>
                  <div className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 bg-green-50 text-green-700 rounded-full">
                    <Leaf className="w-3 h-3" />
                    {rest.vegan}
                  </div>
                </div>
                <p className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-wider">{rest.location}</p>
                <p className="text-stone-600 mb-6 flex-grow leading-relaxed">{rest.desc}</p>
                
                <div className="mt-auto space-y-2">
                  {rest.hotelLink && (
                    <Link 
                      to={rest.hotelLink}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-colors"
                    >
                      <Bed className="w-4 h-4" />
                      Zum Hotel-Profil
                    </Link>
                  )}
                  {rest.menu && (
                    <a 
                      href={rest.menu} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 text-emerald-700 rounded-xl font-medium hover:bg-emerald-100 transition-colors border border-emerald-100"
                    >
                      <Coffee className="w-4 h-4" />
                      Speisekarte / Getränke
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                  {rest.website && (
                    <a 
                      href={rest.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 text-stone-500 hover:text-stone-800 transition-colors text-sm font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      Website besuchen
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

