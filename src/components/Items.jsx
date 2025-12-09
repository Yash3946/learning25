import React, { useState } from 'react'

export const Items = () => {
    const[Items,setitems]= useState([
        { id: 1, name: "Laptop", price: 60000, available: true },
        { id: 2, name: "Mouse", price: 800, available: false },
        { id: 3, name: "Keyboard", price: 1500, available: true },
        { id: 4, name: "Monitor", price: 12000, available: true },
    ]);
  return (
    <div>
        <h1>Items</h1>
        <table border={1} className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>available</th>
                </tr>
            </thead>
            <tbody>
                {
                    Items.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.available ? "Yes" :"No"}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    </div>
  )
}
