import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const PesoIdeal = () => {
  const data = [
    { data: "Menos De 1 Ano" },
    { data: "Entre 1 E 2 Anos" },
    { data: "Mais De 3 Anos" },
    { data: "Nunca" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="86.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">
          Há quanto tempo você não está no seu peso ideal?
        </h1>
        <SingleChoice nextPage="/idade" keyName="peso-ideal" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default PesoIdeal;
