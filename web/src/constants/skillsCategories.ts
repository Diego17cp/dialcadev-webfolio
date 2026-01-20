interface SkillsCategory {
    title: string;
    description: string;
    gradient: string;
    technologies: {
        name: string;
        icon: string;
        color: string;
        iconColor?: string;
    }[];
}

export const skillsCategories: SkillsCategory[] = [
    {
        title: "Frontend",
        description: "Technologies I use to build beautiful and responsive user interfaces",
        gradient: "from-blue-400 to-cyan-300",
        technologies: [
            { name: "HTML", icon: "tabler:brand-html5", color: "#E34F26" },
            { name: "CSS", icon: "devicon-plain:css", color: "#663399" },
            { name: "JavaScript", icon: "devicon-plain:javascript", color: "#F7DF1E" },
            { name: "React", icon: "tabler:brand-react", color: "#61DAFB" },
            { name: "TypeScript", icon: "tabler:brand-typescript", color: "#3178C6" },
            { name: "Tailwind CSS", icon: "tabler:brand-tailwind", color: "#06B6D4" },
            { name: "Astro", icon: "tabler:brand-astro", color: "#FF5D01" },
            { name: "Zustand", icon: "devicon-plain:zustand", color: "#423d37" },
            { name: "TanStack Query", icon: "simple-icons:tanstack", color: "#FF6600" },
            { name: "Dart", icon: "devicon-plain:dart", color: "#0175C2" },
            { name: "Flutter", icon: "tabler:brand-flutter", color: "#02569B" },
            { name: "Kotlin + XML", icon: "tabler:brand-kotlin", color: "#7F52FF" }
        ]
    },
    {
        title: "Backend",
        description: "Tools and frameworks for building robust server-side applications",
        gradient: "from-green-400 to-emerald-300",
        technologies: [
            { name: "PHP", icon: "tabler:brand-php", color: "#777BB4" },
            { name: "CodeIgniter", icon: "devicon-plain:codeigniter", color: "#EF4223" },
            { name: "MySQL", icon: "tabler:brand-mysql", color: "#4479A1" },
            { name: "MariaDB", icon: "simple-icons:mariadb", color: "#003545" },
            { name: "Node.js", icon: "tabler:brand-nodejs", color: "#339933" },
            { name: "Express", icon: "simple-icons:express", color: "#000000" },
            { name: "PostgreSQL", icon: "devicon-plain:postgresql", color: "#4169E1" },
            { name: "Prisma", icon: "simple-icons:prisma", color: "#0C344B" },
            { name: "SQLite", icon: "devicon-plain:sqlite", color: "#003B57" },
            { name: "MongoDB", icon: "tabler:brand-mongodb", color: "#47A248" },
            { name: "Python", icon: "tabler:brand-python", color: "#3776AB" },
        ]
    },
    {
        title: "Tools",
        description: "Development tools and platforms that enhance my workflow",
        gradient: "from-purple-400 to-pink-300",
        technologies: [
            { name: "Git", icon: "tabler:brand-git", color: "#F05032" },
            { name: "VS Code", icon: "tabler:brand-vscode", color: "#007ACC" },
            { name: "Android Studio", icon: "devicon-plain:androidstudio", color: "#3DDC84" },
            { name: "Warp", icon: "simple-icons:warp", color: "#0C344B" },
            { name: "GitHub", icon: "tabler:brand-github", color: "#181717" },
            { name: "Figma", icon: "tabler:brand-figma", color: "#F24E1E" },
            { name: "Vercel", icon: "tabler:brand-vercel", color: "#000000" },
        ]
    },
    {
        title: "Learning",
        description: "Technologies I'm currently exploring and mastering",
        gradient: "from-orange-400 to-red-300",
        technologies: []
    }
];