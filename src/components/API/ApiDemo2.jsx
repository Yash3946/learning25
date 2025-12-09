import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {

    const addUser = async()=>{
        const userObj = {
            name:"amit",
            age:25,
            email:"amit@gmail.com",
            password:"amit123",
            isActive:true
        }

        //{name: 'sam', age: 22, email: 'samir.vithlani83955@gmail.com', password: 'sam123', isActive: true}
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res.status) //status
        console.log(res.data)//api response

    }
  return (
    <div>
    <h1>API DEMO 2</h1>
    <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}