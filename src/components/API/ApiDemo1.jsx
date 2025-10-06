import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getApiCall = async () => {
        const res = await axios.get("https://node5.onrender.com/user/user")
        setmessage(res.data.message)
        setusers(res.data.data) 
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>API DEMO 1</h1>
            <div style={{ textAlign: "center"}}>
                <button onClick={getApiCall}>GET</button>
                <p>{message}</p>
            </div>

            {users.length > 0 && (
                <div>
                    <table border="1" className='table table'>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Name</th>
                                <th>Email</th>
                                
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              users.map((user) => (
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}