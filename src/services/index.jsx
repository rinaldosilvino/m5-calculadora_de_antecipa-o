import axios from "axios";

/**
 * A função retorna o resultado da simulação.
 */
export const antecipationService = async (simulation) => {
  return await axios
    .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=5000", {
      amount: simulation.amount,
      installments: simulation.installments,
      mdr: simulation.mdr,
    })
    .then((response) => {
      return { code: 200, data: response.data };
    })
    .catch((error) => {
      return { code: 400, data: error.response.data };
    });
};
