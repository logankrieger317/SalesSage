import React, { useState } from "react"

export default function (props) {
  const [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  
  if (authMode === "signin") {
    return (
      <div >
        <form >
          <div >
            <h3 >Sign In</h3>
            <img src="src/assets/images/Logo.jpeg" id="login-logo"></img>
            <div >
              Not registered yet?{" "}
              <span  onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div >
              <label>Email address</label>
              <input
                type="email"
                
                placeholder="Enter email"
              />
            </div>
            <div >
              <label>Password</label>
              <input
                type="password"
                
                placeholder="Enter password"
              />
            </div>
            <div >
              <button type="submit" >
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }

  return (
    <div >
      <form >
        <div >
          <h3 >Sign In</h3>
          <img src="src/assets/images/Logo.jpeg" id="login-logo"></img>
          <div >
            Already registered?{" "}
            <span  onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div >
            <label>Full Name</label>
            <input
              type="email"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div >
            <label>Email address</label>
            <input
              type="email"
              
              placeholder="Email Address"
            />
          </div>
          <div >
            <label>Password</label>
            <input
              type="password"
              
              placeholder="Password"
            />
          </div>
          <div >
            <button type="submit" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}