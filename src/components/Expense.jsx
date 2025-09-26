import React, { useState } from 'react'
import { AddExpense } from './AddExpense'
import { ListExpense } from './ListExpense'

export const Expense = () => {
  //const [expenses, setexpenses] = useState([])
  // const [expenses, setexpenses] = useState(()=>{
  //   return JSON.parse(localStorage.getItem("expenses"))
  // })
  const [expenses, setexpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });
  
  const appendexpense = (exp)=>{
    setexpenses([...expenses,exp])
  }
  const storePerm = ()=>{
    //string..
    //localStorage.setItem("expenses",expenses) //object... -->string..
    localStorage.setItem("expenses",JSON.stringify(expenses)) //object... -->string..

  }
  return (
    <div>
        <h1>EXPENSE COMPONENT</h1>
        <AddExpense appendexpense = {appendexpense}></AddExpense>
        <button onClick={()=>{storePerm()}} className='btn btn-primary'>store</button>
        <ListExpense expenses = {expenses}></ListExpense>
    </div>
  )
}