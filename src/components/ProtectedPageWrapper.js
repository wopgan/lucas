import { useRouter } from "next/router";
import { useEffect } from "react";

function ProtectedPageWrapper({ children }) {
  const router = useRouter();

  const pages = [
    "/",
    "/familiarizado",
    "/dieta_anti-inflamatoria",
    "/corpo_atual",
    "/corpo_desejado",
    "/sintomas",
    "/alergia",
    "/sono",
    "/agua",
    "/atividades",
    "/carboidratos",
    "/refeicoes",
    "/energia",
    "/depoimento",
    "/habitos",
    "/tempo",
    "/motivacao",
    "/objetivo",
    "/peso_ideal",
    "/idade",
    "/altura",
    "/peso",
    "/peso_alvo",
    "/preparacao",
    "/resultado",
  ];

  useEffect(() => {
    const currentIndex = pages.indexOf(router.pathname);
    const previewIndex = pages.indexOf(localStorage.getItem("previous-page"));
    const referenceIndex = Math.abs(currentIndex - previewIndex);

    if (!localStorage.getItem("id") || referenceIndex !== 1) {
      localStorage.clear();
      router.replace("/");
    }
  }, []);

  return <div>{children}</div>;
}

export default ProtectedPageWrapper;
