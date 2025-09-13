import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
export const FormDemo1 = () => {
  
    const { register, handleSubmit } = useForm();//register,handlesubmit=>built in function
    const [output, setoutput] = useState({});//({})=> aa object ma data set thashe 
    const [isSubbmited, setisSubbmited] = useState(false)//submit par click na karyu hot tya sudhi value false
    const [color, setcolor] = useState("black")
    //register : input register(use), we dont make set,onchange
    //handleSubmit : is a function -->submit event pe call ho ga
   
    const submitHandler = (data) => {
      console.log(data); //{name,age}
      setoutput(data);
      setisSubbmited(true) //true
    };
    
  //jyare form submit kariye tyare data 'handlesubmit' maa jaay / function call thaay and handlesubmit ma je data hoy ae 'submithandler' ma jaay .
  // ... means spread operator
  // {...register("name")}=> name ni jagya ae kai pan lakhi shakay
  // upar 'name' variable banaya usme data jayega phir -> handlesubmit phir -> submithandler phir -> data ke ander phir => output ke ander
    return (
      <div>
        <h1>FORM DEMO 1</h1> 
        <form onSubmit={handleSubmit(submitHandler)}> 
          <div> 
            
            <label>NAME</label>
            <input type="text" {...register("name")}></input><br /><br></br>
          </div>
          <div>
            <label>AGE</label>
            <input type="text" {...register("age")}></input>
          </div>
          <div>
            <label>GENDER</label> <br></br>
            MALE :
            <input type="radio" value="male" {...register("gender")}></input>{" "}
            &nbsp;&nbsp; FEMALE :
            <input type="radio" value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>HOBBIES</label>
            <br></br>

            CHESS :{" "}
            <input type="checkbox" {...register("hobbies")} value="chess"></input>&nbsp; 
            
            CRICKET :{" "}
            <input type="checkbox"{...register("hobbies")} value="cricket"></input> &nbsp; 
            
            Foot BALL :{" "}
            <input  type="checkbox" {...register("hobbies")} value="football"></input>&nbsp;
          </div>
          <div>
            <label>COUNTRY</label>
            <select {...register("country")}>
              <option value="INDIA">INDIA</option>
              <option value="USA">USA</option>
              <option value="CHINA">CHINA</option>
            </select>
          </div>
          <div>
            <label>CHOOSE COLOR</label>
            <input type="color" {...register("color")}></input>
        </div>
          <div>
            <input type="submit"></input>
          </div>

        
        </form>
  
  {
    isSubbmited == true && 
    <div style={{color: output.color}}>
          <h1>OUTPUT</h1>
          <h3>Name : {output.name}</h3>
          <h3>Age : {output.age}</h3>
          <h3>Gender : {output.gender}</h3>
      <ul><h3> Hobbies :</h3>
          <h3>{output.hobbies && output.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li> ))}</h3>
      </ul>
          <h3>Country : {output.country}</h3>
          
         
        </div>
  }
        
      </div>
    );
  };