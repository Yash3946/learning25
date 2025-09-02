import React from 'react'

export const EmployeeList = (props) => {
  return (
    <div>
        <h1>EmployeeList</h1>
        {
            props.Employees.length == 0 && <span>No Employee Found</span>
        }
        <table className='table'>
            <thead>
                <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Department</th>
                   <th>Salary</th>
                   <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.Employees.map((emp)=>
                    {
                        return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.department}</td>
                        <td>{emp.salary}</td>
                        <td>
                        <button onClick={()=>{props.getEmployeeData(emp.id)}}>Info</button>
                        <button onClick={()=>{props.deleteemployee(emp.id)}}>Delete</button>
                       </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
