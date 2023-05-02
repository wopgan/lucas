import { useRouter } from "next/router";

import styles from "../styles/ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  const router = useRouter();

  const handleGoBack = () => {
    localStorage.setItem("previous-page", router.pathname);
    router.back();
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleBar}>
        <i
          className="fa-solid fa-arrow-left fa-xl"
          style={{ color: "#445fc2" }}
          onMouseEnter={(e) => {
            e.target.style.color = "#6178cb";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#445fc2";
          }}
          onClick={handleGoBack}
        ></i>
        <img src="images/logo.png" alt="Perca Mais" />
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progress} style={{ width: progress }}></div>
      </div>
    </header>
  );
};

export default ProgressBar;
