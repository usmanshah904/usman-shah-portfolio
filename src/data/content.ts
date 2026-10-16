// All website text lives here. Edit this file to update the site;
// the layout components read from it and do not need to change.

import type { IconName } from '../components/Icon';

export type Category = 'genai' | 'software' | 'web';

export const categoryLabels: Record<Category, string> = {
  genai: 'Gen AI',
  software: 'Software',
  web: 'Web',
};

export const profile = {
  name: 'Usman Shah',
  role: 'Gen AI Engineer & Web Developer',
  email: 'sssusmanshah@gmail.com',
  phoneDisplay: '+92 333 9988968',
  phoneHref: 'tel:+923339988968',
  whatsapp: 'https://wa.me/923339988968',
  linkedin: 'https://www.linkedin.com/in/usman-shah-se/',
  linkedinDisplay: 'linkedin.com/in/usman-shah-se',
  resume: '/Usman_Resume.pdf',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  label: 'Gen AI  |  Web Development',
  headline: 'Gen AI Engineer & Web Developer',
  subtext:
    'I engineer AI agents, RAG pipelines, and LLM-powered applications, alongside fast, responsive websites built for seamless user experiences.',
};

// Scrolling strip of technologies under the hero.
export const techStrip = [
  'AI Agents',
  'RAG',
  'Google ADK',
  'A2A Protocol',
  'OpenAI API',
  'Claude',
  'Gemini',
  'Python',
  'TypeScript',
  'React',
  'WordPress',
  'SEO',
];

// Section labels, headings and short intros.
export const sections = {
  about: { label: 'About', title: 'The engine and the interface.' },
  services: {
    label: 'Services',
    title: 'What I can help with',
    intro: 'Intelligent AI solutions and high-performance websites, built with purpose.',
  },
  projects: {
    label: 'Projects',
    title: 'Selected work',
    intro: 'AI systems and web experiences engineered to solve real problems.',
  },
  skills: { label: 'Skills', title: 'Tools and technologies' },
  experience: { label: 'Experience', title: "Where I've worked" },
};

export const about =
  "I'm a Gen AI Engineer and Web Developer focused on AI agents, RAG, and LLM-powered applications. Working primarily with TypeScript and Python, I combine intelligent systems with thoughtful interfaces, prioritizing reliability, rigorous testing, and practical guardrails.";

// Short facts shown next to the About text.
export const aboutFacts = [
  { label: 'Focus', value: 'Gen AI & Web Engineering' },
  { label: 'Works mostly in', value: 'TypeScript & Python' },
  { label: 'Builds', value: 'AI Agents, RAG & LLM Apps' },
  { label: 'Cares about', value: 'Reliability, Testing & Quality' },
];

export interface Service {
  icon: IconName;
  title: string;
  text: string;
}

