import { useCallback, useEffect, useRef, useState } from 'react';

export const useSharePopup = (breakpoint = 1000) => {
  const [isMobile, setIsMobile] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const shareButtonRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [breakpoint]);

  const updatePopupPosition = useCallback(() => {
    if (shareButtonRef.current) {
      const rect = shareButtonRef.current.getBoundingClientRect();
      setPopupPosition({
        top: window.scrollY + rect.top - 70,
        left: window.scrollX + rect.left + 20,
      });
    }
  }, []);

  const showPopup = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    updatePopupPosition();
    setModalOpen(true);
  };

  const hidePopup = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setModalOpen(false);
    }, 300);
  };

  return { isMobile, modalOpen, popupPosition, shareButtonRef, showPopup, hidePopup };
};
