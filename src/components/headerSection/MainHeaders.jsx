import { Navigate, redirect } from "react-router-dom";
import TopNavbar from "../TopNavbar";
import React from "react";
import state from "../../state";
export default class MainHeaders extends React.Component {
  token;

  constructor(props) {
    super();
    this.token = props.state.token;
    this.state={
      count:0
    }
  }
 
  componentDidMount() {
    this.setState({count:state.data.cart.length});
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count changed!", this.state.count);
    }
    console.log('cart call');
  }
  searchString(e) {
    let searchInput = document.querySelector('input[name="search"]').value;

    window.location.replace('/shop?q=' + encodeURIComponent(searchInput));
  }
  render() {
    let logo = `http://${window.location.host}/logo.svg`;
    // let myHeader = {
    //   background: "#01319f",
    //   listStyle: "none",
    //   color: "#fff",
    // };
    return (
      <>
        <div id="preloder">
          <div className="loader"></div>
        </div>

        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href="/home">
              {/* <img src={logo} alt="" /> */}
              KOKart
            </a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i> <span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-bag"></i> <span>3</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>$0.00</span>
            </div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src="img/language.png" alt="" />
              <div>English</div>
              <span className="arrow_carrot-down"></span>
              <ul>
                <li>
                  <a href="#">Spanis</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="#">
                <i className="fa fa-user"></i> Login
              </a>
            </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active">
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#"></a>

                <ul className="header__menu__dropdown">
                  <li>
                    <a href="/my-profile">My Profile</a>
                  </li>
                  <li>
                    <a href="/my-orders">My Order</a>
                  </li>
                  <li>
                    <a href="/wishlist">My Wishlist</a>
                  </li>
                  <li>
                    <a href="#" onClick={this.logoutHandler}>Logout</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          {/* <div className="header__top__right__social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-pinterest-p"></i>
            </a>
          </div> */}
          <div className="humberger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope"></i> shubham@gmail.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        <header className="header">
          <div className="header__top">
            <div className="container_">
              <div className="row header_row">
                <div className="col-lg-5 col-md-5">
                  <div className="header__top__left">
                    <div className="logo">
                      <a href="/home">
                        {/* <img src={logo} alt="Shop Bazar" title="Shop Bazar" /> */}
                        <span className="logo">KOCart</span>
                      </a>
                    </div>
                    <div className="hero__search__form">
                      <form action="#">
                        <input
                          type="text"
                          name="search"
                          placeholder="What do yo u need?"
                        />
                        <span className="fa fa-search" onClick={this.searchString}></span>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="header__top__right">
                   
                    <nav className="header__menu">
                      <ul>
                        <li>
                          <a href="/men">Men</a>
                        </li>
                        <li>
                          <a href="/women">Women</a>
                        </li>
                        <li>
                          <a href="/kids">Kids</a>
                        </li>
                        <li>
                          <a href="/shop">Shop</a>
                        </li>
                        {(this.token) ? (
                          <li>

                            <a href="#"><i className="fa fa-user"></i></a>

                            <ul className="header__menu__dropdown">
                              <li>
                                <a href="/my-profile">My Profile</a>
                              </li>
                              <li>
                                <a href="/my-orders">My Order</a>
                              </li>
                              <li>
                                <a href="/wishlist">My Wishlist</a>
                              </li>
                              <li>
                                <a href="#" onClick={this.logoutHandler}>Logout</a>
                              </li>
                            </ul>
                          </li>) : ''}
                      </ul>
                    </nav>
                    <div className="header__cart">
                      <div className="header__top__right__auth">
                        <nav className="header__menu">
                          <ul>
                            <li>
                              {(!this.token) ? (

                                <a href="/login">
                                  <i className="fa fa-user"></i> Login
                                </a>
                              ) : (<div className="header__menu__dropdown">
                                <div className="down__trigne"></div>
                                <ul>
                                  <li>
                                    <a href="./shop-details.html">My Profile</a>
                                  </li>
                                  <li>
                                    <a href="./shoping-cart.html">Orders</a>
                                  </li>
                                  <li>
                                    <a href="./checkout.html">Wishlist</a>
                                  </li>
                                  <li>
                                    <a href="./blog-details.html">Rewards</a>
                                  </li>
                                  <li>
                                    <a href="#" onClick={this.logoutHandler}>Logout</a>
                                  </li>
                                </ul>
                              </div>)}
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <ul>
                        {/* <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li> */}
                        <li className="cart">
                          <a href="/cart">
                            <i className="fa fa-shopping-cart"></i>{" "}
                            <span>{state.data.cart.length}</span>
                          </a>
                          {/* <span className="cart-price">$0</span> */}
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__language">
                                <img src="img/language.png" alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </header>
      </>
    );
  }
  logoutHandler(e) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
