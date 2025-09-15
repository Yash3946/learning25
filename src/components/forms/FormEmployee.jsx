import React from 'react'
import { useForm } from 'react-hook-form'

export const FormEmployee = () => {
const {register,handleSubmit,formState:{errors}}=useForm()
console.log("errors",errors)

const submitHandler =(data)=>
{
    alert("success")
    console.log(data)
}

const Validation=
{
    NoValidation:
    {
        required:
        {
            value:true,
            message:"no is required"
        },
        min:
        {
            value:10,
            message:"No is greater than 10"
        }
    },
    NameValidation:
    {
        required:
        {
            value:true,
            message:"name is required"
        },
        minLength:
        {
            value:3,
            message:"Name is  3 or more  characters"
        }
    },
    departmentValidation:
    {
        required:
        {
            value:true,
            message:"department is required"
        }

    },
    salaryValidation:
    {
        required:
        {
            value:true,
            message:"salary is required"
        },
        min:
        {
            value:50000,
            message:"minimum salary is 50000"
        }
    }
}

  return (
    <div>
        <h1>FormEmployee</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label> Employee No : </label>
                <input type="text" {...register("No",Validation.NoValidation)}></input>
                {errors.No?.message}
            </div>
            <div>
                <div>
                    <label>Name :  </label>
                    <input type="text"{...register("Name",Validation.NameValidation)} />
                    {errors.Name?.message}
                </div>
                <div>
                    <label>Department :  </label>
                    <input type="text"{...register("Department",Validation.departmentValidation)} />
                    {errors.Department?.message}
                </div>
                <div>
                    <label>Salary :  </label>
                    <input type="text"{...register("Salary",Validation.salaryValidation)} />
                    {errors.Salary?.message}
                </div>
            <div>
                <input type='submit'></input>
            </div>
            </div>
        </form>
    </div>
  )
}
