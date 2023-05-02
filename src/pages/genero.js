import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import SingleChoice from "@/components/SingleChoice";

const Genero = () => {
  const data = [
    { data: "Masculino", img: "images/gender/man.png" },
    { data: "Feminino", img: "images/gender/woman.png" },
    { data: "Não-Binário", img: "images/gender/rainbow.png" },
  ];

  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="13.5%" />
      <main className="main-container">
        <h1 className="fw-bold h1">Qual é o seu gênero?</h1>
        <SingleChoice nextPage="/corpo_atual" keyName="genero" array={data} />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Genero;
