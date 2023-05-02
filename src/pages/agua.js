import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Agua = () => {
  const data = [
    { data: "Apenas Café, Chá Ou Refrigerante", img: "images/agua/soda.png" },
    { data: "Menos De 2 Copos ( 500 ml )", img: "images/agua/empty.png" },
    {
      data: "2 - 6 Copos ( 0,5 - 1,5L )",
      img: "images/agua/full.png",
    },
    { data: "Mais De 6 Copos ( 1,5L+ )", img: "images/agua/bottle.png" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="40.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Quanto de água você bebe diariamente?</h1>
        <SingleChoice nextPage="/atividades" keyName="agua" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Agua;
