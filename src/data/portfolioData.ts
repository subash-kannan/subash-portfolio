export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'agentic-ai' | 'fullstack' | 'revenue' | 'productivity';
  categoryLabel: string;
  summary: string;
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architectureNotes: string[];
  techStack: string[];
  image: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa: string;
  highlights: string[];
}

export interface Award {
  title: string;
  description: string;
  organization: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context: string; level: 'Core' | 'Advanced' | 'Expert' }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Subash Kannan',
    shortName: 'Subash K',
    role: 'Full Stack Engineer | Agentic AI',
    headline: 'Building scalable web applications, Agentic AI systems, and multi-agent architectures.',
    bio: 'Full Stack Developer with 3 years of experience building scalable web applications and AI-driven platforms at Responsive. Specialized in developing Agentic AI systems and multi-agent architectures using Google ADK, enabling dynamic tool invocation and intelligent workflow automation across React.js, Java (Spring Boot), and MongoDB.',
    company: 'Responsive',
    email: 'subashkannan2023@gmail.com',
    workEmail: 'subash.k@responsive.io',
    phone: '+91 7539943786',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com/in/subash-kannan',
    linkedinHandle: 'linkedin.com/in/subash-kannan',
    location: 'Coimbatore, Tamil Nadu, India',
    heroImage: '/src/assets/images/hero_dev_portrait_1792041142065.jpg',
  },

  keyStats: [
    { label: 'Production Experience', value: '3 Years', detail: 'At Responsive (Jul 2023 – Present)' },
    { label: 'Academic Standing', value: '9.02 CGPA', detail: 'B.E Computer Science & Engineering' },
    { label: 'Engineering Velocity', value: '~120%', detail: 'Team productivity boost via AI tools' },
    { label: 'Key Recognition', value: 'Spot Award', detail: 'Agent Studio outstanding contribution' },
  ],

  projects: [
    {
      id: 'agentic-ai-platform',
      title: 'Agentic AI Platform (Multi-Agent System)',
      subtitle: 'Dynamic Multi-Agent System & Google ADK Tool Orchestration',
      category: 'agentic-ai',
      categoryLabel: 'Agentic AI & LLMs',
      summary: 'Advanced Agentic AI platform built at Responsive enabling enterprise users to create custom agents, trigger intelligent automated workflows, and interact via an intuitive ChatGPT-like interface.',
      metrics: [
        { label: 'Multi-Agent', value: 'Google ADK' },
        { label: 'LLM Engines', value: 'GPT & Grok' },
        { label: 'Recognition', value: 'Spot Award' },
      ],
      problem: 'Enterprise users required an intelligent, conversational interface capable of autonomously resolving complex tasks, handling file summarization, and dynamically executing internal tool calls without manual workflow friction.',
      solution: 'Designed and implemented a modular multi-agent architecture using Google ADK where an orchestrator agent dynamically decides which specialist agent or tool to invoke based on user intent and context.',
      architectureNotes: [
        'Integrated dynamic tool selection powered by Google ADK to route queries to dedicated summarization, task automation, and data retrieval agents.',
        'Engineered an intelligent fallback clarification mechanism where the agent asks targeted follow-up questions when user intent has ambiguity.',
        'Experimented with and validated responses across multiple LLM families including GPT Models (5.2 mini, 5.4) and Grok for optimal speed and accuracy.',
        'Applied structured prompt optimization and retrieval-augmented context grounding to elevate response accuracy and zero hallucination.',
      ],
      techStack: ['React.js', 'Google ADK', 'GPT-5.2 mini / 5.4', 'Grok', 'RAG', 'TypeScript', 'LLM Prompt Engineering'],
      image: '/src/assets/images/project_ai_platform_1792041141720.jpg',
      featured: true,
      year: '2024 – 2026',
    },
    {
      id: 'pricing-packaging-system',
      title: 'Pricing & Packaging System',
      subtitle: 'Business-Critical Revenue Engine & Salesforce Integration',
      category: 'revenue',
      categoryLabel: 'Full Stack & Revenue',
      summary: 'Business-critical pricing, subscription packaging, and customer onboarding system directly impacting Responsive revenue generation and enterprise checkout flows.',
      metrics: [
        { label: 'Impact', value: 'Revenue Core' },
        { label: 'Architecture', value: 'Full Stack' },
        { label: 'Integration', value: 'Salesforce' },
      ],
      problem: 'Legacy sales onboarding flows lacked dynamic package customization and reusable UI components, slowing down enterprise closing cycles.',
      solution: 'Developed full-stack pricing and packaging features with seamless Salesforce integration and engineered a reusable common component library in React.js.',
      architectureNotes: [
        'Implemented modular, reusable UI components adopted across customer onboarding and sales funnels.',
        'Optimized core business tier calculation logic in Java (Spring Boot) and MongoDB for instantaneous tiered quote generation.',
        'Engineered reliable Salesforce synchronization endpoints maintaining consistency across billing and CRM states.',
      ],
      techStack: ['React.js', 'Java (Spring Boot)', 'MongoDB', 'Salesforce API', 'RESTful Services', 'Figma'],
      image: '/src/assets/images/project_cloud_stream_1792041141576.jpg',
      featured: true,
      year: '2024',
    },
    {
      id: 'support-portal-cms',
      title: 'Customer Support Portal & Management System',
      subtitle: 'Enterprise Issue Tracking & Customer Data Management',
      category: 'fullstack',
      categoryLabel: 'Full Stack Web Platform',
      summary: 'End-to-end customer support portal designed to streamline enterprise customer data management, ticket escalation, and issue resolution tracking.',
      metrics: [
        { label: 'Stack', value: 'React + Java' },
        { label: 'Database', value: 'MongoDB' },
        { label: 'Architecture', value: 'REST API' },
      ],
      problem: 'Support teams faced fragmented ticketing tools and slow customer data lookups, increasing turnaround time for high-priority enterprise issues.',
      solution: 'Built full-stack features unifying customer data management and issue tracking with high-performance REST APIs and a responsive React UI.',
      architectureNotes: [
        'Designed performant RESTful APIs in Java connecting seamlessly to MongoDB for rapid read/write of customer states.',
        'Created a responsive, accessible React interface with real-time status indicators and search filters.',
        'Collaborated closely with design teams in Figma to ensure frictionless UX for enterprise support specialists.',
      ],
      techStack: ['React.js', 'Java', 'MongoDB', 'REST APIs', 'Mongo Compass', 'Jira'],
      image: '/src/assets/images/project_design_system_1792041143111.jpg',
      featured: true,
      year: '2023 – 2024',
    },
    {
      id: 'ai-developer-productivity',
      title: 'AI-Assisted Developer Productivity Suite',
      subtitle: 'Organization-Wide AI Tooling Adoption & Knowledge Transfer',
      category: 'productivity',
      categoryLabel: 'Engineering Leadership',
      summary: 'Spearheaded team-wide adoption of cutting-edge AI coding tools (Cursor, Codex, ChatGPT), driving an estimated ~120% increase in developer delivery speed.',
      metrics: [
        { label: 'Productivity Gain', value: '~120%' },
        { label: 'Tooling', value: 'Cursor & Codex' },
        { label: 'Role', value: 'KT Lead' },
      ],
      problem: 'Developers spent extensive hours on repetitive boilerplate generation, refactoring, and test fixture setup.',
      solution: 'Formulated internal AI development standards, conducted cross-team Knowledge Transfer sessions, and implemented agentic prompt playbooks.',
      architectureNotes: [
        'Delivered hands-on workshops on effective prompting, cursor-rules configuration, and automated test synthesis.',
        'Standardized best practices for context steering and secure handling of proprietary codebases.',
        'Recognized across the organization for fostering innovation and accelerating feature release cycles.',
      ],
      techStack: ['Cursor', 'Codex', 'ChatGPT', 'Prompt Engineering', 'VS Code', 'Agile / Jira'],
      image: '/src/assets/images/project_ai_platform_1792041141720.jpg',
      featured: false,
      year: '2024 – 2026',
    },
  ] as Project[],

  experiences: [
    {
      id: 'responsive-se',
      role: 'Software Engineer',
      company: 'Responsive',
      period: '2026 – Present',
      location: 'Coimbatore, India',
      summary: 'Promoted to Software Engineer following consistent track record of technical innovation, multi-agent AI system architecture, and impactful full-stack delivery.',
      achievements: [
        'Architecting advanced multi-agent workflows and Google ADK integrations for next-generation enterprise capabilities.',
        'Driving cross-functional technical initiatives uniting React frontend components with robust Java Spring Boot and MongoDB services.',
        'Leading internal knowledge sessions on AI-assisted development (Cursor & Codex), maintaining ~120% engineering productivity gains.',
      ],
      skills: ['Agentic AI', 'Google ADK', 'React.js', 'Java', 'MongoDB', 'Cursor / Codex'],
    },
    {
      id: 'responsive-ase',
      role: 'Associate Software Engineer',
      company: 'Responsive',
      period: 'July 2024 – 2026',
      location: 'Coimbatore, India',
      summary: 'Key contributor to the flagship Agentic AI Platform, customer-facing Support Portal, and revenue-critical Pricing & Packaging systems.',
      achievements: [
        'Designed and implemented multi-agent architecture where Google ADK dynamically decides which agent/tool to invoke based on user queries.',
        'Built intelligent workflows for file summarization, contextual responses, and automated task execution with follow-up clarification fallbacks.',
        'Awarded the Spot Award – Agent Studio for outstanding technical contribution and proactive innovation.',
        'Developed pricing and packaging features with Salesforce integration, directly powering enterprise customer onboarding and revenue generation.',
        'Engineered reusable common UI components in React.js, reducing duplication across product modules.',
      ],
      skills: ['React.js', 'Java (Spring Boot)', 'MongoDB', 'Google ADK', 'GPT Models', 'Grok', 'Salesforce', 'Figma'],
    },
    {
      id: 'responsive-intern',
      role: 'Software Engineering Intern',
      company: 'Responsive',
      period: 'July 2023 – July 2024',
      location: 'Coimbatore, India',
      summary: 'Full-time software engineering internship building full-stack modules for the Support Portal and mastering enterprise product development practices.',
      achievements: [
        'Developed end-to-end features for customer data management and issue tracking in the Support Portal.',
        'Designed and integrated RESTful APIs linking the React interface with backend Java services and MongoDB.',
        'Participated actively in Agile sprints, code reviews via GitHub/SourceTree, and cross-team Figma design handoffs.',
      ],
      skills: ['React.js', 'Java', 'MongoDB', 'REST APIs', 'Postman', 'Git / GitHub', 'Jira'],
    },
  ] as Experience[],

  education: {
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu, India',
    degree: "Bachelor's Degree (B.E) in Computer Science & Engineering",
    period: 'July 2020 – May 2024',
    cgpa: '9.02 / 10.0',
    highlights: [
      'Graduated with First Class Honors and exceptional CGPA of 9.02.',
      'Active leadership in campus technical symposiums and coding competitions.',
      'Strong foundational mastery in Data Structures, Algorithms, Object-Oriented Design, and Database Systems.',
    ],
  } as Education,

  awards: [
    {
      title: 'Spot Award – Agent Studio',
      organization: 'Responsive',
      year: '2024',
      description: 'Awarded for outstanding technical contribution, innovation, and dedicated execution on the flagship multi-agent Agentic AI platform.',
    },
    {
      title: 'Invited Hackathon Judge & Chief Guest',
      organization: 'Collegiate Tech Events',
      year: '2025',
      description: 'Invited as Chief Guest and expert technical judge for regional collegiate hackathons evaluating student AI and web engineering projects.',
    },
    {
      title: 'AI Tooling Evangelist & KT Speaker',
      organization: 'Responsive',
      year: '2024 – 2025',
      description: 'Conducted highly rated internal knowledge transfer sessions driving adoption of Cursor and Codex, improving team productivity by ~120%.',
    },
    {
      title: 'Excellence in Feature Delivery',
      organization: 'Responsive',
      year: '2024',
      description: 'Recognized by engineering management for dependable delivery of revenue-impacting Pricing & Packaging Salesforce integrations.',
    },
  ] as Award[],

  skillCategories: [
    {
      title: 'Agentic AI & LLMs',
      description: 'Specialized in multi-agent orchestration, dynamic tool selection, and context-grounded prompting.',
      skills: [
        { name: 'Agentic AI Systems', context: 'Multi-agent orchestration, dynamic tool invocation, fallback loops', level: 'Expert' },
        { name: 'Google ADK', context: 'Dynamic agent routing, tool declaration, stateful workflows', level: 'Expert' },
        { name: 'LLM Models & Evaluation', context: 'GPT-5.2 mini, GPT-5.4, Grok, model benchmarking', level: 'Expert' },
        { name: 'RAG & Document Intelligence', context: 'File summarization, contextual retrieval, semantic grounding', level: 'Advanced' },
        { name: 'Prompt Optimization', context: 'Few-shot engineering, guardrails, follow-up clarification prompts', level: 'Expert' },
      ],
    },
    {
      title: 'Full Stack & Backend',
      description: 'Robust server architecture, enterprise API integration, and document databases.',
      skills: [
        { name: 'Java (Spring Boot)', context: 'Enterprise microservices, REST APIs, business tier logic', level: 'Expert' },
        { name: 'MongoDB', context: 'Document modeling, indexing, aggregation pipelines, Mongo Compass', level: 'Expert' },
        { name: 'Salesforce Integration', context: 'CRM synchronization, customer onboarding, billing events', level: 'Advanced' },
        { name: 'RESTful API Architecture', context: 'Contract-first design, Postman automation, error boundaries', level: 'Expert' },
      ],
    },
    {
      title: 'Frontend & UI Architecture',
      description: 'Modern component-driven web interfaces, state management, and design systems.',
      skills: [
        { name: 'React.js & Hooks', context: 'Custom hooks, state machines, performance profiling, responsive UI', level: 'Expert' },
        { name: 'TypeScript & JavaScript', context: 'Strict typing, modern ESNext, interface contracts', level: 'Advanced' },
        { name: 'Reusable Common Components', context: 'Design token alignment, modular component architecture', level: 'Expert' },
        { name: 'Figma to Code', context: 'Design token integration, pixel-perfect layout implementation', level: 'Expert' },
      ],
    },
    {
      title: 'Tools & AI-Assisted Workflow',
      description: 'Modern developer toolchains, AI productivity accelerators, and team collaboration.',
      skills: [
        { name: 'AI Coding Tools', context: 'Cursor, Codex, ChatGPT prompt workflows (+120% velocity)', level: 'Expert' },
        { name: 'IDEs & Development', context: 'VS Code, IntelliJ IDEA, Eclipse, Postman', level: 'Expert' },
        { name: 'Version Control & Agile', context: 'Git, GitHub, SourceTree, Jira, Agile sprint ceremonies', level: 'Expert' },
        { name: 'Knowledge Transfer', context: 'Leading tech sessions, developer documentation, mentorship', level: 'Advanced' },
      ],
    },
  ] as SkillCategory[],

  principles: [
    {
      number: '01',
      title: 'Agentic Tool Autonomy with Human-in-the-Loop',
      description: 'Multi-agent architectures must dynamically select tools based on user intent, but gracefully ask clarifying follow-up questions when uncertainty or risk arises.',
    },
    {
      number: '02',
      title: 'Full-Stack Cohesion Across React, Java, and MongoDB',
      description: 'An application is only as resilient as its weakest integration layer. Type safety, structured REST contracts, and clean database schemas ensure deterministic user experiences.',
    },
    {
      number: '03',
      title: 'AI-Assisted Velocity without Quality Compromise',
      description: 'Leveraging tools like Cursor and Codex empowers engineers to automate boilerplate, allowing focus to shift to higher-order architectural decisions and user value.',
    },
    {
      number: '04',
      title: 'Reusable Component Systems for Scale',
      description: 'Building common UI components once and propagating them across onboarding, billing, and support reduces technical debt and guarantees unified customer UX.',
    },
  ],
};
