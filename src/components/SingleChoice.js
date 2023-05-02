import { useState } from "react";
import useSaveData from "../../hooks/useSaveData";

import styles from "../styles/SingleChoice.module.css";

//Este componente recebe a nextPage = próxima página, keyName = chave para a localStorage, array = array de dados {data: obrigatório, img: opcional}

const SingleChoice = ({ nextPage, keyName, array }) => {
  const [data] = useState([...array]);

  const { handleSaveData } = useSaveData();
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center my-3">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.options} ${
              !item.img ? "justify-content-center" : null
            } shadow-sm`}
            onClick={() => handleSaveData(nextPage, keyName, item.data)}
          >
            <span className="mx-3">{item.data}</span>
            {item.img ? <img src={item.img} alt={item.data} /> : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleChoice;
