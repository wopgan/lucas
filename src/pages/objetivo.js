import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import MultipleChoice from "@/components/MultipleChoice";

const Objetivo = () => {
  const data = [
    {
      data: "Eu Quero Me Sentir Melhor",
      isActive: false,
    },
    {
      data: "Eu Quero Ser Mais Atraente",
      isActive: false,
    },
    {
      data: "Eu Quero Melhorar Minha Autoestima",
      isActive: false,
    },
    {
      data: "Eu Quero Ter Mais Energia Durante O Dia",
      isActive: false,
    },
    {
      data: "Eu Quero Melhorar Minha Saúde",
      isActive: false,
    },
    {
      data: "Eu Quero Melhorar Minha Longevidade",
      isActive: false,
    },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="82%" />
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          Por que você quer perder peso?
        </h1>
        <p className="text-center fw-bold">Escolha quantos quiser</p>
        <MultipleChoice
          nextPage="/peso_ideal"
          keyName="objetivo"
          array={data}
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Objetivo;
