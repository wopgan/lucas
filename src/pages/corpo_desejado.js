import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";
import { useEffect, useState } from "react";

const CorpoDesejado = () => {
  const [gender, setGender] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const gender = String(JSON.parse(localStorage.getItem("genero")));
    setGender(gender);
  }, []);

  useEffect(() => {
    if (gender === "Perda De Peso Para Homens") {
      setData([
        { data: "Magro", img: "images/target-body/male/male-lean.webp" },
        {
          data: "Atlético",
          img: "images/target-body/male/male-athletic.webp",
        },
        { data: "Trincado", img: "images/target-body/male/male-cut.webp" },
      ]);
    } else {
      setData([
        {
          data: "Em Forma",
          img: "images/target-body/female/female-fit.webp",
        },
        { data: "Chapado", img: "images/target-body/female/female-flat.webp" },
        {
          data: "Torneado",
          img: "images/target-body/female/female-shapely.webp",
        },
      ]);
    }
  }, [gender]);

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="22.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Escolha seu corpo desejado</h1>
        <SingleChoice
          nextPage="/sintomas"
          keyName="corpo-desejado"
          key={JSON.stringify(data)}
          array={data}
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default CorpoDesejado;
