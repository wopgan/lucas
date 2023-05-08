import ProgressBar from "@/components/ProgressBar";
import SingleChoice from "@/components/SingleChoice";

const Familiarizado = () => {
  const data = [
    { data: "Muito Familiarizado" },
    { data: "Um Pouco Familiarizado" },
    { data: "Nem Um Pouco Familiarizado" },
  ];

  return (
    <>
      <ProgressBar progress="4.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Quão familiarizado você está com a inflamação do seu corpo e seus
          sintomas?
        </h1>
        <SingleChoice
          nextPage="/dieta_anti-inflamatoria"
          keyName="conhecimento"
          array={data}
        />
      </main>
    </>
  );
};

export default Familiarizado;
