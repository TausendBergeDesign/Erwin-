import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, Calendar, MapPin, ListTodo, Image as ImageIcon, Building, Binoculars, Footprints, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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

  const mobileBottomNavItems = [
    { to: '/', icon: Home, label: 'Start' },
    { to: '/reiseplan', icon: Calendar, label: 'Programm' },
    { to: '/hotel', icon: Building, label: 'Hotel' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans text-stone-800 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0 md:pl-64">
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
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200 px-4 py-3 z-40 flex items-center justify-between pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-stone-100 overflow-hidden border border-stone-200 shadow-sm">
            <img 
              src="https://i.imgur.com/dVG8bfj.png" 
              alt="Erwin Tour Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="font-serif text-xl text-stone-800">Erwin-Tour</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full min-h-screen pt-[calc(4rem+env(safe-area-inset-top))] md:pt-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] z-50">
        <div className="flex justify-around items-center">
          {mobileBottomNavItems.map((item) => (
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
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-colors text-stone-400 hover:text-stone-600"
          >
            <Menu className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-medium">Mehr</span>
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 pt-[max(1rem,env(safe-area-inset-top))]">
              <h2 className="font-serif text-2xl text-stone-800">Menü</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2 pb-[calc(2rem+env(safe-area-inset-bottom))]">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-4 rounded-2xl transition-colors ${
                      isActive
                        ? 'bg-stone-800 text-white shadow-md'
                        : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`
                  }
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-medium text-lg">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

