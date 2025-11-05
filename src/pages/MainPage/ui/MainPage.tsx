import styles from './MainPage.module.css';
import { Footer } from "@/shared/ui/footer/";
import { Right } from "@/widgets/Right/";
import { Popup } from "@/shared/ui/popup/";
import { Img } from "@/widgets/Img/";
import { useSharePopup } from "@/features/share/ui/useSharePopup.ts";

export const MainPage = () => {
    const {
        isMobile,
        modalOpen,
        popupPosition,
        shareButtonRef,
        showPopup,
        hidePopup,
    } = useSharePopup(1000);

    return (
        <>
            <div className={styles.container}>
                <Img />
                <Right
                    hidePopup={hidePopup}
                    showPopup={showPopup}
                    shareButtonRef={shareButtonRef}
                    modalOpen={modalOpen}
                    isMobile={isMobile}
                />
            </div>
            {!isMobile && (
                <Popup
                    showPopup={showPopup}
                    hidePopup={hidePopup}
                    modalOpen={modalOpen}
                    popupPosition={popupPosition}
                />
            )}
            <Footer />
        </>
    );
};