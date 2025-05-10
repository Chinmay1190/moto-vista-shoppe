
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvoiceTemplate from "@/components/InvoiceTemplate";
import { CheckCircle, Home, FileText } from "lucide-react";

interface OrderData {
  orderNumber: string;
  orderDate: string;
  items: any[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  customerDetails: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showInvoice, setShowInvoice] = useState(false);
  
  useEffect(() => {
    // Get order data from session storage
    const data = sessionStorage.getItem("orderData");
    
    if (data) {
      setOrderData(JSON.parse(data));
    } else {
      // If no order data, redirect to home
      navigate("/");
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center space-y-4">
            <div className="rounded-full bg-gray-200 dark:bg-race-darkgray h-16 w-16"></div>
            <div className="h-4 bg-gray-200 dark:bg-race-darkgray rounded w-48"></div>
            <div className="h-4 bg-gray-200 dark:bg-race-darkgray rounded w-64"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!orderData) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-lg mb-4">No Order Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We couldn't find any order information. Please try again.
            </p>
            <Button asChild className="btn-race">
              <Link to="/products">Continue Shopping</Link>
            </Button>
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
          {!showInvoice ? (
            <div className="bg-white dark:bg-race-darkgray rounded-lg shadow-lg p-8 text-center animate-fade-in">
              <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                <CheckCircle className="h-14 w-14 text-green-600 dark:text-green-400" />
              </div>
              
              <h1 className="heading-lg text-gray-900 dark:text-white mb-4">
                Thank You for Your Order!
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                Your order has been successfully placed.
              </p>
              
              <div className="mb-8 text-gray-600 dark:text-gray-400">
                <p>Order Number: <span className="font-semibold">{orderData.orderNumber}</span></p>
                <p>A confirmation email has been sent to <span className="font-semibold">{orderData.customerDetails.email}</span></p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="btn-race">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Return to Home
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setShowInvoice(true)}
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  View Invoice
                </Button>
              </div>
              
              <div className="mt-12 pt-8 border-t dark:border-race-darkgray text-left">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What's Next?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-race-black p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Order Processing</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Your order will be processed within 1-2 business days. We'll notify you when it ships.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-race-black p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Track Your Order</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You'll receive tracking information via email once your order ships.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-race-black p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Need Help?</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Our customer service team is available to assist you with any questions or concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="mb-6 flex justify-between items-center">
                <h1 className="heading-lg">Invoice</h1>
                <Button 
                  variant="outline"
                  onClick={() => setShowInvoice(false)}
                >
                  Back to Order Details
                </Button>
              </div>
              
              <InvoiceTemplate
                orderNumber={orderData.orderNumber}
                orderDate={orderData.orderDate}
                items={orderData.items}
                subtotal={orderData.subtotal}
                shipping={orderData.shipping}
                tax={orderData.tax}
                total={orderData.total}
                customerDetails={orderData.customerDetails}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
