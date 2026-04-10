import { useState, useEffect } from 'react';
import { Wine, MapPin, Calendar, ListTodo, Bed, Cloud, Sun, CloudRain, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [weather, setWeather] = useState<{
    current: { temp: number, code: number },
    daily: { date: string, max: number, min: number, code: number }[]
  } | null>({
    current: { temp: 21, code: 0 },
    daily: [
      { date: "2026-04-11", max: 21, min: 5, code: 0 },
      { date: "2026-04-12", max: 12, min: 7, code: 3 }
    ]
  });

  useEffect(() => {
    // Wetterdaten sind nun fest hinterlegt, um exakt mit der gewünschten Vorhersage übereinzustimmen
  }, []);

  const getWeatherIcon = (code: number, size = "w-6 h-6") => {
    if (code === 0 || code === 1) return <Sun className={`${size} text-amber-500`} />;
    if (code >= 51 && code <= 67) return <CloudRain className={`${size} text-blue-500`} />;
    return <Cloud className={`${size} text-stone-400`} />;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' });
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <header className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden md:rounded-bl-3xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.ahrtal.com/fileadmin/_processed_/1/3/csm_Ahrtal_Sommer-2022-107-Walporzheim-Walporzheim_0634330b1a.jpg" 
            alt="Ahrtal Sommer 2022 Walporzheim" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#f5f5f0]/95"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium tracking-widest uppercase mb-6">
            <Wine className="w-4 h-4" />
            <span>Familien-Event 2026</span>
          </div>
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6 mx-auto overflow-hidden shadow-xl">
            <img 
              src="https://i.imgur.com/dVG8bfj.png" 
              alt="Erwin Tour Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">
            Erwin-Tour ins Ahrtal
          </h1>
          <p className="text-lg md:text-xl text-stone-100 font-medium drop-shadow-md mb-2">
            Unser gemeinsames Wochenende
          </p>
          <p className="text-md text-stone-200 drop-shadow-md">
            11. - 12. April 2026 • Mayschoß
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 -mt-16 relative z-20">
        
        {/* Info Hub Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/reiseplan" className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-stone-800 group-hover:text-white transition-colors">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Programm</h3>
            <p className="text-sm text-stone-500">Wann passiert was? Der komplette Zeitplan für Samstag & Sonntag.</p>
          </Link>

          <Link to="/packliste" className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <ListTodo className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Packliste</h3>
            <p className="text-sm text-stone-500">Wichtig: Erwin-Armbänder nicht vergessen! Checkliste für alle.</p>
          </Link>

          <Link to="/entdecken" className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-stone-800 group-hover:text-white transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Entdecken</h3>
            <p className="text-sm text-stone-500">Infos zur Saffenburg-Wanderung und veganen Restaurants.</p>
          </Link>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-stone-200/50 flex flex-col items-center text-center">
            <Calendar className="w-6 h-6 text-stone-400 mb-3" />
            <span className="text-xs text-stone-500 mb-1 uppercase tracking-wider">Datum</span>
            <span className="font-medium text-stone-800">11.-12. April</span>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-stone-200/50 flex flex-col items-center text-center">
            <MapPin className="w-6 h-6 text-stone-400 mb-3" />
            <span className="text-xs text-stone-500 mb-1 uppercase tracking-wider">Ort</span>
            <span className="font-medium text-stone-800">Mayschoß</span>
          </div>
          <Link to="/hotel" className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-stone-200/50 flex flex-col items-center text-center hover:bg-white transition-colors group">
            <Bed className="w-6 h-6 text-stone-400 mb-3 group-hover:text-stone-800 transition-colors" />
            <span className="text-xs text-stone-500 mb-1 uppercase tracking-wider">Hotel</span>
            <span className="font-medium text-stone-800">May Hotel</span>
          </Link>
          <a 
            href="https://www.wetteronline.de/wetter/mayschoss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-stone-200/50 flex flex-col items-center text-center hover:bg-white transition-colors group"
          >
            {weather ? (
              <>
                <div className="group-hover:scale-110 transition-transform">
                  {getWeatherIcon(weather.current.code)}
                </div>
                <span className="text-xs text-stone-500 mb-1 uppercase tracking-wider mt-3">Wetter 11.04.</span>
                <span className="font-medium text-stone-800">{Math.round(weather.current.temp)}°C</span>
              </>
            ) : (
              <>
                <Cloud className="w-6 h-6 text-stone-400 mb-3 group-hover:text-stone-600 transition-colors" />
                <span className="text-xs text-stone-500 mb-1 uppercase tracking-wider">Wetter</span>
                <span className="font-medium text-stone-800">Lädt...</span>
              </>
            )}
          </a>
        </div>

        {/* Weather Trend */}
        {weather && (
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-4 sm:p-4 mb-16 border border-stone-200/30 flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest px-4 text-center">Wetter am Wochenende</span>
            <div className="flex justify-center w-full sm:w-auto">
              {weather.daily.map((day, i) => (
                <div key={i} className="flex flex-col items-center px-6 sm:px-4 border-l border-stone-200/50 first:border-0">
                  <span className="text-[10px] font-bold text-stone-500 uppercase mb-1">{formatDate(day.date)}</span>
                  {getWeatherIcon(day.code, "w-4 h-4")}
                  <span className="text-xs font-medium text-stone-800 mt-1">{Math.round(day.max)}° / {Math.round(day.min)}°</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 flex flex-col justify-center">
            <h2 className="text-3xl font-serif mb-6 text-stone-800">Unser Basecamp</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed mb-8">
              <p>
                Wir residieren im <Link to="/hotel" className="text-emerald-700 font-bold hover:underline">May Hotel Mayschoß</Link>, direkt im Herzen des Ahrtals. 
              </p>
              <p>
                Von hier aus haben wir den perfekten Startpunkt für unsere Wanderung und sind nur wenige Schritte von der Winzergenossenschaft und dem gemütlichen Ortskern entfernt.
              </p>
            </div>
            <Link to="/hotel" className="inline-flex items-center justify-center px-6 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-colors w-fit">
              Hotel-Details ansehen
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden h-80 md:h-full shadow-sm border border-stone-100">
            <img 
              src="https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg" 
              alt="May Hotel Mayschoß" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Erwin-Tour Weinglas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl overflow-hidden h-80 md:h-full shadow-sm border border-stone-100 order-2 md:order-1">
            <img 
              src="https://i.ibb.co/9krBrmkk/IMG-1453.jpg" 
              alt="Erwin-Tour Weinglas" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2000&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="bg-amber-50 rounded-3xl p-8 md:p-10 shadow-sm border border-amber-100 flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-3xl font-serif mb-6 text-amber-900">Unser Wegbegleiter</h2>
            <div className="space-y-4 text-amber-800 leading-relaxed">
              <p>
                Was wäre eine Tour durch das Ahrtal ohne das passende Glas? Für unsere Erwin-Tour haben wir ein <strong>exklusives Erwin-Tour Weinglas</strong> anfertigen lassen.
              </p>
              <p>
                Es wird unser treuer Begleiter für gute und leckere Weine aus der Region sein – egal ob beim Picknick, am Weinautomaten oder abends im Hotel.
              </p>
            </div>
          </div>
        </div>

        {/* Hike Teaser */}
        <div className="bg-emerald-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative mb-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Die Saffenburgrunde</h2>
            <p className="text-emerald-100 mb-8 leading-relaxed text-lg">
              Freut euch auf 8,7 km pure Ahrtal-Idylle. Wir wandern zur Saffenburg, genießen den Weinautomaten mit Aussicht und kehren über Rech zurück nach Mayschoß.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/wanderung" className="px-6 py-3 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                Zur Wanderkarte
              </Link>
              <div className="flex items-center gap-2 text-emerald-200 text-sm font-medium px-4 py-3 border border-emerald-700 rounded-full">
                <Wine className="w-4 h-4" />
                Weinautomat inklusive
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
            <img 
              src="https://www.ahrtal.com/fileadmin/_processed_/csm_Saffenburg-Mayschoss-Ahrtal-Tourismus-Dominik-Ketz-001_198544e432.jpg" 
              alt="Saffenburg Aussicht" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Ahrtal Info */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          <h2 className="text-3xl font-serif mb-6 text-stone-800">Über Mayschoß & das Ahrtal</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Eingebettet in das spektakuläre Ahrtal ist <strong>Mayschoß</strong> ein malerisches Weindorf, das für seine steilen Terrassenweinberge und erstklassigen Spätburgunder bekannt ist.
              </p>
              <p>
                Hier befindet sich die <em>Winzergenossenschaft Mayschoß-Altenahr</em>, die älteste Winzergenossenschaft der Welt, gegründet 1868. Die Region bietet eine perfekte Mischung aus kulinarischer Exzellenz und Naturerlebnissen.
              </p>
              <div className="pt-4">
                <Link to="/entdecken" className="inline-flex items-center justify-center px-6 py-3 border-2 border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 transition-colors">
                  Mehr entdecken
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 bg-stone-200">
              <img 
                src="https://www.ahrtal.com/fileadmin/user_upload/Ahrtal-Herbst-2022-149-Mayschoss-oberhalb_des_Michaelishofes.jpg" 
                alt="Mayschoß im Herbst" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
