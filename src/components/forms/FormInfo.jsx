import React from 'react'
import { useForm } from 'react-hook-form'

export const FormInfo = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors",errors);

    const submitHandler = (data)=>
    {
        alert("success");
        console.log("data",data)
    }
    const Validation = 
    {
           firstnamevali: 
        {
            required:
            {
                value:true,
                message:"FirstName is required*"
            },
            pattern:
            {
                value:/[A-Z]{1}[a-z]{1,20}/,
                message:"FirstName is not valid"
            }
        },
        lastnamevali:
        {
            required:
            {
                value:true,
                message:"LastName is required*"
            },
            pattern:
            {
                value:/[A-Z]{1}[a-z]{1,20}/,
                message:"LastName is not valid"
            }
        },
        agevali:
        {
            required:
            {
                value:true,
                message:"Age is required*"
            }
        },
        emailvali:
        {
            required:
            {
                value:true,
                message:"Email is reqired*"
            },
            pattern:
            {
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Email is not valid"
            }
        },
        Passwordvali:
        {
            required:
            {
                value:true,
                message:"Password is required*"
            },
            pattern:
            {
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:"Password is not valid"
            }
        },
        hobbiesVali:
        {
            required:
            {
                value:true,
                message:"hobbies are required*"
            },
            validate:(params)=>{
                return params?.length>1 || "minimum 2 hobbies are required *"
            }
        }

}
  return (
    <div>
        <h1>FormInfo</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name :</label>
                <input type="text" {...register("FirstName",Validation.firstnamevali)} />
                {errors.FirstName?.message}
            </div>

            <div>
                <label>Last Name :</label>
                <input type="text" {...register("LastName",Validation.lastnamevali)} />
                {errors.LastName?.message}
            </div>

            <div>
                <label>Age : </label>
                <input type="text" {...register("Age",Validation.agevali)} />
                {errors.Age?.message}
            </div>

            <div>
                <label>Email : </label>
                <input type='text' {...register("Email",Validation.emailvali)}></input>
                {errors.Email?.message}
            </div>

            <div>
                <label>Password : </label>
                <input type='text' {...register("Password",Validation.Passwordvali)}></input>
                {errors.Password?.message}
            </div>

            <div>
                <label>HOBBIES</label>
                Cricket:<input type='checkbox' {...register("hobbies",Validation.hobbiesVali)} value="Cricket"></input> <br></br>
                Driving:<input type='checkbox' {...register("hobbies",Validation.hobbiesVali)} value="Driving"></input> <br></br>
                Chess:<input type='checkbox' {...register("hobbies",Validation.hobbiesVali)} value="Chess"></input> <br></br>
                {errors.hobbies?.message}
            </div>

            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
