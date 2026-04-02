import { Outlet, NavLink } from 'react-router-dom';
import { Home, Calendar, MapPin, ListTodo, Image as ImageIcon, Building, Binoculars, Footprints } from 'lucide-react';

export default function Layout() {
  const navItems = [
    { to: '/', icon: Home, label: 'Start' },
    { to: '/reiseplan', icon: Calendar, label: 'Programm' },
    { to: '/hotel', icon: Building, label: 'Hotel' },
    { to: '/mayschoss', icon: MapPin, label: 'Mayschoß' },
    { to: '/wanderung', icon: Footprints, label: 'Wanderung' },
    { to: '/entdecken', icon: Binoculars, label: 'Entdecken' },
    { to: '/packliste', icon: ListTodo, label: 'Packliste' },
    { to: '/galerie', icon: ImageIcon, label: 'Galerie' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans text-stone-800 pb-20 md:pb-0 md:pl-64">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed inset-y-0 left-0 w-64 bg-white border-r border-stone-200 px-4 py-8 z-50">
        <div className="mb-10 px-4 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-stone-100 mb-4 overflow-hidden border border-stone-200 shadow-sm">
            <img 
              src="https://i.imgur.com/dVG8bfj.png" 
              alt="Erwin Tour Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="font-serif text-2xl text-stone-800">Erwin-Tour</h1>
          <p className="text-sm text-stone-500">Ahrtal 2026</p>
        </div>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-stone-200 px-4 py-3 z-50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-stone-100 overflow-hidden border border-stone-200 shadow-sm">
          <img 
            src="https://i.imgur.com/dVG8bfj.png" 
            alt="Erwin Tour Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <h1 className="font-serif text-xl text-stone-800">Erwin-Tour</h1>
      </header>

      {/* Main Content Area */}
      <main className="w-full min-h-screen pt-16 md:pt-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-2 py-2 pb-safe z-50">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-colors ${
                  isActive
                    ? 'text-stone-800'
                    : 'text-stone-400 hover:text-stone-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-stone-100' : ''}`} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
