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
    tags: ["React", "Python", "AI/ML", "Data Analytics"],
  },
  {
    id: "nestify",
    title: "Nestify",
    description: "House mapping platform with AI location recommendations for rentals and accommodations. Helps users find properties in proximity to specific locations.",
    image: nestifyImage,
    tags: ["React", "AI", "Maps API", "Node.js"],
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A showcase of my work in web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
    </main>
  );
};

export default Projects;
