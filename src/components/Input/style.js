import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    height: 40px;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    color: #404040;
    span {
      ${(props) =>
        props.isErrored &&
        css`
          color: #c53030;
          font-style: italic;
        `}
    }

    @media (max-width: 545px) {
      font-size: 0.85rem;
    }
  }
  input {
    width: 80%;
    height: 15%;
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 1rem;
    background-color: #ffffff;
    font-size: 1rem;
    color: black;
    outline: 1px solid black;
  }
  input::placeholder {
    opacity: 0.7;
    color: white;
  }
  input:focus::placeholder {
    opacity: 1;
  }
  input:focus {
    outline: 2px solid #1062a1;
  }
`;