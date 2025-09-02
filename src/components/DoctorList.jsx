import React from 'react'

export const DoctorList = (props) => {
  
    return (
    <div>
        <h1>DoctorList</h1>
        {
            props.doctor.length == 0 &&  <h1>no patient found</h1>
        }
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>RoomNo</th>
                    <th>TotalBill</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.doctor.map((doc)=>
                    {
                        return <tr>
                            <td>{doc.id}</td>
                            <td>{doc.name}</td>
                            <td>{doc.roomNo}</td>
                            <td>{doc.totalBill}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>{props.getPatientData(doc.id)}}>PATIENTINFO</button>
                                <button className='btn btn-danger' onClick={()=>{props.deletepatient(doc.id)}}>DELETE</button>
                            </td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
