import { useState, useEffect } from "react";
import Input from "../../components/Input";
import LoadScreen from "../../components/LoadingScreen";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast, Toaster } from "react-hot-toast";
import { antecipationService } from "../../services";

function Simulation() {
  const [responseData, setResponseData] = useState({
    1: 0,
    15: 0,
    30: 0,
    90: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [simulation, setSimulation] = useState({
    amount: 0,
    installments: 1,
    mdr: 1,
  });

  useEffect(() => {
    /**
     *  Verifica se os atributos do objeto estão preenchidos corretamente e
     *  em seguida retorna o resultado da requisição.
     */
    async function getAntecipation() {
      if (
        simulation.amount >= 1000 &&
        simulation.mdr > 0 &&
        simulation.installments > 0 &&
        simulation.installments <= 12
      ) {
        setIsLoading(true);
        const response = await antecipationService(simulation);
        if (response.code === 200) {
          setResponseData(response.data);
        } else {
          toast.error(response.data, {
            duration: 3000,
            style: {
              border: "1px solid #713200",
              padding: "14px",
              color: "#713200",
              width: "300px",
              height: "50px",
            },
          });
        }
        setIsLoading(false);
      }
    }
    getAntecipation();
  }, [simulation]);
  /**
   *  Valida os valores do campo de parcelas.
   */
  function validateInstallments(value) {
    if (value < 1) {
      return false;
    } else if (value > 12) {
      return false;
    }
    return true;
  }

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <div className="values">
        <h1>Simule sua Antecipação</h1>
        <form>
          <Input
            label="Informe o valor da venda *"
            name="amount"
            register={register}
            error={
              simulation.amount < 1000 && "Precisa ser maior ou igual a 1000"
            }
            autoComplete="off"
            value={simulation.amount}
            onChange={(e) =>
              setSimulation({
                ...simulation,
                amount: parseInt(e.target.value) || 0,
              })
            }
          />
          <Input
            label="Em quantas parcelas *"
            name="installments"
            placeholder="Máximo de 12 parcelas"
            register={register}
            error={
              !validateInstallments(simulation.installments) &&
              "Parcele em até 12 vezes"
            }
            autoComplete="off"
            value={simulation.installments}
            onChange={(e) =>
              setSimulation({
                ...simulation,
                installments: parseInt(e.target.value) || 0,
              })
            }
          />
          <Input
            label="Informe o percentual de MDR *"
            name="mdr"
            register={register}
            error={simulation.mdr < 1 && "Informe valor percentual"}
            autoComplete="off"
            value={simulation.mdr}
            onChange={(e) =>
              setSimulation({
                ...simulation,
                mdr: parseInt(e.target.value) || 0,
              })
            }
          />
        </form>
      </div>
      <div className="result-container">
        <div className="result">
          <h3>VOCÊ RECEBERÁ:</h3>
          <span className="amanha">Amanhã:R$ {responseData[1]},00</span>
          <span className="quinze">Em 15 dias:R$ {responseData[15]},00</span>
          <span className="trinta">Em 30 dias:R$ {responseData[30]},00</span>
          <span className="noventa">Em 90 dias:R$ {responseData[90]},00</span>
        </div>
      </div>
      {isLoading ? <LoadScreen /> : <></>}
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}

export default Simulation;
