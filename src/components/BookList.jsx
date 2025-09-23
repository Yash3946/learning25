import React, { useState } from 'react'
import { Table } from '../components/Common/Table'

export const BookList = () => {

    const [books, setbooks] = useState([
        {
            id:1,
            name:"java",
            price:200,
            rarting:7.9,
            
        },
        {
            id:2,
            name:"javascript",
            price:500,
            rarting:9.9
        },
        {
            id:3,
            name:"python",
            price:300,
            rarting:8.9
        },
        {
            id:4,
            name:"cpp",
            price:210,
            rarting:7.9
        }

    ])

    console.log(Object.keys(books[0]))

  return (
    <div>
        <h1>TABLE DEMO</h1>
        <Table header={Object.keys(books[0])} data={books}></Table>
    </div>
  )
}