import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";


function Products()
{
    const[data,setdata] = useState([]);

    useEffect(()=>{
        const products = async()=>{
            const response = await axios.get("http://localhost:8000/product");
            setdata(response.data)
        };
        products()
    },[]);

    return (
        <>
            <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                    <tr>
                        <th className="py-3 px-4 border-b border-gray-200 text-left">SN</th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left">Product</th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left">Price</th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left">Quantity</th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                    {data.map((product,index)=>(
                    <tr key={product.id} className="border-b border-gray-200">
                        <td className="py-4 px-4">{index+1}</td>
                        <td className="py-4 px-4">{product.name}</td>
                        <td className="py-4 px-4">${product.price}</td>
                        <td className="py-4 px-4">{product.quantity}</td>
                        <td className="py-4 px-4">
                            <button className="border-solid border-2 border-indigo-600 py-2 px-4 mx-2">Edit</button>
                            <button className="border-solid border-2 border-indigo-600 py-2 px-4 mx-2">Delete</button>
                          
                        </td>
                    </tr>
                    ))}    

                    </tbody>
                </table>
                </div>
            </div>
            </section>
        </>
    )
}

export default Products