import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import MultipleChoice from "@/components/MultipleChoice";

const Alergia = () => {
  const data = [
    {
      data: "Lactose",
      isActive: false,
      img: "images/alergia/milk.png",
    },
    {
      data: "Ovos",
      isActive: false,
      img: "images/alergia/eggs.png",
    },
    {
      data: "Amendoim",
      isActive: false,
      img: "images/alergia/peanut.png",
    },
    {
      data: "Glúten",
      isActive: false,
      img: "images/alergia/wheat.png",
    },
    {
      data: "Soja",
      isActive: false,
      img: "images/alergia/soy-milk.png",
    },
    {
      data: "Peixe",
      isActive: false,
      img: "images/alergia/fish.png",
    },
    {
      data: "Mariscos",
      isActive: false,
      img: "images/alergia/mussel.png",
    },
    {
      data: "Frutas Cítricas",
      isActive: false,
      img: "images/alergia/lemon.png",
    },
    {
      data: "Nenhum",
      isActive: false,
    },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="31.5%" />
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          Que tipo de alergia você tem?
        </h1>
        <p className="text-center">
          Os alimentos selecionados não serão incluídos em seu plano
          nutricional.
        </p>
        <p className="text-center fw-bold">Escolha quantos quiser</p>
        <MultipleChoice nextPage="/sono" keyName="alergia" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Alergia;
