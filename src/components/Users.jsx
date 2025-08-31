import React from 'react'
import { UserList } from './UserList'
export const Users = (props) => {

    var users = [
        {
            id:Math.floor(Math.random()*1000),
            name  :"jalay",
            age  :20 
        },
        {
            id : Math.floor(Math.random()*1000),
            name : "vrutik",
            age  : 22
        },
        {
            id : Math.floor(Math.random()*1000),
            name : "dhruvish",
            age : 23
        }
    ]
    const test =(x)=>
    {
        alert("test function called..."+x)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Users Componets - {props.apptitle} </h1>
        <button onClick={test}>Test</button>
        <button onClick={()=>{test(100)}}>Test 2</button>

        <UserList users={users} test= {test}></UserList>
        </div>
  )
}
