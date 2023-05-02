import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import styles from "../styles/Imc.module.css";
import { useEffect, useState } from "react";
import ContinueButton from "@/components/ContinueButton";

const Imc = () => {
  const [imcAtual, setImcAtual] = useState(0);
  const [imcObjetivo, setImcObjetivo] = useState(0);
  const [imgAtual, setImgAtual] = useState("");
  const [imgObjetivo, setImgObjetivo] = useState("");
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

  useEffect(() => {
    const altura = Number(JSON.parse(localStorage.getItem("altura"))) / 100;
    const pesoAtual = Number(JSON.parse(localStorage.getItem("peso")));
    const pesoAlvo = Number(JSON.parse(localStorage.getItem("peso-alvo")));

    setImcAtual(pesoAtual / (altura * altura));
    setImcObjetivo(pesoAlvo / (altura * altura));
  }, []);

  useEffect(() => {
    const genero = String(JSON.parse(localStorage.getItem("genero")));
    const corpoAtual = String(JSON.parse(localStorage.getItem("corpo-atual")));
    const corpoDesejado = String(
      JSON.parse(localStorage.getItem("corpo-desejado"))
    );

    if (genero === "Masculino") {
      switch (corpoAtual) {
        case "Regular":
          setImgAtual("images/info/men-now-regular.avif");
          break;
        case "Com Barriga":
          setImgAtual("images/info/men-now-pot-belly.avif");
          break;
        default:
          setImgAtual("images/info/men-now-extra.avif");
      }

      switch (corpoDesejado) {
        case "Magro":
          setImgObjetivo("images/info/men-goal-lean.avif");
          break;
        case "Atlético":
          setImgObjetivo("images/info/men-goal-athletic.avif");
        default:
          setImgObjetivo("images/info/men-goal-shredded.avif");
      }
    } else {
      switch (corpoAtual) {
        case "Regular":
          setImgAtual("images/info/girl-now-regular.avif");
          break;
        case "Flacido":
          setImgAtual("images/info/girl-now-flabby.avif");
          break;
        default:
          setImgAtual("images/info/girl-now-extra.avif");
      }

      switch (corpoDesejado) {
        case "Em Forma":
          setImgObjetivo("images/info/girl-goal-fit.avif");
          break;
        case "Chapado":
          setImgObjetivo("images/info/girl-goal-athletic.avif");
        default:
          setImgObjetivo("images/info/girl-goal-shapely.avif");
      }
    }
  }, []);

  return (
    <ProtectedPageWrapper>
      <header className={styles.header}>
        <img src="images/logo.png" alt="Perca Mais" />
      </header>
      <main className="main-container">
        <div className={styles.infoContainer}>
          <div className={styles.infoHeader}>
            <div className={styles.agora}>
              <h4 className="fw-bold">Agora</h4>
            </div>
            <div className={styles.objetivo}>
              <h4 className="fw-bold">Objetivo</h4>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src={imgAtual} alt={imgAtual} />
            <img src={imgObjetivo} alt={imgObjetivo} />
          </div>
          <div className={styles.imcContainer}>
            <div className={styles.imcAgora}>
              <span className="fw-bold">IMC</span>{" "}
              <span>{imcAtual.toFixed(2)}</span>
            </div>
            <div className={styles.imcObjetivo}>
              <span className="fw-bold">IMC</span>{" "}
              <span>{imcObjetivo.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <p className={styles.advice}>
          Isso não é uma garantia ou promessa de resultados
        </p>
        <span className={`${styles.title} h1 text-center fw-bold`}>
          SEU PLANO PERSONALIZADO PARA {objetivo.toUpperCase()} ESTÁ PRONTO!
        </span>
        <ContinueButton nextPage="/perca_mais" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Imc;
