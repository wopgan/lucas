import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import MultipleChoice from "@/components/MultipleChoice";

const Carboidratos = () => {
  const data = [
    {
      data: "Batatas Normais",
      isActive: false,
      img: "images/carboidratos/potato.png",
    },
    {
      data: "Sorgo",
      isActive: false,
      img: "images/carboidratos/lentil.png",
    },
    {
      data: "Massas",
      isActive: false,
      img: "images/carboidratos/spaghetti.png",
    },
    {
      data: "Cuscuz",
      isActive: false,
      img: "images/carboidratos/couscous.png",
    },
    {
      data: "Eu Como Todos",
      isActive: false,
    },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="49.5%" />
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          Que tipo de carboidratos e alimentos ricos em amido você não come?
        </h1>
        <p className="text-center">
          Os alimentos selecionados não serão incluídos em seu plano
          nutricional.
        </p>
        <p className="text-center fw-bold">Escolha quantos quiser</p>
        <MultipleChoice
          nextPage="/refeicoes"
          keyName="carboidratos"
          array={data}
        />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Carboidratos;
