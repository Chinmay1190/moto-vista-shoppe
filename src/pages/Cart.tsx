
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { formatIndianPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Trash2, AlertCircle, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Shipping is free
  const shipping = 0;
  
  // GST 18% in India
  const tax = totalPrice * 0.18;
  
  const finalTotal = totalPrice + shipping + tax;
  
  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };
  
  const handleRemoveItem = (productId: number) => {
    removeItem(productId);
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 dark:bg-race-darkgray h-12 w-12"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-race-darkgray rounded w-36"></div>
              <div className="h-4 bg-gray-200 dark:bg-race-darkgray rounded w-24"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="heading-lg mb-8">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="bg-white dark:bg-race-darkgray shadow rounded-lg p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 dark:bg-race-black mb-4">
                <AlertCircle className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-3">Your cart is empty</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Looks like you haven't added any bikes to your cart yet.
              </p>
              <Button asChild className="btn-race">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-8">
                <div className="bg-white dark:bg-race-darkgray rounded-lg shadow p-6 mb-8 animate-fade-in">
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-race-darkgray">
                      {items.map((item) => (
                        <li key={`${item.product.id}-${item.color}`} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="ml-4 flex-1 flex flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                  <Link to={`/product/${item.product.id}`}>
                                    {item.product.name}
                                  </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                  Brand: {item.product.brand}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                  Color: {item.color}
                                </p>
                              </div>
                              
                              <p className="text-lg font-medium text-race-red">
                                {formatIndianPrice(item.product.price)}
                              </p>
                            </div>
                            
                            <div className="flex-1 flex items-end justify-between">
                              <div className="flex items-center">
                                <button
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                  className="bg-gray-100 dark:bg-race-black text-gray-600 dark:text-gray-400 h-8 w-8 rounded-l border dark:border-race-darkgray flex items-center justify-center"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (!isNaN(val)) handleQuantityChange(item.product.id, val);
                                  }}
                                  className="h-8 w-14 text-center border-t border-b dark:border-race-darkgray dark:bg-race-darkgray"
                                />
                                <button
                                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                  className="bg-gray-100 dark:bg-race-black text-gray-600 dark:text-gray-400 h-8 w-8 rounded-r border dark:border-race-darkgray flex items-center justify-center"
                                >
                                  +
                                </button>
                              </div>
                              
                              <button
                                type="button"
                                onClick={() => handleRemoveItem(item.product.id)}
                                className="text-gray-500 hover:text-race-red flex items-center"
                              >
                                <Trash2 className="h-5 w-5" />
                                <span className="sr-only">Remove</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/products')}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Continue Shopping
                  </Button>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-4">
                <div className="bg-white dark:bg-race-darkgray rounded-lg shadow p-6 animate-fade-in">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h2>
                  
                  <div className="flow-root">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="text-gray-600 dark:text-gray-400">Subtotal</div>
                        <div className="font-medium text-gray-900 dark:text-white">{formatIndianPrice(totalPrice)}</div>
                      </div>
                      
                      <div className="flex justify-between">
                        <div className="text-gray-600 dark:text-gray-400">Shipping</div>
                        <div className="font-medium text-gray-900 dark:text-white">{formatIndianPrice(shipping)}</div>
                      </div>
                      
                      <div className="flex justify-between">
                        <div className="text-gray-600 dark:text-gray-400">Tax (18% GST)</div>
                        <div className="font-medium text-gray-900 dark:text-white">{formatIndianPrice(tax)}</div>
                      </div>
                      
                      <div className="border-t border-gray-200 dark:border-race-darkgray pt-4 flex justify-between">
                        <div className="text-base font-medium text-gray-900 dark:text-white">Total</div>
                        <div className="text-xl font-bold text-race-red">{formatIndianPrice(finalTotal)}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="btn-race w-full"
                      size="lg"
                      asChild
                    >
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
