import React from 'react'
import { useForm } from 'react-hook-form'

export const FormProduct = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors",errors)

    const submitHandler = (data) =>
    {
        alert("success")
        console.log(data)
    }

  const Validation = 
    {
        idValidation:
        {
            required:
            {
                value:true,
                message:"Id is required"
            },
            min:
            {
                value:1001,
                message:"Id is start above 1001"
            }
        },
        Namevalidation:
         {
           required:
           {
             value:true,
             message:"Name is required"
           },
           minLength:
           {
            value:3,
            message:"Name length is minimum at least 3 characters"
           }
        },
        Pricevalidation:
        {
            required:
            {
                value:true,
                message:"Price is required"
            },
            min:
            {
                value:999,
                message:"minimum price is 999"
            },
            max:
            {
                value:99999,
                message:"maximum price is 99999"
            }
        },
        Quntityvalidation:
        {
            required:
            {
                value:true,
                message:"Quntity is required"
            },
            min:
            {
                value:1,
                message:"minimum 1 quntity Buy"
            }
        }
    }
  return (
    <div>
        <h1>FormProduct</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label>Id: </label>
            <input type="text" {...register("Id",Validation.idValidation)} />
            {errors.Id?.message}
            </div>

            <div>
                <label>Product Name :</label>
                <input type="text" {...register("Name",Validation.Namevalidation)} />
                {errors.Name?.message}
            </div>

            <div>
                <label>Product Price :</label>
                <input type="text" {...register("Price",Validation.Pricevalidation)} />
                {errors.Price?.message}
            </div>

            <div>
                <label>Product Quntity :</label>
                <input type="text" {...register("Quntity",Validation.Quntityvalidation)} />
                {errors.Quntity?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
