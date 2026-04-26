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
    seoTitle: "Alex Mercer | Aspiring Data Analyst",
    seoDescription:
      "A dark, minimal portfolio for an aspiring data analyst showcasing projects, skills, achievements, and contact details.",
    name: "Alex Mercer",
    role: "Aspiring Data Analyst",
    email: "alex.mercer@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
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
    greeting: "Hi, I'm Alex Mercer.",
    headline: "Turning messy datasets into clear, actionable insights.",
    summary:
      "I'm a final-year Computer Science & AI student focused on data analytics, dashboards, and reproducible workflows. I enjoy translating raw, messy information into decisions that teams can actually use.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
  },
  about: {
    eyebrow: "About",
    title: "A little about me.",
    paragraphs: [
      "I bring a methodical, curiosity-driven approach to analysis. My strongest work happens where business questions are fuzzy, the source data is inconsistent, and the answer needs to be both technically sound and easy to present.",
      "I focus on building clean datasets, intuitive dashboards, and practical reporting systems that help stakeholders move faster. Right now, I'm looking for analyst roles where I can contribute with SQL, Python, BI tooling, and strong data storytelling.",
    ],
  },
  featuredTools: [
    "Looker Studio",
    "Power BI",
    "Tableau",
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Excel",
    "Statistics",
    "Dashboard Design",
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
      id: "project-01",
      title: "E-Commerce Customer Segmentation",
      description:
        "Clustered customer cohorts from behavioral and transaction data to uncover retention risks, loyalty patterns, and high-value segments for targeted campaigns.",
      outcome:
        "Built a Tableau-driven case study that turned model output into a clear segmentation story stakeholders could act on.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      imagePath: "/assets/projects/project-01.png",
      imageAlt: "Customer segmentation project preview",
      repoUrl: "https://github.com/example/customer-segmentation",
      liveUrl: "https://tableau.com/example",
    },
    {
      id: "project-02",
      title: "Global Supply Chain Dashboard",
      description:
        "Designed a shipment monitoring dashboard to track delay hotspots, vendor bottlenecks, and inventory exposure across multiple logistics datasets.",
      outcome:
        "Created a reporting layer that made operational issues visible at a glance for planners and operations teams.",
      techStack: ["SQL", "Power BI", "Data Modeling"],
      imagePath: "/assets/projects/project-02.png",
      imageAlt: "Supply chain dashboard preview",
      repoUrl: "https://github.com/example/supply-chain-sql",
      liveUrl: "",
    },
    {
      id: "project-03",
      title: "Predictive Maintenance Pipeline",
      description:
        "Built an end-to-end workflow that ingested telemetry data, engineered fault signals, and trained a model to flag equipment risk before failure.",
      outcome:
        "Improved visibility into maintenance planning with a pipeline designed for repeatable retraining and monitoring.",
      techStack: ["Python", "NumPy", "Apache Airflow", "PostgreSQL"],
      imagePath: "/assets/projects/project-03.png",
      imageAlt: "Predictive maintenance workflow preview",
      repoUrl: "https://github.com/example/predictive-maintenance",
      liveUrl: "",
    },
    {
      id: "project-04",
      title: "Urban Housing Market Analysis",
      description:
        "Scraped and cleaned listing data to analyze neighborhood pricing, identify undervalued pockets, and explain pricing drivers with clear visuals.",
      outcome:
        "Combined statistical analysis with data storytelling to make local housing trends easier to compare and present.",
      techStack: ["Python", "BeautifulSoup", "Seaborn", "Statsmodels"],
      imagePath: "/assets/projects/project-04.png",
      imageAlt: "Housing analysis project preview",
      repoUrl: "https://github.com/example/housing-analysis",
      liveUrl: "https://example.com/housing-report",
    },
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
