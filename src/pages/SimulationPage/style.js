import styled from "styled-components";

export const Container = styled.section`
  width: 40%;
  height: 70%;
  min-width: 510px;
  background-color: white;
  border: 2px solid #F5F7FA;
  border-radius: 5px;
  display: flex;
  position: absolute;

  .values {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    form {
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0.7rem;

      .send {
        width: 75%;
        height: 30px;
        border-radius: 6px;
        margin: 0 auto;
        cursor: pointer;
        font-size: 1rem;
      }
      .send:hover {
        background-color: rgba(102, 153, 255);
      }
    }
  }

  .result-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    background-color: #f0f0f0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    .result {
      width: 90%;
      height: 60%;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      color: rgba(102, 153, 255);
      h3 {
        font-size: 1.2rem;
        border-bottom: 1px solid rgba(102, 153, 255);
        width: 80%;
      }

      @media (max-width: 1402px) {
        h3 {
          font-size: 1rem;
        }
        span {
          font-size: 0.85rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    min-width: unset;
    width: 80%;
    height: 70%;

    .values {
      width: 100%;
      height: 70%;

      form {
        justify-content: space-between;
      }

      h1 {
        font-size: 1.5rem;

        @media (max-width: 428px) {
          font-size: 1.2rem;
        }
      }
    }

    .result-container {
      width: 100%;
      height: 30%;

      .result {
        width: 45%;
        height: 80%;
        margin: 0 auto;

        @media (max-width: 358px) {
          width: 55%;
        }

        @media (max-width: 293px) {
          width: 65%;
        }
      }
    }
  }
`;
