import { Map, Info, Navigation, ExternalLink, Camera, Footprints, Clock, TrendingUp, Utensils, Wine } from 'lucide-react';
import HikeMap from '../components/HikeMap';

export default function Hike() {
  const highlights = [
    {
      title: "Startpunkt Bahnhof Mayschoß",
      distance: "0 KM",
      desc: "Unser Treffpunkt und Start der Wanderung direkt am historischen Bahnhofsgebäude.",
      icon: Navigation,
      image: "https://bf-a.zielbahnhof.de/index_htm_files/809656.png"
    },
    {
      title: "Weinautomat an der Saffenburg",
      distance: "1,2 KM",
      desc: "Ein kühler Wein direkt am Aussichtspunkt – perfekt für eine kleine Pause mit Blick ins Ahrtal.",
      icon: Wine,
      image: "https://www.volksfreund.de/imgs/28/1/5/8/8/9/1/9/0/7/tok_9e198318abd47b814bc94c7ba1926291/w1900_h1268_x1496_y998_DPA_bfunk_dpa_5FAC8800D8052FCC-9a6fa92590fba3c2.jpg"
    },
    {
      title: "Saffenburg",
      distance: "1,2 KM",
      desc: "Die älteste Burganlage im Ahrtal. Von hier hat man einen sensationellen 360°-Panoramablick über das Tal.",
      icon: Camera,
      image: "https://img0.oastatic.com/img2/50998261/max/variant.webp?revbust=705e5b64"
    },
    {
      title: "Blick nach Rech",
      distance: "1,4 KM",
      desc: "Ein herrlicher Ausblick auf den benachbarten Weinort Rech und die Ahrschleife.",
      icon: Map,
      image: "https://img2.oastatic.com/img2/8094738/max/variant.jpg?revbust=705e5b64"
    },
    {
      title: "Idylle im Weinort Rech",
      distance: "2,8 KM",
      desc: "Wir wandern durch den malerischen Ort Rech mit seinen Fachwerkhäusern und der historischen Ahrbrücke.",
      icon: Footprints,
      image: "https://img1.oastatic.com/img2/8094727/max/variant.jpg?revbust=705e5b64"
    },
    {
      title: "Dorftüren 'Willkommen in Mayschoß'",
      distance: "4,8 KM",
      desc: "Die kunstvoll gestalteten Dorftüren begrüßen uns zurück in Mayschoß.",
      icon: Info,
      image: "https://saffenburg.de/fileadmin/_processed_/csm_mayschoss-tuer-herbst-klein_e5fa26c802.jpg"
    },
    {
      title: "Michaelskapelle Mayschoß",
      distance: "5 KM",
      desc: "Ein kleiner kultureller Stopp an der Kapelle, bevor es zum Endspurt geht.",
      icon: Camera,
      image: "https://img0.oastatic.com/img2/83121936/max/variant.jpg?revbust=705e5b64"
    },
    {
      title: "Aussichtspunkt Blick auf Mayschoß",
      distance: "5,98 KM",
      desc: "Der letzte große Ausblick auf unseren Zielort, bevor wir wieder am Bahnhof ankommen.",
      icon: Map,
      image: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k0/in/inlfyt6h0zk16w1zh5lszlx21wgn794r-uhi516900/0?width=1920&crop=false&q=70"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Kleine Saffenburgrunde</h1>
        <p className="text-stone-500">Unsere geplante Wanderung ab/bis Mayschoß.</p>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-5 gap-4 mb-16">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
          <Clock className="w-8 h-8 text-emerald-600 mb-3" />
          <span className="text-2xl font-serif text-stone-800">2:40 Std.</span>
          <span className="text-stone-400 text-sm uppercase tracking-wider font-bold">Dauer</span>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
          <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
          <span className="text-2xl font-serif text-stone-800">8,7 km</span>
          <span className="text-stone-400 text-sm uppercase tracking-wider font-bold">Strecke</span>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
          <Map className="w-8 h-8 text-emerald-600 mb-3" />
          <span className="text-2xl font-serif text-stone-800">215 m</span>
          <span className="text-stone-400 text-sm uppercase tracking-wider font-bold">Aufstieg</span>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
          <TrendingUp className="w-8 h-8 text-emerald-600 mb-3 rotate-180" />
          <span className="text-2xl font-serif text-stone-800">213 m</span>
          <span className="text-stone-400 text-sm uppercase tracking-wider font-bold">Abstieg</span>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
          <Footprints className="w-8 h-8 text-emerald-600 mb-3" />
          <span className="text-2xl font-serif text-stone-800">Leicht</span>
          <span className="text-stone-400 text-sm uppercase tracking-wider font-bold">Schwierigkeit</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-stone-800 mb-6 flex items-center gap-3">
              <Navigation className="w-6 h-6 text-emerald-600" />
              Wegbeschreibung
            </h2>
            <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>
                Diese abwechslungsreiche <strong>8,7 km lange Rundwanderung</strong> startet am Bahnhof in Mayschoß. Der Weg führt uns zunächst hinauf zur majestätischen <strong>Ruine Saffenburg</strong>, wo wir den berühmten 360-Grad-Panoramablick genießen können.
              </p>
              <p>
                Nach dem Besuch der Saffenburg führt die Route weiter durch die Weinberge und Wälder in Richtung des malerischen Nachbarortes <strong>Rech</strong>. Dort bietet sich eine ideale Gelegenheit für eine kleine Pause, bevor wir über den <strong>Rotweinwanderweg</strong> oder entlang der Ahr zurück nach Mayschoß wandern.
              </p>
              <p>
                Die Tour ist mit ca. 215 Höhenmetern moderat und bietet durchgehend befestigte Wege, die auch für Gelegenheitswanderer sehr gut geeignet sind.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-stone-800 mb-6">Highlights am Wegesrand</h2>
            <div className="space-y-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.title}/600/400`;
                      }}
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-serif text-stone-800">{item.title}</h3>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg whitespace-nowrap">
                        {item.distance}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
            <h3 className="text-xl font-serif text-stone-800 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-stone-500" />
              Tour-Infos
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Schwierigkeit</span>
                <span className="text-stone-700 font-medium">Leicht</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Start/Ziel</span>
                <span className="text-stone-700 font-medium">Bahnhof Mayschoß</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Wegbeschaffenheit</span>
                <span className="text-stone-700 font-medium">Befestigte Wege & Pfade</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Ausrüstung</span>
                <span className="text-stone-700 font-medium">Festes Schuhwerk empfohlen</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-900 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-serif mb-4">Anfahrt mit dem Auto</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Mayschoß ist am besten über die <strong>B267</strong> erreichbar. Parkmöglichkeiten gibt es direkt am <strong>Bahnhof</strong> oder an der <strong>Winzergenossenschaft</strong>. Da wir alle mit dem Auto anreisen, ist der Bahnhof der ideale Treffpunkt für den Start.
            </p>
          </div>
        </div>
      </div>

      {/* Ausklang Section */}
      <section className="mb-16">
        <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
          <h2 className="text-2xl font-serif text-emerald-900 mb-4 flex items-center gap-3">
            <Wine className="w-8 h-8 text-emerald-600" />
            Zwischenstopp am Bahnsteig 1
          </h2>
          <p className="text-emerald-800 leading-relaxed">
            Nach unserer erfolgreichen Wanderung können wir den Tag bei einem <strong>Zwischengetränk</strong> im <strong>Bahnsteig 1</strong> direkt am Bahnhof ausklingen lassen, bevor wir später im <strong>Hotel May</strong> einchecken. Dort gibt es eine tolle Auswahl an Getränken und auch gute vegane/vegetarische Optionen für den kleinen Hunger zwischendurch.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-serif text-stone-800 mb-1">Interaktive Karte</h2>
            <p className="text-stone-500 text-sm">Der genaue Routenverlauf für euer Smartphone.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
              GPS-Track verfügbar
            </span>
          </div>
        </div>
        <HikeMap />
      </section>
    </div>
  );
}
