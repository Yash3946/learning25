import React from 'react'

export const MapDemo1 = () => {

    var users = [
        {
            id:101,
            name:"ram",
            age:23,
            gender:"male",
            salary:25000
        },
        {
            id:102,
            name:"seeta",
            age:22,
            gender:"female",
            salary:24000
        },
        {
            id:103,
            name:"janki",
            age:25,
            gender:"female",
            salary:35000
        },
        {
            id:104,
            name:"Bharat",
            age:27,
            gender:"male",
            salary:40000
        }
    ]

  return (
    <div>
        <h1>MAP DEMO 1</h1>
        {/* {users[0].name} */}

        {/* {
            users.map((user)=>{
               return <ul>
                <li>name = {user.name}</li>
                <li>age = {user.age}</li>
               </ul>
            })
        } */}

        {
            users.map((user)=>{
               return (
                <ul>
                <li>name = {user.name}</li>
                <li>age = {user.age}</li>
               </ul>
               )
            })
        }
    </div>
  )
}