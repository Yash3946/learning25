import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const  {register,handleSubmit,formState:{errors}}=useForm()
    const refcodes = ["royal","jagrut","mihir"]

    const submitHandler = (data)=>{
        console.log(data)
    }
    const validationSchema = {
        contactValidator:{
            required:{
                value:true,
                message:"contact is requird*"
            },
            //regex
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"invalid contact *"
            }
        },
        refcodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            // validate:(param)=>{
            //     //console.log("params",param)
            //     return param == "royal" || "ref code must be royal"
            // }
            validate:(param)=>{
            // (return refcodes.includes(param)) => aa code condition true thaay aena mate
            //("ref code is not valid..") => jo condition false thashe to aa messsage aavshe
                return refcodes.includes(param) || "ref code is not valid.."
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobbies are required*"
            },
            validate:(params)=>{
                return params?.length>1 || "min 2 hobbies are required *"
            }
        }
    }

  return (
    <div>
        <h1>FORM DEMO 3 (pattern,validate)</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>CONTACT</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refcodeValidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <label>HOBBIES</label>
                Reading:<input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="reading"></input> <br></br>
                Reels:<input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="reels"></input> <br></br>
                music:<input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="music"></input> <br></br>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}