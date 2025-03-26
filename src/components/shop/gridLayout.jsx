import React from "react";
import QouteOrderModel from "../coreComponents/qouteOrderModel";

export default class GridLayout extends React.Component {
  showModal = false;
  dummyUrl="https://th.bing.com/th/id/OIP.k-iuGkah_OTZ17lRzn1DbQAAAA?rs=1&pid=ImgDetMain";
  constructor() {
    super();
    this.state = {
      ...this.state,
    }
  }
  componentDidMount() {
    // const  handleOrderBooking=(isOpen)=>{
    //   console.log(isOpen);
    //   return setShowModal(true);
    //  };
  }
  setShowModal(flag) {
    return (this.showModal = flag);
  }
  gotoDetails = (e) => {
    const data = JSON.parse(e.currentTarget.dataset.item);
    window.location.replace(`/shop/${data.name}`);
  }
  render() {
    return (
      <>
        <div className="row featured__filter">
          {this.props.gridItems.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood"
                key={index}
              >
                  <div className="featured__item" onClick={this.gotoDetails} data-item={JSON.stringify(item)}>
                    <div
                      className="featured__item__pic set-bg"
                    >
                      <img src={item.url||this.dummyUrl} className="img" />
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="/">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        {item.name}
                      </h6>

                      <h5 id="">{item.PerPeacePrice||item.price}</h5>
                      {/* {<button className="btn btn-primary"  onClick={handleOrderBooking} data-toggle="modal" data-target="#exampleModalCenter">Book Now</button>} */}
                      <br />
                    </div>
                  </div>
              </div>
            );
          })}
        </div>

        <div></div>
        <QouteOrderModel
          show={this.showModal}
          onHide={() => this.setShowModal(false)}
        ></QouteOrderModel>
      </>
    );
  }
}
