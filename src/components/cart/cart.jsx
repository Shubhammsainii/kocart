import React from "react";
import state from "../../state";
export default class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            cart: []
        };
    }

    componentDidMount() {
     this.setState({
        cart:state.data.cart
     })
   
    }
     componentDidUpdate(prevProps, prevState) {
        console.log('main call');
        console.log(prevState);
        console.log(prevProps);
        // if (prevState.length !== prevProps.cart.legnth) {
        //     console.log("Count changed!", this.state.count);
        //     this.setState({
        //         cart:prevProps.cart
        //      })
        //   }
      
      }
    
    render() {
        // this.setState({
        //     cart:state.data.cart
        //   })  
        return (
            <>
                <section className="shoping-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="shoping__product">Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {state.data.cart.map((item, index) => {
                                            return (                    
                                            <tr key={index}>
                                                <td className="shoping__cart__item">
                                                    <img src={item.image_url||'https://placehold.co/200'} alt="" />
                                                    <h5>{item.name}</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    ${item.price}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input type="text" value="1" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    ${item.price}
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close" onClick={() => this.props.removeFromCart(item.id)}></span>
                                                </td>
                                            </tr>
                                            )
                                         })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__btns">
                                    <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                    <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                        Upadate Cart</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shoping__continue">
                                    <div className="shoping__discount">
                                        <h5>Discount Codes</h5>
                                        <form action="#">
                                            <input type="text" placeholder="Enter your coupon code" />
                                            <button type="submit" className="site-btn">APPLY COUPON</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shoping__checkout">
                                    <h5>Cart Total</h5>
                                    <ul>
                                        <li>Subtotal <span>$454.98</span></li>
                                        <li>Total <span>$454.98</span></li>
                                    </ul>
                                    <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}