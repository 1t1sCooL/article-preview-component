import styles from "./ShareFooterContent.module.css";
import {ShareIcons} from "@/shared/ui/icons/";

export const ShareFooterContent = () => {
    return (
        <div className={styles.shareFooterContent}>
            <p tabIndex={0}>Share</p>
            <ShareIcons/>
        </div>
    )
}