
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { products, formatIndianPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
  ChevronDown
} from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Product Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The product you are looking for does not exist or has been removed.
            </p>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
  };
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const nextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % product.images.length
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + product.images.length) % product.images.length
    );
  };
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-6">
            <ol className="list-none p-0 inline-flex text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <button 
                  onClick={() => navigate('/')}
                  className="hover:text-race-red dark:hover:text-race-red"
                >
                  Home
                </button>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <button 
                  onClick={() => navigate('/products')}
                  className="hover:text-race-red dark:hover:text-race-red"
                >
                  Bikes
                </button>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <button 
                  onClick={() => navigate(`/products?category=${product.category}`)}
                  className="hover:text-race-red dark:hover:text-race-red"
                >
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Bikes
                </button>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="text-gray-900 dark:text-white">
                {product.name}
              </li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border dark:border-race-darkgray bg-white dark:bg-race-darkgray shadow-sm aspect-h-3 aspect-w-4">
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white p-2 rounded-full shadow-sm"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <img 
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="h-full w-full object-cover product-image-zoom"
                />
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white p-2 rounded-full shadow-sm"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex space-x-2 overflow-x-auto py-1">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition ${
                      currentImageIndex === index 
                        ? "border-race-red" 
                        : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-2">
                <Badge variant="outline" className="bg-race-red/10 text-race-red border-race-red/20">
                  {product.category}
                </Badge>
                <span className="text-gray-600 dark:text-gray-400">{product.brand}</span>
              </div>
              
              <h1 className="heading-lg text-gray-900 dark:text-white mb-4">{product.name}</h1>
              
              <p className="text-2xl font-bold text-race-red mb-6">
                {formatIndianPrice(product.price)}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {product.description}
              </p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Colors</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative rounded-full h-10 w-10 flex items-center justify-center border ${
                        selectedColor === color 
                          ? "border-race-red" 
                          : "border-gray-300 dark:border-gray-700"
                      }`}
                    >
                      <span className="sr-only">{color}</span>
                      <span 
                        className="h-6 w-6 rounded-full" 
                        style={{ backgroundColor: color.includes('/') ? 'lightgray' : color }}
                      />
                      {selectedColor === color && (
                        <span className="absolute -right-1 -top-1 rounded-full bg-race-red text-white h-5 w-5 flex items-center justify-center">
                          <Check className="h-3 w-3" />
                        </span>
                      )}
                      {color.includes('/') && (
                        <span className="absolute bottom-[-20px] text-[11px] font-medium whitespace-nowrap text-gray-700 dark:text-gray-300">
                          {color}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="bg-gray-100 dark:bg-race-darkgray text-gray-600 dark:text-gray-400 h-8 w-8 rounded-l border dark:border-race-darkgray flex items-center justify-center"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val)) handleQuantityChange(val);
                    }}
                    className="h-8 w-14 text-center border-t border-b dark:border-race-darkgray dark:bg-race-darkgray"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="bg-gray-100 dark:bg-race-darkgray text-gray-600 dark:text-gray-400 h-8 w-8 rounded-r border dark:border-race-darkgray flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <Button 
                onClick={handleAddToCart}
                className="btn-race w-full flex items-center justify-center gap-2 mb-6"
                size="lg"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              
              {/* Product details tabs */}
              <div className="mt-8">
                <Tabs defaultValue="specs">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  </TabsList>
                  <TabsContent value="specs" className="mt-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 dark:text-gray-400">Engine</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.specs.engine}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 dark:text-gray-400">Power</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.specs.power}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 dark:text-gray-400">Torque</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.specs.torque}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 dark:text-gray-400">Weight</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.specs.weight}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 dark:text-gray-400">Top Speed</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.specs.topSpeed}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 dark:text-gray-400">Fuel Capacity</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.specs.fuelCapacity}</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="mt-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Advanced rider assistance systems</li>
                      <li>Racing-inspired aerodynamic design</li>
                      <li>Premium suspension for optimal handling</li>
                      <li>High-performance braking system</li>
                      <li>Digital instrument cluster with connectivity features</li>
                      <li>Multiple riding modes for different conditions</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="shipping" className="mt-4">
                    <div className="space-y-4 text-gray-600 dark:text-gray-400">
                      <p>We offer free delivery across India for all our superbike models.</p>
                      <p>Typical delivery time is 7-14 business days, depending on your location and bike availability.</p>
                      <p>All bikes come with a standard 2-year manufacturer warranty and 24/7 roadside assistance.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <h2 className="heading-md mb-6">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
