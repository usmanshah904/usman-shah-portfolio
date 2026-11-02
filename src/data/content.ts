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
  github: 'https://github.com/usmanshah904',
  resume: '/Usman_Resume.pdf',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  label: 'Gen AI  |  Web Development',
  headline: 'Gen AI Engineer & Web Developer',
  subtext:
    'I engineer AI agents, RAG pipelines, and LLM-\u2060powered applications, alongside fast, responsive websites built for seamless user experiences.',
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
  about: { label: 'About', title: 'The craft behind the code.' },
  services: {
    label: 'Services',
    title: 'What I can help with',
    intro: 'Intelligent AI solutions and high-\u2060performance websites, built with purpose.',
  },
  projects: {
    label: 'Projects',
    title: "Things I've built",
    intro: 'AI systems and web experiences engineered to solve real problems.',
  },
  skills: { label: 'Skills', title: 'Tools and technologies' },
  experience: { label: 'Experience', title: "Where I've worked" },
};

export const about =
  "I'm a Gen AI Engineer and Web Developer focused on AI agents, RAG, and LLM-\u2060powered applications. Working primarily with TypeScript and Python, I combine intelligent systems with thoughtful interfaces, prioritizing reliability, rigorous testing, and practical guardrails.";

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
        text: 'Build single and multi-\u2060agent systems with tool integration, persistent memory, and reliable guardrails.',
      },
      {
        icon: 'search',
        title: 'RAG & LLM Integration',
        text: 'Connect your data to LLM-\u2060powered applications through contextual retrieval and intelligent search.',
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
        title: 'Full-\u2060Stack Development',
        text: 'Build modern React and TypeScript applications with clean interfaces, maintainable code, and automated tests.',
      },
      {
        icon: 'layout',
        title: 'WordPress Development',
        text: 'Develop polished, responsive business websites with Elementor, custom CSS, and tailored layouts.',
      },
      {
        icon: 'gauge',
        title: 'On-\u2060Page SEO & Performance',
        text: 'Strengthen search visibility through optimized metadata, strategic internal linking, and performance improvements.',
      },
    ],
  },
];

export interface ProjectMedia {
  label: string; // tab name, e.g. "Dashboard" or "Architecture"
  src: string;
  width: number;
  height: number;
  alt: string;
  kind?: 'shot' | 'diagram' | 'site'; // site: tall screenshot that scrolls on hover
}

export interface Project {
  title: string;
  category: Category;
  challenge: string;
  built: string[];
  stack: string[];
  output: string;
  media: ProjectMedia[];
  url?: string; // live website; leave out if there is no public link
  github?: string; // repository with the demo and details
}

// Shown under the output of every project that has a repository.
export const githubNote = 'For the demo and more details, visit the GitHub repository.';

