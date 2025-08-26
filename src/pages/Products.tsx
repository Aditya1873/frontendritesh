import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck } from "lucide-react";
import bananasImage from "@/assets/bananas-product.jpg";
import onionsImage from "@/assets/onions-product.jpg";
import jaggeryImage from "@/assets/jaggery-product.jpg";
import pomegranatesImage from "@/assets/pomegranates-product.jpg";
import dragonFruitImage from "@/assets/dragon-fruit-product.jpg";
import riceImage from "@/assets/rice-product.jpg";

const Products = () => {
  const products = [
    {
      id: "bananas",
      name: "Bananas",
      subtitle: "Premium Cavendish Bananas",
      image: bananasImage,
      description: "Grade A, pre-cooled, reefer-shipped premium bananas",
      packaging: ["5kg cartons", "7kg cartons", "13.5kg cartons", "16kg cartons"],
      features: ["Pre-cooled", "Grade A quality", "Reefer shipping", "Export ready"],
    },
    {
      id: "onions",
      name: "Onions",
      subtitle: "Fresh & Processed Varieties",
      image: onionsImage,
      description: "Firm, low-moisture, export-ready onions in multiple formats",
      packaging: ["5kg mesh bags", "10kg mesh bags", "25kg jute bags", "50kg jute bags"],
      features: ["Fresh onions", "Onion powder", "Dried onions", "Low moisture"],
    },
    {
      id: "jaggery",
      name: "Jaggery",
      subtitle: "Pure Natural Sweetener",
      image: jaggeryImage,
      description: "Chemical-free, traditional taste jaggery products",
      packaging: ["1kg packs", "5kg packs", "10kg packs", "Bulk orders"],
      features: ["Jaggery powder", "Jaggery candy", "Jaggery chocolate", "Jaggery chikki"],
    },
    {
      id: "pomegranates",
      name: "Pomegranates",
      subtitle: "Export Quality Fruits",
      image: pomegranatesImage,
      description: "Size-graded, farm fresh pomegranates in ventilated cartons",
      packaging: ["Ventilated cartons", "Size graded", "Export packaging"],
      features: ["Fresh quality", "Size graded", "Farm fresh", "Long shelf life"],
    },
    {
      id: "dragon-fruit",
      name: "Dragon Fruit",
      subtitle: "Exotic Fresh Varieties",
      image: dragonFruitImage,
      description: "Fresh red/white flesh varieties with export packaging",
      packaging: ["Export cartons", "Temperature controlled", "Fresh varieties"],
      features: ["Red flesh variety", "White flesh variety", "Long shelf life", "Export quality"],
    },
    {
      id: "rice",
      name: "Rice",
      subtitle: "Premium Long Grain",
      image: riceImage,
      description: "Premium Indian rice varieties in export-ready packaging",
      packaging: ["25kg sacks", "50kg sacks", "Bulk orders", "Custom packaging"],
      features: ["Long grain", "Premium quality", "Export ready", "Indian varieties"],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-fresh-green">
            Our Premium Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our range of premium agricultural products, carefully sourced and packaged for global export markets.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-fresh-green">{product.name}</h3>
                    <p className="text-gold font-semibold mb-3">{product.subtitle}</p>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Package className="w-4 h-4 mr-2 text-fresh-green" />
                        Packaging Options
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.packaging.map((pack, index) => (
                          <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                            {pack}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-fresh-green" />
                        Available Varieties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <span key={index} className="bg-light-green/20 text-fresh-green px-2 py-1 rounded-md text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button variant="default" asChild className="mt-auto">
                    <Link to={`/products/${product.id}`}>
                      Get {product.name} Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-gradient-to-r from-fresh-green to-dark-green text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Quality You Can See, Trust You Can Taste</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Direct Sourcing</h3>
              <p className="text-sm opacity-90">From certified farmers</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Size Grading</h3>
              <p className="text-sm opacity-90">& residue testing</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Custom Packaging</h3>
              <p className="text-sm opacity-90">& private labeling</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cold Chain</h3>
              <p className="text-sm opacity-90">& reefer shipment</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Credit */}
      <div className="bg-muted/30 text-center py-2 text-xs text-muted-foreground">
        <p>Website created by Omkar Shitole</p>
      </div>
    </div>
  );
};

export default Products;