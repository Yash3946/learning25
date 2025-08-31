import React, { useState } from 'react'

export const UseStateDemo = () => {
  
  const [count,setCount]=useState(0)
        //state variable.. useState
        //count -> state variable
        //setCount -> setter function -->count -->change --> setCount-->
        //userState(0) --> useState(initialValue)

        const increseCount = ()=>
        {
            setCount(count+1)
            console.log("count...",count)
        }
    return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo</h1>
        <h2>{count}</h2>
        <button onClick={increseCount}>increase</button>
    </div>
  )
}
