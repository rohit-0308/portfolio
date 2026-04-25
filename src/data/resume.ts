import type { Resume, RichText } from '../types/resume'

const t = (text: string): RichText[number] => ({ kind: 'text', text })
const b = (text: string): RichText[number] => ({ kind: 'strong', text })
const c = (text: string): RichText[number] => ({ kind: 'code', text })

export const resume: Resume = {
  hero: {
    availabilityTag: 'Available for senior frontend roles',
    name: 'Rohit Kumar',
    lede: 'Senior Frontend Engineer specializing in React/TypeScript performance optimization at enterprise scale — 3.5+ years building component-driven, accessible web apps that ship fast and scale to millions of records.',
    stats: [
      { num: '40%', label: 'FASTER LOADS' },
      { num: '95+', label: 'LIGHTHOUSE' },
      { num: '80%', label: 'TEST COVERAGE' },
      { num: '$2M+', label: 'PLATFORM REVENUE' },
    ],
    primaryCta: { label: 'View Projects →', href: '#projects' },
    secondaryCta: { label: 'Get In Touch', href: 'mailto:rohitkumar.work62@gmail.com' },
    floatCard: {
      role: 'Currently @',
      title: 'Clearwater Analytics',
      meta: 'SDE II — Frontend',
      badge: 'Jun 2022 – Present',
    },
  },

  marquee: [
    'Clearwater Analytics',
    'React',
    'TypeScript',
    'Next.js',
    'AG Grid Enterprise',
    'AWS CloudFront',
    'Terraform',
    'Auth0',
    'GraphQL',
    'Storybook',
  ],

  about: {
    eyebrow: 'About',
    heading: 'Engineer focused on performance, accessibility, and design systems.',
    sub: 'I architect frontends that hold up under enterprise scale — virtualized grids of millions of rows, micro-frontend monorepos, and fully WCAG-compliant UIs.',
    paragraphs: [
      "I'm a Senior Frontend Engineer at Clearwater Analytics with 3.5+ years building React/TypeScript applications used by 1,000+ enterprise users. I specialize in turning sluggish UIs into snappy ones — measured in cold-start seconds, Lighthouse points, and CI/CD minutes.",
      "My recent work spans an AI/GPT-powered chat product and an enterprise reconciliation platform with a 50+ component design system. I care equally about the architecture you can't see (Nx monorepo boundaries, Webpack chunking, render paths) and the polish you can (accessibility, keyboard nav, cross-browser parity).",
      'Currently exploring React Server Components, GraphQL, and WebSockets in side projects — and always shipping in Agile/Scrum sprints.',
    ],
    info: [
      { label: 'Name', value: 'Rohit Kumar' },
      { label: 'Role', value: 'SDE II — Frontend' },
      { label: 'Location', value: 'Noida, India' },
      { label: 'Education', value: "BIT, Mesra" },
      { label: 'Experience', value: '3.5+ years' },
      { label: 'Email', value: 'rohitkumar.work62@gmail.com' },
    ],
  },

  experienceMeta: {
    eyebrow: 'Experience',
    heading: "Where I've shipped.",
    sub: 'From AI chat apps to reconciliation platforms moving real money — performance and accessibility are not optional.',
  },

  experience: [
    {
      company: 'Clearwater Analytics',
      when: 'Jun 2022 — Present · Noida, India',
      role: 'Software Development Engineer II — Frontend',
      reveal: 'slide-left',
      projects: [
        {
          name: 'Crystal — AI/GPT-Powered Chat App',
          stack: 'React, TypeScript, Redux, REST APIs, Auth0',
          bullets: [
            [
              t('Built React + TypeScript frontend using '),
              b('custom React Hooks'),
              t(' for state abstraction, serving a GPT-driven enterprise chat app for '),
              b('1,000+ active users'),
              t('.'),
            ],
            [
              t('Managed async workflows, file uploads, and chat history via Redux; integrated GPT interfaces with REST APIs, '),
              b('reducing support tickets by 40%'),
              t('.'),
            ],
            [
              t('Enforced secure enterprise access via Auth0 RBAC; achieved '),
              b('80% test coverage'),
              t(' with Jest and React Testing Library.'),
            ],
            [
              t('Boosted developer productivity by '),
              b('30%'),
              t(' through AI-assisted frontend tooling, delivered across Agile/Scrum sprints.'),
            ],
          ],
        },
        {
          name: 'Helios — Enterprise Reconciliation Platform',
          stack: 'React, TypeScript, Redux, Nx Monorepo, AG Grid',
          bullets: [
            [
              t('Architected a '),
              b('micro-frontend design system'),
              t(' with 50+ reusable React components in an Nx Monorepo, documented via Storybook.'),
            ],
            [
              t('Integrated AG Grid Enterprise with '),
              b('custom React cell renderers'),
              t(' to virtualize '),
              b('millions of financial records'),
              t(' at sub-second speed.'),
            ],
            [
              t('Implemented '),
              b('WCAG-compliant, accessible (a11y)'),
              t(' UI with cross-browser compatibility across 15+ application pages.'),
            ],
            [
              t('Reduced cold-start from '),
              b('45–50 secs to 5–7 secs'),
              t(' via React lazy loading, dynamic '),
              c('import()'),
              t(', and Webpack bundle optimization.'),
            ],
            [
              t('Improved Lighthouse scores from '),
              b('68 to 95+'),
              t(' using React.memo, useMemo, and useCallback across high-frequency render paths.'),
            ],
            [
              t('Automated CI/CD via AWS CloudFront, S3, Terraform — cutting deploy time '),
              b('50% (45 → 22 min)'),
              t(' and eliminating '),
              b('90% of environment bugs'),
              t('.'),
            ],
          ],
        },
      ],
    },
  ],

  projectsMeta: {
    eyebrow: 'Projects',
    heading: 'Selected work.',
    sub: 'Side projects exploring patterns I bring back into production code.',
  },

  projects: [
    {
      title: 'This Portfolio Site',
      stack: 'React 19 · TypeScript · Vite · CSS Modules',
      paragraphs: [
        'A component-driven personal portfolio built on React 19 and Vite with strict TypeScript end-to-end. Content is fully data-driven from a typed resume schema; styling is scoped per component with CSS Modules over a small set of design tokens.',
        'Showcases an interactive particle-network background, a lerped trailing cursor, scroll-reveal sections, on-view skill-bar fills, an infinite tech-stack marquee, and a 3D floating role card — all hand-built with CSS keyframes and requestAnimationFrame, no animation libraries.',
      ],
      tags: ['React 19', 'TypeScript', 'Vite', 'CSS Modules', 'Canvas', 'rAF'],
    },
    {
      title: 'Analytics Dashboard',
      stack: 'React · Next.js · GraphQL · Recharts',
      paragraphs: [
        'Component-driven analytics dashboard built with Next.js App Router and React Server Components. Replaced REST with GraphQL, cutting over-fetching by 40%.',
        'Optimized renders via memoization and lazy loading; integrated Storybook for component documentation and RBAC auth for secure access.',
      ],
      tags: ['TypeScript', 'App Router', 'RSC', 'GraphQL', 'Storybook'],
    },
    {
      title: 'Real-Time Kanban Task Manager',
      stack: 'React · Zustand · WebSockets · Playwright',
      paragraphs: [
        'Collaborative Kanban board with drag-and-drop and live multi-user sync via WebSockets. Client state managed with Zustand for minimal boilerplate.',
        'Wrote Playwright end-to-end tests covering core workflows; optimized UI with virtualized lists and memoized components.',
      ],
      tags: ['TypeScript', 'Zustand', 'WebSockets', 'Playwright', 'DnD'],
    },
    {
      title: 'Crystal — AI Chat (Work)',
      stack: 'React · TypeScript · Redux · Auth0',
      paragraphs: [
        'GPT-driven enterprise chat app for 1,000+ active users. Custom React Hooks abstract async chat workflows, file uploads, and history management.',
        'Reduced support tickets by 40% with thoughtful UX and reliable streaming; secured via Auth0 RBAC and 80% Jest test coverage.',
      ],
      tags: ['GPT', 'Redux', 'Jest', 'RTL', 'Auth0'],
    },
    {
      title: 'Helios — Reconciliation Platform (Work)',
      stack: 'React · Nx Monorepo · AG Grid Enterprise',
      paragraphs: [
        'Micro-frontend design system with 50+ reusable components in an Nx Monorepo; AG Grid renderers virtualize millions of financial records.',
        'Cold-start dropped from 45–50s to 5–7s. Lighthouse 68 → 95+. CI/CD via AWS CloudFront + Terraform — 50% faster deploys.',
      ],
      tags: ['Micro-Frontend', 'AG Grid', 'WCAG', 'Terraform', 'CloudFront'],
    },
  ],

  skillsMeta: {
    eyebrow: 'Skills',
    heading: 'Technical toolkit.',
    sub: 'Languages, frameworks, and tools I use day-to-day. Bars animate based on hands-on depth.',
  },

  skillGroups: [
    {
      title: 'Languages & Core',
      reveal: 'slide-left',
      kind: 'bars',
      bars: [
        { name: 'JavaScript (ES6+)', pct: 95 },
        { name: 'TypeScript', pct: 92 },
        { name: 'HTML5 & CSS3', pct: 95 },
        { name: 'SQL', pct: 70 },
      ],
    },
    {
      title: 'Frameworks',
      reveal: 'fade-up',
      kind: 'bars',
      bars: [
        { name: 'React & React Hooks', pct: 95 },
        { name: 'Next.js (App Router, RSC)', pct: 85 },
        { name: 'Redux / Toolkit / Saga', pct: 88 },
        { name: 'Zustand / React Query', pct: 82 },
        { name: 'Angular 2+', pct: 70 },
        { name: 'TailwindCSS', pct: 88 },
        { name: 'Bootstrap', pct: 82 },
      ],
    },
    {
      title: 'Performance & Build',
      reveal: 'slide-right',
      kind: 'bars',
      bars: [
        { name: 'Code Splitting / Lazy Loading', pct: 93 },
        { name: 'Webpack & Babel', pct: 85 },
        { name: 'AG Grid Enterprise', pct: 90 },
        { name: 'WCAG / a11y', pct: 88 },
      ],
    },
    {
      title: 'Testing',
      reveal: 'slide-left',
      kind: 'bars',
      bars: [
        { name: 'Jest', pct: 90 },
        { name: 'React Testing Library', pct: 88 },
        { name: 'Playwright', pct: 80 },
        { name: 'Storybook', pct: 85 },
      ],
    },
    {
      title: 'Architecture & Methods',
      reveal: 'fade-up',
      kind: 'tags',
      tags: [
        'Micro-Frontends',
        'REST APIs',
        'GraphQL',
        'Component Libraries',
        'Design Systems',
        'Nx Monorepo',
        'Agile / Scrum',
      ],
    },
    {
      title: 'DevOps & Tools',
      reveal: 'slide-right',
      kind: 'tags',
      tags: [
        'AWS (EC2, S3, CloudFront)',
        'Terraform',
        'Firebase',
        'CI/CD',
        'Git',
        'GitLab',
        'Figma',
        'VS Code',
      ],
    },
  ],

  contact: {
    eyebrow: 'Contact',
    heading: "Let's build something fast.",
    sub: 'Open to senior frontend roles, freelance collaborations, and good conversation about React performance.',
    links: [
      {
        label: 'rohitkumar.work62@gmail.com',
        href: 'mailto:rohitkumar.work62@gmail.com',
        icon: 'mail',
        variant: 'primary',
      },
      {
        label: '+91-6200990896',
        href: 'tel:+916200990896',
        icon: 'phone',
        variant: 'default',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/rohitkumar-3801a2179',
        icon: 'linkedin',
        variant: 'default',
        external: true,
        ariaLabel: 'LinkedIn profile',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/rohit-0308',
        icon: 'github',
        variant: 'default',
        external: true,
        ariaLabel: 'GitHub profile',
      },
    ],
  },
}
