import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import MultipleChoice from "@/components/MultipleChoice";

const Sintomas = () => {
  const data = [
    {
      data: "Fadiga",
      isActive: false,
    },
    {
      data: "Acne ",
      isActive: false,
    },
    {
      data: "Esquecimento",
      isActive: false,
    },
    {
      data: "Ansiedade",
      isActive: false,
    },
    {
      data: "Dor Crônica",
      isActive: false,
    },
    {
      data: "Ganho De Peso Rápido",
      isActive: false,
    },
    {
      data: "Dor Ou Rigidez Nas Articulações E Músculos",
      isActive: false,
    },
    {
      data: "Ganho Exessivo De Peso",
      isActive: false,
    },
    {
      data: "Confusao Mental",
      isActive: false,
    },
    {
      data: "Depressão",
      isActive: false,
    },
    {
      data: "Inchaço",
      isActive: false,
    },
    {
      data: "Nenhum",
      isActive: false,
    },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="27%" />
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          Você sente algum desses sintomas inflamatórios?
        </h1>
        <p>
          Porque estamos perguntando isto? Isso ajuda a determinar seus níveis
          de risco, pois as pessoas com esses sintomas têm maior probabilidade
          de ter inflamação crônica e ganho excessivo de peso.
        </p>
        <p className="text-center fw-bold">Escolha quantos quiser</p>
        <MultipleChoice nextPage="/alergia" keyName="sintomas" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Sintomas;
