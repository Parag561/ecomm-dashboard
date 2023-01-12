import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
    createBrowserRouter,
    RouterProvider
   
    
  } from "react-router-dom";
  import Login from './Login';
  import AddProduct from './AddProduct';
  import UpdateProduct from './UpdateProduct';
  import Register from './Register';
  import Protected from './Protected';
  import ProductList from './ProductList';



  const router = createBrowserRouter([
  
    {
      path: "/login",
      
      element: (<div>
        
        <Login/>
      
      
      </div>),
      
    },
    {
      path: "/add",
      
      element: (<div>
        
        <Protected cmp={AddProduct}/>
      
      
      </div>),
      
    },
    {
      path: "/",
      
      element: (<div>
        
        <Protected cmp={ProductList}/>
      
      
      </div>),
      
    },
    {
      path: "/update/:id",
      
      element: (<div>
        
        <Protected cmp={UpdateProduct}/>
      
      
      </div>),
      
    },
    {
      path: "/register",
      
      element: (<div>
        
        <Register/>
      
      
      </div>),
      
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
