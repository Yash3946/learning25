import React from 'react'

export const MapDemo2 = () => {

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
   <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 2</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.salary}</td>
                                <td>{user.gender}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
   </div>
  )
}