import { useEffect } from "react";

const STATE_KEY = "appState"; // Key for sessionStorage

// Load initial state from sessionStorage
const loadState = () => {
    const storedState = sessionStorage.getItem(STATE_KEY);
    return storedState ? JSON.parse(storedState) : {
        user: null,
        theme: "light",
        cart: [],
        product: []
    };
};

// Save state to sessionStorage
const saveState = (state) => {
    sessionStorage.setItem(STATE_KEY, JSON.stringify(state));
};
let prodUrl = `http://${window.location.host}/theme/img/product/`;
// const productData = [{
//         ID: 1,
//         name: "T-Shirt Print",
//         PerPeacePrice: "$8",
//         isOnline: true,
//         isAvailable: true,
//         shortDescription: "Print T-shrit as your choice.",
//         url: `${prodUrl}tshirt.webp`,
//         productType: "P",
//     },
//     {
//         ID: 2,
//         name: "Coffee-Cup",
//         PerPeacePrice: "$6",
//         isOnline: true,
//         isAvailable: true,
//         shortDescription: "Print Coffee cup as your choice.",
//         url: `${prodUrl}f2.jpeg`,
//         productType: "P",
//     },
//     {
//         ID: 3,
//         name: "Coffee-Cup-2",
//         PerPeacePrice: "$5",
//         isOnline: true,
//         isAvailable: true,
//         shortDescription: "Print Coffee cup as your choice.",
//         url: `${prodUrl}coffe_cup.webp`,
//         productType: "P",
//     },
//     {
//         ID: 4,
//         name: "Coffee-Cup-3",
//         PerPeacePrice: "$9.9",
//         isOnline: true,
//         isAvailable: true,
//         shortDescription: "Print Coffee cup as your choice.",
//         url: `${prodUrl}coffe_cup.webp`,
//         productType: "P",
//     },
//     {
//         ID: 5,
//         name: "Coffee-Cup-4",
//         PerPeacePrice: "$10",
//         isOnline: true,
//         isAvailable: true,
//         shortDescription: "Print Coffee cup as your choice.",
//         url: `${prodUrl}coffe_cup.webp`,
//         productType: "P",
//     },
//     {
//         ID: 6,
//         name: "Coffee-Cup-5",
//         PerPeacePrice: "$7",
//         isOnline: true,
//         isAvailable: true,
//         shortDescription: "Delightful Emoji Coffee Mug By FNP | Send Gifts Online",
//         url: `https://th.bing.com/th?id=OPAC.8p79Iif5lpf%2bNw474C474&w=200&h=210&c=17&pid=21.1`,
//         productType: "P",
//     },
   
// ];
// Define a simple state manager
const state = {
    data: loadState(), // Load initial state

    setUser: function (user) {
        this.data.user = user;
        saveState(this.data);
    },

    setTheme: function (theme) {
        this.data.theme = theme;
        saveState(this.data);
    },
    setCart: function (cart) {
        this.data.cart=cart;
        saveState(this.data);
    },
    setProduct: function (product) {
        this.data.product = product;
        saveState(this.data);
    },
    // findProduct: function (name) {
    //     return productData.find((item) => item.name === name);
    // }
};

export default state;