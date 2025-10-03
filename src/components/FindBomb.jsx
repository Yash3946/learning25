import React, { useMemo, useState } from "react";

export const FindBomb = () => {
  const gridSize = 5; //25
  const totalTitle = gridSize * gridSize;
  const [clickedTitle, setclickedTitle] = useState([]);
  const [isGameOver, setisGameOver] = useState(false)

  console.log("clicked....",clickedTitle)

  const bombPos = useMemo(()=>{
    return Math.floor(Math.random()*totalTitle)
  },[])
  console.log("bomb pos...",bombPos)


  const handleClick = (index)=>{
    //push -->index..
    setclickedTitle([...clickedTitle,index]) //pushing clicked index in array
    if(index ==bombPos){
        
        setisGameOver(true)
        //alert("game over...")
        //window.location.reload()
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FIND BOMB</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {
          //[0,1,2,4,5,24]
          Array.from({ length: totalTitle }).map((t, index) => {
            return (
              <div
              onClick={()=>{handleClick(index)}}
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid black",
                  //backgroundColor:"white",
                  backgroundColor:clickedTitle.includes(index)?"gray":"white",
                  cursor: "pointer",
                }}
              >
                {
                    isGameOver ? (index == bombPos && "💣") :index+1
                }
                
              </div>
            );
          })
        }
      </div>
      {
        isGameOver &&  <button onClick={()=>{window.location.reload()}}>RESTART</button>
      }
      
    </div>
  );
};