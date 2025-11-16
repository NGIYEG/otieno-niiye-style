import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Code2, ShoppingCart, Smartphone, Database, MonitorSmartphone, Search } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment integration and inventory management.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that work seamlessly across all devices.",
  },
  {
    icon: Database,
    title: "API Integration",
    description: "Connect your systems with third-party services and APIs.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your website's visibility and ranking in search engines.",
  },
];

const Services = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleRequestQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setMessage(`I'm interested in your ${serviceTitle} service. `);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name, email, message }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your quote request has been sent successfully!",
      });

      // Clear form and close dialog
      setName("");
      setEmail("");
      setMessage("");
      setIsDialogOpen(false);
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Professional web development services tailored to your needs.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleRequestQuote(service.title)}
                  className="w-full"
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[120px]"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Quote Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Services;
