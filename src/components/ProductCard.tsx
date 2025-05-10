
import { Link } from "react-router-dom";
import { Product } from "@/contexts/CartContext";
import { formatIndianPrice } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="bike-card group">
      <div className="relative overflow-hidden rounded-lg bg-white dark:bg-race-darkgray shadow-sm animate-fade-in border dark:border-race-darkgray">
        <div className="aspect-h-3 aspect-w-4 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {product.brand}
              </p>
            </div>
            <Badge variant="outline" className="bg-race-red/10 text-race-red border-race-red/20 dark:bg-race-red/20">
              {product.category}
            </Badge>
          </div>
          
          <div className="mt-3 flex justify-between items-center">
            <p className="text-lg font-semibold text-race-red">
              {formatIndianPrice(product.price)}
            </p>
            <div className="px-3 py-1 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black font-medium transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
              View Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
