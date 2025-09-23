import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const DynamicForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: { passanger: [{ name: "", age: 0, gender: "" }] },
  });

  //fileds :array
  //[{ passangerName: "", age: 0, gender: "" }]
  const { fields, append, remove } = useFieldArray({control,name: "passanger",});

  console.log("fileds.,.",fields);
  const submitHanlder = (data) => {
    console.log("data...", data);
  };
  return (
    <div>
      <h1>DYNAMIC FORM</h1>
      <form onSubmit={handleSubmit(submitHanlder)}>
        {
                fields.map((filed,index)=>{
                    return <div>
                        <div>
                            <label>NAME</label>
                            <input type="text" {...register(`passanger.${index}.name`)}></input>
                        </div>
                        <div>
                            <label>Age</label>
                            <input type="text" {...register(`passanger.${index}.age`)}></input>
                        </div>
                        <div>
                            <label>gender</label>
                            <input type="text" {...register(`passanger.${index}.gender`)}></input>
                        </div>
                        <div>
                            <button onClick={()=>{append([{ name: "", age: 0, gender: "" }])}}>add passanger</button>
                        </div>
                    </div>
                })
        }
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};