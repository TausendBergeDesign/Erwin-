import { Wine, History, Waves, Info, Star, Landmark } from 'lucide-react';

export default function Mayschoss() {
  const sections = [
    {
      title: "Geschichte & Kultur",
      icon: History,
      color: "bg-blue-50 text-blue-700",
      image: "https://s3.eu-central-1.amazonaws.com/static-2.malisto/customer/dinauer/full/4697470.jpg",
      content: [
        "Mayschoß wurde erstmals im Jahr 1106 urkundlich erwähnt. Die Geschichte des Ortes ist untrennbar mit der Saffenburg verbunden, deren Ruine heute noch über dem Dorf thront.",
        "Die Saffenburg war einst eine der bedeutendsten Festungsanlagen im Ahrtal. Sie wurde im 11. Jahrhundert erbaut und im Jahr 1704 während des Spanischen Erbfolgekrieges zerstört.",
        "Kulturell ist Mayschoß tief im rheinischen Brauchtum verwurzelt. Neben dem Weinbau spielen Feste wie die Weinfeste im Oktober eine zentrale Rolle im Dorfleben."
      ]
    },
    {
      title: "Weinbau-Tradition",
      icon: Wine,
      color: "bg-purple-50 text-purple-700",
      image: "https://image.essen-und-trinken.de/13050968/t/_6/v6/w1440/r1.5/-/romantisches-ahrtal.jpg",
      content: [
        "Mayschoß ist die Heimat der ältesten Winzergenossenschaft der Welt, gegründet im Jahr 1868. Damals schlossen sich 18 Winzer zusammen, um gemeinsam die Qualität ihrer Weine zu sichern.",
        "Die Region ist weltbekannt für ihren Spätburgunder (Pinot Noir). Die steilen Schieferhänge bieten ideale Bedingungen für diese anspruchsvolle Rebsorte.",
        "Die Weinberge werden oft in mühsamer Handarbeit bewirtschaftet, da die Steillage den Einsatz von großen Maschinen unmöglich macht."
      ]
    },
    {
      title: "Die Ahrtal-Flut 2021",
      icon: Waves,
      color: "bg-cyan-50 text-cyan-700",
      image: "https://img.sparknews.funkemedien.de/400243065/400243065_1681589420_v16_9_1200.jpeg",
      content: [
        "In der Nacht vom 14. auf den 15. Juli 2021 wurde Mayschoß, wie das gesamte Ahrtal, von einer verheerenden Flutkatastrophe getroffen. Die Ahr schwoll auf Pegelstände an, die weit über allen historischen Aufzeichnungen lagen.",
        "Der Ort war tagelang von der Außenwelt abgeschnitten, da Brücken und Straßen zerstört wurden. Die Solidarität der Helfer aus ganz Deutschland war jedoch beispiellos.",
        "Heute befindet sich Mayschoß mitten im Wiederaufbau. Viele Betriebe haben bereits wieder geöffnet, und der Tourismus spielt eine entscheidende Rolle dabei, dem Tal eine Zukunft zu geben."
      ]
    }
  ];

  const funFacts = [
    "Wusstest du, dass Mayschoß mehr Weinstöcke als Einwohner hat? Auf jeden Bewohner kommen statistisch gesehen hunderte Reben.",
    "Mayschoß war einer der ersten Orte im Ahrtal, der nach der Flut 2021 wieder eine funktionierende Behelfsbrücke erhielt, was als Symbol für den Wiederaufbauwillen galt."
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-stone-800 mb-3">Mayschoß entdecken</h1>
        <p className="text-stone-500">Wissenswertes über unser Ziel im Ahrtal.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-3xl overflow-hidden h-80 shadow-sm border border-stone-100">
          <img 
            src="https://www.ahrtal.com/fileadmin/user_upload/Ahrtal-Herbst-2022-149-Mayschoss-oberhalb_des_Michaelishofes.jpg" 
            alt="Mayschoß Panorama" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider w-fit">
            <Star className="w-3 h-3" />
            Highlight des Ahrtals
          </div>
          <h2 className="text-3xl font-serif text-stone-800">Ein Dorf mit Charakter</h2>
          <p className="text-stone-600 leading-relaxed">
            Mayschoß ist nicht einfach nur ein Weindorf. Es ist ein Ort der Extreme: steilste Hänge, älteste Traditionen und eine unglaubliche Resilienz nach der Flutkatastrophe. Wer hierher kommt, spürt die tiefe Verbindung zwischen Mensch, Natur und Wein.
          </p>
        </div>
      </div>

      <div className="space-y-12 mb-16">
        {sections.map((section, idx) => (
          <section key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            <div className="h-64 overflow-hidden">
              <img 
                src={section.image} 
                alt={section.title} 
                className="w-full h-full object-cover"
                style={section.title === "Geschichte & Kultur" ? { objectPosition: 'center 85%' } : {}}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${section.color}`}>
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800">{section.title}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {section.content.map((text, i) => (
                  <p key={i} className="text-stone-600 text-sm leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="bg-amber-50 rounded-3xl p-8 md:p-12 text-stone-800 relative overflow-hidden border border-amber-100">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Landmark className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-serif mb-6 flex items-center gap-2 text-amber-900">
            <Info className="w-6 h-6 text-amber-600" />
            Fun Facts
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {funFacts.map((fact, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/50 shadow-sm">
                <p className="text-stone-700 leading-relaxed italic">
                  "{fact}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
