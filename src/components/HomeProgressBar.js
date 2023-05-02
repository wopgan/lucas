import { useRouter } from "next/router";

import styles from "../styles/HomeProgressBar.module.css";

const HomeProgressBar = ({ progress }) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleBar}>
        <img src="images/logo.png" alt="Perca Mais" />
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progress} style={{ width: progress }}></div>
      </div>
    </header>
  );
};

export default HomeProgressBar;
