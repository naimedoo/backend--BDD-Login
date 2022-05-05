import React from "react";
import { useState } from "react";

const Signup = () => {
    const [name,setName] = useState('')
    const url = (e) => {
        e.preventDefault();
        fetch("http://localhost:3003/signup", {method:"POST",header:{"content-type":"appliacation/json"},body:JSON.stringify({
             name:name
        })}).then(response =>response.json()).then(data => console.log(data))
    }
    const onChange = (e) => {
        setName(e.target.value)
    }
    return (
        <form action="/signup">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Confirm-Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Firstname</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" onChange={onChange}class="form-label">surname</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Date of birth</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <button type="submit" class="btn btn-primary"onClick={url}>Submit</button>
      </form>
    )
}
export default Signup