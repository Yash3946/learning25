import React, { useState } from 'react'

export default function UseStateDemo3() {
 
    const [fruit , setfruit] = useState(
        {
            id : 100,
            name : "apple",
            price : 200,
            color : "red"
        }
    )
    const incresePrice = ()=>
    {
        console.log(fruit)
    
    //new price of fruit
    setfruit({...fruit,price:300})
    console.log(fruit)
    }
       return (
    <div style={{textAlign:"center"}}>
        <h1>Name = {fruit.name}</h1>
        <h1>price - {fruit.price}</h1>

        <button onClick={incresePrice}>Increse price</button>

    </div>
  )
}
