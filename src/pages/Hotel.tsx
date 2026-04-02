import { Building, Globe, Phone, Mail, MapPin, ExternalLink, Coffee, Wifi, Car, Utensils, Flame } from 'lucide-react';

export default function Hotel() {
  const hotelInfo = {
    name: "May Hotel Mayschoß",
    address: "Ahr-Rotweinstraße 62, 53508 Mayschoß",
    phone: "+49 (0) 2643 1540",
    email: "info@mayhotel.de",
    website: "https://mayhotel.de/",
    drinksMenu: "https://mayhotel.de/getraenkekarte/",
    description: "Das May Hotel in Mayschoß ist unser Basislager für die Erwin-Tour 2026. Es bietet eine gemütliche Atmosphäre, moderne Zimmer und ist der ideale Ausgangspunkt für unsere Wanderungen im Ahrtal.",
    features: [
      { icon: Wifi, label: "Kostenloses WLAN" },
      { icon: Coffee, label: "Frühstück inklusive" },
      { icon: Car, label: "Parkplätze vorhanden" },
      { icon: Utensils, label: "Hoteleigenes Restaurant" },
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Unser Hotel</h1>
        <p className="text-stone-500">Alle Informationen zu unserer Unterkunft in Mayschoß.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Info Card */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            <div className="h-64 bg-stone-200 relative">
              <img 
                src="https://mayschoss.de/wp-content/uploads/2025/11/May-Hotel-2025-128-2048x1366.jpg" 
                alt="May Hotel Mayschoß" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wider">
                Unsere Unterkunft
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-serif text-stone-800 mb-4">{hotelInfo.name}</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                {hotelInfo.description}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hotelInfo.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-3 bg-stone-50 rounded-2xl border border-stone-100">
                    <feature.icon className="w-5 h-5 text-stone-400 mb-2" />
                    <span className="text-xs font-medium text-stone-600">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            <div className="h-56 bg-stone-200 relative">
              <img 
                src="https://mayhotel.de/wp-content/uploads/2025/03/IMG_6142-600x450.jpg" 
                alt="Gemeinsames Abendessen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 bg-emerald-50/50">
              <h3 className="text-xl font-serif text-emerald-900 mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5" />
                Gemeinsames Abendessen
              </h3>
              <p className="text-emerald-800 mb-6">
                Wir haben uns entschieden, das gemeinsame Abendessen im May Hotel einzunehmen. Hier gibt es für alle Geschmäcker und Ernährungsweisen passende Optionen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={hotelInfo.drinksMenu} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <Coffee className="w-4 h-4" />
                  Getränkekarte ansehen
                </a>
                <a 
                  href={hotelInfo.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 border border-emerald-200 rounded-xl font-medium hover:bg-emerald-50 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Website besuchen
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            <div className="h-56 bg-stone-200 relative">
              <img 
                src="https://www.ahrtal.com/uploads/tx_sfcontenthub/c5f667b2-c529-4ae1-9d11-bb2a744adb56.jpg" 
                alt="Umtrunk am Kamin" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 bg-orange-50/50">
              <h3 className="text-xl font-serif text-orange-900 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                Umtrunk am Kamin
              </h3>
              <p className="text-orange-800">
                Nach dem Essen lassen wir den Abend gemütlich bei einem Umtrunk am Kamin ausklingen. Der perfekte Ort, um die Erlebnisse des Tages Revue passieren zu lassen.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
            <h3 className="text-xl font-serif text-stone-800 mb-6">Kontakt & Anfahrt</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-stone-100 text-stone-500 rounded-lg h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Adresse</p>
                  <p className="text-stone-700 text-sm">{hotelInfo.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-stone-100 text-stone-500 rounded-lg h-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Telefon</p>
                  <a href={`tel:${hotelInfo.phone.replace(/\s/g, '')}`} className="text-stone-700 text-sm hover:text-stone-900 transition-colors">
                    {hotelInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-stone-100 text-stone-500 rounded-lg h-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">E-Mail</p>
                  <a href={`mailto:${hotelInfo.email}`} className="text-stone-700 text-sm hover:text-stone-900 transition-colors">
                    {hotelInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-100 space-y-3">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelInfo.name + " " + hotelInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-900 transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                In Google Maps öffnen
              </a>
              <a 
                href={`https://maps.apple.com/?q=${encodeURIComponent(hotelInfo.name + " " + hotelInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-stone-800 border border-stone-200 rounded-xl font-medium hover:bg-stone-50 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                In Apple Karten öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
