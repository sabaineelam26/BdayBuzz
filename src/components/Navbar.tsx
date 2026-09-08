import React, { useState } from 'react';
import { PartyPopper, Sparkles, Menu, X, Sun, Moon, LogIn, LogOut } from 'lucide-react';
import { useUserAuth } from '../context/UserAuthContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onQuickBook?: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  onLoginClick: () => void;
  hasBookings?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onQuickBook,
  isDark,
  toggleTheme,
  onLoginClick,
  hasBookings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useUserAuth();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Packages' },
    { id: 'themes', label: 'Themes' },
    { id: 'how-it-works', label: 'How It Works' },
    ...(isAuthenticated && hasBookings ? [{ id: 'my-bookings', label: 'My Bookings' }] : []),
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-stone-950/85 backdrop-blur-xl border-b border-stone-200/80 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-party-orange-600 via-party-coral-500 to-party-gold-400 flex items-center justify-center text-white shadow-md shadow-party-orange-500/20 group-hover:scale-105 transition-all duration-300">
              <span className="text-sm font-black tracking-tight leading-none">BB</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-stone-900 dark:text-white flex items-center gap-1">
                Bday<span className="gradient-text">Buzz</span>
                <Sparkles className="w-4 h-4 text-party-gold-500 inline fill-party-gold-400 animate-pulse" />
              </span>
              <p className="text-[10px] font-bold text-party-orange-600 dark:text-party-orange-400 tracking-wider uppercase">Birthday Magic</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 dark:bg-stone-900/90 p-1.5 rounded-full border border-stone-200/60 dark:border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-stone-800 text-party-orange-700 dark:text-party-orange-300 shadow-sm font-bold'
                      : 'text-stone-600 dark:text-stone-300 hover:text-party-orange-600 dark:hover:text-white hover:bg-white/60 dark:hover:bg-stone-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-200 hover:text-party-orange-600 dark:hover:text-party-coral-400 hover:border-party-orange-300 dark:hover:border-party-orange-500/50 transition-all shadow-xs"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-party-gold-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-party-orange-600" />
              )}
            </button>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400 text-sm font-bold transition shadow-xs"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-party-orange-600 dark:hover:text-party-orange-400 text-sm font-bold transition shadow-xs"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
            )}

            {/* Book Now CTA */}
            <button
              onClick={() => {
                if (onQuickBook) onQuickBook();
                else handleNavClick('booking');
              }}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-party-orange-600 via-party-coral-500 to-party-orange-700 hover:from-party-orange-700 hover:to-party-coral-600 text-white text-sm font-bold shadow-md hover:shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <PartyPopper className="w-4 h-4" />
                Book Now
              </span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Quick Book Mobile */}
            <button
              onClick={() => {
                if (onQuickBook) onQuickBook();
                else handleNavClick('booking');
              }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-party-orange-600 to-party-coral-500 text-white text-xs font-bold shadow-md hover:shadow-glow active:scale-[0.95] transition-all flex items-center gap-1"
            >
              <PartyPopper className="w-3.5 h-3.5" />
              Book
            </button>
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-200 transition"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-party-gold-400" />
              ) : (
                <Moon className="w-4 h-4 text-party-orange-600" />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl text-stone-700 dark:text-stone-200 hover:text-party-orange-600 dark:hover:text-party-coral-400 hover:bg-party-orange-50 dark:hover:bg-stone-900 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-stone-950/98 backdrop-blur-2xl border-b border-stone-200 dark:border-stone-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-2xl font-medium text-base transition flex items-center justify-between ${
                activeTab === link.id
                  ? 'bg-party-orange-50 dark:bg-party-orange-950/50 text-party-orange-700 dark:text-party-orange-300 font-bold border-l-4 border-party-orange-600'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900'
              }`}
            >
              <span>{link.label}</span>
              {activeTab === link.id && <Sparkles className="w-4 h-4 text-party-coral-500" />}
            </button>
          ))}

          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-2xl font-medium text-base transition flex items-center gap-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onLoginClick();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-2xl font-medium text-base transition flex items-center gap-2 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </button>
          )}

          <div className="pt-3">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-party-orange-600 via-party-coral-500 to-party-orange-700 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-party-orange-500/20"
            >
              <PartyPopper className="w-5 h-5" />
              Book Your Party Now 🎉
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
