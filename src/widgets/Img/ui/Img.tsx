import styles from './Img.module.css';

export const Img = () => {
  return (
    <div className={styles.img}>
      <img src={`${import.meta.env.BASE_URL}drawers.jpg`} alt="drawers" />
    </div>
  );
};
