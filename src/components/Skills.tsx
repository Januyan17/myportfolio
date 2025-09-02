import { 
  Smartphone, 
  Code, 
  Database, 
  Server, 
  Globe, 
  Zap,
  Layers,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      technologies: ["Flutter", "Kotlin", "Java" , 'Swift']
    },
    {
      category: "Frontend",
      icon: <Code className="h-8 w-8" />,
      technologies: ["React", "TypeScript", "Vue.js", "Next.js"]
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8" />,
      technologies: ["Node.js", "Express", "SpringBoot", "REST APIs"]
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firestore"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Globe className="h-8 w-8" />,
      technologies: ["AWS", "Google Cloud", "Jenkins", "Sentry" , 'Firebase' , 'SuperBase']
    },
    {
      category: "Fintech",
      icon: <Zap className="h-8 w-8" />,
      technologies: ["Payment APIs", "Security", "Biometrics", "Analytics"]
    },
    {
      category: "Tools & Libraries",
      icon: <Layers className="h-8 w-8" />,
      technologies: ["Jira", "Trello", "Figma", "Postman",'MUI , RadixUI , ShadcnUI']
    },
    {
      category: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      technologies: ["Git", "GitHub", "GitLab", 'BitBucket']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className="skill-item p-6 rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4">
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">
                {skill.category}
              </h3>
              
              <div className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech}
                    className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">3.5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;