import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/portfolio-data';
import type { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon as LucideIcon;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Icon className="h-5 w-5 text-primary"/>
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4 ">{project.description}</p>
        <div>
            <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="font-normal">{tech}</Badge>
            ))}
            </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 mt-auto">
        <div className="flex w-full justify-end gap-2">
            {project.githubUrl && (
                <Button variant="outline" size="sm" asChild onClick={stopPropagation}>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github />
                        GitHub
                    </Link>
                </Button>
            )}
            {project.liveUrl && (
                 <Button variant="default" size="sm" asChild onClick={stopPropagation}>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <LinkIcon />
                        Live Demo
                    </Link>
                </Button>
            )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
