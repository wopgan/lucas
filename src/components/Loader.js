import { useState, useEffect } from "react";
import styles from "../styles/Loader.module.css";

function Loader({ progress, setProgress }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress === 100) {
          clearInterval(interval);
        }
        return nextProgress;
      });
    }, 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const strokeWidth = 16;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={styles.progressBar}>
      <svg width="100" height="100">
        <circle
          className={styles.progressBarBackground}
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <circle
          className={styles.progressBarProgress}
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className={styles.progressBarText}>
        {progress}
        <span>%</span>
      </div>
    </div>
  );
}

export default Loader;
