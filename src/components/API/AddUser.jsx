import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AddUser = () => {
    const{register,handleSubmit}=useForm()
    const navigate = useNavigate()
    const submitHandler = async (data)=>{
        //data.age -->numner
        //data.isAcitve --boolean
        data.age = Number(data.age)
        data.isActive = data.isActive == "true"?true :false
        console.log(data)

        const res = await axios.post("https://node5.onrender.com/user/user",data)
        if(res.status==201){
            //alert("user added successfully !!!")
            toast.success("user added successfully!!")
            navigate("/apidemo1")
        }
    }
  return (
    <div>
        <h1>ADD USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <label>STATUS</label>
                ACTIVE : <input type='radio' {...register("isActive")} value="true"></input>
                NOT ACTIVE : <input type='radio' {...register("isActive")} value="false"></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}