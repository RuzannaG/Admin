import { useState } from "react"
import { useNavigate } from "react-router";

export const Login=()=>{


    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    const hndleName =(e)=>{
        setName(e.target.value)

    }
    const handlePassword=(e)=>{
setPassword(e.target.value)
    }
     const handleClik =()=>{
        if(name==='admin' && password==="admin"){
            navigate('/users')
        }
     }
    return(
        <div className="city">   
            <div className="container">
        <h2 className="login-title">Log in</h2>
    
        <form className="login-form">
          <div>
            <label for="name">Name </label>
            <input onChange={hndleName}
                   value={name}
                   id="name"
                   type="text"
                   placeholder="Name"
                   name="name"
                   required
                   />
          </div>
    
     
    
          <div>
            <label for="password">Password </label>
            <input onChange={handlePassword}
                   value={password}
                   id="password"
                   type="password"
                   placeholder="password"
                   name="password"
                   required
                   />
          </div>
    
          <button  onClick={handleClik} className="btn btn--form" type="submit" >
            Log in
          </button>
        </form>
    </div></div>
    )
 }