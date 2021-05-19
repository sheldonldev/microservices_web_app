import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from "./admin/Products";
import { BrowserRouter, Route } from "react-router-dom";
import Main from './main/Main';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';

function App() {
  return (
      <BrowserRouter>
        <Route path='/' exact component={Main} ></Route>
        <Route path='/admin/products' exact component={Products} ></Route>
        <Route path='/admin/products/create' exact component={ProductsCreate} ></Route>
        <Route path='/admin/products/:id/edit' exact component={ProductsEdit} ></Route>
      </BrowserRouter>
  );
}

export default App;
