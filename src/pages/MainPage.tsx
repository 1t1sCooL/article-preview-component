import styles from './MainPage.module.css'
import {Footer} from "../shared/ui/footer/Footer.tsx";
import { useState, useRef, useEffect } from 'react';
import {Right} from "../widgets/Right.tsx";
import {Popup} from "../shared/ui/popup/Popup.tsx";
import {Img} from "../widgets/Img.tsx";

export const MainPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const shareRef = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const shareButtonRef = useRef<HTMLDivElement>(null);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const handleShareClick = () => {
        if (shareButtonRef.current) {
            const rect = shareButtonRef.current.getBoundingClientRect();
            setPopupPosition({
                top: window.scrollY + rect.top - 80, // 80px — высота попапа + отступ
                left: window.scrollX + rect.left + rect.width / 2, // центр кнопки
            });
        }
        setModalOpen(!modalOpen);
    };
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
    const showPopup = () => {
        if (isMobile) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        handleShareClick()
        setModalOpen(true);
    };
    const hidePopup = () => {
        timeoutRef.current = setTimeout(() => {
            setModalOpen(false);
        }, 200);
    };
    return (<>
        <div className={styles.container}>
            <Img/>
            <Right hidePopup={hidePopup} showPopup={showPopup}
            shareButtonRef={shareButtonRef} modalOpen={modalOpen} isMobile={isMobile} />
        </div>
        {!isMobile && (<Popup showPopup={showPopup} hidePopup={hidePopup}
                              modalOpen={modalOpen} shareRef={shareRef}
                              popupPosition={popupPosition}/>)}
            <Footer/>
    </>
    )
}