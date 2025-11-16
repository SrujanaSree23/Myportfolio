export const SkillsSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "C",
    "Java",
    "Python",
    "SQL",
    "Git & GitHub",
    "VS Code",
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                text-white
                px-5 py-2
                rounded-md
                text-center
                shadow-lg
                border border-white/20
                hover:border-primary
                hover:bg-white/20
                transition
                w-full
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
