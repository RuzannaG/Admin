 import { Link } from "react-router-dom";


 export const Landing=()=>{
    return(
        <div className="landing">Landing
          <div className="hero-text">
            <h1>Hello, Welcome Back</h1>
            <Link to={'./login'}>
            <button className="button1">Log in</button>
            </Link>
            
          </div>
          
          </div>
    )
 }