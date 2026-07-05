import styles from './Img.module.css';

export const Img = () => {
  return (
    <div className={styles.img}>
      <img src={'/drawers.jpg'} alt="drawers" />
    </div>
  );
};
