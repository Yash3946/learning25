import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors",errors)
    const submitHandler = (data)=>{
        alert("called...")
        console.log(data)
    }

    const validationSchema = {
        emailValidator:{
            required:{
                value:true,
                message:"email is required"
            },
            minLength:{
                value:5,
                message:"min length should be 5"
            },
            maxLength:{
                value:20,
                message:"max length should be 20"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"age must be 18 or greater"
            },
            max:{
                value:60,
                message:"age must be less than 60"
            }
        }
    }


  return (
    <div>
        <h1>FORM DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                {errors.email?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='texxt' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>

  )
}