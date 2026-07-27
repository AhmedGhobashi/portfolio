import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "6+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Skills & Tools", value: "8+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Sultanate of Oman, Mascut" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "Cpmputer Engineer Graduate from HIET-KFS" },
  { icon: Coffee, text: "Powered by commitment & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "Ahmed Osama",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "John Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name:"Ali El-Sayed",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Gmail",
    value: "ahmed.osamaa2000@gmail.com",
    href: "#",
  },
  {
    icon: Phone,
    label: "Telegram",
    value: "+201505892698",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egypt, KFS",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/AhmedGhobashi", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmed-usama-46500a308/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/ahmedGhobashiAh", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Entry Full-Stack Developer",
    company: "fake company",
    period: "2026 - Present",
    description:
      "Leading development of enterprise SaaS products. ",
    technologies: ["React", "Node.js", "Next JS", "Strapi", "TypeScript"],
  },
  {
    type: "education",
    title: "BackEnd NextJS",
    company: "Online Youtube",
    period: "2026 - 2026",
    description:
      "Built and maintained multiple web applications. connecting backend with real databases and producing the APIs.",
    technologies: ["Next.js", "Typescript", "PostgreSQL", "prisma"],
  },
  {
    type: "work",
    title: "strengthens my react state management",
    company: "Kimz codes Academy",
    period: "2025 - 2026",
    description:
      "Specialized in FrontEnd and State management modern tools for scalable projects like (rtk).",
    technologies: ["React", "Redux Toolkit", "Performance Optimization"],
  },
  {
    type: "education",
    title: "Bachelor of Computer & Control Engineering",
    company: "HIET-KFS-Egypt",
    period: "2018 - 2024",
    description:
      "Strong foundation in data structures, electricity, mathematics, problem solving and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving", "Control", "AI"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/AhmedGhobashi", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmed-usama-46500a308/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/ahmedGhobashiAh", label: "Twitter" },
  { icon: Mail, href: "https://www.facebook.com/nandimonai.ghobashi", label: "Email" },
];

export const projects = [
  {
    title: "VastoSpaze landing page",
    description:
      "A landing page, using react, and bootstrap {smooth classy website}.",
    image: "/images/vasto.png",
    techStack: ["ReacrJS", "Bootstrap", "CSS"],
    demoUrl: "https://vastu-spaze-ghobashi.netlify.app/",
    githubUrl: "https://github.com/AhmedGhobashi/Vastu-Spaze",
  },
  {
    title: "socialMediaWebsite",
    description:
      "This is the final project as an application on Javascript course and bootstrab training and understanding the API and postman concepts",
    image: "/images/p2.jpg",
    techStack: ["Vanilla JS", "Node.js", "Bootstrap", "Axios"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/AhmedGhobashi/socialMediaWebsite",
  },
  {
    title: "BookStore-with-RTK",
    description:
      "This is a simple application using reduxToolkit/AsyncThunk",
    image: "/images/p3.jpg",
    techStack: ["React", "ReduxToolKit", "Bootstrap", "JsonServer"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/AhmedGhobashi/BookStore-with-RTK-",
  },
  {
    title: "My First Portfolio",
    description:
      "My first Portfolio with my first simple porjects ",
    image: "/images/p4.jpg",
    techStack: ["NextJS", "Node.js", "ReactJS", "ShadCN", "AOS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/AhmedGhobashi/portfolio",
  },
  {
    title: "NEXT JS Basic Project(posts)",
    description:
      "A basic website with: responsive design, authenticationand authorization ,flexible and secured CRUD methods, real database integration (prisma/postgresql), pagination",
    image: "/images/p5.jpg",
    techStack: ["Next js", "Prisma ORM", "Node.js", "React", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/AhmedGhobashi/next-js-phase1",
  },
  {
    title: "Tailwind-React-Landing-Page",
    description:
      "Educational Page to apply Tailwind CSS skills with react",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/AhmedGhobashi/Tailwind-React-Landing-Page",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Tailwind", icon: Smartphone },
      { name: "RTK", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Next 16", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "Cloudinary", icon: Cloud },
      { name: "CMD", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];