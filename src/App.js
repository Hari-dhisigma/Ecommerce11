import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Order from "./Order";
import EditOrder from "./EditOrder";
import EditProduct from "./EditProduct";
import EditProfile from "./ProfileEdit";
import AddProduct from "./AddProduct";
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "React",

      isUserAuthenticated: true,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <ul>
            <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Product">Product</Link>
              </li>              

            </ul> */}

            <Routes>
              <Route path="/Signup" element={<Signup />} />
              <Route path="/" element={<Login />} />

              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/Order" element={<Order />} />
              <Route path="/EditOrder" element={<EditOrder />} />
              <Route path="/EditProduct" element={<EditProduct />} />
              <Route path="/ProfileEdit" element={<EditProfile />} />
              <Route path="/AddProduct" element={<AddProduct />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
