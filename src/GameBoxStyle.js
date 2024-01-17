import { styled } from "styled-components";

export const GameBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 40;
  gap: 0.5em;
`

export const TopText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 580px;
  .alarm {
    display: flex;
    justify-content: space-between;
  }

  .content {
    display: flex;
    gap: 0.3em;
  } 

  .num {
    font-size: 2.3em;
    color: #6e483a;
  }

  .text {
    line-height: 3.1em;
  }

`

export const CountDown = styled.div`
  width: 600px;
  height: 35px;
  background-color: #fce8e1;
  border-radius: 0.3em;
  line-height: 35px;
  color: ${(props) => (props.$countBarWidth < 50 ? '#6e483a' : '#ffffff')};
  font-weight: 600;
  font-size: 1.2em;
  position :relative;

  .countNum {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  p {
    position: absolute;
    z-index: 41;
  }

  .countBar {
    width: ${(props) => (props.$countBarWidth && props.$countBarWidth + '%')};
    height: 100%;
    background-color: #ffb296;
    border-radius: 0.3em;
    position: absolute;
    z-index: 40;

    animation: ${(props) => (props.$isWrong && 'countBar .3s')};

    animation: ${(props) => (props.$time < 6 && props.$time > 3 && 'countBar .5s infinite')};
    animation: ${(props) => (props.$time < 4 && props.$time > 0 && 'countBar .2s infinite')};
    @keyframes countBar {
      0% {
        background-color: #ff1414;
        opacity: 1;
      }
      45%{
        background-color: #ff1414;
        opacity: 0.8;
      }
      75% {
        background-color: #ffb296;
        opacity: 0.8;
      }
      100% {
        background-color: #ffb296;
        opacity: 1;
      }
    }
  }
`

export const Container = styled.div`
  width: 600px;
  height: 600px;

  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }

  .row{
    display: flex;
    width: 100%;
    height: 100%;
    gap: 0.2em;
  }
`