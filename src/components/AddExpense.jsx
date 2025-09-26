import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddExpense = (props) => {
    const  {register,handleSubmit,reset} = useForm()

    const submitHandler = (data)=>{
        //console.log(data)
        props.appendexpense(data)
        
    }

    const [categories, setcategories] = useState(["fule","medical","groc","fashion"])
    const [expenseMode, setexpenseMode] = useState(["cash","upi","credicard"])
  return (
    <div>
        <h1>ADD EXPENSE..</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>TITLE</label>
                <input type='text' {...register("title")}></input>
            </div>
            <div>
                <label>AMOUNT</label>
                <input type='text' {...register("amount")}></input>
            </div>
            <div>
                <label>CAETGORY</label>
                <select {...register("cat")}>
                    {
                        categories.map((cat)=>{
                            return <option value={cat}>{cat}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>MODE</label>
                <select {...register("mode")}>
                    {
                        expenseMode.map((mode)=>{
                            return <option value={mode}>{mode}</option>
                        })
                    }
                </select>
            </div>
                    <div>
                        <input type='submit'></input>
                        
                    </div>
        </form>

        <button onClick={()=>{reset()}}>reset</button>
    </div>
  )
}