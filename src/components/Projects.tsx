import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Generate placeholder project images
  const generateProjectImage = (index: number) => {
    const colors = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    ];
    
    return {
      background: colors[index % colors.length],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold'
    };
  };

  const projects = [
    {
      title: "Commercial Bank (Maldives)",
      description: "Building a banking app that provides secure and convenient financial services, such as money transfers, payment requests, and various banking features. The app is designed to enhance user experience by enabling seamless financial management with real-time transaction tracking, account management, and customized notifications. Incorporating secure APIs to ensure data protection and adherence to industry regulations",
      technologies: [ "Flutter","Bloc", "Clean Architecture", "Springboot", "AWS", ],
      image: generateProjectImage(0),
      github: "#",
      demo: "#",
      type: "Mobile App"
    },
    {
      title: " DhiraaguPay (Maldives)",
      description: "Developed banking app offering secure and convenient financial services, including money transfers, payment requests, and additional banking functionalities. The app empowers users to manage their finances seamlessly with features like real-time transaction tracking, account management, and personalized notifications. Integrated using secure APIs to ensure safe data handling and compliance with industry standards",
      technologies: [ "Flutter","Bloc", "Clean Architecture", "Springboot", "AWS", ],
      image: generateProjectImage(1),
      github: "#",
      demo: "#",
      type: "Mobile App"
    },
    {
      title: "Cable Tv Application",
      description: "Developed a mobile app with REST API integration, featuring JWT authentication for secure access. Incorporated geolocation for real-time tracking, push notifications for timely updates, and OTP verification for enhanced security. Followed best practices in development, including testing and documentation, ensuring reliability and scalability",
      technologies: ["Kotlin", "Node.js", "MySql", "Socket.io",'Digital Ocean'],
      image: generateProjectImage(2),
      github: "#",
      demo: "#",
      type: "Full Stack"
    },
    {
      title: "Water Bill Collecting Agency",
      description: "Developed a mobile application and backend system with push notification capabilities, meter reading utilizing machine learning algorithms, and offline functionality. Integrated advanced features to ensure seamless user experience and data accuracy",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "ML Kit" , 'NodeJs' , "RiverPod"],
      image: generateProjectImage(3),
      github: "#",
      demo: "#",
      type: "Mobile App"
    },
    {
      title: "Dating Application",
      description: "Designed and developed a comprehensive mobile application with backend support, enabling push notifications and facilitating one-to-one messaging, video, and audio calls. Additionally, incorporated group messaging and group call functionalities, providing seamless communication experiences for users",
      technologies: ["Flutter", "Firebase", "WebRTC", "Provider"],
      image: generateProjectImage(4),
      github: "#",
      demo: "#",
      type: "Full Stack"
    },
    {
      title: "Manga Reading Platform",
      description: "Developed a responsive mobile app featuring push notification functionality, offline mode support,and single sign-on (SSO) integration. Ensured seamless user experience across devices with robust performance in both online and offline environments",
      technologies: ["Flutter","Nodejs", "MYSQL",'Digital Ocean' , 'GetX' ],
      image: generateProjectImage(5),
      github: "#",
      demo: "#",
      type: "Mobile App"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 project-image" style={project.image}>
              {project.title.split(' ').slice(0, 2).join(' ')}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    {project.type}
                  </span>
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs bg-muted/40 text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 btn-hero"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline-glow">
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;