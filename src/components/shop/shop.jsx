import React from "react";
import GridLayout from "./gridLayout";
import state from "../../state";
import ShopFilter from "../coreComponents/ShopFIlters";

export default class Shop extends React.Component {
  productData=[];
  searchParams = new URLSearchParams(document.location.search)
  searchString=this.searchParams.get('q');
  filteredData=[];
  constructor(props){
    super(props);
    let prodUrl = `http://${window.location.host}/theme/img/product/`;
    this.productData = [
      {
        ID: 1,
        name: "T-Shirt Print",
        PerPeacePrice: "$10",
        isOnline: true,
        isAvailable: true,
        shortDescription: "Print T-shrit as your choice.",
        url: `${prodUrl}tshirt.webp`,
        productType: "P",
      },
      {
        ID: 2,
        name: "Coffee-Cup",
        PerPeacePrice: "$10",
        isOnline: true,
        isAvailable: true,
        shortDescription: "Print Coffee cup as your choice.",
        url: `${prodUrl}f2.jpeg`,
        productType: "P",
      },
      {
        ID: 3,
        name: "Coffee-Cup",
        PerPeacePrice: "$10",
        isOnline: true,
        isAvailable: true,
        shortDescription: "Print Coffee cup as your choice.",
        url: `${prodUrl}coffe_cup.webp`,
        productType: "P",
      },
      {
        ID: 4,
        name: "Coffee-Cup",
        PerPeacePrice: "$10",
        isOnline: true,
        isAvailable: true,
        shortDescription: "Print Coffee cup as your choice.",
        url: `${prodUrl}coffe_cup.webp`,
        productType: "P",
      },
      {
        ID: 5,
        name: "Coffee-Cup",
        PerPeacePrice: "$10",
        isOnline: true,
        isAvailable: true,
        shortDescription: "Print Coffee cup as your choice.",
        url: `${prodUrl}coffe_cup.webp`,
        productType: "P",
      },
      {
        ID: 6,
        name: "Coffee-Cup",
        PerPeacePrice: "$7",
        isOnline: true,
        isAvailable: true,
        shortDescription: "Delightful Emoji Coffee Mug By FNP | Send Gifts Online",
        url: `https://th.bing.com/th?id=OPAC.8p79Iif5lpf%2bNw474C474&w=200&h=210&c=17&pid=21.1`,
        productType: "P",
      },
    ];
  
   
  }
  componentDidMount(){
    state.setProduct([...this.productData]);
   
  }
  render() {
    if(this.searchString){
      this.filteredData= this.productData.filter((item)=>{
          return item.name.toLowerCase().includes(this.searchString?.toLowerCase());
        })
      }else{
      this.filteredData=[...this.productData]
      }
    
      state.setProduct([...this.filteredData]);
      console.log(this.state);
       return (
      <>
        <ShopFilter totalItems={this.filteredData.length}/>
        <div className="container">
        <GridLayout gridItems={this.filteredData}/>
        </div>
      </>
    );
  }
}
