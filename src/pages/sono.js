import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Sono = () => {
  const data = [
    { data: "Menos De 5 Horas" },
    { data: "5-6 Horas" },
    { data: "7-8 Horas" },
    { data: "Mais De 8 Horas" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="36%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Quanto você dorme por noite em média?</h1>
        <SingleChoice nextPage="/agua" keyName="sono" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Sono;
