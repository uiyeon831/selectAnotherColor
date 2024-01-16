import { useEffect, useState } from "react";
import { styled } from "styled-components";

function DrowGameBox ({stage, setStage, time, setTime, score, setScore}) {
  const [color, setColor] = useState('#000000');
  const [answerI, setAnswerI] = useState(1);
  const [answerJ, setAnswerJ] = useState(1);

  const stageBox = Math.pow(Math.floor((stage/2) + 1), 2);
  const pcs = stage === 1 ? 2 : Math.sqrt(stageBox);

  let boxSize = [];
  for(let i = 1; i <= pcs; i++){
    boxSize.push(1);
  }

  function getrandomColor(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length === 7 && randomColor !== '#ffffff') {
      return randomColor;
    } else {
      return '#adadad';
    }
  }

  useEffect(()=>{
    setColor(getrandomColor());
    setAnswerI(Math.floor(Math.random()*pcs + 1));
    setAnswerJ(Math.floor(Math.random()*pcs + 1));
  },[stage])


  const _click = (i, j) => {
    if(i === answerI && j === answerJ){
      setScore(score + (stage*time));
      setStage(stage + 1);
      setTime(15);
    } else if (time > 0) {
      setTime(time - 3);
    }
  }

  return(
    <>
      { 
        boxSize.map((element, index)=>{
          return(<div className="row">
            {boxSize.map((boxElement, boxIndex)=>{
              if(index+1 === answerI && boxIndex+1 === answerJ) {
                return <Cell 
                $randomColor={color}
                className="answer"
                onClick={()=>{_click(index+1, boxIndex+1)}} 
              />
              }else {
                return <Cell 
                  $randomColor={color}  
                  onClick={()=>{_click(index+1, boxIndex+1)}} 
                />
              }
            })}
          </div>)
        })
      }
    </>
  )
}

export default DrowGameBox;


const Cell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.3em;
  background-color: ${(props) => (props.$randomColor && props.$randomColor)};
  &:hover{
    cursor: pointer;
  }

  &.answer {
    opacity: 0.5;
  }
`