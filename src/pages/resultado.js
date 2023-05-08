import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import { useState, useLayoutEffect, useEffect } from "react";
import Imc from "../components/Imc.js";
import ContinueButton from "@/components/ContinueButton.js";

const Resultado = () => {
  const [windowWidth, setWindowWidth] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const date = new Date();
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const month = date.getMonth();

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
        <h2 className="fw-bold mb-5">{goalWeight} Kg</h2>
        <div className="resultado-img-div">
          <div className="inicial text-center fw-bold">
            {monthNames[month]}
            <br />
            <span>{weight}kg</span>
          </div>
          <div className="final text-center fw-bold">
            {month === 11 ? monthNames[0] : monthNames[month + 1]}
            <br />
            <span>{goalWeight}kg</span>
          </div>
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
        </div>

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
              Outras pessoas que pesavam {weight} kilos tiveram{" "}
              <span className="text-primary">87% de sucesso</span> com nosso
              programa.
            </p>
          </div>
        </div>
        <ContinueButton nextPage="#" label="Pegue já seu plano!" />
        <h2 className="my-5 fw-bold">Seu perfil:</h2>
        <div className="profile">
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
        </div>
        <Imc />
        <div className="levels text-secondary border border-1 rounded-3 shadow my-5">
          <div className="level p-2">
            <p>Nível de stress e inflamação</p>
            <img src="images/inflamation.png" alt="inflamação" />
          </div>
          <div className="level p-2">
            <p>Rigidez e dor corporal</p>
            <img src="images/weight-level.png" alt="inflamação" />
          </div>
          <div className="level p-2">
            <p>Ansiedade, depressão e confusão mental</p>
            <img src="images/anxiety.png" alt="inflamação" />
          </div>
        </div>
        <div className="recomendacoes-container my-5">
          <div className="recomendacoes-left">
            <h2 className="fw-bold my-3">Suas recomendações</h2>
            <h3>Consumo diário de calorias</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
              <div className="calorias d-flex flex-column align-items-start my-4">
                <p className="mx-2 text-start">Perda de peso ideal</p>
                <img src="images/img-38.svg" alt="Calorias" className="px-2" />
                <p className="cal fs-6 fw-bold">1526 kcal</p>
              </div>
            </div>
            <h3 className="my-3">Consumo diário de água</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
              <div className="agua d-flex flex-row align-items-center my-2">
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
            <h3>Rotina diária</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
              <div className="data-idade d-flex flex-row align-items-center mt-4 mb-2">
                <img src="images/img-34.png" alt="idade" className="mx-2" />
                <div className="mx-3">
                  <p>Atividades diárias escolhidas</p>
                  <p className="fw-bold">20 minutos</p>
                </div>
              </div>
              <div className="data-outros d-flex flex-row align-items-center mb-4 mt-2">
                <img src="images/img-35.png" alt="data" className="mx-2" />
                <div className="mx-3">
                  <p>Controle diário de stress</p>
                  <p className="fw-bold">15 minutos</p>
                </div>
              </div>
            </div>
            <h3 className="my-3">Refeições</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow">
              <div className="agua d-flex flex-row align-items-center my-2">
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
          </div>
          <div className="recomendacoes-right">
            <h2 className="fw-bold my-3">Estimativas de mudanças corporais</h2>
            <h3 className="my-3">Redução de peso corporal</h3>
            <img
              src="images/img-17.svg"
              alt="Corpo"
              className="border border-1 rounded-3 shadow p-3"
            />
            <div className="d-flex flex-column my-3 align-items-center justify-content-center border border-1 rounded-3 shadow my-3">
              <img src="images/fire.svg" alt="fire" className="my-3" />
              <img src="images/78.svg" alt="78" className="my-3" />
              <p className="m-3 text-secondary text-center">
                das pessoas com perfil similar{" "}
                <span className="fw-bold">perderam peso</span> usando os planos
                da PercaMais
              </p>
            </div>
          </div>
        </div>
      </main>
      <div
        className="garantia-container d-flex flex-column align-items-center
      "
      >
        <div className="inner-garantia">
          <span className="text-white title px-4 fs-3 fw-bold">
            Seu plano de perda de peso
          </span>
          <br />
          <span className="text-white title px-4 fs-3 fw-bold">
            fácil de seguir
          </span>
          <div className="garantia-first text-white fs-5">
            <div className="garantia-left d-flex flex-column align-items-start justify-content-center gap-3">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <img src="images/check.svg" alt="check" />
                <span className="mx-2">Reduza a inflamação</span>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start">
                <img src="images/check.svg" alt="check" />
                <span className="mx-2">Perca peso indesejado</span>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start">
                <img src="images/check.svg" alt="check" />
                <span className="mx-2">Adquira novos hábitos saudáveis</span>
              </div>
            </div>
            <div className="garantia-right">
              <img src="images/newspaper.png" alt="newspaper" />
            </div>
          </div>
          <h2 className="text-secondary fw-bold mb-5">
            Dieta anti-inflamatória foi coberta por
          </h2>
          <div className="garantia-second mx-3">
            <img src="images/img-21.png" alt="newspaper" />
            <img src="images/img-22.png" alt="newspaper" />
            <img src="images/img-23.png" alt="newspaper" />
          </div>
          <h2 className="fw-bold text-secondary mx-5">Nossa promessa</h2>
          <div className="garantia-third">
            <div className="text text-secondary p-2 fs-5">
              <p>
                “I’ve been there. I was anxious my body weight and inflammation
                were going to stay with me forever, making me unable to live
                without constant fatigue, brain fog, and chronic pain.
              </p>
              <p>
                Together, we’ll use meal plans, workout plans, and other
                techniques designed for gradual weight loss and elimination of
                inflammatory symptoms so you can enjoy the kind of vibrant,
                total health you’ve always wanted.
              </p>
              <p>
                {" "}
                Our nutritionists and health coaches work around the clock to
                prepare the most effective plans to support your body and keep
                you glowing, fit, and full of energy.{" "}
              </p>
              <p>
                Try it out – you have my personal guarantee it’s going to work.”
              </p>
              <p>Ashley Daniels</p>
              <p>Autoimmune Expert, Health & Nutrition Coach</p>
            </div>
            <img src="images/ashley.jpg" alt="Ashley" className="m-3" />
          </div>
          <ContinueButton nextPage="#" label="Pegue já seu plano!" />
        </div>
      </div>
    </ProtectedPageWrapper>
  );
};

export default Resultado;
