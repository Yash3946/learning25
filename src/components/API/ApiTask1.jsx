import axios from 'axios'
import React, { useState } from 'react'

export const ApiTask1 = () => {

    const [message, setmessage] = useState("")
    const [products, setproducts] = useState([])
    const getApiCall = async()=>
    {
        const res = await axios.get("https://dummyjson.com/products")
        setmessage("product fectched successfully")
        setproducts(res.data.products)
        
    }
  return (
    <div>
        <h1>ApiTask1</h1>
        <div style={{textAlign:"center"}}>
            <button onClick={getApiCall}>get</button>
            <p>{message}</p>
        </div>
        {
        products.length > 0 && (
            <div>
                <table className='table table-info'border={"1"} >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>category</th>
                            <th>price</th>
                            <th>rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product)=>
                            {
                                return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>${product.price}</td>
                                    <td>{product.rating}</td>

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