export const services: { group: string; items: Service[] }[] = [
  {
    group: 'Gen AI',
    items: [
      {
        icon: 'agent',
        title: 'AI Agent Engineering',
        text: 'Build single and multi-agent systems with tool integration, persistent memory, and reliable guardrails.',
      },
      {
        icon: 'search',
        title: 'RAG & LLM Integration',
        text: 'Connect your data to LLM-powered applications through contextual retrieval and intelligent search.',
      },
      {
        icon: 'chat',
        title: 'AI Chatbots & Assistants',
        text: 'Create conversational assistants that deliver relevant answers from your content and knowledge sources.',
      },
    ],
  },
  {
    group: 'Web Development',
    items: [
      {
        icon: 'code',
        title: 'Full-Stack Development',
        text: 'Build modern React and TypeScript applications with clean interfaces, maintainable code, and automated tests.',
      },
      {
        icon: 'layout',
        title: 'WordPress Development',
        text: 'Develop polished, responsive business websites with Elementor, custom CSS, and tailored layouts.',
      },
      {
        icon: 'gauge',
        title: 'On-Page SEO & Performance',
        text: 'Strengthen search visibility through optimized metadata, strategic internal linking, and performance improvements.',
      },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  url?: string; // live website; leave out if there is no public link
  github?: string; // source repository
  diagram?: 'a2a' | 'guardrails'; // animated architecture diagram used as the card cover
}

export const projects: Project[] = [
  {
    title: 'Multi-Agent System with Google ADK and A2A',
    description:
      'Two specialized agents collaborate through A2A, enabling research delegation and structured summaries powered by Google ADK and Gemini.',
    tags: ['Google ADK', 'A2A', 'Gemini', 'Python'],
    category: 'genai',
    github: 'https://github.com/usmanshah904/adk-a2a-multi-agent',
    diagram: 'a2a',
  },
  {
    title: 'AI Agent with Reflection & Guardrails',
    description:
      'An AI-powered sales analyst that evaluates its own findings and blocks unsupported claims through a dedicated validation and governance layer.',
    tags: ['Python', 'Claude Code', 'Agentic AI'],
    category: 'genai',
    github: 'https://github.com/usmanshah904/reflection-guardrails-agent',
    diagram: 'guardrails',
  },
  {
    title: 'Spec-Driven Smart Task Manager',
    description:
      'A React and TypeScript task manager built from a structured specification, featuring task workflows, search, filtering, persistent storage, and 20 passing automated tests.',
    tags: ['React', 'TypeScript', 'Vite', 'Vitest'],
    category: 'software',
  },
  {
    title: 'Self-Improving Agent with Persistent Memory',
    description:
      'A memory-enabled AI agent that retrieves and consolidates past interactions, then applies relevant context to improve responses across successive runs.',
    tags: ['Python', 'Claude Code', 'Agent Memory', 'JSON'],
    category: 'genai',
  },
  {
    title: 'Vnetrix',
    description:
      'Contributed to a UK IT services website, refining responsive layouts, custom styling, and on-page SEO for a consistent, professional web experience.',
    tags: ['WordPress', 'Elementor', 'CSS', 'SEO'],
    category: 'web',
    url: 'https://vnetrix.com',
  },
  {
    title: 'Usman Anees',
    description:
      'Developed a responsive WordPress website with a refined layout, optimized media, integrated plugins, and search-friendly content structure.',
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    category: 'web',
    url: 'https://usmananees.com',
  },
];

// The first two groups are shown side by side on desktop.
export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Gen AI',
    items: [
      'AI Agents',
      'Multi-Agent Systems',
      'RAG',
      'LLM Integration',
      'Prompt Engineering',
      'Google ADK',
      'A2A Protocol',
      'OpenAI API',
      'Claude',
    ],
  },
  {
    group: 'Web Development',
    items: ['WordPress', 'Elementor', 'React', 'HTML', 'CSS', 'SEO', 'Responsive Design'],
  },
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Backend and Data', items: ['Neo4j', 'Temporal', 'REST APIs'] },
  { group: 'Automation and Testing', items: ['n8n', 'Vitest', 'React Testing Library'] },
  { group: 'Cloud and Tools', items: ['AWS (EC2, S3, IAM)', 'Git', 'GitHub'] },
];

export const experience: {
  role: string;
  org?: string;
  period: string;
  location: string;
  text: string;
  icon: IconName;
  current?: boolean;
  tags: string[];
}[] = [
  {
    role: 'Gen AI Engineer',
    org: 'Mosaic AI',
    period: 'Sep 2026 – Present',
    location: 'Remote, USA',
    text: 'Engineering AI agents, RAG pipelines, and LLM-powered features across backend and frontend systems.',
    icon: 'agent',
    current: true,
    tags: ['AI Agents', 'RAG', 'LLM Features'],
  },
  {
    role: 'WordPress and SEO Intern',
    org: 'Ataraxy Developers',
    period: 'Dec 2025 – Apr 2026',
    location: 'Islamabad, Pakistan',
    text: 'Built and customized responsive WordPress websites and strengthened on-page SEO for client projects.',
    icon: 'layout',
    tags: ['WordPress', 'On-Page SEO'],
  },
];

export const contact = {
  heading: "Let's work together",
  text: 'Open to Gen AI engineering roles, AI and web projects, freelance work, and collaborations.',
};

// Contact form settings.
// To receive messages directly in your inbox, create a free access key at
// https://web3forms.com (enter sssusmanshah@gmail.com) and paste it below.
// While it is empty, the form opens the visitor's email app with their message filled in.
export const contactForm = {
  web3formsAccessKey: 'b5aa0a6d-0363-492a-ae13-93e3af921195',
  topics: ['Gen AI engineering role', 'AI or web project', 'Freelance work', 'Collaboration'],
  success: "Thanks for reaching out! Your message has been sent. I'll get back to you soon.",
  mailtoNotice: 'Your email app should open with your message ready to send.',
  error: 'Something went wrong while sending. Please try again, or email me directly.',
};

export const footer = {
  copyright: '© 2026 Usman Shah',
  tagline: 'Gen AI Engineer building AI agents, RAG pipelines, and LLM-powered applications, with modern web development.',
};
