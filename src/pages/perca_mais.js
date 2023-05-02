import ContinueButton from "@/components/ContinueButton";
import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";

const PercaMais = () => {
  return (
    <ProtectedPageWrapper>
      <header className="header-final-screen">
        <img src="images/logo.png" alt="Perca Mais" />
      </header>
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          A PercaMais cria resultados sustentáveis ​​a longo prazo através da
          mudança de hábito e comportamento, não de dietas restritivas.
        </h1>
        <ContinueButton nextPage="#" label="Pegue já seu plano!" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default PercaMais;
