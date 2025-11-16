import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, ShoppingCart, Smartphone, Database, MonitorSmartphone, Search } from "lucide-react";

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
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
