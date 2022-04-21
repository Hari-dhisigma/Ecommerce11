import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function Product() {
  const [Prod, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://rro3tk8hue.execute-api.us-west-2.amazonaws.com/productfetch"
      )
      .then((resp) => {
        console.log(resp.data);
        setProduct(resp.data);
      });
  }, []);

  return (
    <div>
      <Dashboard />
      <div class="btnAddPdt"><Link to="/AddProduct"><button type="button" class="btn btn-success" >Add Product</button></Link></div>
      <div class="containerProduct"></div>
      <div className="AppProduct">
        <table>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Category Name</th>
          </tr>
          {Prod.map((val, key) => {
            return (
              <tr key={key}>
                <Link to="/EditProduct" state={{ id: val.id }}>
                  <td>{val.txtProdName}</td>
                </Link>

                <td>{val.txtProdPrice}</td>
                <td>{val.txtCategoryName}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default Product;
