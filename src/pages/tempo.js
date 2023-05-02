import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Tempo = () => {
  const data = [
    { data: "Concordo Plenamente" },
    { data: "Concordo" },
    { data: "Discordo" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="73%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Eu queria perder peso há muito tempo, mas não tenho tempo para me
          dedicar a isso agora.
        </h1>
        <SingleChoice
          nextPage="/motivacao"
          keyName="falta-tempo"
          array={data}
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Tempo;
