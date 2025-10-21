import { useState, useRef, useEffect } from 'react';

export const useMainPageLogic = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const [modalOpen, setModalOpen] = useState(false);

    const shareButtonRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleShareClick = () => {
        if (shareButtonRef.current) {
            const rect = shareButtonRef.current.getBoundingClientRect();
            setPopupPosition({
                top: window.scrollY + rect.top - 80,
                left: window.scrollX + rect.left + rect.width / 2,
            });
        }
        setModalOpen((prev) => !prev);
    };

    const showPopup = () => {
        if (isMobile) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        handleShareClick();
    };

    const hidePopup = () => {
        timeoutRef.current = setTimeout(() => {
            setModalOpen(false);
        }, 200);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    return {
        isMobile,
        modalOpen,
        popupPosition,
        shareButtonRef,
        showPopup,
        hidePopup,
        handleShareClick,
    };
};