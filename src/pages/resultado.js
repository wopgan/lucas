import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import { useState, useEffect } from "react";
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

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <ProtectedPageWrapper>
      <header className="header-resultado p-2">
        <img src="images/logo/logo.png" alt="Perca Mais" />
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
              src="images/resultado/grafico-gd.png"
              alt="PercaMais"
              className="grafico"
            />
          ) : (
            <img
              src="images/resultado/grafico-pq.png"
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
            <img src="images/resultado/scale.svg" alt="scale" />
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
        <ContinueButton
          nextPage="https://pay.kiwify.com.br/cJccQ15"
          label="Pegue já seu plano!"
        />
        <h2 className="my-5 fw-bold">Seu perfil:</h2>
        <div className="profile">
          <div className="data text-secondary border border-1 rounded-3 shadow my-3">
            <div className="data-idade d-flex flex-row align-items-center my-2">
              <img
                src="images/resultado/idade.png"
                alt="idade"
                className="mx-2"
              />
              <div className="mx-2">
                <p>Idade</p>
                <p className="fw-bold">{age} anos</p>
              </div>
            </div>
            <div className="data-outros d-flex flex-row align-items-center my-2">
              <img
                src="images/resultado/data.png"
                alt="data"
                className="mx-2"
              />
              <div className="mx-2">
                <p>Altura - Peso</p>
                <p className="fw-bold">
                  {height} cm - {weight} kg
                </p>
              </div>
            </div>
          </div>
          <div className="data d-flex flex-column my-3 align-items-center justify-content-center border border-1 rounded-3 shadow my-3">
            <img src="images/resultado/fire.svg" alt="fire" className="my-3" />
            <img src="images/resultado/78.svg" alt="78" className="my-3" />
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
            <p className="fs-6">Nível de stress e inflamação</p>
            <img src="images/resultado/GRAFICO1.webp" alt="inflamação" />
          </div>
          <div className="level p-2">
            <p className="fs-6">Rigidez e dor corporal</p>
            <img src="images/resultado/MAGRO.webp" alt="inflamação" />
          </div>
          <div className="level p-2">
            <p className="fs-6">Ansiedade, depressão e confusão mental</p>
            <img src="images/resultado/BAIXO.webp" alt="inflamação" />
          </div>
        </div>
        <div className="recomendacoes-container my-5">
          <div className="recomendacoes-left">
            <h2 className="fw-bold my-3">Suas recomendações</h2>
            <h3>Consumo diário de calorias</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
              <div className="calorias d-flex flex-column align-items-start my-4">
                <p className="mx-2 text-start">Perda de peso ideal</p>
                <img
                  src="images/resultado/img-38.svg"
                  alt="Calorias"
                  className="px-2"
                />
                <p className="cal fs-6 fw-bold">1526 kcal</p>
              </div>
            </div>
            <h3 className="my-3">Consumo diário de água</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow my-3">
              <div className="agua d-flex flex-row align-items-center my-2">
                <img
                  src="images/resultado/agua.svg"
                  alt="idade"
                  className="mx-2"
                />
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
                <img
                  src="images/resultado/img-34.png"
                  alt="idade"
                  className="mx-2"
                />
                <div className="mx-3">
                  <p>Atividades diárias escolhidas</p>
                  <p className="fw-bold">20 minutos</p>
                </div>
              </div>
              <div className="data-outros d-flex flex-row align-items-center mb-4 mt-2">
                <img
                  src="images/resultado/img-35.png"
                  alt="data"
                  className="mx-2"
                />
                <div className="mx-3">
                  <p>Controle diário de stress</p>
                  <p className="fw-bold">15 minutos</p>
                </div>
              </div>
            </div>
            <h3 className="my-3">Refeições</h3>
            <div className="recomendacoes text-secondary border border-1 rounded-3 shadow">
              <div className="agua d-flex flex-row align-items-center my-2">
                <img
                  src="images/resultado/refeicao.svg"
                  alt="idade"
                  className="mx-2"
                />
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
              src="images/resultado/corpo_.webp"
              alt="Corpo"
              className="border border-1 rounded-3 shadow p-3"
            />
            <div className="d-flex flex-column my-3 align-items-center justify-content-center border border-1 rounded-3 shadow my-3">
              <img
                src="images/resultado/fire.svg"
                alt="fire"
                className="my-3"
              />
              <img src="images/resultado/78.svg" alt="78" className="my-3" />
              <p className="m-3 text-secondary text-center">
                das pessoas com perfil similar{" "}
                <span className="fw-bold">perderam peso</span> usando os planos
                da PercaMais
              </p>
            </div>
            <ContinueButton
              nextPage="https://pay.kiwify.com.br/cJccQ15"
              label="Pegue já seu plano!"
            />
          </div>
        </div>
      </main>
      <div
        className="garantia-container d-flex flex-column align-items-center
      "
      >
        <div className="inner-garantia">
          <span className="text-white title px-4 fs-3 fw-bold">
            Seu plano super fácil para seguir!
          </span>
          <div className="garantia-first text-white fs-5">
            <div className="garantia-left d-flex flex-column align-items-start justify-content-center gap-3">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <img src="images/resultado/check.svg" alt="check" />
                <span className="mx-2">Reduza sua inflamação</span>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start">
                <img src="images/resultado/check.svg" alt="check" />
                <span className="mx-2">Perca peso de forma saudável</span>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start">
                <img src="images/resultado/check.svg" alt="check" />
                <span className="mx-2">Forme novos hábitos</span>
              </div>
            </div>
            <div className="garantia-right">
              <img src="images/resultado/newspaper.png" alt="newspaper" />
            </div>
          </div>
          <h2 className="text-secondary fw-bold mb-5">
            Essa dieta anti-inflamatória foi aprovada e apresentada por:
          </h2>
          <div className="garantia-second mx-3">
            <img src="images/resultado/mais-voce.webp" alt="Mais Você" />
            <img
              src="images/resultado/g1.svg"
              alt="G1"
              className="p-2 rounded-2"
              style={{ backgroundColor: "#A80000" }}
            />
            <img src="images/resultado/harvard.webp" alt="Harvard" />
            <img src="images/resultado/r7.webp" alt="R7" />
          </div>
          <h2 className="fw-bold text-secondary mx-5">Nossa promessa</h2>
          <div className="garantia-third">
            <div className="text text-secondary p-2 fs-5">
              <p>
                "Eu vivia em um peso que não era ideal para mim, estava sempre
                ansiosa pois meu corpo vivia inflamado e mesmo que não
                percebesse, isso me causava diversos malefícios. Era comum na
                minha rotina a fadiga constante, esquecimento e dores de cabeça.
              </p>
              <p>
                Conheci o Plano nutricional anti-inflamatorio Perca Mais e
                gracas a suas técnicas e exelentes profissionais consegui
                alcançar o peso ideal para o meu corpo e eliminei os sintomas
                que atrapalhavam a minha rotina.
              </p>
              <p>
                Tenho Meu plano nutricional Atualizado todos os meses por
                excelentes profissionais de saúde, que visam não só a estética
                corporal, mas principalmente a saúde, que é muito importante na
                vida de todos
              </p>
              <p>
                Recomendo que todos experimentem pelo menos um mês do plano. Ele
                realmente mudou a minha vida."
              </p>
              <p>
                Aline Silva{" "}
                <img src="images/resultado/assinatura1.png" alt="assinatura" />
              </p>
              <p>Nutricionista especialista em saúde e nutrição</p>
            </div>
            <img
              src="images/resultado/ashley.jpg"
              alt="Ashley"
              className="m-3"
            />
          </div>
          <ContinueButton
            nextPage="https://pay.kiwify.com.br/cJccQ15"
            label="Pegue já seu plano!"
          />
        </div>
      </div>
    </ProtectedPageWrapper>
  );
};

export default Resultado;
