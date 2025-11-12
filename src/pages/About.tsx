const About = () => {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            I'm George Otieno Ngiye, a passionate web developer dedicated to creating
            exceptional digital experiences. With expertise in modern web technologies,
            I help businesses and individuals bring their ideas to life through
            clean, efficient, and scalable code.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            My journey in web development has equipped me with a diverse skill set,
            enabling me to tackle projects of any scale—from simple landing pages
            to complex enterprise applications.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
