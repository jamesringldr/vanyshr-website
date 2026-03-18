'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';

const QUICKSCAN_URL = 'https://app.vanyshr.com/quick-scan';

interface MobileHandoffModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileHandoffModal({ isOpen, onClose }: MobileHandoffModalProps) {
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
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-sm bg-[#022136] rounded-2xl border border-[#2A4A68] shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
              style={{ borderTopColor: '#00BFFF', borderTopWidth: 2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#7A92A8] hover:text-white transition-colors duration-150 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="px-8 pt-8 pb-8 flex flex-col items-center text-center">
                {/* Logo */}
                <img
                  src="/assets/LogoFiles/PrimaryLogo-DarkMode.png"
                  alt="Vanyshr"
                  className="h-7 w-auto mb-6"
                />

                {/* Icon + Headline */}
                <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight mb-2">
                  Better on your phone
                </h2>
                <p className="text-[#B8C4CC] text-sm leading-relaxed mb-7">
                  Scan the QR code with your phone's camera to run your QuickScan — it only takes a minute.
                </p>

                {/* QR Code */}
                <div className="bg-white rounded-2xl p-4 mb-6">
                  <QRCode
                    value={QUICKSCAN_URL}
                    size={180}
                    bgColor="#FFFFFF"
                    fgColor="#022136"
                    level="M"
                  />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="flex-1 h-px bg-[#2A4A68]" />
                  <span className="text-[#7A92A8] text-xs">or</span>
                  <div className="flex-1 h-px bg-[#2A4A68]" />
                </div>

                {/* Copy link */}
                <button
                  onClick={() => navigator.clipboard.writeText(QUICKSCAN_URL)}
                  className="w-full h-[44px] rounded-xl border border-[#2A4A68] hover:border-[#00BFFF] text-[#B8C4CC] hover:text-white text-sm font-medium transition-colors duration-150 cursor-pointer"
                >
                  Copy link to open on mobile
                </button>

                <p className="text-[#7A92A8] text-xs mt-4">
                  No credit card &nbsp;·&nbsp; No sign-up to scan
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
