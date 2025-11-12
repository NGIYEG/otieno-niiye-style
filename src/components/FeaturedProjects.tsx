import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description: "Online store with inventory and payment integration.",
    image: "https://i.pinimg.com/736x/3b/be/0e/3bbe0e1baa1e2a23a19451ea2b849d50.jpg",
    tags: ["React", "Node.js", "WooCommerce"],
  },
  {
    id: "corporate-website",
    title: "Business/Corporate Website",
    description: "Custom WordPress theme for corporate clients.",
    image: "https://i.pinimg.com/736x/23/62/53/2362533bb08b7ee2a4901a26e2c948aa.jpg",
    tags: ["WordPress", "PHP", "JavaScript"],
  },
  {
    id: "pos-system",
    title: "POS System (Web + Desktop App)",
    description: "Multi-platform POS built with Electron, React, and Node.js.",
    image: "https://images.unsplash.com/photo-1726065235221-78562122baf3?w=1080&q=80",
    tags: ["Electron", "React", "Node.js", "MongoDB"],
  },
  {
    id: "mpesa-api",
    title: "MPesa API Integration",
    description: "Secure payment API integration into eCommerce systems.",
    image: "https://th.bing.com/th/id/R.20e671141b72ad9f6db9a4e2ab3d0a28?rik=uP4j%2bLQoH3ey2g&pid=ImgRaw&r=0",
    tags: ["MPesa API", "Python", "Django"],
  },
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Here are some of the projects I'm proud of.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(currentIndex, currentIndex + 2).concat(
              currentIndex === projects.length - 1 ? [projects[0]] : []
            ).map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="px-0">
                    <Link to={`/projects/${project.id}`}>View Case Study</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
