import ContinueButton from "@/components/ContinueButton";
import Grafico from "@/components/Grafico";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import React, { useEffect, useState } from "react";

const Resultado = () => {
  const [objetivo, setObjetivo] = useState("manter o peso");

  useEffect(() => {
    const peso = Number(JSON.parse(localStorage.getItem("peso")));
    const pesoAlvo = Number(JSON.parse(localStorage.getItem("peso-alvo")));

    if (peso < pesoAlvo) {
      setObjetivo("ganhar peso");
    } else if (peso > pesoAlvo) {
      setObjetivo("perder peso");
    }
  }, []);

  return (
    <ProtectedPageWrapper>
      <header className="header-resultado p-2">
        <img src="images/logo.png" alt="Perca Mais" />
      </header>
      <main className="main-container">
        <div className="d-flex flex-column align-items-center justify-content-center mx-auto">
          <h3 className="fw-bold">Seu peso</h3>
          <Grafico objetivo={objetivo} />
          <p className="text-center">
            Este gráfico é apenas para propósitos ilustrativos
          </p>
        </div>
        <h1 className="fw-bold">
          Seu plano para {objetivo} em 4 semanas está pronto!
        </h1>
        <ContinueButton nextPage="/imc" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Resultado;
