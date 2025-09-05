"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import LoadingScreen from '@/components/loading-screen';
import RecommendedProjects from '@/components/sections/recommended-projects';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic debounce for loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <div className={`flex flex-col min-h-screen bg-background transition-opacity duration-1000 ${!loading ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <RecommendedProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
