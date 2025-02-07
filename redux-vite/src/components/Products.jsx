import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../ProductSlice";
// import Cart from "./Cart";
import Navbar from "./Navbar";


const url = "https://67a3a5e231d0d3a6b78440d6.mockapi.io/prds";


function Products() {

    const [products, setProducts] = React.useState([]);
    const count = useSelector((state) => state.product.count);
    const productss = useSelector(state => state.product.products);



    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setProducts(response.data);


        });
    }, []);

    async function addToCart(Id) {
        // console.log(Id);

        await axios.put(`${url}/${Id}`, {
            isDeleted: false
        })

        const response = await axios.get(`${url}/${Id}`);
        const product = response.data;

        // Dispatch the action with the resolved data
        dispatch(increment(product));





    }
    // function addToCheckout() {

    //     return (
    //         productss.map((prd) => (

    //             <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow">
    //                 <div className="p-6">
    //                     <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>


    //                     <div className="space-y-4">

    //                         <div className="flex items-center justify-between p-4 border-b border-gray-200">
    //                             <div className="flex items-center space-x-4">
    //                                 <img
    //                                     src="/api/placeholder/80/80"
    //                                     alt="Product"
    //                                     className="w-16 h-16 object-cover rounded"
    //                                 />
    //                                 <div>
    //                                     <h3 className="font-medium text-gray-900">{prd.name}</h3>
    //                                     <p className="text-gray-600">$99.99</p>
    //                                 </div>
    //                             </div>

    //                             <div className="flex items-center space-x-4">
    //                                 <div className="flex items-center space-x-2">
    //                                     <button className="p-1 rounded hover:bg-gray-100">

    //                                     </button>
    //                                     <span className="w-8 text-center">1</span>
    //                                     <button className="p-1 rounded hover:bg-gray-100">

    //                                     </button>
    //                                 </div>
    //                                 <button className="p-1 text-red-500 hover:bg-red-50 rounded">

    //                                 </button>
    //                             </div>
    //                         </div>


    //                         <div className="flex items-center justify-between p-4 border-b border-gray-200">
    //                             <div className="flex items-center space-x-4">
    //                                 <img
    //                                     src="/api/placeholder/80/80"
    //                                     alt="Product"
    //                                     className="w-16 h-16 object-cover rounded"
    //                                 />
    //                                 <div>
    //                                     <h3 className="font-medium text-gray-900">Smartphone Case</h3>
    //                                     <p className="text-gray-600">$24.99</p>
    //                                 </div>
    //                             </div>

    //                             <div className="flex items-center space-x-4">
    //                                 <div className="flex items-center space-x-2">
    //                                     <button className="p-1 rounded hover:bg-gray-100">

    //                                     </button>
    //                                     <span className="w-8 text-center">2</span>
    //                                     <button className="p-1 rounded hover:bg-gray-100">

    //                                     </button>
    //                                 </div>
    //                                 <button className="p-1 text-red-500 hover:bg-red-50 rounded">

    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </div>


    //                     <div className="mt-6 pt-6 border-t border-gray-200">
    //                         <div className="flex justify-between text-base font-medium text-gray-900">
    //                             <p>Subtotal</p>
    //                             <p>$124.98</p>
    //                         </div>
    //                         <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
    //                         <div className="mt-6">
    //                             <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700">
    //                                 Checkout
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))
    //     );



    // }



    return (

        <>
            <Navbar />
            {/* <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                    
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-gray-800">Store</span>
                        </div>

                       
                        <div className="relative">
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <div className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    {count > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {count}
                                        </span>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav> */}
            <div>
                {products.map((prd) => (
                    <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <div className="relative h-48 bg-gray-100">
                            <img
                                src="/api/placeholder/400/320"
                                alt="Product"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                            <span className="absolute top-3 left-3 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
                                New
                            </span>
                        </div>


                        < div className="p-5" >
                            <div className="mb-2">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{prd.name}</h3>
                                <p className="text-sm text-gray-500">{prd.desc}</p>
                            </div>


                            < div className="flex items-center justify-between mb-4" >
                                <div className="flex items-baseline">
                                    <span className="text-2xl font-bold text-gray-800">{prd.price}</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">$399</span>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>


                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors" onClick={() => { addToCart(prd.id) }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                Add to Cart
                            </button>
                        </div >


                    </div>

                ))}
                {/* <button onClick={() => { addToCheckout }}>
                    Go to Checkout
                </button> */}
            </div>

            {console.log(productss)}
        </>
    );
};






export default Products;