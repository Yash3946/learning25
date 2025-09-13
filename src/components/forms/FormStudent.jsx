import React from 'react'
import { useForm } from 'react-hook-form'

export const FormStudent = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors",errors)

    const submitHandler =(data) =>
    {
        alert("Successfuly run ")
        console.log(data)
    }

    const Validation = 
    {
        agevalidation : 
        {
            required:
            {
                value:true,
                message:"Age is required"
            },
            min:
            {
                value:13,
                message:"age must be a 13 "
            }

        },
        standardvalidation:
        {
            required:
            {
                value:true,
                message:"standard is required"
            }
        },
        rollnoValidation:
        {
            required:
            {
                value:true,
                message:"roll no is required"
            },
            min:
            {
                value:101,
                message:"roll no must be start 101"
            },
            max:
            {
                value:200,
                message:"roll no must be end 200"
            }
        }
    }
  return (
    <div>
        <h1>FormStudent</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
                <label >Roll NO : </label>
                <input type='text' {...register("rollno",Validation.rollnoValidation)}></input>
                {errors.rollno?.message}
            </div>
            <div>
                <label >Name : </label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required"}})}></input>
                {errors.name?.message}
            </div>

            <div>
                <label>age : </label>
                <input type="text" {...register("age",Validation.agevalidation)} />
                {errors.age?.message}
            </div>
            <div>
                <label>Standard : </label>
                <input type="text" {...register("standard",Validation.standardvalidation)} />
                {errors.standard?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
