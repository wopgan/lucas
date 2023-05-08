import { useEffect } from "react";
import useSaveData from "../../hooks/useSaveData";

const Main = () => {
  const { handleSaveData } = useSaveData();
  const data = [
    { data: "Perda De Peso Para Homens", img: "images/gender/man.png" },
    { data: "Perda De Peso Para Mulheres", img: "images/gender/woman.png" },
  ];

  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <header className="header">
        <img src="images/logo.png" alt="PercaMais" />
      </header>
      <main className="index-container">
        <h2 className="fw-bold text-center m-4">
          "Oi, Eu sou a Carla e estou usando o plano Perca Mais há seis meses"
        </h2>
        <div className="carla-container border-bottom mb-3 p-3">
          <div className="carla-img shadow-lg">
            <img src="images/carla.webp" alt="Carla" />
          </div>
          <div className="carla-col">
            <p className="fw-bold">
              Comecei quando atingi meu peso mais alto de todos os tempos, 93kg
              (tenho 1,72m), o que ligou um alerta para mim.
            </p>
            <h2 className="fs-5 fw-bold">
              SELECIONE O TIPO DE SEU PROGRAMA ANTI-INFLAMATÓRIO PARA COMEÇAR
            </h2>
            <div className="options-container text-center">
              <div
                className="options shadow-sm fw-bold"
                onClick={() =>
                  handleSaveData("/familiarizado", "genero", `${data[0].data}`)
                }
              >
                {data[0].data} <img src={data[0].img} alt={data[0].img} />
              </div>
              <div
                className="options shadow-sm fw-bold"
                onClick={() =>
                  handleSaveData("/familiarizado", "genero", `${data[1].data}`)
                }
              >
                {data[1].data} <img src={data[1].img} alt={data[1].img} />
              </div>
            </div>
          </div>
        </div>
        <div className="carla-depoimento border-bottom mb-3">
          <p>
            Eu estava sentindo dores nas articulações e fadiga constante devido
            aos meus problemas de inflamação e estava preocupada que fosse
            apenas mais uma dieta para perda de peso. Mas o plano era tão fácil
            de seguir que me apaixonei na hora.
          </p>
          <p>
            Ele eliminou completamente meus sintomas inflamatórios e me ajudou a
            definir metas realistas de perda de peso para o próximo mês.
          </p>
          <p className="fw-bold">
            Já perdi 27 quilos de forma saúdavel, graças ao plano.
          </p>
        </div>
        <div className="carla-container">
          <div className="carla-col">
            <p className="fw-bold text-center">
              Receba seu plano respondendo esse quiz de 60 segundos aprovado por
              especialistas
            </p>
            <p className="fw-bold text-center">
              Começe a diminuir medidas Agora
            </p>
          </div>
          <div className="carla-col">
            <h2 className="fs-5 fw-bold">
              SELECIONE O TIPO DE SEU PROGRAMA ANTI-INFLAMATÓRIO PARA COMEÇAR
            </h2>
            <div className="options-container text-center">
              <div
                className="options shadow-sm fw-bold"
                onClick={() =>
                  handleSaveData("/familiarizado", "genero", `${data[0].data}`)
                }
              >
                {data[0].data} <img src={data[0].img} alt={data[0].img} />
              </div>
              <div
                className="options shadow-sm fw-bold"
                onClick={() =>
                  handleSaveData("/familiarizado", "genero", `${data[1].data}`)
                }
              >
                {data[1].data} <img src={data[1].img} alt={data[1].img} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
