import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductEdit()
{
    const { slug } = useParams(); 
    const [product, setProduct] = useState({
      name: '',
      price: '',
      quantity: '',
      description: '',
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/product/${slug}`);
          setProduct(response.data.product);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [slug]);
    console.log(product);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({
        ...product,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`http://localhost:8000/product/${slug}`, product);
        console.log('Product updated successfully:', response.data);
        
      } catch (error) {
        console.error('Error updating product:', error);
        
      }
    };

    if (loading) return <p>Loading...</p>;
  
    return (
        <>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Edi Product</h2>
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Name"
                            required
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-semibold mb-2">
                            Price
                        </label>
                        <input
                            type="price"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Price"
                            required
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 text-sm font-semibold mb-2">
                            Quantity
                        </label>
                        <input
                            type="quantity"
                            id="quantity"
                            name="quantity"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Price"
                            required
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your message"
                            rows="4"
                            required
                        ></textarea>
                        </div>
                        <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                        Update
                        </button>
                    </form>
                    </div>
                </div>
                </section>
        </>
    )
}

export default ProductEdit