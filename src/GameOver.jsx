import * as Styled from './GameOverStyle';

function GameOver ({ 
  onClose,
  stage,
  setStage,
  setTime,
  score,
  setScore,
  setOpacity,
  setCountBarWidth,
  visible,
  setVisible
}) {

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 400);
    
    setStage(1);
    setTime(15);
    setScore(0);
    setOpacity(0.5);
    setCountBarWidth(100);
  }

  const finalScore = score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return(
    <Styled.GameOverModal>
      <Styled.GameOverMessage $visible={visible} >
        <p className="gameOver">Game Over</p>
        <div className="result">
            <div className="content">
              <div className="title">{stage}</div>
              <div className="text">단계</div>
            </div>
            <div className="content">
              <div className="title">{finalScore}</div>
              <div className="text">점</div>
            </div>
        </div>
        <button onClick={handleClose}>다시하기</button>
      </Styled.GameOverMessage>
    </Styled.GameOverModal>
  )
}

export default GameOver;
