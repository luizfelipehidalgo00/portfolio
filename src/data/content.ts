export type Lang = "en" | "pt";

export const profile = {
  name: "Luiz Felipe Hidalgo De Lima",
  email: "luizhidalgo00@gmail.com",
  phone: "+55 11 99000-2715",
  phoneHref: "tel:+5511990002715",
  github: "https://github.com/luizfelipehidalgo00",
  linkedin: "https://www.linkedin.com/in/luizfelipehidalgo",
  location: { en: "São Paulo, Brazil", pt: "São Paulo, Brasil" },
};

export const copy = {
  en: {
    skip: "Skip to content",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    langBtn: "PT",
    langLabel: "Switch to Portuguese",
    role: "Junior Data Analyst · Backoffice · Full Stack",
    headline:
      "I turn messy operational data into clear reports, dashboards and tools that help teams decide faster.",
    ctaPrimary: "View projects",
    ctaSecondary: "Email me",
    aboutTitle: "About",
    about: [
      "Software Engineering student at Estácio, targeting junior roles in data analysis, backoffice operations and tech support for product teams.",
      "I have shipped e-commerce, SaaS and internal tools with Python, JavaScript, SQL, Excel and Power BI. Day to day I care about clean data, KPIs and processes that actually get used.",
      "Previous operations work taught me discipline, documentation and quality control. I now apply that same rigor to datasets, automations and web products.",
    ],
    experienceTitle: "Experience",
    projectsTitle: "Selected work",
    skillsTitle: "Skills",
    educationTitle: "Education",
    contactTitle: "Let’s work together",
    contactText:
      "Open to junior data analyst, backoffice, operations and full-stack roles. I reply quickly.",
    footer: "Built with Next.js and Tailwind CSS.",
    live: "Live",
    code: "Code",
  },
  pt: {
    skip: "Ir para o conteúdo",
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      education: "Formação",
      contact: "Contato",
    },
    langBtn: "EN",
    langLabel: "Mudar para inglês",
    role: "Analista de Dados Jr · Backoffice · Full Stack",
    headline:
      "Transformo dados operacionais bagunçados em relatórios, dashboards e ferramentas que ajudam o time a decidir mais rápido.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Enviar e-mail",
    aboutTitle: "Sobre",
    about: [
      "Estudante de Engenharia de Software na Estácio, em busca de vagas júnior em análise de dados, backoffice e suporte técnico a times de produto.",
      "Já entreguei e-commerce, SaaS e ferramentas internas com Python, JavaScript, SQL, Excel e Power BI. No dia a dia, o foco é dado limpo, KPIs e processos que as pessoas realmente usam.",
      "A experiência em operações me deu disciplina, documentação e controle de qualidade. Hoje aplico o mesmo rigor em bases de dados, automações e produtos web.",
    ],
    experienceTitle: "Experiência",
    projectsTitle: "Trabalhos selecionados",
    skillsTitle: "Competências",
    educationTitle: "Formação",
    contactTitle: "Vamos conversar",
    contactText:
      "Aberto a vagas júnior de analista de dados, backoffice, operações e full stack. Respondo rápido.",
    footer: "Feito com Next.js e Tailwind CSS.",
    live: "Site",
    code: "Código",
  },
} as const;

export const experience = {
  en: [
    {
      role: "Freelance Developer",
      company: "Emik Company · VectraDex",
      period: "Projects",
      bullets: [
        "Built a full e-commerce storefront and checkout flow for Emik Company.",
        "Shipped VectraDex Manager, a mobile inventory app in closed testing on Google Play.",
        "Owned product scope, UI, data model and delivery end to end.",
      ],
    },
    {
      role: "Operations Assistant (contractor)",
      company: "Proinvest Treinamento · Jacareí, SP",
      period: "Jan 2021 — Present",
      bullets: [
        "Backoffice support: web infrastructure, operational tickets and campaign follow-up.",
        "Analyzed traffic and digital campaign data with a KPI-first view (reach, conversion, cost).",
        "Turned operational notes into reports the commercial team could act on.",
      ],
    },
    {
      role: "Operations & Process Support",
      company: "Steck Elétrica · Guararema, SP",
      period: "Mar 2024 — Feb 2026",
      bullets: [
        "Tracked process parameters, visual/dimensional quality checks and inspection reports.",
        "Automated inventory routines in Python, reducing manual spreadsheet work.",
        "Practiced 5S, teamwork and problem-solving under production SLAs — transferable to data ops and backoffice.",
      ],
    },
  ],
  pt: [
    {
      role: "Desenvolvedor freelancer",
      company: "Emik Company · VectraDex",
      period: "Projetos",
      bullets: [
        "Criei o e-commerce completo da Emik Company, do catálogo ao fluxo de compra.",
        "Entreguei o VectraDex Manager, app mobile de inventário em closed testing na Play Store.",
        "Toquei escopo, interface, modelo de dados e entrega ponta a ponta.",
      ],
    },
    {
      role: "Assistente de operações (PJ)",
      company: "Proinvest Treinamento · Jacareí, SP",
      period: "Jan 2021 — atual",
      bullets: [
        "Backoffice: infraestrutura web, chamados operacionais e acompanhamento de campanhas.",
        "Analisei tráfego e campanhas digitais com foco em KPIs (alcance, conversão, custo).",
        "Transformei anotações operacionais em relatórios úteis para o comercial.",
      ],
    },
    {
      role: "Suporte a operações e processos",
      company: "Steck Elétrica · Guararema, SP",
      period: "Mar 2024 — Fev 2026",
      bullets: [
        "Acompanhei parâmetros de processo, inspeção visual/dimensional e laudos.",
        "Automatizei rotinas de inventário em Python, reduzindo trabalho manual em planilha.",
        "Pratiquei 5S, trabalho em equipe e resolução de problemas — skills que levo para dados e backoffice.",
      ],
    },
  ],
};

