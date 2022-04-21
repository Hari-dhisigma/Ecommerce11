import "bootstrap/dist/css/bootstrap.min.css";
import "./EditProduct.css";
import React, { Component, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";

function EditProduct({ parentToChild }) {
  const location = useLocation();
  const { id } = location.state;
  const [Pdtname, setPdtname] = useState("");
  const [Pdtprice, setPdtprice] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [Edtname, setEdtname] = useState("");
  const [Edtprice, setEdtprice] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    var dt = '{  "id":' + id + "}";
    axios
      .post(
        "https://f3thc3gnfg.execute-api.us-west-2.amazonaws.com/productselectbyid",
        dt
      )
      .then(function (res) {
        setPdtname(res.data[0].txtProdName);
        setPdtprice(res.data[0].txtProdPrice);
        setCategoryName(res.data[0].txtCategoryName);
      });
  }, []);

  const update = () => {
    var pdt =
      '{  "id": "' +
      id +
      '", "ProdName": "' +
      Edtname +
      '",     "ProdPrice":"' +
      Edtprice +
      '"  }';

    axios
      .post(
        "https://kgtdwai8o6.execute-api.us-west-2.amazonaws.com/productupdate",
        pdt
      )
      .then(function (res) {
        console.log(res.data);
        if (res.data.length != 0) {
          navigate("/Product");
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




        <div className="App21">
          <div class="containerEditPdt">
            <form class="row g-3">
            <h6>
          id:{id} <br></br>
          Product name: {Pdtname} <br></br>
          Product Price: {Pdtprice} <br></br>
          Produt category name: {CategoryName} <br></br>
        </h6>
              <h5>Edit</h5>

              <div class="col-md-12">
                <label for="inputPdtname" class="form-label">
                  Product name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPdtname"
                  placeholder="Pdtname"
                  value={Edtname}
                  onChange={(e) => setEdtname(e.target.value)}
                ></input>
              </div>

              <div class="col-md-12">
                <label for="inputPdtprice" class="form-label">
                  Pdtprice
                </label>
                <input
                  type="txt"
                  class="form-control"
                  id="inputPdtprice"
                  placeholder="Pdtprice"
                  value={Edtprice}
                  onChange={(e) => setEdtprice(e.target.value)}
                ></input>
              </div>

              <div class="col-md-6">
              <Link to="/Product"><button type="button" class="btn btn-warning">
                  Cancel
                </button></Link>

              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-success" onClick={update}>
                  Save
                </button>
              </div>

              <div class="col-md-6"></div>
            </form>
          </div>
        </div>
      </div>
  
  );
}

export default EditProduct;
