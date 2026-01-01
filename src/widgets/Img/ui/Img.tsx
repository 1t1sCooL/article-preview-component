import styles from "./Img.module.css";

export const Img = () => {
    return (
        <div className={styles.img}>
            <img src={'/ArticlePreviewComponent/drawers.jpg'} alt="drawers" />
        </div>
    )
}