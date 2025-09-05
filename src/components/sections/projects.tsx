"use client";

import { projects } from '@/lib/portfolio-data';
import ProjectCard from '@/components/project-card';
import AnimatedSection from '../animated-section';

const Projects = () => {

  const handleProjectClick = (projectId: string) => {
    try {
      let history: string[] = JSON.parse(localStorage.getItem('projectViewingHistory') || '[]');
      
      // Add to start, remove duplicates, keep last 5
      const newHistory = [projectId, ...history.filter(id => id !== projectId)].slice(0, 5);
      
      localStorage.setItem('projectViewingHistory', JSON.stringify(newHistory));
    } catch (error) {
      console.error("Could not update project viewing history:", error);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
               <div key={project.id} onClick={() => handleProjectClick(project.id)} className="cursor-pointer">
                 <AnimatedSection delay={index * 100}>
                    <ProjectCard project={project} />
                 </AnimatedSection>
               </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
