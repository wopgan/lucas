import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Atividades = () => {
  const data = [
    { data: "Muito Ativo (5-7 Vezes Por Semana)" },
    { data: "Moderadamente Ativo (3-4 Vezes Por Semana)" },
    { data: "Pouco Ativo (1 - 2 Vezes Por Semana)" },
    { data: "Não Pratico Atividades Fisicas" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="45%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Qual a sua relação com atividades fisicas?
        </h1>
        <SingleChoice
          nextPage="/carboidratos"
          keyName="atividades"
          array={data}
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Atividades;
