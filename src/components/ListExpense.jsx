import React from 'react'

export const ListExpense = (props) => {
  return (
    <div>
        <h1>LIST EXPENSE...</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>AMOUNT</th>
                    <th>CAT</th>
                    <th>MODE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.expenses.map((exp)=>{
                        return <tr>
                            <td>{exp.title}</td>
                            <td>{exp.amount}</td>
                            <td>{exp.cat}</td>
                            <td>{exp.mode}</td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}