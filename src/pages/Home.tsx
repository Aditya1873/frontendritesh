import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Leaf, Star, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import bananasImage from "@/assets/bananas-product.jpg";
import onionsImage from "@/assets/onions-product.jpg";
import jaggeryImage from "@/assets/jaggery-product.jpg";
import pomegranatesImage from "@/assets/pomegranates-product.jpg";
import dragonFruitImage from "@/assets/dragon-fruit-product.jpg";
import riceImage from "@/assets/rice-product.jpg";

const Home = () => {
  const products = [
    { name: "Bananas", image: bananasImage, description: "Premium Cavendish Bananas", link: "/products/bananas" },
    { name: "Onions", image: onionsImage, description: "Fresh & Dried Varieties", link: "/products/onions" },
    { name: "Jaggery", image: jaggeryImage, description: "Natural Pure Jaggery", link: "/products/jaggery" },
    { name: "Pomegranates", image: pomegranatesImage, description: "Export Quality Fruits", link: "/products/pomegranates" },
    { name: "Dragon Fruit", image: dragonFruitImage, description: "Fresh Exotic Varieties", link: "/products/dragon-fruit" },
    { name: "Rice", image: riceImage, description: "Premium Long Grain", link: "/products/rice" },
  ];

  const highlights = [
    {
      icon: Leaf,
      title: "Farm Fresh Produce",
      description: "Directly sourced from certified farms across Maharashtra for maximum freshness and quality."
    },
    {
      icon: Globe,
      title: "Global Export & Logistics",
      description: "Seamless international shipping with cold chain logistics and complete export documentation."
    },
    {
      icon: Shield,
      title: "Quality You Can Trust",
      description: "Rigorous quality control, size grading, and residue testing ensure premium standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(155, 55, 25, 0.7), rgba(155, 65, 15, 0.8)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              RJ International Traders
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-medium">
              Freshness from Indian Farms to the World
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Trusted global supplier of Bananas, Onions, Jaggery, Pomegranates, Dragon Fruit & Rice
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-gold text-dark-green hover:bg-gold/90 text-lg px-8 py-6">
              <Link to="/contact">
                Enquire Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-fresh-green to-dark-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fresh-green">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fresh-green">
              Our Products at a Glance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium agricultural products exported globally with guaranteed quality and freshness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-fresh-green">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" asChild className="w-full group-hover:bg-fresh-green group-hover:text-white transition-colors duration-300">
                    <Link to={product.link}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Service Section */}
      <section className="py-20 bg-gradient-to-r from-fresh-green to-dark-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Quality You Can See, Trust You Can Taste</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Leaf className="w-12 h-12 mb-4 text-gold" />
              <h3 className="font-semibold mb-2">Direct Sourcing</h3>
              <p className="text-sm opacity-90">From certified farmers</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 mb-4 text-gold" />
              <h3 className="font-semibold mb-2">Quality Testing</h3>
              <p className="text-sm opacity-90">Size grading & residue testing</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-12 h-12 mb-4 text-gold" />
              <h3 className="font-semibold mb-2">Cold Chain Logistics</h3>
              <p className="text-sm opacity-90">Reefer shipment worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 mb-4 text-gold" />
              <h3 className="font-semibold mb-2">Custom Packaging</h3>
              <p className="text-sm opacity-90">Private labeling available</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Credit */}
      <div className="bg-muted/30 text-center py-2 text-xs text-muted-foreground">
        <p>Website created by Omkar Shitole</p>
      </div>
    </div>
  );
};

export default Home;