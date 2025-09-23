import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormDemo4 = () => {
    const{register,handleSubmit,formState:{errors},reset}=useForm({mode:"onChange",defaultValues:{"name":"Patel"}})
    const submitHandler = (data)=>{
    }
    const validationSchema  = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required *"
            }
        },
        genderValidator:{
            required:{
                value:true,
                message:"gender is required*"
            }
        },
        constactValidator:{
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
            message:"invalid contact "
            }
        }
    }
  return (
    <div>
        <h1>SEMINAR REG</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>GENDER</label>
                MALE :<input type='radio' {...register("gender",validationSchema.genderValidator)} value="male"></input>
                FEMALE :<input type='radio' {...register("gender",validationSchema.genderValidator)} value="female"></input>
                {errors.gender?.message}
            </div>
            <div>
                <label>CONTACT</label>
                <input type='text' {...register("contact",validationSchema.constactValidator)}></input>
                {errors.contact?.message}
            </div>    

            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}