import { Clock, MapPin, Coffee, Wine, Bed, Utensils, Info, Flame, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Itinerary() {
  const saturdayEvents = [
    {
      time: "11:00",
      title: "Ankunft & Gepäckabgabe",
      location: "May Hotel Mayschoß",
      description: "Ankunft der Familie. Gepäck deponieren (Check-in regulär ab 15:00 Uhr). Kurzes Sammeln, Toilette, evtl. erster Kaffee im Ort.",
      icon: Bed,
      color: "bg-blue-100 text-blue-700",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg",
      link: "/hotel",
      linkText: "Zum Hotel"
    },
    {
      time: "11:30",
      title: "Start Wanderung (Richtung Rech)",
      location: "Start: Bahnhof Mayschoß",
      description: "Wir starten unsere Rundwanderung (ca. 8,7 km). Zuerst geht es durch den Ort zum Mittagessen.",
      icon: MapPin,
      color: "bg-emerald-100 text-emerald-700",
      image: "https://i.imgur.com/lYuGaaj.png",
      link: "/wanderung",
      linkText: "Details zur Wanderung"
    },
    {
      time: "12:30",
      title: "Mittagessen im Michaelishof",
      location: "Weingut Michaelishof, Mayschoß",
      description: "Unser erster Stopp auf der Wanderung. Gemeinsame Stärkung für die kommende Strecke – wir sitzen schön auf der Terrasse.",
      icon: Utensils,
      color: "bg-orange-100 text-orange-700",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/Michaelishof_DAS-WEINHAUS-scaled-1-768x512.jpg",
      link: "/entdecken",
      linkText: "Mehr zum Weingut"
    },
    {
      time: "14:30",
      title: "Kaffee & Kuchen in Rech",
      location: "Rech (Ortsmitte)",
      description: "Pause in Rech. Option: Wer den Anstieg zur Saffenburg auslassen möchte, kann von hier mit der Bahn zurückfahren.",
      icon: Coffee,
      color: "bg-amber-100 text-amber-700",
      image: "https://img1.oastatic.com/img2/8094727/max/variant.jpg?revbust=705e5b64",
      link: "/wanderung",
      linkText: "Wander-Details"
    },
    {
      time: "16:00",
      title: "Weinautomat & Saffenburg",
      location: "Saffenburg Mayschoß",
      description: "Der finale Anstieg für die Fitten. Auf dem Weg nach oben holen wir uns am Weinautomaten einen kühlen Tropfen für den 360°-Blick auf der Burg.",
      icon: Wine,
      color: "bg-purple-100 text-purple-700",
      image: "https://www.volksfreund.de/imgs/28/1/5/8/8/9/1/9/0/7/tok_9e198318abd47b814bc94c7ba1926291/w1900_h1268_x1496_y998_DPA_bfunk_dpa_5FAC8800D8052FCC-9a6fa92590fba3c2.jpg",
      link: "/wanderung",
      linkText: "Zur Route"
    },
    {
      time: "17:30",
      title: "Check-in & Pause",
      location: "May Hotel Mayschoß",
      description: "Rückkehr zum Hotel, Zimmerbezug, frisch machen und kurz ausruhen.",
      icon: Bed,
      color: "bg-blue-100 text-blue-700",
      image: "https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg",
      link: "/hotel",
      linkText: "Zum Hotel"
    },
    {
      time: "18:30",
      title: "Gemeinsames Abendessen",
      location: "May Hotel Mayschoß",
      description: "Wir essen gemeinsam im Hotel. Es gibt ein Buffet, bei dem für alle Geschmäcker und Ernährungsweisen etwas dabei ist (auch vegan/vegetarisch).",
      icon: Utensils,
      color: "bg-orange-100 text-orange-700",
      image: "https://mayhotel.de/wp-content/uploads/2025/03/IMG_6142-600x450.jpg",
      link: "/hotel",
      linkText: "Zum Hotel"
    },
    {
      time: "21:00",
      title: "Umtrunk am Kamin",
      location: "May Hotel Mayschoß",
      description: "Gemütlicher Ausklang des Tages bei einem Umtrunk am Kamin. Zeit für Gespräche und Entspannung.",
      icon: Flame,
      color: "bg-red-100 text-red-700",
      image: "https://www.ahrtal.com/uploads/tx_sfcontenthub/c5f667b2-c529-4ae1-9d11-bb2a744adb56.jpg",
      link: "/hotel",
      linkText: "Zum Hotel"
    }
  ];

  const sundayEvents = [
    {
      time: "Vormittags",
      title: "Frühstück & Check-out",
      location: "May Hotel Mayschoß",
      description: "Gemütliches Frühstück im Hotel und anschließende individuelle Abreise.",
      icon: Coffee,
      color: "bg-blue-100 text-blue-700",
      image: "https://mayhotel.de/wp-content/uploads/2025/03/IMG_6142-600x450.jpg",
      link: "/hotel",
      linkText: "Zum Hotel"
    },
    {
      time: "Mittags / Nachmittags",
      title: "Optional: Bauerncafe zur Zehntscheune",
      location: "Zehntscheune Eicks, Mechernich",
      description: "Wer möchte, kann auf dem Rückweg noch einen gemeinsamen Stopp im Bauerncafe zur Zehntscheune Eicks in Mechernich einlegen.",
      icon: Utensils,
      color: "bg-orange-100 text-orange-700",
      image: "https://cafe-zehntscheune-eicks.de/wp-content/uploads/2025/05/99-DJI_0509-2.kspl_.webp"
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
                {event.link && (
                  <Link 
                    to={event.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 mb-4 group/link"
                  >
                    {event.linkText}
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                )}
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

      {/* Sunday */}
      <div>
        <div className="sticky top-0 bg-[#f5f5f0]/90 backdrop-blur-md py-4 z-10 mb-6 border-b border-stone-200">
          <h2 className="text-2xl font-serif text-stone-800">Sonntag, 12. April 2026</h2>
          <p className="text-sm text-stone-500">Abreise & Ausklang</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
          
          {sundayEvents.map((event, index) => (
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
                {event.link && (
                  <Link 
                    to={event.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 mb-4 group/link"
                  >
                    {event.linkText}
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                )}
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

    </div>
  );
}
