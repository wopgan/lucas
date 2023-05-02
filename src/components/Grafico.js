import { useEffect, useState } from "react";
import styles from "../styles/Grafico.module.css";

const Grafico = ({ objetivo }) => {
  const [first, setFirst] = useState(50);
  const [second, setSecond] = useState(55);
  const [third, setThird] = useState(45);
  const [fourth, setFourth] = useState(50);

  useEffect(() => {
    switch (objetivo) {
      case "perder peso": {
        setFirst(20);
        setSecond(10);
        setThird(95);
        setFourth(100);
        break;
      }
      case "ganhar peso": {
        setFirst(100);
        setSecond(95);
        setThird(20);
        setFourth(30);
        break;
      }
      default: {
        setFirst(50);
        setSecond(55);
        setThird(45);
        setFourth(50);
      }
    }
  }, [objetivo]);

  return (
    <div className={styles.outerContainer}>
      <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#445FC2" />
            <stop offset="100%" stopColor="#76CFBE" />
          </linearGradient>
        </defs>
        <text
          x="10"
          y={first - 14}
          fill="#536299"
          fontSize="8px"
          fontWeight="bold"
        >
          Agora
        </text>
        <text
          x="168"
          y={fourth - 20}
          fill="#536299"
          fontSize="6px"
          fontWeight="bold"
        >
          Depois de
        </text>
        <text
          x="167"
          y={fourth - 14}
          fill="#536299"
          fontSize="6px"
          fontWeight="bold"
        >
          4 semanas
        </text>

        <path opacity="0.1" d="M0 4H200" stroke="#0E2782"></path>
        <path opacity="0.1" d="M0 29H200" stroke="#0E2782"></path>
        <path opacity="0.1" d="M0 54H200" stroke="#0E2782"></path>
        <path opacity="0.1" d="M0 79H200" stroke="#0E2782"></path>
        <path opacity="0.1" d="M0 104H200" stroke="#0E2782"></path>
        <path
          className={styles.curve}
          d={`M 20,${first} C 80,${second} 120,${third} 180,${fourth}`}
          stroke="url(#gradient)"
        />
        <circle cx="20" cy={first} r="9" fill="white"></circle>
        <circle cx="20" cy={first} r="5" fill="#445FC2"></circle>
        <circle cx="180" cy={fourth} r="9" fill="white"></circle>
        <circle cx="180" cy={fourth} r="5" fill="#76D0BE"></circle>
        <defs>
          <linearGradient
            id="paint0_linear_6023_108136"
            x1="294.718"
            y1="104.698"
            x2="33.3539"
            y2="102.512"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.359121" stopColor="#76D0BE"></stop>
            <stop offset="0.539923" stopColor="#445FC2"></stop>
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.label}>
        <span>Semana 1</span> <span>Semana 2</span> <span>Semana 3</span>{" "}
        <span>Semana 4</span>
      </div>
    </div>
  );
};

export default Grafico;
