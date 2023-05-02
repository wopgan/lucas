import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Energia = () => {
  const data = [
    { data: "Não Sinto Sono Durante O Dia" },
    { data: "Sinto Sono Antes das Refeições" },
    { data: "Sinto Sono Depois Das Refeições" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="59.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Quais são os seus níveis de energia ao longo do dia?
        </h1>
        <SingleChoice nextPage="/depoimento" keyName="energia" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Energia;
