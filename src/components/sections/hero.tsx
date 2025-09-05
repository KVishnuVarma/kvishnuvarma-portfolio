import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { personalDetails } from '@/lib/portfolio-data';
import { Github, Linkedin, ArrowDown, Mail } from 'lucide-react';
import AnimatedSection from '../animated-section';

const Hero = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background -z-10">
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[length:32px_32px]" style={{
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%,#000 70%,transparent 100%)"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="relative w-40 h-40 mb-6">
                <Image
                    src="/profile.jpg"
                    alt="KALIDINDI VISHNU DATTA RAGHU VARMA"
                    width={160}
                    height={160}
                    className="rounded-full object-cover border-4 border-primary shadow-lg"
                    priority
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
              {personalDetails.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body">
              {personalDetails.title}
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <Button onClick={(e) => handleScrollTo(e, '#projects')}>
                View My Work
                <ArrowDown/>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                  Contact Me
                  <Mail />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href={personalDetails.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
