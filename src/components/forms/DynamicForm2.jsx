import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const DynamicForm2 = () => {
   const[medicins,setmedicins] =useState([]);
   const [output, setoutput] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false)

   const {register,handleSubmit,control}= useForm({
    defaultValues:{medicin:[{name:"",dosage:0,frequecy:0}]}
    });

    const{fields,append,remove}=useFieldArray({
        control,name:"medicin",
    });

    const submitHandler = (data)=>
    {
        console.log("data..",data.medicin);
        setmedicins(data.medicin);
        setoutput(data);
        setisSubbmited(true) 
        
    }
    
  return (
    <div>
        <h1>DynamicForm2</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((fields,index)=>
                {
                    return (
                        <div>
                            <>
                            <label>Name :</label>
                            <input type='text' {...register(`medicin.${index}.name`)}></input>
                            </>
                            <>
                            <label>Dosage :</label>
                            <input type='text' {...register(`medicin.${index}.dosage`)}></input>
                            </>
                            <>
                            <label>Frequecy :</label>
                            <input type='text' {...register(`medicin.${index}.frequecy`)}></input>
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
                append([{name:"",dosage:0,frequecy:0}])
            }
        }>
            add more
        </button>
        </>
        {
    isSubbmited && (
        <div>
        <h1>OUTPUT</h1>
        {
            output.medicin.map((med, index) => (
            <div key={index}>
                <h2>Name : {med.name}</h2>
                <h3>Dosage : {med.dosage}</h3>
                <h3>Frequency : {med.frequecy}</h3>
            </div>
            ))
        }
        </div>
    )
    }
    </div>
  )
}
