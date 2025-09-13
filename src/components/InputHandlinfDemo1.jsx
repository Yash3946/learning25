import React, { useState } from 'react'

export const InputHandlinfDemo1 = () => {


    const [name, setName] =useState ("") //usestate browser par print karva mate use karyu 6
    const [email,setEmail] = useState("")
    const [city,setcity] = useState("")
    const [issubmitted,setissubmitted] = useState(false)
    const [color,setcolor] = useState("black")

    const nameHandler = (event)=>{


        // console.log(event)
        console.log(event.target.value)
        setName(event.target.value);

    }

    const emailHandler = (event)=>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const submitHandler= ()=>{
        // alert(`Name = ${name}\nemail = ${email}\ncity= ${city}`)

        setissubmitted(true)
    }
  return (
    <div>
        <h1>INPUT HANDLING</h1>
        <div>
            <label>NAME:-</label>
            <input type="text" onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>

        <div>
            <label> EMAIL:-</label>
            <input type = "text" onChange={(event)=>{emailHandler(event)}}></input>
            {email}
        </div>

        <div>
            <label>CITY:-</label>
            <input type="text" onChange={(event)=>{setcity(event.target.value)}}></input>
            {city}
        </div>

        <div>
            <button onClick={submitHandler}>SUBMIT</button>
        </div>

        <div>
            <label>CHOOLSE COLOR</label>
            <input type="color" onChange={(event)=>{setcolor(event.target.value)}}></input>
        </div>

        {
            issubmitted == true && <div style={{color:color}}>
                <h1>OUTPUT</h1>
                <h3>NAME :-{name}</h3>
                <h4>EMAIL:-{email}</h4>
                <h5>CITY:-{city}</h5>
            </div>
        }
    </div>
  )
}