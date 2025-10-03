import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {

    const [changed, setchanged] = useState(false)
    const [user, setuser] = useState({id:1,name:"ram"})

    //user-->object change

    // var randomNo = Math.floor(Math.random()*1000)
   //()=>{callback...}
   //[]-->depedancy array..
    var randomNo = useMemo(()=>{
    return Math.floor(Math.random()*1000)
   },[user])
   //when any changes happen to user it will re generate..
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO</h1>
        <h1>Random NO = {randomNo}</h1>
        <button onClick={()=>{setchanged(!changed)}}>CHANGE {changed == true ? "true" : "false"}</button>
        <button onClick={()=>{setuser({...user,name:user.name.toUpperCase()})}}>change user</button>
        {user.name}
    </div>
  )
}