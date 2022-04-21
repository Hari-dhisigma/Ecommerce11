import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import './EditOrder.css';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Editorder(){
  const location = useLocation();
  const { id } = location.state;

    const[Name,setName]=useState();
    const[address,setaddress]=useState();
    const[AmtTotal,setAmtTotal]=useState();
    const[Status,setStatus]=useState();
    const[Phone,setPhone]=useState();
    const [Order, setOrder] = useState([]);
      useEffect(() => {
        console.log("id...");
        console.log(id);
        var dt = '{  "id":' + id + "}";
        axios.post('https://cofdmen5mb.execute-api.us-west-2.amazonaws.com/orderSelectById',dt)
        .then(function (res) {
          
          setName(res.data[0].txtUsername)
          setaddress(res.data[0].txtAddress)
          setAmtTotal(res.data[0].txtTotalAmount) 
         
          setPhone(res.data[0].txtPhoneNo)

          setOrder(res.data);
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }, []);


      let navigate = useNavigate();

      const orderupdate = () => {
        console.log(id);
        console.log(Status);
        var dt =
          '{ "id":' +
          id +
          ',"stat": "' +
          Status +
          '"  }';
    
        console.log(dt);
        axios
          .post(
            "https://hw2j74n442.execute-api.us-west-2.amazonaws.com/orderUpdate",
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

    return(
    
    <div>
       <Dashboard/> 
        

<div class="containerDisplayOrder">

<h6>
Username: {Name}  <br></br>
Total Amount: {AmtTotal}<br></br>
Address: {address}  <br></br> 
Phone No: {Phone} <br></br>
</h6>
<div>  <label for="exampleFormControlSelect1">Status:</label>
<select name="Status" id="status" onChange={e => setStatus(e.target.value)}>

  <option value="order placed">order placed</option>
  <option value="processing">processing</option>
  <option value="Dispatched">Dispatched</option>
  <option value="Delivered">Delivered</option>
</select>
<div class="col-md-6">
              <Link to="/Product"><button type="button" class="btn btn-warning">
                  Cancel
                </button></Link>

              </div>
<div class="btnSaveStat"  >
<button
                type="button"
                class="btn btn-success"
                onClick={orderupdate}
              >
                save
              </button>
</div>

</div> 
</div>


<div class="containerEdit2" align="left">
<table>
  <tr>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
	 <th>Amount</th>
  </tr>

{Order.map((val, key) => {
 
            return (
              
              <tr key={key}>               
                  <td>{val.txtProdName}</td>
                <td>{val.txtProdPrice}</td>
                <td>{val.txtQuantity}</td>
                <td>{val.txtOrderAmount}</td>
              </tr>
            );
          })}
        </table>




        </div>
        </div>
        
    )
}
export default Editorder;
