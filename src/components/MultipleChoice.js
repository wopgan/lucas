import { useState, useEffect } from "react";
import useSaveData from "../../hooks/useSaveData";

import styles from "../styles/MultipleChoice.module.css";

//Este componente recebe a nextPage = próxima página, keyName = chave para a localStorage, array = array de dados {data: obrigatório, isActive: obrigatório, img: opcional}

const MultipleChoice = ({ nextPage, keyName, array }) => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([...array]);

  const { handleSaveData } = useSaveData();

  const handleClick = () => {
    const filteredData = data.filter((item) => item.isActive === true);
    const finalData = filteredData.map((item) => item.data);
    handleSaveData(nextPage, keyName, finalData);
  };

  const handleSelectData = (i) => {
    const dataCopy = [...data];
    dataCopy[i].isActive = !dataCopy[i].isActive;
    setData(dataCopy);
  };

  useEffect(() => {
    if (data.some((item) => item.isActive)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center my-3">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.options} ${
              item.isActive ? styles.optionsActive : ""
            } ${!item.img ? "justify-content-center" : null} shadow-sm`}
            onClick={() => handleSelectData(index)}
          >
            <span className="mx-3">{item.data}</span>
            {item.img ? <img src={item.img} alt={item.data} /> : null}
          </div>
        ))}
        <div
          className={
            isActive ? styles.continueButton : styles.continueButtonDisabled
          }
          onClick={handleClick}
        >
          Continuar
        </div>
      </div>
    </>
  );
};

export default MultipleChoice;
