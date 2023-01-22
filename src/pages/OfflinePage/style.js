import styled from "styled-components";

export const OfflineContainer = styled.div`
  h1 {
    font-size: 5rem;

    @media (max-width: 670px) {
      font-size: 3rem;
    }

    @media (max-width: 425px) {
      font-size: 2rem;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;