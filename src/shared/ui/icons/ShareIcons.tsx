import styles from "./ShareIcons.module.css";
import {Facebook} from "./Facebook.tsx";
import {Twitter} from "./Twitter.tsx";
import {Pinterest} from "./Pinterest.tsx";

export const ShareIcons = () => {
    return (
        <div className={styles.shareIcons} >
            <Facebook/>
            <Twitter/>
            <Pinterest/>
        </div>
    )
}