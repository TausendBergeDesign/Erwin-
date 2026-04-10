import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, CheckCircle2, Circle } from 'lucide-react';

export default function PackingList() {
  const [weather, setWeather] = useState<{temp: number, code: number} | null>({ temp: 21, code: 0 });
  const [loading, setLoading] = useState(false);

  // Simple local state for checklist (resets on reload since no backend)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Wetterdaten sind nun fest hinterlegt
  }, []);

  const toggleItem = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const categories = [
    {
      title: "Wichtigstes",
      items: [
        "Erwin-Armbänder (Ganz wichtig!)",
        "Personalausweis",
        "Bargeld / EC-Karte",
        "Krankenversichertenkarte",
        "Tickets für die Bahn (falls benötigt)"
      ]
    },
    {
      title: "Wandern & Outdoor",
      items: [
        "Bequeme Wanderschuhe / feste Schuhe",
        "Wetterfeste Jacke (Zwiebellook)",
        "Kleiner Rucksack für die Wanderung",
        "Trinkflasche",
        "Sonnenbrille / Sonnenschutz",
        "Hundeleine & Kotbeutel (für die Hundebesitzer)"
      ]
    },
    {
      title: "Kleidung",
      items: [
        "Gemütliche Kleidung für abends",
        "Unterwäsche & Socken",
        "Schlafanzug",
        "Wechselkleidung (falls man beim Wandern schwitzt)"
      ]
    },
    {
      title: "Kulturbeutel",
      items: [
        "Zahnbürste & Zahnpasta",
        "Duschgel & Shampoo",
        "Deo",
        "Persönliche Medikamente",
        "Blasenpflaster (sicher ist sicher)"
      ]
    }
  ];

  // Helper to render weather icon based on WMO code
  const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return <Sun className="w-8 h-8 text-amber-500" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-8 h-8 text-blue-500" />;
    return <Cloud className="w-8 h-8 text-stone-400" />;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Packliste</h1>
        <p className="text-stone-500">Damit auch wirklich nichts vergessen wird.</p>
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 mb-10 border border-blue-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-1">Wetter am 11.04. in Mayschoß</h2>
          <p className="text-xs text-blue-600">Zur Orientierung für die Packliste</p>
        </div>
        <div className="flex items-center gap-4 self-end sm:self-auto">
          {loading ? (
            <div className="animate-pulse w-16 h-8 bg-blue-200 rounded"></div>
          ) : weather ? (
            <>
              <div className="flex items-center gap-1 text-2xl font-bold text-blue-900">
                <Thermometer className="w-6 h-6" />
                {Math.round(weather.temp)}°C
              </div>
              {getWeatherIcon(weather.code)}
            </>
          ) : (
            <span className="text-sm text-stone-500">Wetterdaten nicht verfügbar</span>
          )}
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h3 className="font-serif text-xl text-stone-800 mb-4 pb-2 border-b border-stone-100">
              {cat.title}
            </h3>
            <ul className="space-y-3">
              {cat.items.map((item, itemIdx) => {
                const isChecked = checkedItems[item] || false;
                const isErwin = item.includes("Erwin-Armbänder");
                return (
                  <li 
                    key={itemIdx} 
                    className={`flex items-start gap-3 cursor-pointer group ${isErwin ? 'p-3 bg-red-50 rounded-xl border border-red-100' : ''}`}
                    onClick={() => toggleItem(item)}
                  >
                    <button className="mt-0.5 shrink-0 focus:outline-none">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Circle className={`w-5 h-5 ${isErwin ? 'text-red-400' : 'text-stone-300 group-hover:text-stone-400'}`} />
                      )}
                    </button>
                    <span className={`text-stone-700 select-none transition-all ${isChecked ? 'line-through text-stone-400' : ''} ${isErwin && !isChecked ? 'font-bold text-red-700' : ''}`}>
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
