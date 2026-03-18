'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import MobileHandoffModal from '../components/MobileHandoffModal';

interface MobileHandoffContextType {
  handleQuickScanCTA: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MobileHandoffContext = createContext<MobileHandoffContextType | null>(null);

function isMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
}

export function MobileHandoffProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuickScanCTA = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile()) {
      e.preventDefault();
      setIsOpen(true);
    }
    // mobile: let the <a> navigate normally
  }, []);

  return (
    <MobileHandoffContext.Provider value={{ handleQuickScanCTA }}>
      {children}
      <MobileHandoffModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </MobileHandoffContext.Provider>
  );
}

export function useMobileHandoff() {
  const ctx = useContext(MobileHandoffContext);
  if (!ctx) throw new Error('useMobileHandoff must be used within MobileHandoffProvider');
  return ctx;
}
