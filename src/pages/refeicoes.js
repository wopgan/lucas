import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Refeicoes = () => {
  const data = [
    { data: "3 Refeições" },
    { data: "4 Refeições (3 Refeições E Um Lanche)" },
    { data: "5 Refeições (3 Refeições E 2 Lanches)" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="54%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Quantas refeições por dia você prefere fazer?
        </h1>
        <SingleChoice nextPage="/energia" keyName="refeicoes" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Refeicoes;
