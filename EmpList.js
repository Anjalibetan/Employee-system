import { useEffect, useState } from "react";
import EmpForm from "./EmpForm";
import {Link} from "react-router-dom";
import axios from "axios";
function App() {
    const [data, setData] = useState()
    const[value,setValue] = useState("")

    useEffect(() => {
        fetch("http://localhost:3005/Employee", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
                // console.log(typeof(resp))
            })
            .catch((err) => {
                console.log("Erro" + err)
            })

    }, [])

      const onDelete=(id)=>{
        if(window.confirm("Are you sure?"))
        {
            fetch("http://localhost:3005/Employee/"+ id,{
                method:"DELETE"})
          
    

      }}

      const updateRecords=(e)=>{
           setValue(e.target.value)
      }

      const filteRecords=async (e)=>{
        e.preventDefault()
        return await axios.get(`http://localhost:3005/Employee?q=${value}`)
      .then((resp)=>{
          setData(resp.data)
          setValue("")
      }).catch((err)=>{
        alert(err)

      })
    }

    function ReturnData(){
       
     
        fetch("http://localhost:3005/Employee", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)

            })
            .catch((err) => {
                console.log("Erro" + err)
            })

        }
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-tile">
                    <h3>Employee management system</h3>

                </div>
            </div>
            <form onSubmit={filteRecords}>
                <div className="mb-3">
                    <label className="form-label">Filter Records</label>
                    <input  value={value} type="text" className="form-control" onChange={updateRecords}/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
                <button  className="btn btn-success" type="submit" onClick={ReturnData}>Reset</button>
            </form>
            
              <br></br>
            <div className="card-body">
   <Link className="btn btn-success" to="/empform">Add New Employee(+)</Link>
                <table className="table table-bordered">
                    <thead className="bg-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => (
                            <tr>

                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.salary}</td>
                                <td>
                                            <div className="bds">
                                            
                                            <button  onClick={()=>{onDelete(item.id)}}className="btn btn-danger">Delete</button>
                
                                            </div>
                                        </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <br></br>

            {/* <EmpForm></EmpForm> */}

        </div>
    )
}

export default App;