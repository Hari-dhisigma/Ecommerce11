import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import "./ProfileEdit.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function EditProfile() {
  const [id, setid] = useState();
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Password, setPassword] = useState("");

  let navigate = useNavigate();
  const userupdate = () => {
    var dt =
      '{  "id":' +
      id +
      ',"Firstname": "' +
      Firstname +
      '",     "Lastname":"' +
      Lastname +
      '",     "Username":"' +
      Username +
      '", "PhoneNo": "' +
      PhoneNo +
      '",  "Password": "' +
      Password +
      '"  }';

    console.log(dt);
    axios
      .post(
        "https://kv7k0x1q4d.execute-api.us-west-2.amazonaws.com/updateUser",
        dt
      )
      .then(function (res) {
        console.log(res.data);
        if (res.data.length != 0) {
          navigate("/Dashboard");
        } else {
          alert("Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Dashboard />
 
      <div className="Profileedit">
        <div class="containerprofile">
          <form class="row g-3">
            <h6>Details</h6>
            <div class="col-md-12">
              <input
                type="txt"
                class="form-control"
                id="inputid"
                placeholder="id"
                value={id}
                onChange={(e) => setid(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
              <input
                type="txt"
                class="form-control"
                id="inputFirstname"
                placeholder="Firstname"
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
              ></input>
            </div>

            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                id="inputLastname"
                placeholder="Lastname"
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
              ></input>
            </div>
            <p>
              Use your firstname and lastname as they appear in
              government-issued id
            </p>
            <div class="col-md-6">
              <label for="inputUsername" class="form-label">
                Username
              </label>
              <input
                type="txt"
                class="form-control"
                id="inputUsername"
                placeholder="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            <div class="col-md-6">
              <label for="inputPhone" class="form-label">
                Phone
              </label>
              <input
                type="txt"
                class="form-control"
                id="inputPhone"
                placeholder="Phone number"
                value={PhoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              ></input>
            </div>

            <div class="col-md-12">
              <input
                type="txt"
                class="form-control"
                id="inputPassword"
                placeholder="Change Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
              <Link to="/Dashboard">
                <button>cancel</button>
              </Link>
            </div>
            <div class="col-md-6">
              <button
                type="button"
                class="btn btn-success"
                onClick={userupdate}
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
