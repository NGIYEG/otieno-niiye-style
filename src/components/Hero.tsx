import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-primary">George Otieno Ngiye</span>
          <span className="text-foreground"> — a Web Developer building </span>
          <span className="text-primary">modern, responsive,</span>
          <span className="text-foreground"> and </span>
          <span className="font-black">high-performing</span>
          <span className="text-foreground"> web experiences.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          I create tailored digital solutions — from eCommerce platforms to custom web apps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link to="/services">Request Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
