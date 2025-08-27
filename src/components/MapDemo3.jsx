import React from 'react'

export const MapDemo3 = () => {

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
            age:41,
            gender:"female",
            salary:24000
        },
        {
            id:103,
            name:"janki",
            age:32,
            gender:"female",
            salary:35000
        },
        {
            id:104,
            name:"Bharat",
            age:40,
            gender:"male",
            salary:40000
        }
    ]

  return (
   <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        <table className='table table-dark'>
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
                            <tr style={{backgroundColor:user.gender == "female" && "pink"}}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                {/* <td style={{color:"red"}}>{user.age}</td> */}
                                {/* <td style={{color:user.age>=25 ? "red":"white"}}>{user.age}</td> */}
                                <td style={{color:user.age>=25 && "red"}}> {user.age}
                                     {user.age>=40 && <span> sr st</span> }
                                </td>
                                <td style={{backgroundColor:user.salary>=30000 && "yellow"}}>{user.salary}</td>
                                {/* <td style={{backgroundColor:user.gender=="female"?"pink":"blue"}}>{user.gender}</td> */}
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