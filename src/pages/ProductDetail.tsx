import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Truck, Shield, Star } from "lucide-react";
import bananasImage from "@/assets/bananas-product.jpg";
import onionsImage from "@/assets/onions-product.jpg";
import jaggeryImage from "@/assets/jaggery-product.jpg";
import pomegranatesImage from "@/assets/pomegranates-product.jpg";
import dragonFruitImage from "@/assets/dragon-fruit-product.jpg";
import riceImage from "@/assets/rice-product.jpg";

const ProductDetail = () => {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    bananas: {
      name: "Premium Cavendish Bananas",
      image: bananasImage,
      description: "Our premium Cavendish bananas are carefully selected from the finest farms in Maharashtra. Each banana is grade A quality, pre-cooled for freshness, and packed using international standards for global export.",
      packaging: [
        { size: "5kg cartons", description: "Perfect for retail distribution" },
        { size: "7kg cartons", description: "Standard export packaging" },
        { size: "13.5kg cartons", description: "Bulk retail orders" },
        { size: "16kg cartons", description: "Wholesale distribution" }
      ],
      specifications: [
        "Grade A quality bananas",
        "Pre-cooled at optimal temperature",
        "Reefer shipping capability",
        "Extended shelf life",
        "Export documentation included"
      ],
      features: [
        "Hand-picked selection",
        "Quality size grading",
        "Temperature controlled storage",
        "International shipping standards"
      ]
    },
    onions: {
      name: "Fresh & Processed Onions",
      image: onionsImage,
      description: "High-quality onions sourced directly from Maharashtra farms. Available in fresh, powder, and dried forms to meet diverse market requirements with excellent storage properties.",
      packaging: [
        { size: "5kg mesh bags", description: "Small retail packaging" },
        { size: "10kg mesh bags", description: "Standard retail size" },
        { size: "25kg jute bags", description: "Wholesale packaging" },
        { size: "50kg jute bags", description: "Bulk export orders" }
      ],
      specifications: [
        "Fresh red and white onions",
        "Onion powder (various mesh sizes)",
        "Dried onion flakes",
        "Low moisture content",
        "Firm texture for long storage"
      ],
      features: [
        "Multiple varieties available",
        "Firm texture",
        "Low moisture content",
        "Extended storage life"
      ]
    },
    jaggery: {
      name: "Pure Natural Jaggery",
      image: jaggeryImage,
      description: "Traditional Indian jaggery made from premium sugarcane using time-honored methods. Chemical-free and naturally processed for authentic taste and superior quality.",
      packaging: [
        { size: "1kg packs", description: "Consumer retail packaging" },
        { size: "5kg packs", description: "Family size packaging" },
        { size: "10kg packs", description: "Commercial use packaging" },
        { size: "Bulk orders", description: "Custom packaging available" }
      ],
      specifications: [
        "Pure jaggery blocks",
        "Jaggery powder (fine grade)",
        "Jaggery candy (traditional)",
        "Jaggery chocolate (premium)",
        "Jaggery chikki (specialty)"
      ],
      features: [
        "Chemical-free processing",
        "Traditional taste",
        "Natural sweetener",
        "Multiple product variants"
      ]
    },
    pomegranates: {
      name: "Export Quality Pomegranates",
      image: pomegranatesImage,
      description: "Premium pomegranates with deep red color, high antioxidant content, and exceptional taste. Size-graded and packed in ventilated cartons for international markets.",
      packaging: [
        { size: "Ventilated cartons", description: "Optimal air circulation" },
        { size: "Size graded packaging", description: "Uniform fruit sizes" },
        { size: "Export cartons", description: "International shipping ready" }
      ],
      specifications: [
        "Size-graded fruits",
        "Deep red color",
        "High juice content",
        "Export quality standards",
        "Extended shelf life"
      ],
      features: [
        "Farm fresh quality",
        "Size grading",
        "Ventilated packaging",
        "International standards"
      ]
    },
    "dragon-fruit": {
      name: "Fresh Dragon Fruit",
      image: dragonFruitImage,
      description: "Exotic dragon fruit in both red and white flesh varieties. Carefully harvested at optimal ripeness and packed with temperature control for international export.",
      packaging: [
        { size: "Export cartons", description: "Temperature controlled packaging" },
        { size: "Ventilated boxes", description: "Optimal air circulation" },
        { size: "Custom packaging", description: "Client-specific requirements" }
      ],
      specifications: [
        "Red flesh variety",
        "White flesh variety",
        "Optimal ripeness",
        "Temperature controlled shipping",
        "Extended shelf life"
      ],
      features: [
        "Exotic varieties",
        "Optimal ripeness",
        "Temperature control",
        "Export quality"
      ]
    },
    rice: {
      name: "Premium Long Grain Rice",
      image: riceImage,
      description: "High-quality Indian rice varieties with excellent grain length, aroma, and cooking properties. Processed and packed using modern techniques for global export.",
      packaging: [
        { size: "25kg sacks", description: "Standard export packaging" },
        { size: "50kg sacks", description: "Bulk commercial orders" },
        { size: "Custom packaging", description: "Client-specific requirements" },
        { size: "Private labeling", description: "Brand customization available" }
      ],
      specifications: [
        "Long grain varieties",
        "Premium Indian rice",
        "High grain integrity",
        "Excellent cooking properties",
        "Export grade quality"
      ],
      features: [
        "Premium varieties",
        "Long grain",
        "Export quality",
        "Custom packaging"
      ]
    }
  };

  const product = productData[productId as string];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        {/* Product Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-fresh-green">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Quote Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Packaging Options */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-fresh-green flex items-center">
                <Package className="w-6 h-6 mr-3" />
                Packaging Options
              </h2>
              <div className="space-y-4">
                {product.packaging.map((pack: any, index: number) => (
                  <div key={index} className="border-l-4 border-l-fresh-green pl-4">
                    <h3 className="font-semibold text-lg">{pack.size}</h3>
                    <p className="text-muted-foreground">{pack.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gold flex items-center">
                <Star className="w-6 h-6 mr-3" />
                Product Specifications
              </h2>
              <div className="space-y-3">
                {product.specifications.map((spec: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features & Quality */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                Quality Features
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="bg-secondary/50 p-4 rounded-lg text-center">
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-fresh-green flex items-center">
                <Truck className="w-6 h-6 mr-3" />
                Export Services
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Cold Chain Logistics</h3>
                    <p className="text-muted-foreground text-sm">Temperature-controlled shipping</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Complete Documentation</h3>
                    <p className="text-muted-foreground text-sm">All export paperwork handled</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Quality Certification</h3>
                    <p className="text-muted-foreground text-sm">International standards compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-fresh-green rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Custom Packaging</h3>
                    <p className="text-muted-foreground text-sm">Private labeling available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-fresh-green to-dark-green rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us for detailed quotes, minimum order quantities, and shipping information.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-gold text-dark-green hover:bg-gold/90">
            <Link to="/contact">
              Get Detailed Quote
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Footer Credit */}
      <div className="bg-muted/30 text-center py-2 text-xs text-muted-foreground">
        <p>Website created by Omkar Shitole</p>
      </div>
    </div>
  );
};

export default ProductDetail;