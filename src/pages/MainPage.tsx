import styles from './MainPage.module.css'
import {Footer} from "../shared/ui/footer/Footer.tsx";

export const MainPage = () => {
    return (<>
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={'/drawers.jpg'} alt="drawers" />
            </div>
            <div className={styles.right}>
                <p className={styles.heading}>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </p>
                <p>
                    Ever been in a room and felt like something was missing? Perhaps
                    it felt slightly bare and uninviting. I’ve got some simple tips
                    to help you make any room feel complete.
                </p>

                <div className={styles.author}>
                    <div className={styles.authorLeft}>
                        <img src={'/avatar-michelle.jpg'} alt="avatar"/>
                        <div className={styles.name}>
                            <h3>Michelle Appleton</h3>
                            <p className={styles.date}>28 Jun 2020</p>
                        </div>
                    </div>
                    <div className={styles.share}>
                        <svg xmlns="http://www.w3.org/2000/svg"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                        </svg>
                    </div>
                </div>
            </div>

    </div>
    <Footer />
        </>
    )
}