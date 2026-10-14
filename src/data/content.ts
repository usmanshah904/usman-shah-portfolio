// All website text lives here. Edit this file to update the site;
// the layout components read from it and do not need to change.

import type { IconName } from '../components/Icon';

export type Category = 'genai' | 'web';

export const categoryLabels: Record<Category, string> = {
  genai: 'Gen AI',
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
    'I build AI agents, RAG pipelines, and LLM-powered products. I also build fast, clean websites that look great on every screen.',
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
    intro: 'Gen AI systems and the fast, clean websites people use them through.',
  },
  projects: {
    label: 'Projects',
    title: 'Selected work',
    intro: 'AI agents and websites I have designed and built.',
  },
  skills: { label: 'Skills', title: 'Tools and technologies' },
  experience: { label: 'Experience', title: "Where I've worked" },
};

export const about =
  'I am a Gen AI Engineer and Web Developer. I work with AI agents, RAG, and LLM-powered features, mostly in TypeScript and Python. I started in web development, so I care about both the engine and the interface, and I build things that are tested, reliable, and have real guardrails.';

// Short facts shown next to the About text.
export const aboutFacts = [
  { label: 'Focus', value: 'Gen AI and Web Development' },
  { label: 'Works mostly in', value: 'TypeScript and Python' },
  { label: 'Builds', value: 'AI agents, RAG, LLM features' },
  { label: 'Cares about', value: 'Tested, reliable work' },
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
        title: 'Gen AI and AI Agent Development',
        text: 'Single and multi-agent systems, tool use, memory, and safety guardrails.',
      },
      {
        icon: 'search',
        title: 'RAG and LLM Features',
        text: 'Add search over your own data and LLM-powered features to your product.',
      },
      {
        icon: 'chat',
        title: 'AI Chatbots and Assistants',
        text: 'Custom chatbots that answer questions from your website, documents, or knowledge base.',
      },
    ],
  },
  {
    group: 'Web Development',
    items: [
      {
        icon: 'code',
        title: 'Full-Stack Development',
        text: 'React and TypeScript apps with clean UI and automated tests.',
      },
      {
        icon: 'layout',
        title: 'WordPress Websites',
        text: 'Fast, responsive business websites built with Elementor and custom CSS.',
      },
      {
        icon: 'gauge',
        title: 'On-Page SEO and Speed',
        text: 'Keyword work, meta tags, internal links, and page speed fixes.',
      },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  url?: string; // leave out if there is no public link
}

export const projects: Project[] = [
  {
    title: 'Multi-Agent System with Google ADK and A2A',
    description:
      'Two agents, a Research Agent and a Summary Agent, talk to each other over the Agent2Agent protocol. The Summary Agent hands research tasks to the Research Agent and returns a final summary.',
    tags: ['Google ADK', 'A2A', 'Gemini', 'Python'],
    category: 'genai',
  },
  {
    title: 'Agent with Reflection and Guardrails',
    description:
      'A Python sales analysis tool wrapped in an AI agent that reviews its own output and blocks unsupported claims before release. Tested with deliberately wrong claims, all caught.',
    tags: ['Python', 'Claude Code', 'Agentic AI'],
    category: 'genai',
  },
  {
    title: 'Spec-Driven Smart Task Manager',
    description:
      'Built from a written specification first, then implemented with an AI coding agent. 20 out of 20 automated tests pass.',
    tags: ['React', 'TypeScript', 'Vite', 'Vitest'],
    category: 'genai',
  },
  {
    title: 'Self-Improving Agent with Persistent Memory',
    description:
      'An AI agent with a persistent memory store that retrieves and consolidates past memories to avoid duplicates. On its second run it recalls and applies the preferences it learned in the first.',
    tags: ['Python', 'Claude Code', 'Agent Memory', 'JSON'],
    category: 'genai',
  },
  {
    title: 'Vnetrix',
    description:
      'Website work for a UK IT managed services and hosting company. Responsive layouts, custom CSS, on-page SEO.',
    tags: ['WordPress', 'Elementor', 'CSS', 'SEO'],
    category: 'web',
    url: 'https://vnetrix.com',
  },
  {
    title: 'Usman Anees',
    description:
      'A responsive WordPress website with a clean layout, optimized media, and on-page SEO.',
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
    period: 'Sep 2026 – Present',
    location: 'Remote, USA',
    text: 'Building AI agents, RAG pipelines, and LLM-powered features across backend and frontend.',
    icon: 'agent',
    current: true,
    tags: ['AI Agents', 'RAG', 'LLM Features'],
  },
  {
    role: 'WordPress and SEO Intern',
    org: 'Ataraxy Developers',
    period: 'Dec 2025 – Apr 2026',
    location: 'Islamabad, Pakistan',
    text: 'Built and customized WordPress websites and improved on-page SEO for client projects.',
    icon: 'layout',
    tags: ['WordPress', 'On-Page SEO'],
  },
];

export const contact = {
  heading: "Let's work together",
  text: 'Open to Gen AI roles, web development projects, freelance work, and collaborations.',
};

// Contact form settings.
// To receive messages directly in your inbox, create a free access key at
// https://web3forms.com (enter sssusmanshah@gmail.com) and paste it below.
// While it is empty, the form opens the visitor's email app with their message filled in.
export const contactForm = {
  web3formsAccessKey: 'b5aa0a6d-0363-492a-ae13-93e3af921195',
  topics: ['Gen AI role', 'Web development project', 'Freelance work', 'Collaboration'],
  success: "Thanks for reaching out! Your message has been sent. I'll get back to you soon.",
  mailtoNotice: 'Your email app should open with your message ready to send.',
  error: 'Something went wrong while sending. Please try again, or email me directly.',
};

export const footer = {
  copyright: '© 2026 Usman Shah',
  tagline: 'Gen AI Engineer & Web Developer building AI agents, RAG pipelines, and fast, clean websites.',
};
