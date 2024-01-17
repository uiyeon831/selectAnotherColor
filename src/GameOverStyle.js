import { styled } from "styled-components";

export const GameOverModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(105, 105, 105, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
`

export const GameOverMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3.5em;
  background-color: #ffffff;
  width: 500px;
  height: 550px;
  position: fixed;
  z-index: 100;

  animation: ${(props) => (props.$visible ? 'openModal 0.5s linear' : 'closeModal 0.5s linear')};
  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translatey(-100%);
    }
    50% {
      opacity: 0.8;
      transform: translatey(5%);
    }
    100% {
      opacity: 1;
      transform: translatey(0%);
    }
  }

  @keyframes closeModal {
    0% {
      opacity: 1;
      transform: translatey(0%);
    }
    50% {
      opacity: 0.8;
      transform: translatey(5%);
    }
    100% {
      opacity: 0;
      transform: translatey(-100%);
    }
  }

  .gameOver {
    font-size: 3em;
    font-weight: 900;
  }

  .result {
    display: flex;
    flex-direction: column;
  }

  .content {
    display: flex;
    gap: 0.3em;
  }

  .title {
    font-size: 2.3em;
    font-weight: 600;
    color: #6e483a;
  }

  .text {
    line-height: 3.1em;
  }

  button {
    width: 180px;
    height: 55px;
    border: none;
    border-radius: 0.5em;
    background-color: #ffb296;
    color: #ffffff;
    font-size: 1em;
    font-weight: 600;
    &:hover{
      cursor: pointer;
    }
  }
`