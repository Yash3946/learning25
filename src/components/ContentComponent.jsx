//react component
import React from "react";

export const ContentComponent = () => {
  var name = "royal";
  var age = 16;
  var isActive = false;
  var user = {
    name: "ram",
    age: 22,
  };
  
  return (
    <div style={{textAlign:"center"}}>
      <h1>CONTENT COMPONENT....</h1>
      <h1>HELLO ALL !!!</h1>
      <p>EVERY TAG MUST HAVE CLOSING TAG</p>
      <p>At a time you can return only 1 tag</p>
      {name}
      <h1 style={{color:"blue"}}>{name}</h1>
      <h3>Age = {age}</h3>
      <h3>Active = {isActive == true ? "Active" : "Not Active"}</h3>
      <h1>Name - {user.name}</h1>
      <h2>Age = {user.age}</h2>
    </div>
  );
};