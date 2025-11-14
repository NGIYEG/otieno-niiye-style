const Stats = () => {
  const stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "15+", label: "Technologies" },
    { value: "5+", label: "Clients Served" },
  ];

  return (
    <section className="py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
