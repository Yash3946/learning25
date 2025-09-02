import React, { useState } from 'react'
import { StudentList } from './StudentList';

export const Students = () => {
    const[students,setstudents]=useState(
        [
            {id:1,name:"jalay",age:21},
            {id:2,name:"jogesh",age:22}, 
            {id:3,name:"guru",age:23},
        ]
    );
    const getStudentData =(id)=>
    {
        var foundstudent = students.find((stu)=>stu.id == id);
        alert("Name : "+foundstudent.name)
    };
    const deletestudent = (id)=>
    {
        setstudents(students.filter((stu)=>stu.id != id));
    };
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student Component</h1>
       <StudentList students={students} getStudentData={getStudentData} deletestudent={deletestudent}></StudentList>
        </div>
  )
 
}
