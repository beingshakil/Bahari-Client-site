import './CSS/LoginSignup.css'; 
import { useState } from 'react';

const LoginSignup = () => {

  const [state, setState] = useState("Login"); 

  return (
    <div className="login-Signup">
      <div className="login-Signup-container">
        <h1>{state}</h1>
        <div className="login-Signup-fields">
         {state === "Sign Up" ? <input type="text" placeholder="Your Name" />: <></>}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        
        <div>
          <button>Continue</button>
          {state === 'Sign Up' ? <p className="login-Signup-login">Already have an account? <span onClick={()=> setState('Login')}>Login Here</span></p>
          : 
          <p className="login-Signup-login">Create an account? <span onClick={()=> setState('Sign Up')}>Click Here</span></p>
          }

          <div className="login-Signup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
