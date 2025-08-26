import React from "react";

export const FooterComponent = () => {
  const footerStyle = {
    height: "150px",
    width: "auto",
    backgroundColor: "black",
    color: "white",
    marginTop: "10px",
    textAlign: "center",
  };

  return (
    // <div style={{height:"150px",width:"auto",backgroundColor:"black",color:"white",marginTop:"10px",textAlign:"center"}}>
    //     <h1>FOOTER COMPONENT</h1>
    // </div>
    <div style={footerStyle}>
      <h1>FOOTER COMPONENT</h1>
    </div>
  );
};