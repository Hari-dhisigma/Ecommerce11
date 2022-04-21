import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {

  const [countryList, setCountryList] = useState([]);
  const [stateList, setstateList] = useState([]);
  const [stateId, setstateId] = useState();
  const [FirstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address, setaddress] = useState("");
  const [apartment, setapartment] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setpicode] = useState("");
  const [phone, setphone] = useState("");
  const [website, setwebsite] = useState("");


  const [countryId, setSelectedCountryId] = useState();

  let navigate = useNavigate();
  useEffect(() => {
    axios.get('https://ln74u03ot3.execute-api.us-west-2.amazonaws.com/countryselect')
      .then((res) => { 
        console.log(res.data); setCountryList(res.data)

      })

  }, []);


  const insert = () => {
    console.log(stateId);
    var dt = '{ "refUserType": 1,"txtUsername": "' + FirstName + '","txtFirstname": "' + FirstName + '", "txtLastname": "' + lastName + '","refCountry": "' + countryId + '","refState": "' + stateId + '","txtAddress": "' + address + '","txtStreet": "' + city + '","txtCity": "' + city + '","txtPincode": "' + pincode + '","txtPhoneNo": "' + phone + '", "txtWebsite": "' + website + '"}';
    axios.post('https://mp61zfps83.execute-api.us-west-2.amazonaws.com/userinsert', dt)
      .then(function (res) {
        console.log(res.data);
        if (res.data.length=!0) {
          navigate('/Dashboard')
        }
        else {
          alert("No response")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {

  }, []);



  const countrySelect = (event) => {
    console.log(event.target.value);
    setSelectedCountryId(event.target.value);
    var dt = '{   "Id": "' + event.target.value + '"  }';
    axios.post('https://f6lsbv1nx8.execute-api.us-west-2.amazonaws.com/statefetch', dt)
      .then(function (res) { 
        setstateList(res.data) 
        if (res.data.length > 0) {
          console.log(res.data);
        }
        else {
          
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  

  return (
    <div class="containerSignup">

      <div class="row">
        <div class="form-group">
          <label for="exampleFormControlSelect1">country</label>
          <select class="form-control" id="exampleFormControlSelect1" value={countryId} onChange={countrySelect} >
            {

              countryList.map((itm, indx) => {

                return <option key={itm.Id} value={itm.id}>{itm.txtCountryName}</option>;
              })
            }
          </select>
        </div>
        <div class="row g-3">
          <div class="col">


            <label for="FirstName" class="form-label">FirstName</label>
            <input type="text" class="form-control" id="FirstName" placeholder="firstName" value={FirstName} onChange={e => setFirstName(e.target.value)}></input>
          </div>
          <div class="col">
            <label for="LastName" class="form-label">lastName</label>
            <input type="text" class="form-control" id="LastName" placeholder="LastName" value={lastName} onChange={e => setlastName(e.target.value)} ></input>
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Address" value={address} onChange={e => setaddress(e.target.value)}></input>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Aparment</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Apartment" value={apartment} onChange={e => setapartment(e.target.value)}></input>
        </div>
        <div class="row g-3">
          <div class="col">
            <label for="City" class="form-label">City</label>
            <input type="text" class="form-control" id="City" placeholder="City" value={city} onChange={e => setCity(e.target.value)}></input>
          </div>
            console.log({stateId});
          <div class="col">
            <label for="exampleFormControlSelect1">State</label>
            <select class="form-control" id="exampleFormControlSelect1" onChange={e => setstateId(e.target.value)}>
              {

                stateList.map((itm, indx) => {
                  
                  return <option key={itm.Id} value={itm.id}>{itm.txtStateName}</option>;
                
                })
              }
            </select>
          </div>

          <div class="col">
            <label for="Pincode" class="form-label">PinCode</label>
            <input type="text" class="form-control" id="Pincode" placeholder="Pincode" value={pincode} onChange={e => setpicode(e.target.value)}></input>
          </div>
        </div>
        <div class="row g-3">
          <div class="col">
            <label for="Phone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="FirstName" placeholder="Phone" value={phone} onChange={e => setphone(e.target.value)}></input>
          </div>
          <div class="col">
            <label for="Website" class="form-label">WebSite</label>
            <input type="text" class="form-control" id="LastName" placeholder="Website" value={website} onChange={e => setwebsite(e.target.value)}></input>
          </div>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">
            This Store is a registered business
          </label>
        </div>

        <div class="row g-3">
          <div class="col">
          <Link to="/"><button type="button" class="btn btn-success">back </button></Link>
          </div>
          <div class="col">
            <button type="button" class="btn btn-success" onClick={insert}  >Enter my Store</button>
          </div>
        </div>


      </div>



    </div>


  );
}
export default Signup;