import { GraduationCap, MapPin, Calendar } from "lucide-react";
import profilePhoto from "@/assets/janu-2.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden card-elevated">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Building Digital Experiences
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with 3.5+ years of experience building robust mobile and web applications. I specialize in Flutter, Kotlin, Swift, and Next.js for front-end development, with Java and Node.js powering the backend, focusing on fintech and e-commerce solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg card-elevated">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="font-medium">Education</span>
                </div>
                <p className="text-muted-foreground">
                   Software Engineering,<br />
                  SLIIT
                </p>
              </div>

              <div className="p-4 rounded-lg card-elevated">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Location</span>
                </div>
                <p className="text-muted-foreground">
                  Jaffna, SriLanka
                </p>
              </div>

              <div className="p-4 rounded-lg card-elevated">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Experience</span>
                </div>
                <p className="text-muted-foreground">
                  3.5+ Years
                </p>
              </div>

              <div className="p-4 rounded-lg card-elevated">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="font-medium">Focus</span>
                </div>
                <p className="text-muted-foreground">
                  Mobile & Web Dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;