import ProgressBar from "@/components/ProgressBar";
import EnterData from "@/components/EnterData";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";

const Altura = () => {
  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="95.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Qual é a sua altura aproximadamente?</h1>
        <EnterData
          nextPage="/peso"
          keyName="altura"
          img="images/altura/height.png"
          measure="cm"
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Altura;
