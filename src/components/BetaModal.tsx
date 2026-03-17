'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaModal({ isOpen, onClose }: BetaModalProps) {
  const [reserveOpen, setReserveOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [accessCode, setAccessCode] = useState('');

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setReserveOpen(false);
      setEmail('');
      setEmailSubmitted(false);
      setAccessCode('');
    }, 300);
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailSubmitted(true);
  };

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Access code handling — stub for now
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#022136]/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-md bg-[#022136] rounded-2xl border border-[#2A4A68] shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
              style={{ borderTopColor: '#00BFFF', borderTopWidth: 2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#7A92A8] hover:text-white transition-colors duration-150 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="px-8 pt-8 pb-8">
                {/* Logo */}
                <div className="flex justify-center mb-7">
                  <img
                    src="/assets/LogoFiles/PrimaryLogo-DarkMode.png"
                    alt="Vanyshr"
                    className="h-8 w-auto"
                  />
                </div>

                {/* Headline */}
                <h2 className="text-[1.6rem] font-bold text-white text-center leading-snug tracking-tight mb-3">
                  You're early to the party.
                </h2>

                {/* Body */}
                <p className="text-[#B8C4CC] text-sm text-center leading-relaxed mb-8">
                  Vanyshr is in private beta. We're onboarding a limited number of users
                  every day to keep things stable. Secure your spot in line and we'll
                  notify you as soon as your seat is ready.
                </p>

                {/* Reserve My Spot */}
                <div className="mb-5">
                  <AnimatePresence mode="wait">
                    {emailSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-[52px] rounded-xl bg-[#00D4AA]/10 border border-[#00D4AA]/30 flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                        <span className="text-[#00D4AA] font-semibold text-sm">
                          You're on the list — we'll be in touch!
                        </span>
                      </motion.div>
                    ) : !reserveOpen ? (
                      <motion.button
                        key="reserve-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setReserveOpen(true)}
                        className="w-full h-[52px] rounded-xl bg-[#00BFFF] hover:bg-[#00D4FF] active:bg-[#0099CC] text-[#022136] font-bold text-base transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,191,255,0.3)]"
                      >
                        Reserve My Spot
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    ) : (
                      <motion.form
                        key="email-form"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        onSubmit={handleReserveSubmit}
                        className="flex gap-2"
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          autoFocus
                          className="flex-1 h-[52px] rounded-xl border border-[#2A4A68] focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] px-4 bg-[#2D3847] text-white placeholder:text-[#7A92A8] text-sm outline-none transition-colors duration-150"
                        />
                        <button
                          type="submit"
                          className="h-[52px] px-5 rounded-xl bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold text-sm transition-colors duration-150 cursor-pointer whitespace-nowrap"
                        >
                          Reserve
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-[#2A4A68]" />
                  <span className="text-[#7A92A8] text-xs">or</span>
                  <div className="flex-1 h-px bg-[#2A4A68]" />
                </div>

                {/* Access code */}
                <form onSubmit={handleAccessSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Enter access code"
                    className="flex-1 h-[52px] rounded-xl border border-[#2A4A68] focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] px-4 bg-[#2D3847] text-white placeholder:text-[#7A92A8] text-sm outline-none transition-colors duration-150"
                  />
                  <button
                    type="submit"
                    className="h-[52px] px-5 rounded-xl border border-[#2A4A68] hover:border-[#00BFFF] text-[#B8C4CC] hover:text-white font-semibold text-sm transition-colors duration-150 cursor-pointer whitespace-nowrap"
                  >
                    Submit
                  </button>
                </form>

                {/* Reassurance */}
                <p className="text-[#7A92A8] text-xs text-center mt-5">
                  No credit card &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Just your spot in line
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
