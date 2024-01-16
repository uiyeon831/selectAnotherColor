import { styled } from "styled-components";
import DrowGameBox from "./DrowGameBox";
import { useEffect, useState } from "react";

function GameBox () {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = time > 0 && setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  useEffect(() => {
    console.log('score: ', score)
  },[score])

  return(
    <>
      <TopText>
        <div>
          <p>색이 다른 네모를 찾아보세요!</p>
        </div>
        <div className="alarm">
          <div className="content">
            <div className="num">{time>0 ? time : 'time over'}</div> <div className="text">{time>0 ? '초' : ''}</div>
          </div>
          <div className="content">
            <div className="num">{stage}</div> <div className="text">단계</div>
          </div>
        </div>
      </TopText>
      <Container>
        <div className="box">
          <DrowGameBox 
            stage={stage} 
            setStage={setStage} 
            time={time}
            setTime={setTime}
            score={score}
            setScore={setScore}
          />
        </div>
      </Container>
    </>
  )
}

export default GameBox;




const TopText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7em;
  width: 480px;

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
  }

  .text {
    line-height: 3.1em;
  }
`


const Container = styled.div`
  width: 500px;
  height: 500px;

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