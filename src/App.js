import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainHeaders from "./components/headerSection/MainHeaders";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./admin/Users";
import MyFooter from "./components/MyFooter";
import Shop from "./components/shop/shop";
import GridItemDetailLayout from "./components/shop/details/ShopItemDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Cart from "./components/cart/cart";
import state from "./state.js";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Kids from "./components/Kids.jsx";

export default class App extends React.Component {
  myGap = {
    height: "100px"
  };
  token = "";
  constructor(props) {
    super(props);
    //  this.props=props.state;
    //  console.log('app',this.props);
    this.state = {
      ...props,cart:state.data.cart
    };
    // console.log(state);
  }
  componentDidMount() {
    // console.log("before render", this.state);
  }
  
  // addToCart=(e)=> {
  //   state.setCart([...state.data.cart,this.state]);
    
  // }
  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
    state.setCart([...state.data.cart,this.state]);
  };
  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
    state.setCart([...this.state.cart]);
    
  };
  render() {
    return (
      <>
        <MainHeaders {...this.props} />{" "}
        <BrowserRouter>
          <div className="main">
            <Routes>
              <Route index path="/" element={<Home />} />{" "}
              <Route path="/home" element={<Home />} />{" "}
              <Route path="/login" element={<Login {...this.props} />} />
              <Route path="/cart" element={<Cart {...this.state} removeFromCart={this.removeFromCart} />} />
              <Route path="/about" element={<About />} />{" "}
              <Route path="/users" element={<Users />} />{" "}
              <Route path="/men" element={<Men />} />{" "}
              <Route path="/women" element={<Women />} />{" "}
              <Route path="/kids" element={<Kids />} />{" "}
              <Route path="/shop" element={<Shop {...this.props} />} />
              <Route
                path="/shop/:itemId"
                element={<GridItemDetailLayout {...this.props} />}
              />
              <Route path="/404" element={<NotFound />} />{" "}
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>{" "}
          </div>{" "}
        </BrowserRouter>{" "}
        {/* <div style={this.myGap}></div> */} <MyFooter />
      </>
    );
  }
}
