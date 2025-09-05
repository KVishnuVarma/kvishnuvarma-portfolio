import { professionalExperience } from '@/lib/portfolio-data';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../animated-section';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
            {professionalExperience.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-primary ring-4 ring-secondary"></div>
                <div className="md:flex items-start md:gap-8">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <h3 className="text-xl font-headline font-semibold">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className={`mt-4 md:mt-0 md:w-1/2 ${index % 2 === 0 ? '' : ''}`}>
                    <ul className="space-y-3">
                      {exp.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                          <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
