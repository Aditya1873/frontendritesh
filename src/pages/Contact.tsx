import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your inquiry.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Something went wrong");

      toast({
        title: "Inquiry Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Failed to send inquiry",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-fresh-green">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to explore premium Indian agricultural products? Get in touch with us for quotes and inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-fresh-green">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you with all your agricultural export needs. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      AP: Pimpalgaon, Tal: Daund,<br />
                      Dist: Pune, Maharashtra, 412214
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:rjinternationaltraders9711@gmail.com" className="text-muted-foreground hover:text-fresh-green transition-colors">
                      rjinternationaltraders9711@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card with Call Buttons */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-fresh-green bg-gradient-to-r from-fresh-green/5 to-gold/5">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-3">Phone / WhatsApp</h3>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => window.location.href = "tel:+919168839711"} 
                        className="bg-fresh-green hover:bg-dark-green text-white w-full"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call +91 9168839711
                      </Button>

                      <Button 
                        onClick={() => window.location.href = "tel:+917028564362"} 
                        variant="outline" 
                        className="w-full"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call +91 9175314747
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram Card */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a href="https://instagram.com/rj_international_traders" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-fresh-green transition-colors">
                      @rj_international_traders
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-fresh-green">Send Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Customer Name *</Label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="mt-1" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email ID *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="mt-1" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="mt-1" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements, quantities, destinations, etc." className="mt-1 min-h-[120px]" required />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted/30 text-center py-2 text-xs text-muted-foreground">
        <p>Website created by Omkar Shitole</p>
      </div>
    </div>
  );
};

export default Contact;
