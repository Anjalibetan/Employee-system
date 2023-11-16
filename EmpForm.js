import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpForm(){
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
   const[salary,setSalary]=useState("")

   const navigate=useNavigate()
   const updateID =(e)=>{
    setId(e.target.value)
   }
   const updateName =(e)=>{
    setName(e.target.value)
   }
    const updateEmail =(e)=>{
    setEmail(e.target.value)
   } 
   const updateMobile =(e)=>{
    setMobile(e.target.value)
   } 
   const updateSalary =(e)=>{
    setSalary(e.target.value)
   }

   const postData=(e)=>{
    e.preventDefault()
    const data={id,name,email,mobile,salary}
    fetch("http://localhost:3005/Employee",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(data)
   })
   
   .then(()=>{
    alert("data stored succesfully!!")
    navigate("/")
   })
   .catch((err)=>{
    alert("error"+err)
   })
}
  return(
      <div>
            <form onSubmit={postData}>
                <input value={id} type="text" disabled="disabled" placeholder="Enter ID" onChange={updateID}/><br/>
                <input value={name} type="text" placeholder="Enter name" onChange={updateName}/><br/>
                <input value={email}type="email" placeholder="Enter Email"onChange={updateEmail}/><br/>
                <input value={mobile}type="text" placeholder="Enter Mobile"onChange={updateMobile}/><br/>
                <input value={salary}type="text" placeholder="Enter Salary"onChange={updateSalary}/><br/>
                <input type="submit"/>
                <Link to ="/">Back</Link>
            </form>
        </div>
    )
}export default EmpForm;