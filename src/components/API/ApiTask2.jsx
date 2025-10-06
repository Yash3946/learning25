import axios from 'axios'
import React, { useState } from 'react'

export const ApiTask2 = () => {

    const [message, setmessage] = useState("")
    const [todos, settodos] = useState([])
    const getApiCall = async()=>
    {
        const res = await axios.get("https://dummyjson.com/todos")
        setmessage("data fetched successfully")
        settodos(res.data.todos)
    }
  return (
    <div>
        <h1>ApiTask2</h1>
        <div>
            <button onClick={getApiCall}>Get</button>
            <p>{message}</p>
        </div>
    {
        todos.length > 0 && (
            <div>
                <table className='table table-info' border={"1"}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>todo</th>
                            <th>completed</th>
                            <th>userId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((tod)=>
                            {
                                return (
                                <tr>
                                    <td>{tod.id}</td>
                                    <td>{tod.todo}</td>
                                    <td>{tod.completed}</td>
                                    <td>{tod.userId}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    </div>
  )
}
