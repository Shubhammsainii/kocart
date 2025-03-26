import React from "react";
import state from "../../../state";

export default class GridItemDetailLayout extends React.Component {
 
  images = [
    {
      id: "img1",
      data_imgbigurl: "https://placehold.co/200",
      src: "https://placehold.co/400",
    },
    {
      id: "img2",
      data_imgbigurl: "/theme/img/product/details/product-details-3.jpg",
      src: "https://placehold.co/400",
    },
    {
      id: "img3",
      data_imgbigurl: "/theme/img/product/details/product-details-5.jpg",
      src: "https://placehold.co/400",
    },
    {
      id: "img4",
      data_imgbigurl: "/theme/img/product/details/product-details-4.jpg",
      src: "https://placehold.co/400",
    },
  ];
  constructor(props) {
    super(props);
    this.state={
    }
   
  }
  componentDidMount() {
    // code to run after render goes here
    let currentEvent = document.querySelectorAll(".nav-item .nav-link");
    currentEvent[0].addEventListener("click", function (e) {
      console.log(e.target);
    });
    fetch("./../../products.json")
    .then((response) => response.json())
    .then((data) => {
      const pathSegments = window.location.pathname.split("/"); 
      const name = pathSegments[pathSegments.length - 1];
        this.setState({...data.products.find(item => item.name === decodeURIComponent(name).toString()) });
        console.log(decodeURIComponent(name));
        console.log(this.state);
    })
    .catch((error) => console.error("Error fetching data:", error));
   
   
  }
  addToCart=(e)=> {
    state.setCart([...state.data.cart,this.state]);
  }
  showProductImages(e) {
    document.querySelector("#setProdImg").src = e.nativeEvent.target.src;

  }

  render() {
    return (
      <>
        <div className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="product__details__pic d-flex">
                  <div className="product__details__pic__slider owl-carousel">
                    {this.images.map((item) => {
                      return <img key={item.id} data_imgbigurl={item.data_imgbigurl} src={item.src} alt="" onClick={this.showProductImages} />
                    })}

                  </div>
                  <div className="product__details__pic__item">
                    <img id="setProdImg"
                      className="product__details__pic__item--large"
                      src={this.state.url||'https://placehold.co/400'}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{this.state.name}</h3>
                  <div className="product__details__rating">
                    {/* <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i> */}
                    <span>(18 reviews)</span>
                  </div>
                  <div className="product__details__price">{this.state.PerPeacePrice||this.state.price}</div>
                  <p>
                   {this.state.shortDescription|this.state.description}
                  </p>
                  <div className="product__details__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="tel" defaultValue="1" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="primary-btn" onClick={this.addToCart}>
                    ADD TO CARD
                  </a>
                  <a href="/" className="heart-icon">
                    <span className="icon_heart_alt"></span>
                  </a>
                  <ul>
                    <li>
                      <b>Availability</b> <span>In Stock</span>
                    </li>
                    <li>
                      <b>Shipping</b>{" "}
                      <span>
                        01 day shipping. <samp>Free pickup today</samp>
                      </span>
                    </li>
                    {/* <li>
                      <b>Weight</b> <span>0.5 kg</span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="product__details__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                        aria-selected="false"
                      >
                        Information
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                        aria-selected="false"
                      >
                        Reviews <span>(1)</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="product__details__tab__desc">
                        <h6>Products Infomation</h6>
                        <p>
                          Vestibulum ac diam sit amet quam vehicula elementum
                          sed sit amet dui. Pellentesque in ipsum id orci porta
                          dapibus. Proin eget tortor risus. Vivamus suscipit
                          tortor eget felis porttitor volutpat. Vestibulum ac
                          diam sit amet quam vehicula elementum sed sit amet
                          dui. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor volutpat.
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Praesent sapien massa, convallis a
                          pellentesque nec, egestas non nisi. Vestibulum ac diam
                          sit amet quam vehicula elementum sed sit amet dui.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet aliquam vel, ullamcorper sit amet
                          ligula. Proin eget tortor risus.
                        </p>
                        <p>
                          Praesent sapien massa, convallis a pellentesque nec,
                          egestas non nisi. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Mauris blandit aliquet
                          elit, eget tincidunt nibh pulvinar a. Cras ultricies
                          ligula sed magna dictum porta. Cras ultricies ligula
                          sed magna dictum porta. Sed porttitor lectus nibh.
                          Mauris blandit aliquet elit, eget tincidunt nibh
                          pulvinar a. Vestibulum ac diam sit amet quam vehicula
                          elementum sed sit amet dui. Sed porttitor lectus nibh.
                          Vestibulum ac diam sit amet quam vehicula elementum
                          sed sit amet dui. Proin eget tortor risus.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                      <div className="product__details__tab__desc">
                        <h6>Products Infomation</h6>
                        <p>
                          Vestibulum ac diam sit amet quam vehicula elementum
                          sed sit amet dui. Pellentesque in ipsum id orci porta
                          dapibus. Proin eget tortor risus. Vivamus suscipit
                          tortor eget felis porttitor volutpat. Vestibulum ac
                          diam sit amet quam vehicula elementum sed sit amet
                          dui. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor volutpat.
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Praesent sapien massa, convallis a
                          pellentesque nec, egestas non nisi. Vestibulum ac diam
                          sit amet quam vehicula elementum sed sit amet dui.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet aliquam vel, ullamcorper sit amet
                          ligula. Proin eget tortor risus.
                        </p>
                        <p>
                          Praesent sapien massa, convallis a pellentesque nec,
                          egestas non nisi. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Mauris blandit aliquet
                          elit, eget tincidunt nibh pulvinar a. Cras ultricies
                          ligula sed magna dictum porta. Cras ultricies ligula
                          sed magna dictum porta. Sed porttitor lectus nibh.
                          Mauris blandit aliquet elit, eget tincidunt nibh
                          pulvinar a.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                      <div className="product__details__tab__desc">
                        <h6>Products Infomation</h6>
                        <p>
                          Vestibulum ac diam sit amet quam vehicula elementum
                          sed sit amet dui. Pellentesque in ipsum id orci porta
                          dapibus. Proin eget tortor risus. Vivamus suscipit
                          tortor eget felis porttitor volutpat. Vestibulum ac
                          diam sit amet quam vehicula elementum sed sit amet
                          dui. Donec rutrum congue leo eget malesuada. Vivamus
                          suscipit tortor eget felis porttitor volutpat.
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Praesent sapien massa, convallis a
                          pellentesque nec, egestas non nisi. Vestibulum ac diam
                          sit amet quam vehicula elementum sed sit amet dui.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet aliquam vel, ullamcorper sit amet
                          ligula. Proin eget tortor risus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
