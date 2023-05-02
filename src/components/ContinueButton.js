import useSaveData from "../../hooks/useSaveData";

import styles from "../styles/ContinueButton.module.css";

const ContinueButton = ({ nextPage, label }) => {
  const { handleSaveData } = useSaveData();

  return (
    <div
      className={styles.continueButton}
      onClick={() => handleSaveData(nextPage)}
    >
      {label ? label : "Continuar"}
    </div>
  );
};

export default ContinueButton;
