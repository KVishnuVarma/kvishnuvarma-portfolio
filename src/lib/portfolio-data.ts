import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Code, Star, Bot, Link as LinkIcon, CheckSquare } from 'lucide-react';

export const personalDetails = {
  name: "KALIDINDI VISHNU DATTA RAGHU VARMA",
  title: "Computer Science Student & Full-Stack Developer",
  location: "Kakinada, Andhra Pradesh, India",
  email: "kalidindivishnuvarma@gmail.com",
  phone: "+91-9381462553",
  portfolio: "#",
  linkedin: "https://www.linkedin.com/in/vishnu-varma-kalidindi/",
  github: "https://github.com/KVishnuVarma",
  summary: "Software developer with expertise in the MERN stack. Experience in building real-world applications, delivering user-friendly and responsive solutions throughout the development stack. Developed innovative solutions to address real-world challenges through code. Actively Enhanced Problem-solving Skills through efficient programming techniques in Java. Collaborated effectively to deliver clean, scalable and efficient code.",
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KIET Group of Institutions, Andhra Pradesh",
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Kakatiya University, Telangana",
    details: "70%",
    icon: GraduationCap,
  },
];

export const skills = {
  programming: ["Java", "Python", "JavaScript"],
  frontend: ["React.js", "HTML5", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  database: ["MongoDB", "NoSQL"],
  tools: ["Git", "GitHub", "Postman", "Vercel"],
  other: ["Prompt Engineering", "Responsive Web Design"],
  soft: ["Teamwork", "Time Management"],
};

export const professionalExperience = [
  {
    role: "Full Stack Developer",
    company: "Code Clash – Online Coding Platform",
    icon: Briefcase,
    points: [
      "Designed a comprehensive web application for coding contests, incorporating problem uploads, contest scheduling, and a code editor; implemented robust user authentication protocols, resulting in zero security breaches.",
      "Engineered key application functionalities encompassing problem uploads, contest scheduling, code editor, user scoring, and leaderboard features, ensuring seamless operation for over 100 coding competitions run on the platform.",
      "Introduced a mandatory code review process using GitHub pull requests, reducing code defects by 15% and improving code quality.",
      "Led a team of five developers in implementing sprint reviews and retrospectives, improving code quality by 25% and increasing team collaboration.",
      "Engineered the front-end architecture with React.js, enhancing UI responsiveness by 40% and cutting page load times by 2 seconds, leading to a 15% higher user engagement rate.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  dataAiHint: string;
  icon: LucideIcon;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "code-clash",
    title: "Code Clash – Online Judge Platform",
    description: "A coding contest platform with role-based access for users and admins.",
    features: ["Problem uploads", "Automatic code evaluation", "Real-time leaderboard updates"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: "https://picsum.photos/600/400",
    dataAiHint: "coding programming",
    icon: Code,
    githubUrl: "https://github.com/KVishnuVarma/Code_clash",
    liveUrl: "http://codeclashv.vercel.app/",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "A platform to manage restaurant operations including reservations, orders, and table tracking.",
    features: ["OTP verification for orders", "Chatbot for booking assistance", "Multiple user roles (admin, delivery, customer)"],
    techStack: ["React.js", "Node.js", "MongoDB", "Twilio API"],
    image: "https://picsum.photos/600/401",
    dataAiHint: "restaurant food",
    icon: Bot,
    githubUrl: "https://github.com/KVishnuVarma/resturant-s-page",
  },
  {
    id: "photography-portfolio",
    title: "Photography Portfolio Website",
    description: "A portfolio to display photography work using interactive layouts and transitions.",
    features: ["Fast load times", "Mobile responsive design", "Smooth visual experience"],
    techStack: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
    image: "https://picsum.photos/600/402",
    dataAiHint: "photography camera",
    icon: Star,
    githubUrl: "https://github.com/KVishnuVarma/phani-photography",
  },
  {
    id: "task-manager",
    title: "Todo App",
    description: "A collaborative tool to manage tasks and projects.",
    features: ["Kanban board", "Real-time updates", "User authentication", "Drag and drop interface"],
    techStack: ["React.js", "Tailwind CSS"],
    image: "https://picsum.photos/600/404",
    dataAiHint: "tasks productivity",
    icon: CheckSquare,
    githubUrl: "https://github.com/KVishnuVarma/Todo-App",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration.",
    features: ["Product catalog", "Shopping cart", "Secure checkout with Stripe", "Order history"],
    techStack: ["React", "Redux", "Node.js", "Stripe"],
    image: "https://picsum.photos/600/403",
    dataAiHint: "shopping online",
    icon: Star,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A simple and elegant weather forecasting application.",
    features: ["Real-time weather data", "5-day forecast", "Search by city", "Geolocation support"],
    techStack: ["Vue.js", "OpenWeatherMap API"],
    image: "https://picsum.photos/600/405",
    dataAiHint: "weather forecast",
    icon: Bot,
  },
];
