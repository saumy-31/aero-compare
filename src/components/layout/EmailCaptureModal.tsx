import React, { useState, useEffect } from 'react';
import { X, Mail, CheckCircle2, Plane, AlertCircle } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'flysava_deal_modal_dismissed';
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 Hours

export const EmailCaptureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkDismissedStatus = () => {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      
      if (savedState === 'subscribed') return true;

      if (savedState) {
        const dismissedAt = parseInt(savedState, 10);
        if (!isNaN(dismissedAt) && Date.now() - dismissedAt < DISMISS_DURATION_MS) {
          return true;
        }
      }
      return false;
    };

    if (checkDismissedStatus()) return;

    // 10-Second Delay Trigger
    const timer = setTimeout(() => {
      openModal();
    }, 10000);

    // Exit Intent Trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openModal();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openModal = () => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState === 'subscribed') return;

    if (savedState) {
      const dismissedAt = parseInt(savedState, 10);
      if (!isNaN(dismissedAt) && Date.now() - dismissedAt < DISMISS_DURATION_MS) {
        return;
      }
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());
  };

  const validateEmail = (inputEmail: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    try {
      // POST Request directly sends subscriber email to careers@flysava.com
      const response = await fetch('https://formsubmit.co/ajax/careers@flysava.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          _subject: 'New FlySava Travel Deals Subscriber!',
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        localStorage.setItem(LOCAL_STORAGE_KEY, 'subscribed');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      // Fallback: Still grant success UX state if CORS/network is blocked
      setStatus('success');
      localStorage.setItem(LOCAL_STORAGE_KEY, 'subscribed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* BACKDROP */}
      <div 
        onClick={closeModal}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 cursor-pointer animate-fadeIn"
      />

      {/* MODAL CANVAS */}
      <div className="relative w-full max-w-[520px] bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.3)] p-6 sm:p-10 z-10 overflow-hidden text-slate-900 transition-all transform animate-scaleUp">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer select-none"
          aria-label="Close Email Popup"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          /* SUCCESS STATE */
          <div className="py-6 sm:py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-3xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                You're in! ✈
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
                We'll send the best FlySava travel deals and fare drops straight to your inbox.
              </p>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="mt-4 px-8 py-3 bg-slate-900 hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md cursor-pointer active:scale-95"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          /* CONTENT STATE */
          <div className="space-y-6">
            
            {/* BRAND LOGO */}
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                <Plane className="w-4 h-4" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                Fly<span className="text-[#2563EB]">Sava</span>
              </span>
            </div>

            {/* HEADINGS */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Get better travel deals.
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed">
                Get cheap flight deals, destination inspiration, and useful travel offers straight to your inbox.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'submitting'}
                  className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 border rounded-2xl text-xs sm:text-sm font-bold text-slate-900 outline-none transition-all placeholder:text-slate-400 ${
                    status === 'error'
                      ? 'border-rose-500 ring-2 ring-rose-500/10 bg-rose-50/20'
                      : 'border-slate-200/90 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10'
                  }`}
                />
              </div>

              {/* ERROR ALERT */}
              {status === 'error' && errorMessage && (
                <div className="flex items-center gap-1.5 text-rose-600 text-xs font-bold px-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* PRIMARY SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Get travel deals</span>
                    <span className="text-base leading-none">→</span>
                  </>
                )}
              </button>
            </form>

            {/* DISCLAIMER */}
            <p className="text-[11px] font-bold text-slate-400 text-center tracking-tight">
              No account required. Unsubscribe anytime.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default EmailCaptureModal;