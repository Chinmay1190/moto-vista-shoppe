
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { formatIndianPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(6, "Postal code must be at least 6 digits"),
  cardNumber: z.string().min(16, "Card number must be 16 digits").max(16, "Card number must be 16 digits"),
  cardName: z.string().min(1, "Cardholder name is required"),
  expiryDate: z.string().min(5, "Expiry date is required").max(5, "Expiry date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be 3 digits").max(4, "CVV cannot exceed 4 digits"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Shipping is free
  const shipping = 0;
  
  // GST 18% in India
  const tax = totalPrice * 0.18;
  
  const finalTotal = totalPrice + shipping + tax;
  
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    },
  });
  
  // If cart is empty, redirect to products page
  if (items.length === 0) {
    navigate("/products");
    return null;
  }
  
  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate order number
      const orderNumber = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
      
      // Format date for invoice
      const orderDate = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      
      // Store order data in session storage for use in success page
      sessionStorage.setItem("orderData", JSON.stringify({
        orderNumber,
        orderDate,
        items,
        subtotal: totalPrice,
        shipping,
        tax,
        total: finalTotal,
        customerDetails: {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          address: data.address,
          city: data.city,
          state: data.state,
          postalCode: data.postalCode,
          country: "India",
        },
      }));
      
      // Clear cart
      clearCart();
      
      // Navigate to success page
      navigate("/order-success");
      
      setIsSubmitting(false);
    }, 2000);
  };
  
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .slice(0, 16);
  };
  
  const formatExpiryDate = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length > 2) {
      return `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    return value;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="heading-lg mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Checkout form */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-race-darkgray rounded-lg shadow p-6 mb-6 animate-fade-in">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Shipping Information</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main Street" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Mumbai" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input placeholder="Maharashtra" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="400001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Payment Information</h2>
                    
                    <div className="mb-6">
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="1234 5678 9012 3456" 
                                value={field.value}
                                onChange={(e) => {
                                  field.onChange(formatCardNumber(e.target.value));
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cardholder Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry Date</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="MM/YY" 
                                  value={field.value}
                                  onChange={(e) => {
                                    field.onChange(formatExpiryDate(e.target.value));
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="123" 
                                  type="password" 
                                  maxLength={4}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        type="submit" 
                        className="btn-race w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : `Pay ${formatIndianPrice(finalTotal)}`}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-race-darkgray rounded-lg shadow p-6 sticky top-24 animate-fade-in">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h2>
                
                <div className="flow-root mb-6">
                  <ul className="divide-y divide-gray-200 dark:divide-race-darkgray">
                    {items.map((item) => (
                      <li key={`${item.product.id}-${item.color}`} className="py-4 flex">
                        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.product.name}
                            </h3>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {item.color} × {item.quantity}
                          </p>
                          <p className="mt-1 text-sm font-medium text-race-red">
                            {formatIndianPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
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
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
