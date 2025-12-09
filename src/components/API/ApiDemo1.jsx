import axios from "axios";
import React, { useEffect, useState } from "react";
import {Loader} from "../Loader"

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const getApiCall = async () => {
    //json..
    setisLoading(true)
    const res = await axios.get("https://node5.onrender.com/user/user");
    //res -->axios object
    console.log("res..", res);
    console.log("api res..", res.data);
    console.log(res.data.message);
    console.log(res.data.data);
    setmessage(res.data.message);
    setusers(res.data.data); //[]
    setisLoading(false)
  };
  useEffect(()=>{
    getApiCall()
  },[])
  const deleteUser = async(id)=>{
      const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
      console.log(res)  
      if(res.status == 204){
        alert("user deleted...")
        getApiCall()
      } 
  }
  return (
    <div>
      <h1>API DEMO 1</h1>
      {/* <button onClick={getApiCall}>GET</button> */}
      {message}
      {
        isLoading == true && <Loader/>
      }
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>status</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
            {
                users?.map((user)=>{
                    return<tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.isActive?"true":"false"}</td>
                        <td>
                          <button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};