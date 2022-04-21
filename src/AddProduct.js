import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import "./AddProduct.css";
import { Link, useNavigate } from "react-router-dom";

function AddProduct(){
    let navigate = useNavigate();

    const[title,settitle]=useState();
    const[Price,setPrice]=useState();
    const[Stock,setStock]=useState();
    const[Tax,setTax]=useState();
    const Add = () => {
        
        var dt = '{ "txtProdName": "' + title + '","txtProdPrice": "' + Price + '", "txtStock": "' + Stock+ '","txtTax": "' + Tax+ '"}';
        console.log(dt);
        axios.post('https://rukf6saupb.execute-api.us-west-2.amazonaws.com/productInsert', dt)
          .then(function (res) {
            console.log(res.data);
            
        if (res.data.length != 0) {
            alert("Prduct added")
            navigate("/Product");
          }
          else {
            // alert("Error in username or password")
          }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      useEffect(() => {
    
      }, []);
    return(
        <div> <Dashboard/>
        
        <div class="containerAddPdt">
          <h5>Add Product</h5>
            <label>Title</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Title" value={title} onChange={e => settitle(e.target.value)}></input>   
        <label>price</label>
        <input type="text" className="form-control"  id="inputAddress" placeholder="Price" value={Price} onChange={e => setPrice(e.target.value)}></input>  
        <label>Stock</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Stock" value={Stock} onChange={e => setStock(e.target.value)}></input>   
        <label>Tax</label>
        <input type="text" className="form-control"   id="inputAddress" placeholder="Tax" value={Tax} onChange={e => setTax(e.target.value)}></input> 
        <div class="row">
        <div class="col-md-6">
              <Link to="/Product"><button type="button" class="btn btn-warning">
                  Cancel
                </button></Link>

              </div>
        <div class="col-6">
            <button type="button" class="btn btn-success" onClick={Add}  >Add</button>
          </div>
          </div>
        </div>
        </div>
    )
}
export default AddProduct;