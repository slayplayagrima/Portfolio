/**
 * Central portfolio content.
 *
 * Update this file whenever you want to change:
 * - name, title, bio, and contact details
 * - skills and marquee tools
 * - project copy, links, and image paths
 * - achievements and section text
 *
 * Images live in /public/assets so they can be replaced without changing imports.
 */
export const portfolioContent = {
  site: {
    seoTitle: "Agrima Gusain | Aspiring Data Analyst and Full Stack Developer",
    seoDescription:
      "A dark, minimal portfolio for an aspiring data analyst showcasing projects, skills, achievements, and contact details.",
    name: "Agrima Gusain",
    role: "Aspiring Data Analyst and Full Stack Developer",
    email: "ag.agrimagusain@gmail.com",
    linkedin: "https://www.linkedin.com/in/agrima-gusain-47a19032b/",
    github: "https://github.com/slayplayagrima",
    profileImagePath: "/assets/profile/profile.png",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hi, I'm Agrima Gusain.",
    headline: "Turning messy datasets into clear, actionable insights.",
    summary:
      "I'm a 2nd-year Computer Science & AI student focused on data analytics, dashboards, and full-stack development. I enjoy translating raw, messy data into decisions, teams can actually use — and building the tools to deliver them.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
  },
  about: {
    eyebrow: "About",
    title: "A little about me.",
    paragraphs: [
      "I work with messy, real-world datasets—cleaning, structuring, and turning them into dashboards that actually answer questions. My focus is on building visualizations that don’t just look good, but clearly explain why patterns exist.",
      "I build full-stack projects where logic, data, and UI come together—handling everything from backend workflows to frontend interactions. I focus on making products that are not just functional, but feel intuitive and purposeful to use.",
    ],
  },
  featuredTools: [
    "Looker Studio",
    "Power BI",
    "Tableau",
    "Python",
    "SQL",
    "MongoDB",
    "Pandas",
    "NumPy",
    "Excel",
    "Statistics",
    "Java",
    "React",
    "Next.js",
    "Express.js",
    "TypeScript",
    "Git",
    "Data Storytelling",
  ],
  skills: {
    eyebrow: "Toolkit",
    title: "Core competencies.",
    kicker:
      "The tools and methods I use to move from raw data to clear, decision-ready insight.",
    groups: [
      {
        title: "Programming",
        items: ["Python", "SQL", "R", "Jupyter"],
      },
      {
        title: "BI & Dashboards",
        items: ["Looker Studio", "Power BI", "Tableau", "Excel"],
      },
      {
        title: "Analysis Stack",
        items: ["Pandas", "NumPy", "Data Cleaning", "EDA"],
      },
      {
        title: "Decision Support",
        items: ["Reporting", "Forecasting", "A/B Testing", "Storytelling"],
      },
    ],
  },
  projects: [
    {
  id: "project-05",
  title: "Financial Market Intelligence Dashboard",
  description:
    "Analyzed 5-year historical market data for AAPL, MSFT, and SPY to evaluate return, volatility, drawdown, seasonality, and forecasting performance using financial analytics and time-series modeling.",
  outcome:
    "Built an interactive 3-page Power BI dashboard with KPI cards, risk-return analysis, seasonality insights, forecasting model evaluation, and a 90-day Apple price forecast using Prophet and ARIMA models.",
  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Power BI",
    "Prophet",
    "Google Colab",
    "Excel"
  ],
  imagePath: "/assets/projects/project-05.png",
  imageAlt: "Financial market intelligence dashboard preview",
  repoUrl: "https://github.com/slayplayagrima/financial-market-forecasting",
  liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzE2NjVmNzMtNWU5MC00MTJjLWFkZGItY2U0M2MxNWQxYWJiIiwidCI6ImE1ODdhZDA0LTJhYzYtNDJiYi1iOWNiLWE5M2JhOGQwYmI0YiJ9&pageName=7c71bd4653e883d4bfdf",
},
      {
        
    id: "project-01",
    title: "Income Insights & Prediction Analysis",
    description:
      "Analyzed 48K+ census records to uncover key income drivers across education, occupation, and demographics using EDA, statistical analysis, and feature engineering.",
    outcome:
      "Built interactive Tableau dashboards with KPIs like High Income Rate and Gender Income Gap, enabling clear, data-driven insights and predictive segmentation.",
    techStack: ["Python", "Pandas", "NumPy", "Tableau", "Excel"],
    imagePath: "/assets/projects/project-01.png",
    imageAlt: "Income analysis dashboard preview",
    repoUrl: "https://github.com/slayplayagrima/IncomeDataAnalysis",
    liveUrl: "https://public.tableau.com/views/IncomePredictionAnalysisDashboard_17773823940220/Dashboard?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", 
  },
      {
    id: "project-02",
    title: "Crime Forecasting & Trend Analysis",
    description:
      "Analyzed ~400K FBI crime records to identify temporal, spatial, and behavioral crime patterns using EDA and data preprocessing.",
    outcome:
      "Built an interactive Looker Studio dashboard with geo heatmaps, KPI cards, and trend forecasting, uncovering peak crime hours and high-risk zones for actionable insights.",
    techStack: ["Python", "Google Colab", "Looker Studio", "Excel"],
    imagePath: "/assets/projects/project-02.png",
    imageAlt: "Crime analysis dashboard preview",
    repoUrl: "https://github.com/slayplayagrima/CrimeDataAnalysis",
    liveUrl: "https://datastudio.google.com/reporting/35da7499-8776-4f2c-869f-2832f56269ed", // add dashboard link if available
  },
  {
    id: "project-03",
    title: "Ascend — Trading Simulation Platform",
    description:
      "Built a full-stack trading simulation platform that integrates live market data with a simulated portfolio system, enabling users to practice investing in a risk-free environment.",
    outcome:
      "Delivered a real-time, beginner-focused trading experience with dynamic PnL tracking, portfolio updates, and a scalable backend architecture for market data integration.",
    techStack: ["React", "Zustand", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO"],
    imagePath: "/assets/projects/project-03.png",
    imageAlt: "Ascend trading dashboard preview",
    repoUrl: "https://github.com/slayplayagrima/ascend", // replace this
    liveUrl: "https://ascendproject.vercel.app/", 
  },
   {
  id: "project-04",
  title: "Belong — Animal Adoption Platform",
  description:
    "Built a full-stack adoption platform that connects adopters with NGOs through role-based dashboards, animal listings, profile flows, and adoption request management.",
  outcome:
    "Created a scalable frontend and backend scaffold with clean routing, responsive UI, NGO/user flows, and a deploy-ready structure for future database and authentication integration.",
  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Express.js",
    "Node.js",
  ],
  imagePath: "/assets/projects/project-04.png",
  imageAlt: "Belong animal adoption platform preview",
  repoUrl: "https://github.com/slayplayagrima/Belong",
  liveUrl: "https://belongadoptionsite.vercel.app/",
}
  ],
  snapshots: {
    eyebrow: "Visuals",
    title: "Project snapshots.",
    kicker:
      "These preview images live in /public/assets/projects and can be swapped with your real dashboard or report screenshots later.",
    items: [
      {
        id: "snapshot-01",
        title: "Landing section",
        imagePath: "/assets/projects/project-01.png",
      },
      {
        id: "snapshot-02",
        title: "About overview",
        imagePath: "/assets/projects/project-02.png",
      },
      {
        id: "snapshot-03",
        title: "Skills overview",
        imagePath: "/assets/projects/project-03.png",
      },
      {
        id: "snapshot-04",
        title: "Featured projects",
        imagePath: "/assets/projects/project-04.png",
      },
      {
        id: "snapshot-05",
        title: "Achievements section",
        imagePath: "/assets/projects/project-05.png",
      },
      {
        id: "snapshot-06",
        title: "Contact section",
        imagePath: "/assets/projects/project-06.png",
      },
    ],
  },
  achievements: {
    eyebrow: "Milestones",
    title: "Highlights & achievements.",
    items: [
      {
        id: "achievement-01",
        title: "Google Data Analytics Professional Certificate",
        meta: "2023",
        description:
          "Completed hands-on training in data cleaning, analysis, SQL, spreadsheets, and dashboard storytelling.",
      },
      {
        id: "achievement-02",
        title: "1st Place - University Hackathon (Data Track)",
        meta: "2023",
        description:
          "Led a team project analyzing transit data and proposed route improvements that reduced theoretical commute time by 15%.",
      },
      {
        id: "achievement-03",
        title: "Data Science Intern",
        meta: "Summer 2022",
        description:
          "Automated recurring reporting workflows and supported an internal churn prediction initiative for the analytics team.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something together.",
    kicker:
      "I'm currently open to internships and analyst roles. Use the form below or reach out directly.",
    formNote:
      "The form opens your default email client, which keeps the site simple to deploy on Vercel or Netlify without a backend.",
  },
} as const
