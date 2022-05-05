import React from "react";
import { useState } from "react";

const Signup = () => {
    const [name,setName] = useState('')
    const [firstname,setFirstName] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setconfirmPassword] = useState('')
    const url = (e) => {
        e.preventDefault();
        const header = new Headers({"content-type":"application/json"})
        fetch("http://localhost:3003/signup", {
          method:"POST",
          headers: header,
           body:JSON.stringify({
             name:name,
             firstName:firstname,
             password:password
        })}).then(response => response.json())
        // console.log(response)
            .then(data => console.log("data ===>",data))
          }
          const handle = (e) => {
            // console.log(e.target.value)
              setName(e.target.value)
              console.log("name ====>", name)
          }
          const First = (e) => {
            // console.log(e.target.value)
              setFirstName(e.target.value)
              console.log("FirstName ====>", firstname)
          }
          const pass = (e) => {
            // console.log(e.target.value)
              setPassword(e.target.value)
              console.log("password ====>", password)
          }
          const confirmPass = (e) => {
            // console.log(e.target.value)
              setconfirmPassword(e.target.value)
              console.log("confirmPassword ====>", confirmPassword)
          }
            
    return (
        <form action="/signup">
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={pass} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Confirm-Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Firstname</label>
          <input type="text" onChange={First} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">surname</label>
          <input type="text" onChange={handle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Date of birth</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <button type="submit" className="btn btn-primary"onClick={url}>Submit</button>
      </form>
    )
}
export default Signup