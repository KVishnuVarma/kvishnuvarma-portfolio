"use client";

import { useState, useEffect } from 'react';
import type { Project } from '@/lib/portfolio-data';
import { projects } from '@/lib/portfolio-data';
import { getPersonalizedRecommendations } from '@/ai/flows/personalized-project-recommendations';
import ProjectCard from '@/components/project-card';
import { Loader2 } from 'lucide-react';
import AnimatedSection from '../animated-section';

const RecommendedProjects = () => {
  const [recommendations, setRecommendations] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const historyJSON = localStorage.getItem('projectViewingHistory');
        if (!historyJSON || JSON.parse(historyJSON).length < 2) {
          setLoading(false);
          return;
        }
        
        const result = await getPersonalizedRecommendations({ viewingHistory: historyJSON });

        if (result.recommendedProjects && result.recommendedProjects.length > 0) {
          const recommended = projects.filter(p => result.recommendedProjects.includes(p.id) && !JSON.parse(historyJSON).includes(p.id));
          setRecommendations(recommended.slice(0, 3)); // Show max 3 recommendations
        }
      } catch (err) {
        console.error("Failed to get recommendations:", err);
      } finally {
        setLoading(false);
      }
    };

    // Delay fetching to allow for user interaction
    const timer = setTimeout(fetchRecommendations, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || recommendations.length === 0) {
    return null;
  }
  
  return (
    <section id="recommendations" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RecommendedProjects;
