import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import EnterData from "@/components/EnterData";

const Idade = () => {
  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="91%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Qual é a sua idade?</h1>
        <EnterData nextPage="/altura" keyName="idade" img="images/age.png" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Idade;
