import axios from "axios";
import React, { useState } from 'react'


export const ApiTask3 = () => {
    const [users, setusers] = useState([]);
    const [flag, setflag] = useState(false)
 
    const getApiCall = async () => {
      //json..
      setisLoading(true)
      const res = await axios.get(`https://node5.onrender.com/item?flag=$(flag)`);
     
      console.log(res.data);
      console.log(res.data.data);
      setmessage(res.data.message);
      setusers(res.data.data); 
   
    };
    useEffect(()=>{
      getItems()
    },[])
    const deleteUser = async(id)=>{
        const res = await axios.delete("https://node5.onrender.com/item"+id)
        console.log(res)  
        if(res.status == 204){
          alert("user deleted...")
          getApiCall()
        } 
    }
    return (
      <div>
        <h1>API DEMO 1</h1>
        {message}
        {
          isLoading == true && <Loader/>
        }
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Price</th>
              <th>status</th>

            </tr>
          </thead>
          <tbody>
              {
                  users?.map((user)=>{
                      return<tr>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.price}</td>
                          <td>{user.status}</td>
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