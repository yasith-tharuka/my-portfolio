// src/data/toolsData.ts

export const toolsData = {
  accent: "Developer Arsenal",
  heading: "Technologies &<br class=\"hidden sm:inline\" /> developer tools",
  description: "A compiled directory of programming languages, libraries, platforms, and frameworks I use to engineer robust software products.",
  categories: [
    { id: "all", label: "All Tech" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "backend", label: "Backend & Cloud" },
    { id: "ai-ml", label: "AI & ML" }
  ],
  tools: [
    // Languages
    { name: "Python", category: "languages", icon: "python", level: "Advanced", color: "#3776AB", bg: "hover:bg-[#3776AB]/10 hover:border-[#3776AB]/40 text-[#3776AB]" },
    { name: "Java", category: "languages", icon: "java", level: "Intermediate", color: "#007396", bg: "hover:bg-[#007396]/10 hover:border-[#007396]/40 text-[#007396]" },
    { name: "C Language", category: "languages", icon: "c", level: "Intermediate", color: "#A8B9CC", bg: "hover:bg-[#A8B9CC]/10 hover:border-[#A8B9CC]/40 text-[#A8B9CC]" },
    { name: "C#", category: "languages", icon: "csharp", level: "Intermediate", color: "#239120", bg: "hover:bg-[#239120]/10 hover:border-[#239120]/40 text-[#239120]" },
    { name: "TypeScript", category: "languages", icon: "typescript", level: "Advanced", color: "#3178C6", bg: "hover:bg-[#3178C6]/10 hover:border-[#3178C6]/40 text-[#3178C6]" },
    { name: "JavaScript", category: "languages", icon: "javascript", level: "Advanced", color: "#F7DF1E", bg: "hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E]/40 text-[#F7DF1E]" },
    
    // Frontend
    { name: "React", category: "frontend", icon: "react", level: "Advanced", color: "#61DAFB", bg: "hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/40 text-[#61DAFB]" },
    { name: "Next.js", category: "frontend", icon: "nextjs", level: "Advanced", color: "#000000", bg: "hover:bg-[#000000]/10 hover:border-[#000000]/40 text-black" },
    { name: "Astro", category: "frontend", icon: "astro", level: "Advanced", color: "#FF5D01", bg: "hover:bg-[#FF5D01]/10 hover:border-[#FF5D01]/40 text-[#FF5D01]" },
    { name: "Tailwind CSS", category: "frontend", icon: "tailwind", level: "Advanced", color: "#06B6D4", bg: "hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/40 text-[#06B6D4]" },
    { name: "UI/UX Design", category: "frontend", icon: "uiux", level: "Intermediate", color: "#F24E1E", bg: "hover:bg-[#F24E1E]/10 hover:border-[#F24E1E]/40 text-[#F24E1E]" },
    
    // Backend & Cloud
    { name: "Node.js", category: "backend", icon: "nodejs", level: "Advanced", color: "#339933", bg: "hover:bg-[#339933]/10 hover:border-[#339933]/40 text-[#339933]" },
    { name: "SQL & Databases", category: "backend", icon: "sql", level: "Intermediate", color: "#4479A1", bg: "hover:bg-[#4479A1]/10 hover:border-[#4479A1]/40 text-[#4479A1]" },
    { name: "GCP Cloud", category: "backend", icon: "gcp", level: "GCP ACE Certified", color: "#4285F4", bg: "hover:bg-[#4285F4]/10 hover:border-[#4285F4]/40 text-[#4285F4]" },
    { name: "Git & GitHub", category: "backend", icon: "git", level: "Advanced", color: "#F05032", bg: "hover:bg-[#F05032]/10 hover:border-[#F05032]/40 text-[#F05032]" },
    
    // AI & ML
    { name: "Scikit-Learn", category: "ai-ml", icon: "scikit", level: "Intermediate", color: "#F7931E", bg: "hover:bg-[#F7931E]/10 hover:border-[#F7931E]/40 text-[#F7931E]" },
    { name: "Deep Learning", category: "ai-ml", icon: "deeplearning", level: "Familiar", color: "#9B51E0", bg: "hover:bg-[#9B51E0]/10 hover:border-[#9B51E0]/40 text-[#9B51E0]" },
    { name: "Neural Networks", category: "ai-ml", icon: "neuralnet", level: "Familiar", color: "#2D9CDB", bg: "hover:bg-[#2D9CDB]/10 hover:border-[#2D9CDB]/40 text-[#2D9CDB]" }
  ]
};
