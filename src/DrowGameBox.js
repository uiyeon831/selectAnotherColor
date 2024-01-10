function DrowGameBox (stage) {
  const stageBox = Math.pow(Math.floor((stage.stage/2) + 1), 2);
  const pcs = stage.stage === 1 ? 2 : Math.sqrt(stageBox);

  let boxSize = [];
  for(let i = 1; i <= pcs; i++){
    boxSize.push(1);
  }
  
  return(
    <>
      { 
        boxSize.map(()=>{
          return(<div className="row">
            {boxSize.map(()=>{
              return <div className="cell" />
            })}
          </div>)
        })
      }
    </>
  )
}

export default DrowGameBox;
