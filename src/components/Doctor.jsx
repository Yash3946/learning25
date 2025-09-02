import React, { useState } from 'react'
import { DoctorList } from './DoctorList';

export const Doctor = () => {
  const [Doctor,setdoctor]=useState(
    [
        {id:1,name:"het",roomNo :101,totalBill : 2390},
        {id:2,name:"parthiv",roomNo :102,totalBill : 3200},
        {id:3,name:"kevin",roomNo :103,totalBill : 6540},
        {id:4,name:"meet",roomNo :104,totalBill : 7600},
        {id:5,name:"priyanshu",roomNo :105,totalBill : 7900},
    ]
  )
  const getPatientData = (id)=>
  {
    var foundPatient = Doctor.find((doc)=>doc.id == id);
    alert("Name : " +foundPatient.name)
  }
  const deletepatient = (id)=>
  {
    setdoctor(Doctor.filter((doc)=> doc.id != id))
  }
    return (
    <div style={{textAlign:'center'}}>
        <h1>Doctor</h1>
        <DoctorList doctor={Doctor} getPatientData={getPatientData} deletepatient={deletepatient}></DoctorList>
        </div>
  )
}
