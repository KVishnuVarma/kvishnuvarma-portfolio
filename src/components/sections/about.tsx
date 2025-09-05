import { personalDetails, education } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '../animated-section';
import type { LucideIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                {personalDetails.summary}
              </p>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => {
                  const Icon = edu.icon as LucideIcon;
                  return (
                    <Card key={index} className="bg-background">
                      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <div className="p-2 bg-primary/10 rounded-full">
                           <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-lg">{edu.degree}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        {edu.details && <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
