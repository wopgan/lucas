import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Motivacao = () => {
  const data = [
    { data: "Concordo Plenamente" },
    { data: "Concordo" },
    { data: "Discordo" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="77.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Alguém tem que me motivar. Quando fico estressado ou cansado é mais
          provável que eu desista.
        </h1>
        <SingleChoice nextPage="/objetivo" keyName="motivacao" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Motivacao;
