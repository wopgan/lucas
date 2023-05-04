import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import ContinueButton from "@/components/ContinueButton";

const DietaAntiInflamatoria = () => {
  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="4.5%" />
      <main className="main-container">
        <h1 className="fw-bold my-3">O que é uma dieta anti-inflamatória?</h1>
        <p>
          A inflamação está na raiz de quase todas as condições crônicas de
          saúde e doenças autoimunes. A lista de sintomas inclui ganho de peso,
          confusão mental, ansiedade, depressão, fadiga persistente, enxaquecas,
          dores nas articulações e no corpo. A nutrição é o fator chave na
          gestão e redução dos níveis de inflamação.
        </p>
        <h2 className="text-center fw-bold my-3">
          Benefícios da Dieta anti-inflamatória:
        </h2>
        <ul>
          <li>Perda de peso</li>
          <li>Melhoria do humor e bem-estar</li>
          <li>Diminuição dos níveis de estresse</li>
          <li>Sono melhorado</li>
          <li>Rejuvenescimento</li>
        </ul>
        <ContinueButton nextPage="/corpo_atual" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default DietaAntiInflamatoria;
