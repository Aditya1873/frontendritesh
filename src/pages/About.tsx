import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Users, Leaf, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-fresh-green">
            About RJ International Traders
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded by Mr. Ritesh B. Jagtap, we connect Indian farmers to global buyers with honesty, quality, and efficiency.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-fresh-green">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                RJ International Traders, founded by <strong>Mr. Ritesh B. Jagtap</strong>, is a trusted supplier and exporter of farm-fresh Indian produce. Based in Daund, Pune (Maharashtra), we work directly with farmers to ensure quality, sustainable sourcing, and timely deliveries.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We specialize in premium bananas, onions, jaggery, pomegranates, dragon fruit, and rice — catering to both domestic and international markets with unwavering commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our deep understanding of agricultural processes, combined with modern export practices, enables us to deliver exceptional products that meet global quality standards.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-fresh-green shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-fresh-green mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-fresh-green">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To connect Indian farmers to global buyers with honesty, quality, and efficiency, creating sustainable value for all stakeholders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gold shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      Delivering agricultural excellence with strong customer relationships and sustainable practices that benefit farmers, customers, and communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-fresh-green">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-fresh-green to-dark-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-fresh-green">Sustainability</h3>
                <p className="text-muted-foreground">
                  Supporting eco-friendly farming practices and sustainable agricultural development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gold">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  Maintaining the highest standards in product quality and customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">Global Reach</h3>
                <p className="text-muted-foreground">
                  Connecting local farmers with international markets through reliable export services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-fresh-green">Leadership</h2>
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-fresh-green to-dark-green rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2 text-fresh-green">Ritesh B. Jagtap</h3>
                    <p className="text-gold font-semibold mb-2">Founder & Managing Director</p>
                    <p className="text-muted-foreground">
                      Leading RJ International Traders with a vision to transform Indian agriculture exports through quality, integrity, and innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default About;