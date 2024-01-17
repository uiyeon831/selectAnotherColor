import { useEffect, useState } from "react";

import DrowGameBox from "./DrowGameBox";
import GameOver from "./GameOver";

import * as Styled from './GameBoxStyle';

function GameBox () {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  const [opacity, setOpacity] = useState(0.5);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [countBarWidth, setCountBarWidth] = useState(100);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    if(time <= 0){
      setIsOpen(true);
    }
    const timer = time > 0 && setTimeout(() => setTime(time - 1), 1000);
    if(time < 15) {
      setCountBarWidth(countBarWidth - 6.7);
    }
    return () => clearTimeout(timer);
  }, [time]);
  
  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  const isModal = (params) => {
    return (
      <GameOver
        open={params}
        onClose={() => {
          setIsOpen(false)
        }}
        stage={stage} 
        setStage={setStage} 
        setTime={setTime}
        score={score}
        setScore={setScore}
        setOpacity={setOpacity}
        setCountBarWidth={setCountBarWidth}
        visible={visible}
        setVisible={setVisible}
      />
    )
  }


  return(
    <>
      <Styled.GameBoxContainer>
        <Styled.TopText>
          <div>
            <p>색이 다른 네모를 찾아보세요!</p>
          </div>
          <div className="alarm">
            <div className="content">
              <div className="num">{stage}</div> 
              <div className="text">단계</div>
            </div>
            <div className="content">
              <div className="num">
                {score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </div> 
              <div className="text">점</div>
            </div>
          </div>
        </Styled.TopText>
        <Styled.CountDown 
          $time={time} 
          $countBarWidth={countBarWidth} 
          $isWrong={isWrong}
        >
          <div className="countNum">
            <p>{time > 0 ? time : '0'}</p>
          </div>
          <div className="countBar" />
        </Styled.CountDown>
        <Styled.Container>
          <div className="box">
            <DrowGameBox 
              stage={stage} 
              setStage={setStage} 
              time={time}
              setTime={setTime}
              score={score}
              setScore={setScore}
              opacity={opacity}
              setOpacity={setOpacity}
              countBarWidth={countBarWidth}
              setCountBarWidth={setCountBarWidth}
              setIsWrong={setIsWrong}
            />
          </div>
        </Styled.Container>
      </Styled.GameBoxContainer>
      {isOpen && isModal(isOpen)}
    </>
  )
}

export default GameBox;