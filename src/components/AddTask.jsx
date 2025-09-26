import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddTask = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    props.appendTask(data);
  };

  const [priorities] = useState(["High", "Medium", "Low"]);
  const [statusOptions] = useState(["Pending", "In Progress", "Completed"]);

  return (
    <div>
      <h1>ADD TASK</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>TASK NAME</label>
          <input type="text" {...register("taskName")} />
        </div>
        <br />
        <div>
          <label>PRIORITY</label>
          <select {...register("priority")}>
            {priorities.map((p, index) => (
              <option key={index} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label>STATUS</label>
          <select {...register("status")}>
            {statusOptions.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <input type="submit" value="Add Task" />
        </div>
      </form>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};