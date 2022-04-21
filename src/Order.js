import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Order.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function Order() {
  const [Order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://o36x4c5wi3.execute-api.us-west-2.amazonaws.com/orderselect")
      .then((resp) => {
        console.log(resp.data);
        setOrder(resp.data);
      });
  }, []);
  return (
    <div>
       <Dashboard /> 
      <div class="containerOrder">
      <h4>Order List</h4>
      </div>
      <div className="AppOrder">
        <table>
          <tr>
            <th>ID</th>

            <th>Firstname</th>
            <th>Lastname</th>
            <th> Address</th>
            <th>Order NO </th>
            <th>Order amount</th>
            <th>Date Created On</th>
            <th>Date Updated On</th>
           
          </tr>
          {Order.map((val, key) => {
            return (
              <tr key={key}>
                <Link to="/EditOrder" state={{ id: val.id }}>
                  <td>{val.id}</td>
                </Link>
                <td>{val.txtFirstname}</td>
                <td>{val.txtLastname}</td>
                <td>{val.txtAddress}</td>
                <td>{val.txtOrderNo}</td>
                <td>{val.txtOrderAmount}</td>
                <td>{val.dtCreatedOn}</td>
                <td>{val.dtUpdatedOn}</td>
              
              </tr>
            );
          })}
        </table>
      </div>
    </div>
   
  );
}
export default Order;
