import { skills } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '../animated-section';

const skillCategories = [
  { title: "Programming", skills: skills.programming },
  { title: "Frontend", skills: skills.frontend },
  { title: "Backend", skills: skills.backend },
  { title: "Database", skills: skills.database },
  { title: "Tools & Platforms", skills: skills.tools },
  { title: "Other Skills", skills: skills.other },
  { title: "Soft Skills", skills: skills.soft },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Technical Proficiency
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="font-headline text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
