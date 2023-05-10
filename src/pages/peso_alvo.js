import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import EnterData from "@/components/EnterData";

const PesoAlvo = () => {
  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="100%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Qual o peso que desejaria ter?</h1>
        <EnterData
          nextPage="/preparacao"
          keyName="peso-alvo"
          img="images/peso-alvo/weight-loss.png"
          measure="kg"
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default PesoAlvo;
