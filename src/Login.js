import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  
  const [UserName, setUserName] = useState([]);
  const [password, setpassword] = useState([]);
  let navigate = useNavigate();
  const loginclick = () => {
    sessionStorage.setItem("Username",UserName);
    var dt =
      '{   "username": "' +
      UserName +
      '",     "password":"' +
      password +
      '"  }';

    axios
      .post(
        "https://ni7obwzcmd.execute-api.us-west-2.amazonaws.com/uservalidation",
        dt
      )
      .then(function (res) {
        console.log(res.data);
        if (res.data.length > 0) {
          navigate("/Dashboard");
        } else {
          alert("Error in username or password");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {}, []);
  return (
    <div class="bg">
      <div class="containerLogin">
        <form class="row g-3">
          <img src={require("./s.jpg")} />

          <h4>Login</h4>
          <h6>Continue to Shopify</h6>

          <div class="col-md-12">
            <label for="inputUsername" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail"
              placeholder="Username"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="Password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>

          <div class="col-md-6">
            <button type="button" class="btn btn-success" onClick={loginclick}>
              Login
            </button>
          </div>
          <Link to="/Signup">New User? Signup</Link>

          <div class="col-md-6"></div>
        </form>
      </div>
    </div>
  );
}

export default Login;
