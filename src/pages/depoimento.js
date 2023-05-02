import ProgressBar from "@/components/ProgressBar";
import ProtectedPageWrapper from "@/components/ProtectedPageWrapper";
import ContinueButton from "@/components/ContinueButton";

const Depoimento = () => {
  return (
    <ProtectedPageWrapper>
      <ProgressBar progress="64%" />
      <main className="main-container">
        <h1 className="text-center fw-bold my-3">
          “O plano é superfácil de seguir. Perdi 15 quilos e meu cansaço
          constante também se foi!”
        </h1>
        <ContinueButton nextPage="/habitos" />
      </main>
    </ProtectedPageWrapper>
  );
};

export default Depoimento;
