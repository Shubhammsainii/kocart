import React from "react";
import GridLayout from "./shop/gridLayout";
import ShopFilter from "./coreComponents/ShopFIlters";
export default class Women extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }
    componentDidMount() {
        fetch("./../../products.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.products);
                this.setState({ products: data.products.filter(item => item.category === "Women") });
            })
            .catch((error) => console.error("Error fetching data:", error));


    }
    render() {
        return (

            <>
                {this.state.products?.length > 0 ? (
                    <>
                        <ShopFilter totalItems={this.state.products.length} />
                        <div className="container">
                            <GridLayout gridItems={this.state.products}></GridLayout>
                        </div>
                    </>

                ) : 'No Result'

                }

            </>
        );
    }
}