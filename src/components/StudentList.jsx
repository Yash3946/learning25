import React from 'react'

export const StudentList = (props) => {
 
    return (
    <div style={{textAlign:"center"}}>
        <h1>StudentList Component</h1>
        {
            props.students.length == 0 && <span>No Student found</span>
        }
        <table className='table dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students.map((stu)=>
                    {
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>{props.getStudentData(stu.id)}}>Info</button>
                                <button className='btn btn-danger' onClick={()=>{props.deletestudent(stu.id)}}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
