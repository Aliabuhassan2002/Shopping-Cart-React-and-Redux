// import React from 'react';
// import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../ProductSlice";
// import Navbar from "./Navbar";


// const Cart = () => {

//     const productss = useSelector(state => state.product.products);
//     return (
//         <>
//             <Navbar />
//             {productss.map((prd) => (


//                 <div>
//                     <h3 className="font-medium text-gray-900">{prd.name}</h3>
//                     <p className="text-gray-600">$99.99</p>
//                 </div>







//             ))}

//         </>
//     );
// };

// export default Cart;



import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, increment } from "../ProductSlice";
import { Trash2, Plus, Minus } from 'lucide-react';
import Navbar from "./Navbar";
import axios from "axios";


const Cart = () => {
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch();
    const url = "https://67a3a5e231d0d3a6b78440d6.mockapi.io/prds";
    const calculateTotal = () => {
        return products.reduce((total, product) => total + 99.99, 0).toFixed(2);
    };

    async function DleteFromCart(Id) {

        // await axios.put(`${url}/${Id}`, {
        //     isDeleted: true
        // })

        dispatch(deleteProduct(Id));






    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Products List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow">
                            {products.length === 0 ? (
                                <div className="p-8 text-center">
                                    <p className="text-gray-500">Your cart is empty</p>
                                </div>
                            ) : (
                                products.map((prd, index) => (


                                    !prd.isDeleted ? (

                                        <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
                                            <div className="flex items-center gap-6">
                                                {/* Product Image */}
                                                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <img
                                                        src="/api/placeholder/96/96"
                                                        alt={prd.name}
                                                        className="w-16 h-16 object-cover"
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-medium text-gray-900">{prd.name}</h3>
                                                    <p className="text-gray-500 mt-1">{prd.desc}</p>

                                                    <div className="mt-4 flex items-center gap-4">
                                                        <div className="flex items-center border rounded-lg">
                                                            <button className="p-2 hover:bg-gray-50">
                                                                <Minus className="w-4 h-4 text-gray-600" />
                                                            </button>
                                                            <span className="px-4 py-2 text-gray-900">1</span>
                                                            <button className="p-2 hover:bg-gray-50">
                                                                <Plus className="w-4 h-4 text-gray-600" />
                                                            </button>
                                                        </div>

                                                        <button className="text-red-500 hover:text-red-600" onClick={() => { DleteFromCart(prd.id) }}>
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <p className="text-lg font-medium text-gray-900">{prd.price}</p>
                                                </div>
                                            </div>
                                        </div>

                                    ) : null

                                ))
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900">${calculateTotal()}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-gray-900">Free</span>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-medium text-gray-900">Total</span>
                                        <span className="text-lg font-medium text-gray-900">${calculateTotal()}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;