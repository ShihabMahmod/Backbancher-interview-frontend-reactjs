import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Products from "./product/Products";
import ProductStore from "./product/ProductStore";
import ProductEdit from "./product/ProductEdit";
import Login from "./auth/Login";
import Header from "../components/Header";
function Index()
{
    return (
        <>
            <Router>
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/product/store" element={<ProductStore/>} />
                    <Route path="/product/edit/:slug" element={<ProductEdit/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </Router>
        </>
    );
}
export default Index