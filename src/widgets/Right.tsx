import styles from "./Right.module.css";
import {type Ref} from "react";
import {ShareFooterContent} from "./ShareFooterContent.tsx";
import {Author} from "./Author.tsx";
import {Heading} from "./Heading.tsx";
import {SmallText} from "./SmallText.tsx";
import {Share} from "./Share.tsx";

interface RightProps {
    modalOpen: boolean;
    isMobile: boolean;
    hidePopup: () => void;
    showPopup: () => void;
    shareButtonRef?: Ref<HTMLDivElement> | undefined;
}

export const Right = ({modalOpen, isMobile, hidePopup, showPopup, shareButtonRef}:RightProps) =>{
    return (
        <div className={styles.right}>
            <Heading/>
            <SmallText/>

            <div className={styles.author}>
                <Author/>
                <ShareFooterContent/>
                <Share modalOpen={modalOpen} isMobile={isMobile}
                       showPopup={showPopup} shareButtonRef={shareButtonRef}
                       hidePopup={hidePopup}/>
            </div>
        </div>
    )
}