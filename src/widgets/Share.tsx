import styles from "./Share.module.css";
import type {Ref} from "react";

interface ShareProps {
    modalOpen: boolean;
    isMobile: boolean;
    hidePopup: () => void;
    showPopup: () => void;
    shareButtonRef?: Ref<HTMLDivElement> | undefined;
}

export const Share = ({modalOpen, isMobile, showPopup, hidePopup, shareButtonRef}:ShareProps) => {
    return (
        <div tabIndex={4} className={`${styles.share} ${modalOpen && !isMobile ? styles.shareHover : ''}`} onMouseEnter={showPopup} onMouseLeave={hidePopup} ref={shareButtonRef} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                <path fill="currentColor"
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
        </div>
    )
}