export const projects: Project[] = [
  {
    title: 'Multi-\u2060Agent System with Google ADK and A2A',
    category: 'genai',
    challenge: 'Let independent AI agents work together across services without tightly coupling their code.',
    built: [
      'A summary agent that delegates research to a remote research agent over the A2A protocol.',
      'The remote agent is discovered through its published Agent Card and called as a tool.',
      'Model and service addresses are configurable, so each agent can run and scale on its own.',
    ],
    stack: ['Python', 'Google ADK', 'A2A Protocol', 'Gemini'],
    output:
      'The ADK web interface showing the live agent traces, plus an architecture diagram of how the agents connect.',
    media: [
      {
        label: 'Agent traces',
        src: '/projects/a2a-traces.webp',
        width: 1280,
        height: 703,
        alt: 'ADK web interface showing the trace of the summary agent calling the research agent over A2A',
      },
      {
        label: 'Architecture',
        src: '/projects/arch-a2a.svg',
        width: 1200,
        height: 600,
        alt: 'Architecture: the summary agent discovers the research agent through its Agent Card and calls it over A2A',
        kind: 'diagram',
      },
    ],
    github: 'https://github.com/usmanshah904/adk-a2a-multi-agent',
  },
  {
    title: 'AI Agent with Reflection and Guardrails',
    category: 'genai',
    challenge: 'Make sure an AI-\u2060written business analysis is accurate before anyone reads it.',
    built: [
      'Claude writes a sales summary from real figures, and a reflection step checks every number.',
      'An independent governance guardrail blocks unsupported claims.',
      "Only an analysis that passes both is released; if a review can't be read, it stays blocked.",
    ],
    stack: ['Python', 'Claude', 'pandas'],
    output:
      'An HTML report for every run showing whether the analysis was released or blocked and why, an audit log, and an architecture diagram of the pipeline.',
    media: [
      {
        label: 'Blocked report',
        src: '/projects/guardrails-blocked.webp',
        width: 1280,
        height: 1559,
        alt: 'HTML report of a blocked run: reflection FAIL and guardrail BLOCK, with the unsupported claim highlighted',
        kind: 'site',
      },
      {
        label: 'Released report',
        src: '/projects/guardrails-released.webp',
        width: 1280,
        height: 1460,
        alt: 'HTML report of a released run: reflection PASS and guardrail PASS',
        kind: 'site',
      },
      {
        label: 'Architecture',
        src: '/projects/arch-guardrails.svg',
        width: 1200,
        height: 600,
        alt: 'Pipeline: sales metrics, Claude analysis, reflection and guardrail checks, released only on a double pass',
        kind: 'diagram',
      },
    ],
    github: 'https://github.com/usmanshah904/reflection-guardrails-agent',
  },
  {
    title: 'Spec-\u2060Driven Smart Task Manager',
    category: 'software',
    challenge: 'Build software where every feature is defined and proven, not assumed.',
    built: [
      'Every feature was written as a user story, requirement and acceptance criterion before any code.',
      'When the app grew from a list into a live dashboard, the specification was updated first.',
      'The dashboard tracks progress, deadlines and categories, with light and dark modes.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Vitest'],
    output:
      'A live dashboard with stat cards, a progress ring, weekly activity and category charts, plus an architecture diagram of the spec-\u2060to-\u2060test workflow.',
    media: [
      {
        label: 'Dashboard',
        src: '/projects/task-dashboard.webp',
        width: 1280,
        height: 1000,
        alt: 'Task manager dashboard with stat cards, progress ring, weekly activity chart, category donut and task list',
      },
      {
        label: 'Architecture',
        src: '/projects/arch-spec.svg',
        width: 1200,
        height: 600,
        alt: 'Workflow: specs define the app, tests validate every acceptance criterion, changes go back through the spec',
        kind: 'diagram',
      },
    ],
    github: 'https://github.com/usmanshah904/spec-driven-task-manager',
  },
  {
    title: 'Self-\u2060Improving Agent with Persistent Memory',
    category: 'genai',
    challenge: 'Stop users from repeating the same preferences on every task.',
    built: [
      'After each task, the agent learns one reusable preference, skill or instruction and stores it in a JSON memory.',
      'On later tasks it retrieves only the relevant memories and applies them.',
      'Similar memories of the same kind are merged, keeping the most detailed wording.',
    ],
    stack: ['Python', 'Claude Code', 'Agent Memory', 'JSON'],
    output:
      'An architecture diagram of the memory loop: retrieve, respond, learn and save. The project runs in the terminal, so it has no dashboard.',
    media: [
      {
        label: 'Architecture',
        src: '/projects/arch-memory.svg',
        width: 1200,
        height: 600,
        alt: 'Memory loop: retrieve relevant memories, respond with Claude, learn one memory, consolidate and save to the JSON store',
        kind: 'diagram',
      },
    ],
    github: 'https://github.com/usmanshah904/self-improving-memory-agent',
  },
  {
    title: 'Vnetrix',
    category: 'web',
    challenge: 'Keep a UK IT services website consistent, professional and search-\u2060friendly on every device.',
    built: ['Refined responsive layouts, custom styling and on-\u2060page SEO across the site.'],
    stack: ['WordPress', 'Elementor', 'CSS', 'SEO'],
    output: 'The live website, previewed here.',
    media: [
      {
        label: 'Live site',
        src: '/projects/vnetrix.webp',
        width: 720,
        height: 1650,
        alt: 'Vnetrix home page: hero, services, and why choose Vnetrix',
        kind: 'site',
      },
    ],
    url: 'https://vnetrix.com',
  },
  {
    title: 'Usman Anees',
    category: 'web',
    challenge: "Present a concert pianist and composer's work professionally on every device.",
    built: [
      'A responsive WordPress website with a refined layout, optimized media, integrated plugins and a search-\u2060friendly content structure.',
    ],
    stack: ['WordPress', 'Elementor', 'Responsive Design'],
    output: 'The live website, previewed here.',
    media: [
      {
        label: 'Live site',
        src: '/projects/usmananees.webp',
        width: 720,
        height: 780,
        alt: 'Usman Anees home page: hero with the pianist and the About the artist section',
        kind: 'site',
      },
    ],
    url: 'https://usmananees.com',
  },
];

// The first two groups are shown side by side on desktop.
export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Gen AI',
    items: [
      'AI Agents',
      'Multi-\u2060Agent Systems',
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
    text: 'Engineering AI agents, RAG pipelines, and LLM-\u2060powered features across backend and frontend systems.',
    icon: 'agent',
    current: true,
    tags: ['AI Agents', 'RAG', 'LLM Features'],
  },
  {
    role: 'WordPress and SEO Intern',
    org: 'Ataraxy Developers',
    period: 'Dec 2025 – Apr 2026',
    location: 'Islamabad, Pakistan',
    text: 'Built and customized responsive WordPress websites and strengthened on-\u2060page SEO for client projects.',
    icon: 'layout',
    tags: ['WordPress', 'On-\u2060Page SEO'],
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
  tagline: 'Gen AI Engineer building AI agents, RAG pipelines, and LLM-\u2060powered applications, with modern web development.',
};
