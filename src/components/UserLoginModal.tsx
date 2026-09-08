import React, { useState } from 'react';
import { Mail, Lock, X, PartyPopper } from 'lucide-react';
import { useUserAuth } from '../context/UserAuthContext';

interface UserLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserLoginModal: React.FC<UserLoginModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, signup } = useUserAuth();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    if (isSignUp) {
      const success = signup(email, password);
      if (success) {
        onClose();
        resetForm();
      } else {
        setError('Email already registered or invalid. Please try another.');
      }
    } else {
      const success = login(email, password);
      if (success) {
        onClose();
        resetForm();
      } else {
        setError('Invalid email or password. Please try again.');
      }
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
    setIsSignUp(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-white/10 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-r from-party-orange-600 to-party-coral-500 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <PartyPopper className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {isSignUp ? 'Create an Account' : 'Welcome Back!'}
          </h2>
          <p className="text-white/80 text-sm mt-1">
            {isSignUp ? 'Sign up to manage your future bookings.' : 'Log in to view and manage your bookings.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {error && (
            <div className="bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 p-3 rounded-xl text-sm text-center border border-rose-200 dark:border-rose-900">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-party-orange-500 focus:border-transparent transition-shadow"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 uppercase tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-party-orange-500 focus:border-transparent transition-shadow"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gradient-to-r from-party-orange-600 to-party-coral-500 hover:from-party-orange-700 hover:to-party-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-party-orange-500 hover:shadow-glow transition-all active:scale-[0.98]"
          >
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>

          <div className="text-center mt-4 text-sm text-stone-500 dark:text-stone-400">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={toggleMode}
              className="font-bold text-party-orange-600 dark:text-party-orange-400 hover:underline"
            >
              {isSignUp ? 'Log in' : 'Sign up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
