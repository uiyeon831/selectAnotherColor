import { styled } from "styled-components";
import DrowGameBox from "./DrowGameBox";
import { useState } from "react";

function GameBox () {
  const [stage, setStage] = useState(1)

  return(
    <>
      <Container>
        <div className="box">
          <DrowGameBox stage={stage} />
        </div>
      </Container>
    </>
  )
}

export default GameBox;




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

  .cell {
    width: 100%;
    height: 100%;
    border-radius: 0.3em;
    background-color: gray;
    &:hover{
      cursor: pointer;
    }
  }
`