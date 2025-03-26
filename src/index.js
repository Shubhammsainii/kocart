import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myState = {
  brandTitle:'KOCart',
  username: "",
  password: "",
  token:localStorage.getItem('token'),
  isLoading: false,
  error: {
    status: false,
    message: ""
  },
  success: false,
  productData:[],
  productDetails:{},
  cart:[]
};  
console.log(myState);
root.render(
  <React.StrictMode>
    <App state={myState}/>
    <script src="./theme/js/jquery-3.3.1.min.js"></script>
    <script src="./theme/js/bootstrap.min.js"></script>
    <script src="./theme/js/jquery.nice-select.min.js"></script>
    <script src="./theme/js/jquery-ui.min.js"></script>
    <script src="./theme/js/jquery.slicknav.js"></script>
    <script src="./theme/js/mixitup.min.js"></script>
    <script src="./theme/js/owl.carousel.min.js"></script>
  
  </React.StrictMode>
);

reportWebVitals();
