import React from 'react'

export const MyButton = (props) => {
  return (
    // || "Test" lakhiye aetle jya khaali <Mybutton></Mybutton> lakhiye to black na aave
        //  ae ane tya "test" lakhyu.
    //<button>{props.name || "Test"}</button>
    // jo class na aapyo  hoy to "btn btn-primary" lali leshe
    <button onClick={()=>{props.funName()}} className={props.class || "btn btn-primary"}>{props.name || "Test"}</button>
)
}
