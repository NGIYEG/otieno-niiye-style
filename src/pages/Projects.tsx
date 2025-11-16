import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import poliagentxImage from "@/assets/poliagentx-hero.jpg";
import nestifyImage from "@/assets/nestify-hero.jpg";

const projects = [
  {
    id: "poliagentx",
    title: "PoliagentX",
    description: "Policy tracking and monitoring tool that tracks government spending and outcomes. A development predictive platform.",
    image: poliagentxImage,
    tags: ["Django", "Python", "AI/ML", "Data Analytics"],
    status: "Under Development",
  },
  {
    id: "nestify",
    title: "Nestify",
    description: "House mapping platform with AI location recommendations for rentals and accommodations. Helps users find properties in proximity to specific locations.",
    image: nestifyImage,
    tags: ["Django","React", "Maps API", "Node.js"],
    status: "Under Development",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h2>
          <p className="text-muted-foreground">A showcase of my work in software development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 blur-sm"
                />
                <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur">
                  {project.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
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
      </div>
    </section>
  );
};

export default Projects;