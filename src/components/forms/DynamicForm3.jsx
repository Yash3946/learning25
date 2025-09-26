import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const DynamicForm3 = () => {

    const[employees,setemployee]=useState([]);
    const[output,setoutput]=useState([]);
    const[isSubbmited,setisSubbmited]=useState(false)

    const{register,handleSubmit,control}=useForm({
        defaultValues:{employee:[{name:"",salary:0,bonus:0}]}
    });

    const{fields,append,remove}=useFieldArray({
        control,name:"employee",
    })

    const submitHandler=(data)=>
    {
        console.log("data",data.employee)
        setemployee(data.employee)
        setoutput(data)
        setisSubbmited(true)
    }
  return (
    <div>
        <h1>DynamicForm3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((fields,index)=>
                {
                    return (
                        <div>
                            <>
                            <label>Name :</label>
                            <input type="text" {...register(`employee.${index}.name`)} />
                            </>
                            <>
                            <label>Salary :</label>
                            <input type="text" {...register(`employee.${index}.salary`)} />
                            </>
                            <>
                            <label>Bonus : </label>
                            <input type="text" {...register(`employee.${index}.bonus`)} />
                            </>
                        </div>
                    ); 
                })
            }
                <div>
                    <input type="submit" />
                </div>
        </form>
        <>
        <button onClick={()=>
            {
                append([{name:"",salary:0,bonus:0}])
            }
        }>
            Add More
        </button>
        </>
        {
            isSubbmited &&(
                <div>
                    <h2>Output</h2>
                   {
                    output.employee.map((emp,index)=>(
                        <div  key={index}>
                            <h2>Name : {emp.name}</h2>
                            <h2>Salary: {emp.salary}</h2>
                            <h2>Bonus : {emp.bonus}</h2>

                        </div>
                    ))
                   }
                </div>
            )
        }
    </div>
  )
}
