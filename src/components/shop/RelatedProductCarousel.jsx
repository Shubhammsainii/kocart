
import React from "react";
export default class RelatedProductCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedProducts: []
        }
    }
    componentDidMount() {
        console.log(this.prodps);
        fetch("./../../products.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    relatedProducts: data.products.filter((item, index) => index < 5)
                })
            })
            .catch((error) => console.error("Error fetching data:", error));

    }
    render() {
        console.log(this.state);
        return (<>
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            {this.state.relatedProducts.map((item) => {
                                return (
                                    <div className="col-lg-3"  data-id={item.id} key={item.id}>
                                        <div className="categories__item set-bg" data-setbg="https://placehold.co/200">
                                            <h5><a href="/">{item.name}</a></h5>
                                        </div>
                                    </div>
                            )
                            })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>)
    }
}