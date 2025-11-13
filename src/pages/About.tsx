import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import profileImage from "@/assets/george-profile.jpg";

const About = () => {
  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "Django", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "Firebase", "Supabase", "Git"
  ];

  const careerJourney = [
    {
      year: "2023 - Present",
      title: "Full-Stack Web Developer",
      description: "Building modern web applications and delivering innovative solutions for clients across various industries."
    },
    {
      year: "2022 - 2023",
      title: "PoliagentX Development",
      description: "Created a policy tracking and monitoring platform that tracks government spending and development outcomes."
    },
    {
      year: "2022",
      title: "Nestify Platform",
      description: "Developed an AI-powered house mapping platform with intelligent location recommendations for rentals and accommodations."
    }
  ];

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profileImage} 
                alt="George Otieno Ngiye"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-primary">George</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Web Developer dedicated to building modern, 
              responsive, and high-performing web experiences. I thrive on solving 
              complex problems and creating digital solutions that are both functional 
              and beautiful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in building everything from business websites for startups 
              to complex web applications for enterprises, I leverage a wide range of 
              modern tools and technologies to bring ideas to life. My goal is to create 
              tailored solutions that not only meet but exceed client expectations.
            </p>
            <Button className="gap-2" size="lg">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
            <p className="text-muted-foreground">Tools and technologies I use to build things.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <Card key={tech} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="font-medium text-center">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Journey Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h2>
            <p className="text-muted-foreground">A brief look at my professional milestones.</p>
          </div>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {careerJourney.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-48 flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