export const projects = {
  en: [
    {
      title: "Hub Dados Leads",
      tag: "Data",
      description:
        "Imported 309 real leads from PDF sources into a structured pipeline. Typical junior-analyst work: extract, clean, validate and make the dataset usable.",
      href: "https://hub-dados-leads.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/hub-dados-leads",
    },
    {
      title: "Emik Company Store",
      tag: "E-commerce",
      description:
        "Full storefront for a retail brand: catalog, product pages and purchase flow. Built as a production-facing web product.",
      href: "https://github.com/luizfelipehidalgo00/emik-company-loja",
      repo: "https://github.com/luizfelipehidalgo00/emik-company-loja",
    },
    {
      title: "Felipe Tech",
      tag: "Product",
      description:
        "Personal tech hub and product pages, including updates to GlossyLog. A sandbox for UI, content and deployment on Vercel.",
      href: "https://felipe-tech.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/Felipe-Tech",
    },
    {
      title: "Hub Pé na Estrada",
      tag: "Ops / Web",
      description:
        "Admin-facing Next.js app with a locked executive theme and operational options for the team.",
      href: "https://hub-pe-na-estrada.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/hub-pe-na-estrada",
    },
    {
      title: "Hub Jarrusso",
      tag: "Front-end",
      description:
        "Client hub with motion and branded landing experience, deployed and iterated in production.",
      href: "https://hub-jarrusso.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/hub-jarrusso",
    },
    {
      title: "VectraDex Manager",
      tag: "Mobile",
      description:
        "Inventory management app in closed testing on Google Play. Focused on stock control for field and backoffice users.",
      href: "https://github.com/luizfelipehidalgo00",
      repo: "https://github.com/luizfelipehidalgo00",
    },
  ],
  pt: [
    {
      title: "Hub Dados Leads",
      tag: "Dados",
      description:
        "Importei 309 leads reais a partir de PDFs para um pipeline estruturado. Trabalho típico de analista júnior: extrair, limpar, validar e deixar a base usável.",
      href: "https://hub-dados-leads.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/hub-dados-leads",
    },
    {
      title: "Loja Emik Company",
      tag: "E-commerce",
      description:
        "Vitrine completa para uma marca: catálogo, páginas de produto e fluxo de compra. Produto web pensado para uso real.",
      href: "https://github.com/luizfelipehidalgo00/emik-company-loja",
      repo: "https://github.com/luizfelipehidalgo00/emik-company-loja",
    },
    {
      title: "Felipe Tech",
      tag: "Produto",
      description:
        "Hub pessoal e páginas de produto, incluindo atualizações do GlossyLog. Espaço para UI, conteúdo e deploy na Vercel.",
      href: "https://felipe-tech.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/Felipe-Tech",
    },
    {
      title: "Hub Pé na Estrada",
      tag: "Ops / Web",
      description:
        "App Next.js com tema executivo fixo no admin e opções operacionais para o time.",
      href: "https://hub-pe-na-estrada.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/hub-pe-na-estrada",
    },
    {
      title: "Hub Jarrusso",
      tag: "Front-end",
      description:
        "Hub de cliente com animações e landing da marca, publicado e iterado em produção.",
      href: "https://hub-jarrusso.vercel.app",
      repo: "https://github.com/luizfelipehidalgo00/hub-jarrusso",
    },
    {
      title: "VectraDex Manager",
      tag: "Mobile",
      description:
        "App de gestão de inventário em closed testing na Play Store. Foco em controle de estoque para campo e backoffice.",
      href: "https://github.com/luizfelipehidalgo00",
      repo: "https://github.com/luizfelipehidalgo00",
    },
  ],
};

export const skillGroups = {
  en: [
    {
      title: "Data & backoffice",
      items: ["SQL", "Excel", "Power BI", "Python", "KPI reporting", "Data cleaning"],
    },
    {
      title: "Engineering",
      items: ["JavaScript", "Next.js", "Full stack", "Databases", "Automation", "Mobile"],
    },
    {
      title: "How I work",
      items: ["Teamwork", "Adaptability", "Organization (5S)", "Problem solving"],
    },
  ],
  pt: [
    {
      title: "Dados e backoffice",
      items: ["SQL", "Excel", "Power BI", "Python", "Relatórios de KPI", "Limpeza de dados"],
    },
    {
      title: "Engenharia",
      items: ["JavaScript", "Next.js", "Full stack", "Bancos de dados", "Automação", "Mobile"],
    },
    {
      title: "Como eu trabalho",
      items: ["Trabalho em equipe", "Adaptabilidade", "Organização (5S)", "Resolução de problemas"],
    },
  ],
};

export const education = {
  en: [
    {
      title: "Software Engineering",
      place: "Estácio",
      period: "Nov 2024 — Present",
    },
    {
      title: "Python, SQL and Generative AI",
      place: "Independent / certified courses",
      period: "Ongoing",
    },
  ],
  pt: [
    {
      title: "Engenharia de Software",
      place: "Estácio",
      period: "Nov 2024 — cursando",
    },
    {
      title: "Python, SQL e IA generativa",
      place: "Cursos independentes / certificados",
      period: "Em andamento",
    },
  ],
};
