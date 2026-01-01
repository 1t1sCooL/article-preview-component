import styles from "./Author.module.css";

export const Author = () => {
    return (
        <div className={styles.authorLeft}>
            <img src={'/ArticlePreviewComponent/avatar-michelle.jpg'} alt="avatar"/>
            <div className={styles.name}>
                <h3>Michelle Appleton</h3>
                <p className={styles.date}>28 Jun 2020</p>
            </div>
        </div>
    )
}