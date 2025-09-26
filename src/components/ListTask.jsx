import React from 'react'

export const ListTask = (props) => {
  return (
    <div>
      <h1>LIST TASKS</h1>
      <table className="table">
        <thead>
          <tr>
            <th>TASK NAME</th>
            <th>DUE DATE</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};