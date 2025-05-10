
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { formatIndianPrice } from "@/data/products";
import { CartItem } from "@/contexts/CartContext";
import { Printer } from "lucide-react";

interface InvoiceTemplateProps {
  orderNumber: string;
  orderDate: string;
  items: CartItem[];
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

const InvoiceTemplate = ({
  orderNumber,
  orderDate,
  items,
  subtotal,
  shipping,
  tax,
  total,
  customerDetails
}: InvoiceTemplateProps) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: `Invoice-${orderNumber}`,
    // Using the correct property for react-to-print
    printable: invoiceRef.current,
    onPrintCapture: () => invoiceRef.current,
  });

  return (
    <div className="mb-8">
      <Button 
        onClick={handlePrint} 
        className="mb-4 flex items-center gap-2"
      >
        <Printer className="w-4 h-4" />
        Print Invoice
      </Button>
      
      <div ref={invoiceRef} className="bg-white dark:bg-race-black p-6 rounded-lg shadow-sm border dark:border-race-darkgray max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="font-racing text-2xl text-race-red">SuperBikes</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">123 Race Track Road</p>
            <p className="text-gray-600 dark:text-gray-400">Mumbai, Maharashtra 400001</p>
            <p className="text-gray-600 dark:text-gray-400">India</p>
            <p className="text-gray-600 dark:text-gray-400">info@superbikes.com</p>
            <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
          </div>
          
          <div className="mt-4 md:mt-0 md:text-right">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">INVOICE</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1"><span className="font-semibold">Invoice #:</span> {orderNumber}</p>
            <p className="text-gray-600 dark:text-gray-400"><span className="font-semibold">Date:</span> {orderDate}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Bill To:</h3>
          <p className="text-gray-600 dark:text-gray-400">{customerDetails.name}</p>
          <p className="text-gray-600 dark:text-gray-400">{customerDetails.address}</p>
          <p className="text-gray-600 dark:text-gray-400">{customerDetails.city}, {customerDetails.state} {customerDetails.postalCode}</p>
          <p className="text-gray-600 dark:text-gray-400">{customerDetails.country}</p>
          <p className="text-gray-600 dark:text-gray-400">{customerDetails.email}</p>
        </div>
        
        <table className="min-w-full bg-white dark:bg-race-black border dark:border-race-darkgray">
          <thead>
            <tr className="bg-gray-50 dark:bg-race-darkgray text-left text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              <th className="px-4 py-3 border-b dark:border-race-darkgray">Item</th>
              <th className="px-4 py-3 border-b dark:border-race-darkgray">Color</th>
              <th className="px-4 py-3 border-b dark:border-race-darkgray">Qty</th>
              <th className="px-4 py-3 border-b dark:border-race-darkgray">Unit Price</th>
              <th className="px-4 py-3 border-b dark:border-race-darkgray">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-400">
            {items.map((item, index) => (
              <tr key={index} className="border-b dark:border-race-darkgray">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0 mr-2 hidden md:block">
                      <img
                        className="h-full w-full rounded object-cover"
                        src={item.product.images[0]}
                        alt={item.product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.product.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.product.brand}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{item.color}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">{formatIndianPrice(item.product.price)}</td>
                <td className="px-4 py-3">{formatIndianPrice(item.product.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-8 flex justify-end">
          <div className="text-right w-full md:w-1/3">
            <div className="flex justify-between border-t dark:border-race-darkgray pt-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Subtotal:</span>
              <span className="text-gray-700 dark:text-gray-300">{formatIndianPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">Shipping:</span>
              <span className="text-gray-700 dark:text-gray-300">{formatIndianPrice(shipping)}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">Tax (18% GST):</span>
              <span className="text-gray-700 dark:text-gray-300">{formatIndianPrice(tax)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t dark:border-race-darkgray mt-1">
              <span className="font-bold text-lg text-gray-900 dark:text-white">Total:</span>
              <span className="font-bold text-lg text-race-red">{formatIndianPrice(total)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t dark:border-race-darkgray">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Payment terms: Due on receipt. Please make payment to bank account XXXX-XXXX-XXXX-1234.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Thank you for your business!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
