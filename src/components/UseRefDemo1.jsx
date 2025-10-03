import React, { useEffect, useRef } from "react";

export const UseRefDemo1 = () => {
  const selectionRef = useRef(null);

  const handleScroll = ()=>{
    selectionRef.current.scrollIntoView({
        behavior:"smooth",
    })
  }

  
  
  return (
    <div style={{ textAlign: "center", margin: "10px", padding: "10px" }}>
      <h1>USE REF.</h1>
      <button onClick={handleScroll}>scroll</button>
      <div
        style={{ height: "500px", width: "100%", backgroundColor: "orange" }}
      >
        <h1>FIRST DIV</h1>
      </div>
      <div
        style={{
          marginTop: "10px",
          border: "1px solid black",
          height: "300px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <h1>Second DIV</h1>
      </div>
     
      <div
        style={{ height: "500px", width: "100%", backgroundColor: "orange" }}
      >
        <h1>FIRST DIV</h1>
      </div>
      <div
        ref={selectionRef}
        style={{
          marginTop: "10px",
          border: "1px solid black",
          height: "500px",
          width: "100%",
          backgroundColor: "green",
        }}
      >
        <h1>Third DIV</h1>
      </div>
    </div>
  );
};