import styles from "../styles/EnterData.module.css";
import { useEffect, useRef, useState } from "react";
import useSaveData from "../../hooks/useSaveData";

//Este componente recebe a nextPage = próxima página, keyName = chave para a localStorage, img = url da imagem, measure: opcional = abreviação da medida

const EnterData = ({ nextPage, keyName, img, measure }) => {
  const [data, setData] = useState("");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const { handleSaveData } = useSaveData();

  const handleClick = () => {
    if (
      localStorage.getItem("peso") &&
      Number(data) >= Number(JSON.parse(localStorage.getItem("peso")))
    ) {
      alert("Você deve informar um valor inferior ao seu peso atual");
      return;
    }
    handleSaveData(nextPage, keyName, data);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    data ? setIsActive(true) : setIsActive(false);
  }, [data]);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className={`${styles.dataContainer} my-3`}>
        <div
          className={`${styles.inputContainer} mx-3 d-flex flex-row align-items-baseline`}
        >
          <input
            type="number"
            onChange={(e) => setData(e.target.value)}
            className="text-center"
            ref={inputRef}
          />
          <span>{measure}</span>
        </div>
        <img src={img} alt={keyName} className="mx-3" />
      </div>
      <div
        className={
          isActive ? styles.continueButton : styles.continueButtonDisabled
        }
        onClick={handleClick}
      >
        Continuar
      </div>
    </div>
  );
};

export default EnterData;
