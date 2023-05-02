import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";
import { useEffect, useState } from "react";

const CorpoAtual = () => {
  const [gender, setGender] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const gender = String(JSON.parse(localStorage.getItem("genero")));
    setGender(gender);
  }, []);

  useEffect(() => {
    if (gender === "Masculino") {
      setData([
        { data: "Regular", img: "images/body-type/male/male-regular.webp" },
        {
          data: "Com Barriga",
          img: "images/body-type/male/male-pot-belly.webp",
        },
        { data: "Extra", img: "images/body-type/male/male-extra.webp" },
      ]);
    } else {
      setData([
        { data: "Regular", img: "images/body-type/female/female-regular.webp" },
        { data: "Flácido", img: "images/body-type/female/female-flabby.webp" },
        { data: "Extra", img: "images/body-type/female/female-extra.webp" },
      ]);
    }
  }, [gender]);

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="18%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Escolha seu corpo atual</h1>
        <SingleChoice
          nextPage="/corpo_desejado"
          keyName="corpo-atual"
          key={JSON.stringify(data)}
          array={data}
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default CorpoAtual;
