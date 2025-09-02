import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList';

export const Employees = () => {
    const[Employees,setemployee]=useState([
        {id : 1,name:"vrutik",department:"sales",salary:32000},
        {id : 2,name:"guru"  ,department:"IT"   ,salary:43000},
        {id : 3,name:"dhruvish",department:"IT" ,salary:78000},
        {id : 4,name:"het"     ,department:"sales",salary:48000},
    ]);
    const getEmployeeData =(id)=>
    {
        var foundemployee = Employees.find((emp)=>emp.id == id);
        alert("Employee Name :"+foundemployee.name);
    }

    const deleteemployee = (id)=>
    {
        setemployee(Employees.filter((emp)=>emp.id != id));

    }
    return (
    <div style={{textAlign:'center'}}>
        <h1>Employees</h1>
        <EmployeeList Employees={Employees} getEmployeeData={getEmployeeData} deleteemployee={deleteemployee}></EmployeeList>
        </div>
  )
}
