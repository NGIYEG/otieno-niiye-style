import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink, GitBranch, Star } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/george-profile.jpg";
import resumePDF from "@/assets/resume.pdf"; // Add your resume PDF here

interface GitHubEvent {
  id: string;
  type: string;
  actor: { login: string };
  repo: { name: string };
  payload: {
    ref?: string;
    action?: string;
  };
  created_at: string;
}

const About = () => {
  const [githubEvents, setGithubEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NGIYEG/events/public?per_page=10");
        if (!response.ok) throw new Error("Failed to fetch GitHub events");
        const data = await response.json();
        setGithubEvents(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();
  }, []);

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "Django", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "Firebase", "Supabase", "Git", "Docker"
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

  const getEventIcon = (type: string) => {
    if (type.includes("Push")) return <GitBranch className="h-4 w-4" />;
    if (type.includes("Star")) return <Star className="h-4 w-4" />;
    return <GitBranch className="h-4 w-4" />;
  };

  const getEventDescription = (event: GitHubEvent) => {
    const { type, payload, repo } = event;
    const repoName = repo.name;

    if (type === "PushEvent") {
      return `pushed to ${payload.ref?.split("/").pop()} in ${repoName}`;
    } else if (type === "CreateEvent") {
      return `created a branch in ${repoName}`;
    } else if (type === "WatchEvent") {
      return `starred ${repoName}`;
    } else if (type === "PullRequestEvent") {
      return `${payload.action} pull request in ${repoName}`;
    }
    return `${type} in ${repoName}`;
  };

  const getTimeAgo = (date: string) => {
    const now = new Date();
    const eventDate = new Date(date);
    const diffMs = now.getTime() - eventDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "George-Otieno-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="George Otieno Ngiye"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <Button onClick={handleDownloadResume} className="gap-2" size="lg">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* GitHub Activity Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
            <p className="text-muted-foreground">A glimpse into my recent coding endeavors.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {loading ? (
              <div className="text-center text-muted-foreground py-8">Loading GitHub activity...</div>
            ) : error ? (
              <div className="text-center text-red-500 py-8">Failed to load GitHub activity</div>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xl font-bold">📍 Latest Public Events</span>
                  </div>
                  
                  <div className="space-y-4">
                    {githubEvents.slice(0, 6).map((event) => (
                      <div key={event.id} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                        <div className="text-primary mt-1">
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{getEventDescription(event)}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {getTimeAgo(event.created_at)}
                          </p>
                        </div>
                        <a
                          href={`https://github.com/${event.repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://github.com/NGIYEG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View Full GitHub Profile
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

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