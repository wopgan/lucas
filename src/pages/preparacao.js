import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import useSaveData from "../../hooks/useSaveData";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";

const Preparacao = () => {
  const [progress, setProgress] = useState(0);
  const { handleSaveData } = useSaveData();

  useEffect(() => {
    if (progress === 100) {
      handleSaveData("/resultado");
    }
  }, [progress]);
  return (
    <ProtectedPageWrapper>
      <header className="header-resultado p-2">
        <img src="images/logo/logo.png" alt="Perca Mais" />
      </header>
      <main className="main-container d-flex flex-column align-items-center">
        <Loader progress={progress} setProgress={setProgress} />
        <h1 className="fw-bold my-5">Criando seu plano personalizado...</h1>
      </main>
    </ProtectedPageWrapper>
  );
};

export default Preparacao;
