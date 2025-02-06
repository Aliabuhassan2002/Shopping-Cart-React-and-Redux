// import React from 'react';
// import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../ProductSlice";

// const Cart = () => {

//     const productss = useSelector(state => state.product.products);
//     return (
//         <>
//             {productss.map((prd) => (

//                 <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow">
//                     <div className="p-6">
//                         <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

//                         {/* Cart Items */}
//                         <div className="space-y-4">
//                             {/* Cart Item 1 */}
//                             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//                                 <div className="flex items-center space-x-4">
//                                     <img
//                                         src="/api/placeholder/80/80"
//                                         alt="Product"
//                                         className="w-16 h-16 object-cover rounded"
//                                     />
//                                     <div>
//                                         <h3 className="font-medium text-gray-900">{prd.name}</h3>
//                                         <p className="text-gray-600">$99.99</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center space-x-4">
//                                     <div className="flex items-center space-x-2">
//                                         <button className="p-1 rounded hover:bg-gray-100">
//                                             <Minus size={16} />
//                                         </button>
//                                         <span className="w-8 text-center">1</span>
//                                         <button className="p-1 rounded hover:bg-gray-100">
//                                             <Plus size={16} />
//                                         </button>
//                                     </div>
//                                     <button className="p-1 text-red-500 hover:bg-red-50 rounded">
//                                         <Trash2 size={16} />
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Cart Item 2 */}
//                             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//                                 <div className="flex items-center space-x-4">
//                                     <img
//                                         src="/api/placeholder/80/80"
//                                         alt="Product"
//                                         className="w-16 h-16 object-cover rounded"
//                                     />
//                                     <div>
//                                         <h3 className="font-medium text-gray-900">Smartphone Case</h3>
//                                         <p className="text-gray-600">$24.99</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center space-x-4">
//                                     <div className="flex items-center space-x-2">
//                                         <button className="p-1 rounded hover:bg-gray-100">
//                                             <Minus size={16} />
//                                         </button>
//                                         <span className="w-8 text-center">2</span>
//                                         <button className="p-1 rounded hover:bg-gray-100">
//                                             <Plus size={16} />
//                                         </button>
//                                     </div>
//                                     <button className="p-1 text-red-500 hover:bg-red-50 rounded">
//                                         <Trash2 size={16} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Cart Summary */}
//                         <div className="mt-6 pt-6 border-t border-gray-200">
//                             <div className="flex justify-between text-base font-medium text-gray-900">
//                                 <p>Subtotal</p>
//                                 <p>$124.98</p>
//                             </div>
//                             <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                             <div className="mt-6">
//                                 <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700">
//                                     Checkout
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}

//         </>
//     );
// };

// export default Cart;