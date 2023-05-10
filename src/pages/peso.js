import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import EnterData from "@/components/EnterData";

const Peso = () => {
  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="97.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Qual é o seu peso aproximadamente?</h1>
        <EnterData
          nextPage="/peso_alvo"
          keyName="peso"
          img="images/peso/weight.png"
          measure="kg"
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Peso;
