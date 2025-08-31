import React from 'react'

export const UserList = (props) => {

    console.log("userlist..",props)

  return (
    <div>
        <h1>User List Copmponents</h1>
        <button onClick={()=>{props.test(999)}}>Test From Child</button>
        {
            props.users.map((user)=>
            {
                return <div>
                    <li>{user.id} - {user.name} - {user.age}</li>
                </div>
            }

            )
        }
    </div>
  )
}
