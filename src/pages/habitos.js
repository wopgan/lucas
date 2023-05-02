import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import MultipleChoice from "@/components/MultipleChoice";

const Habitos = () => {
  const data = [
    {
      data: "Fumar",
      isActive: false,
      img: "images/habitos/cigarette.png",
    },
    {
      data: "Comer De Madrugada",
      isActive: false,
      img: "images/habitos/night.png",
    },
    {
      data: "Não Dormir O Suficiente",
      isActive: false,
      img: "images/habitos/stress.png",
    },
    {
      data: "Comer Muito Doce",
      isActive: false,
      img: "images/habitos/candies.png",
    },
    {
      data: "Mexer No Celular Antes De Dormir",
      isActive: false,
      img: "images/habitos/booking.png",
    },
    {
      data: "Bebidas Alcoólicas",
      isActive: false,
      img: "images/habitos/beer.png",
    },
    {
      data: "Fast Foods",
      isActive: false,
      img: "images/habitos/burger.png",
    },
    {
      data: "Roer Unhas",
      isActive: false,
      img: "images/habitos/nail.png",
    },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="68.5%" />
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          Selecione hábitos que voce é acostumado a fazer
        </h1>
        <MultipleChoice nextPage="/tempo" keyName="habitos" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Habitos;
