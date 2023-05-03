import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import { useState, useLayoutEffect, useEffect } from "react";
import Imc from "../components/Imc.js";
import ContinueButton from "@/components/ContinueButton.js";

const Resultado = () => {
  const [windowWidth, setWindowWidth] = useState("");
  const [weight, setWeight] = useState("50");
  const [goalWeight, setGoalWeight] = useState("50");
  const [height, setHeight] = useState("56");
  const [age, setAge] = useState("38");

  useEffect(() => {
    setWeight(Number(JSON.parse(localStorage.getItem("peso"))));
    setGoalWeight(JSON.parse(localStorage.getItem("peso-alvo")));
    setHeight(JSON.parse(localStorage.getItem("altura")));
    setAge(JSON.parse(localStorage.getItem("idade")));
  }, []);

  useLayoutEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <ProtectedPageWrapper>
      <header className="header-resultado p-2">
        <img src="images/logo.png" alt="Perca Mais" />
      </header>
      <main className="main-resultado container-fluid d-flex flex-column align-items-center justify-content-center">
        <h1 className="fw-bold text-center my-3">
          Seu plano de perda de peso anti-inflamatório está pronto!
        </h1>
        <h2>Em quatro semanas seu peso será: </h2>
        <h2 className="fw-bold">{goalWeight} Kg</h2>
        {windowWidth > 500 ? (
          <img
            src="images/grafico-gd.png"
            alt="PercaMais"
            className="grafico"
          />
        ) : (
          <img
            src="images/grafico-pq.png"
            alt="PercaMais"
            className="grafico"
          />
        )}
        <div className="semanas d-flex justify-content-evenly">
          <span>Semana 1</span>
          <span>Semana 2</span>
          <span>Semana 3</span>
          <span>Semana 4</span>
        </div>
        <div className="fato d-flex flex-row align-items-center my-5 border border-1 rounded-3 shadow">
          <div className="m-3">
            <img src="images/scale.svg" alt="scale" />
          </div>
          <div className="m-3 d-flex flex-column align-items-start">
            <p className="fw-bold text-secondary">Fato:</p>
            <p className="text-secondary">
              Outras pessoas que pesavam 60 kilos tiveram{" "}
              <span className="text-primary">87% de sucesso</span> com nosso
              programa.
            </p>
          </div>
        </div>
        <Imc />
        <h2 className="my-5 fw-bold">Seu perfil:</h2>
        <div className="data text-secondary border border-1 rounded-3 shadow my-3">
          <div className="data-idade d-flex flex-row align-items-center my-2">
            <img src="images/idade.png" alt="idade" className="mx-2" />
            <div className="mx-2">
              <p>Idade</p>
              <p className="fw-bold">{age} anos</p>
            </div>
          </div>
          <div className="data-outros d-flex flex-row align-items-center my-2">
            <img src="images/data.png" alt="data" className="mx-2" />
            <div className="mx-2">
              <p>Altura - Peso</p>
              <p className="fw-bold">
                {height} cm - {weight} kg
              </p>
            </div>
          </div>
        </div>
        <div className="data d-flex flex-column my-3 align-items-center justify-content-center border border-1 rounded-3 shadow my-3">
          <img src="images/fire.svg" alt="fire" className="my-3" />
          <img src="images/78.svg" alt="78" className="my-3" />
          <p className="m-3 text-secondary text-center">
            das pessoas com perfil similar{" "}
            <span className="fw-bold">perderam peso</span> usando os planos da
            PercaMais
          </p>
        </div>
        <h2 className="fw-bold my-3">Suas recomendações:</h2>
        <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
          <div className="d-flex flex-row align-items-center my-2">
            <img src="images/agua.svg" alt="idade" className="mx-2" />
            <div className="mx-2">
              <p className="m-3">
                Mínimo de consumo diário de água de acordo com o seu peso
              </p>
              <p className="fw-bold mx-3">
                {(weight * 0.035).toFixed(2)} litros
              </p>
            </div>
          </div>
        </div>
        <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
          <div className="d-flex flex-row align-items-center my-2">
            <img src="images/refeicao.svg" alt="idade" className="mx-2" />
            <div className="mx-2">
              <p className="m-3">
                A PercaMais tem combinações de pratos para ajudar você a
                alcançar seu objetivo
              </p>
              <p className="fw-bold mx-3">25,000+ receitas</p>
            </div>
          </div>
        </div>
        <div className="data d-flex flex-column my-3 align-items-center justify-content-center border border-1 rounded-3 shadow my-3">
          <img src="images/fire.svg" alt="fire" className="my-3" />
          <img src="images/78.svg" alt="78" className="my-3" />
          <p className="m-3 text-secondary text-center">
            das pessoas com perfil similar{" "}
            <span className="fw-bold">perderam peso</span> usando os planos da
            PercaMais
          </p>
        </div>
        <ContinueButton nextPage="#" label="Pegue já seu plano!" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Resultado;
