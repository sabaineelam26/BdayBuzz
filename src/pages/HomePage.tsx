import React from 'react';
import { 
  PartyPopper, Sparkles, Calendar, Gift, ArrowRight, Star, 
  CheckCircle2, Heart, Award, ShieldCheck, Clock
} from 'lucide-react';
import { Package, Category, Theme } from '../types';
import { PackageCard } from '../components/PackageCard';

interface HomePageProps {
  categories: Category[];
  popularPackages: Package[];
  themes: Theme[];
  onNavigate: (tab: string, categoryFilter?: string) => void;
  onViewPackageDetails: (pkg: Package) => void;
  onBookPackage: (pkg: Package) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  categories,
  popularPackages,
  themes,
  onNavigate,
  onViewPackageDetails,
  onBookPackage,
}) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-party-orange-50/60 via-party-gold-50/30 to-stone-50 dark:from-stone-900/60 dark:via-party-orange-950/20 dark:to-[#110B04] transition-colors duration-300">
        
        {/* Ambient Glow Orbs — warm & subtle */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-party-orange-400/15 to-party-coral-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-party-gold-400/12 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating Background Visual Elements (Balloons, Sparks) */}
        <div className="absolute top-10 left-8 sm:left-12 text-4xl sm:text-5xl animate-float opacity-80 select-none drop-shadow-md">🎈</div>
        <div className="absolute top-24 right-10 sm:right-20 text-4xl sm:text-5xl animate-float-delayed opacity-80 select-none drop-shadow-md">🎂</div>
        <div className="absolute bottom-12 left-1/4 text-3xl animate-float opacity-70 select-none" style={{ animationDelay: '1.2s' }}>✨</div>
        <div className="absolute bottom-20 right-1/4 text-4xl animate-float-delayed opacity-75 select-none" style={{ animationDelay: '2.4s' }}>🎁</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-party-orange-100/90 dark:bg-party-orange-950/80 border border-party-orange-200 dark:border-party-orange-800 text-party-orange-700 dark:text-party-orange-300 text-xs sm:text-sm font-bold shadow-xs backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-party-coral-500 fill-party-coral-400 animate-pulse" />
                The #1 Rated Birthday Booking Platform
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[1.15]">
                Make Every Birthday <br className="hidden sm:inline" />
                <span className="gradient-text">Unforgettable 🎉</span>
              </h1>

              {/* Exact Requested Subheading */}
              <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover beautiful birthday themes and party packages. Plan and book your perfect celebration in just a few clicks.
              </p>

              {/* Exact Requested CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('packages')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-party-orange-600 via-party-coral-500 to-party-orange-700 hover:from-party-orange-700 hover:to-party-coral-600 text-white font-extrabold text-base shadow-lg shadow-party-orange-400/30 dark:shadow-party-orange-950 hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('booking')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-stone-900/90 hover:bg-party-orange-50 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-100 hover:text-party-orange-700 dark:hover:text-party-coral-400 font-extrabold text-base shadow-md dark:shadow-card-dark border border-stone-200/80 dark:border-white/10 hover:border-party-orange-300 dark:hover:border-party-orange-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <PartyPopper className="w-5 h-5 text-party-coral-500" />
                  <span>Book Your Party</span>
                </button>
              </div>

              {/* Social Proof metrics */}
              <div className="mt-10 pt-6 border-t border-stone-200/60 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-party-coral-100 dark:bg-party-coral-950/40 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-party-coral-600 dark:text-party-coral-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-black text-stone-900 dark:text-white leading-none">500+</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-1">Happy Parties</p>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px h-10 bg-stone-200 dark:bg-white/10"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-party-gold-100 dark:bg-party-gold-950/40 flex items-center justify-center">
                    <Star className="w-5 h-5 text-party-gold-600 dark:text-party-gold-400 fill-party-gold-600 dark:fill-party-gold-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-black text-stone-900 dark:text-white leading-none">4.9</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-1">Customer Rating</p>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px h-10 bg-stone-200 dark:bg-white/10"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-party-orange-100 dark:bg-party-orange-950/40 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-party-orange-600 dark:text-party-orange-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-black text-stone-900 dark:text-white leading-none">100%</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Collages */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow backdrop — soft warm */}
                <div className="absolute -inset-4 bg-gradient-to-r from-party-orange-300 to-party-coral-300 dark:from-party-orange-800 dark:to-party-coral-800 rounded-3xl blur-2xl opacity-20 animate-pulse-subtle"></div>
                
                {/* Main Hero Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 bg-white dark:bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800"
                    alt="Birthday Party Celebration"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 dark:bg-stone-900/80 backdrop-blur-md text-xs font-semibold border border-white/20">
                      <Star className="w-3.5 h-3.5 text-party-gold-400 fill-party-gold-400" />
                      Unforgettable Moments Guaranteed
                    </div>
                    <p className="text-xl font-bold">BdayBuzz Signature Celebrations</p>
                  </div>
                </div>

                {/* Floating Overlay Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-900/95 rounded-2xl p-4 shadow-xl dark:shadow-card-dark border border-stone-100 dark:border-white/10 hidden sm:flex items-center gap-3 animate-float backdrop-blur-md" style={{ animationDelay: '0.5s' }}>
                  <div className="w-12 h-12 rounded-xl bg-party-coral-100 dark:bg-party-coral-950/60 text-party-coral-600 dark:text-party-coral-400 flex items-center justify-center font-extrabold text-xl shadow-xs">
                    🎈
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider">Seamless Planning</p>
                    <p className="text-sm font-black text-stone-900 dark:text-white">Book in under 2 minutes!</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
            Everything You Need for the Perfect Birthday
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            From choosing a theme to booking the perfect package, BdayBuzz makes every step simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 shadow-sm shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-party-orange-100 dark:bg-party-orange-950/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6 text-party-orange-600 dark:text-party-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">Birthday Themes</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              Beautiful themes for every age and personality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 shadow-sm shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-party-coral-100 dark:bg-party-coral-950/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <PartyPopper className="w-6 h-6 text-party-coral-600 dark:text-party-coral-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">Party Packages</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              Ready-to-book packages designed for stress-free celebrations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 shadow-sm shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-party-gold-100 dark:bg-party-gold-950/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-party-gold-600 dark:text-party-gold-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">Easy Booking</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              Find your perfect party and book in just a few clicks.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 shadow-sm shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-white/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">Custom Celebrations</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              Add your own personal touch to make the day truly special.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-party-orange-600 dark:text-party-orange-400 uppercase tracking-wider bg-party-orange-100 dark:bg-party-orange-950/60 px-3.5 py-1.5 rounded-full border border-party-orange-200 dark:border-party-orange-800">
            Top Choices
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
            Popular Birthday Packages
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Everything you need for a celebration worth remembering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularPackages.slice(0, 3).map(pkg => (
            <PackageCard 
              key={pkg.id} 
              pkg={pkg} 
              onViewDetails={() => onViewPackageDetails(pkg)} 
              onBookNow={() => onBookPackage(pkg)} 
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button 
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-white font-bold hover:bg-party-orange-50 dark:hover:bg-stone-800 transition-colors"
          >
            View All Packages <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* THEMES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-party-coral-600 dark:text-party-coral-400 uppercase tracking-wider bg-party-coral-100 dark:bg-party-coral-950/60 px-3.5 py-1.5 rounded-full border border-party-coral-200 dark:border-party-coral-800">
            Endless Possibilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
            Trending Themes
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Choose from Princess, Superhero, Safari, and dozens more magical worlds.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {themes.slice(0, 6).map(theme => (
            <div 
              key={theme.id}
              onClick={() => onNavigate('themes')}
              className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-square shadow-sm hover:shadow-md transition-all"
            >
              <img src={theme.image} alt={theme.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white font-bold text-sm leading-tight drop-shadow-md">{theme.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-party-orange-600 dark:text-party-orange-400 uppercase tracking-wider bg-party-orange-100 dark:bg-party-orange-950/60 px-3.5 py-1.5 rounded-full border border-party-orange-200 dark:border-party-orange-800">
            Tailored Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
            Featured Categories 🎁
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Whether it's a first birthday milestone or a high-energy teen bash, we have tailored packages for every age.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('packages', cat.name)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-stone-900 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-hover-dark border border-stone-100 dark:border-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-72"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent"></div>
              
              <div className="relative p-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 dark:bg-stone-900/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                  {cat.tag}
                </span>
              </div>

              <div className="relative p-6 text-white space-y-2">
                <h3 className="text-xl font-extrabold leading-tight group-hover:text-party-coral-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-party-gold-400 group-hover:translate-x-1.5 transition-transform">
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B. POPULAR PACKAGES */}
      <section className="bg-stone-100/60 dark:bg-stone-900/40 py-16 border-y border-stone-200/80 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-party-coral-600 dark:text-party-coral-400 uppercase tracking-wider bg-party-coral-100 dark:bg-party-coral-950/60 px-3.5 py-1.5 rounded-full border border-party-coral-200 dark:border-party-coral-800">
                Best Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
                Popular Packages ✨
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-base max-w-xl">
                Choose from our top rated party packages curated to deliver maximum fun and stress-free celebrations.
              </p>
            </div>

            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-stone-800 hover:bg-party-orange-50 dark:hover:bg-stone-700 text-party-orange-700 dark:text-party-orange-300 font-bold text-sm border border-party-orange-200 dark:border-party-orange-800/50 shadow-sm transition-all self-start md:self-auto hover:shadow-md"
            >
              View All Packages
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onViewDetails={onViewPackageDetails}
                onBookNow={onBookPackage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* C. HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold text-party-orange-600 dark:text-party-orange-400 uppercase tracking-wider bg-party-orange-100 dark:bg-party-orange-950/60 px-3.5 py-1.5 rounded-full border border-party-orange-200 dark:border-party-orange-800">
            Simple Booking Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
            How It Works 🎈
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Planning your dream birthday party has never been easier. Just 4 simple steps!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="relative bg-white dark:bg-stone-900/90 rounded-3xl p-6 border border-stone-100 dark:border-white/10 shadow-card dark:shadow-card-dark hover:shadow-card-hover transition-all text-center space-y-4 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-party-orange-100 dark:bg-party-orange-950/80 text-party-orange-600 dark:text-party-orange-300 font-black text-2xl mx-auto flex items-center justify-center shadow-inner border border-party-orange-200/50 dark:border-party-orange-800">
              1
            </div>
            <h3 className="text-lg font-black text-stone-900 dark:text-white">1. Choose a Package</h3>
            <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
              Select between Basic, Premium, or Luxury options tailored to your guest size and budget.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white dark:bg-stone-900/90 rounded-3xl p-6 border border-stone-100 dark:border-white/10 shadow-card dark:shadow-card-dark hover:shadow-card-hover transition-all text-center space-y-4 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-party-coral-100 dark:bg-party-coral-950/80 text-party-coral-600 dark:text-party-coral-300 font-black text-2xl mx-auto flex items-center justify-center shadow-inner border border-party-coral-200/50 dark:border-party-coral-800">
              2
            </div>
            <h3 className="text-lg font-black text-stone-900 dark:text-white">2. Pick a Theme</h3>
            <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
              Browse Unicorn, Superhero, Princess, Space, and 8+ gorgeous styling themes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white dark:bg-stone-900/90 rounded-3xl p-6 border border-stone-100 dark:border-white/10 shadow-card dark:shadow-card-dark hover:shadow-card-hover transition-all text-center space-y-4 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-party-gold-100 dark:bg-party-gold-950/80 text-party-gold-700 dark:text-party-gold-300 font-black text-2xl mx-auto flex items-center justify-center shadow-inner border border-party-gold-200/50 dark:border-party-gold-800">
              3
            </div>
            <h3 className="text-lg font-black text-stone-900 dark:text-white">3. Select Your Date</h3>
            <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
              Pick your preferred event date and tell us how many guests are celebrating.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative bg-white dark:bg-stone-900/90 rounded-3xl p-6 border border-stone-100 dark:border-white/10 shadow-card dark:shadow-card-dark hover:shadow-card-hover transition-all text-center space-y-4 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-black text-2xl mx-auto flex items-center justify-center shadow-inner border border-emerald-200/50 dark:border-emerald-800">
              4
            </div>
            <h3 className="text-lg font-black text-stone-900 dark:text-white">4. Confirm Booking</h3>
            <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
              Submit your request instantly and our event manager handles the rest!
            </p>
          </div>

        </div>
      </section>

      {/* D. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-party-orange-700 via-party-orange-600 to-party-coral-600 dark:from-party-orange-900 dark:via-stone-900 dark:to-party-orange-950 p-8 sm:p-12 lg:p-16 text-white shadow-2xl text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          
          {/* Subtle background graphics */}
          <div className="absolute -top-10 -right-10 text-9xl opacity-10 select-none pointer-events-none">🎈</div>

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-party-gold-300 animate-pulse" />
              Limited Slots Available
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Plan Your Perfect Birthday?
            </h2>
            <p className="text-party-orange-100 dark:text-stone-200 text-base sm:text-lg">
              Let us take care of decorations, setup, entertainment, and cake. Focus on making unforgettable memories!
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 rounded-2xl bg-white hover:bg-party-gold-400 text-party-orange-900 hover:text-stone-950 font-black text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
            >
              <PartyPopper className="w-6 h-6 text-party-coral-600 group-hover:rotate-12 transition-transform" />
              <span>Book Your Party</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
