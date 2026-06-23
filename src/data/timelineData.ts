// src/data/timelineData.ts

export const timelineData = {
  title: "Timeline Journey | Yasith Tharuka",
  accentHome: "Interactive Journey",
  accentVisual: "Visual Journey",
  heading: "Interactive Timeline Tree",
  description: "A linear progression tracking my academic milestones, developer community leadership, and volunteering contributions over the years.",
  returnHomeText: "Return to Home",
  exploreFullText: "Explore Full Journey",

  categories: [
    { id: "all", name: "All Milestones", colorClass: "active-all" },
    { id: "education", name: "Education & Tech", colorClass: "active-tab-blue" },
    { id: "volunteer", name: "Volunteer & Community", colorClass: "active-tab-green" },
    { id: "achievements", name: "Achievements & Exp", colorClass: "active-tab-amber" }
  ],

  milestones: [
    {
      id: "challenge-sphere",
      year: "2026",
      title: "Program Coordinator - IEEE Challenge Sphere 2026",
      organization: "IEEE Sri Lanka Section",
      date: "Apr 2026 - Present",
      category: "volunteer",
      description: "Serving on the national organizing committee for IEEE Challenge Sphere 2026, a flagship event by the IEEE Sri Lanka Section Student Activities Committee (SLSAC). Leading program planning and speaker alignments.",
      skills: ["Leadership", "Program Planning", "Event Operations"],
      color: "#4285F4" // Blue
    },
    {
      id: "cloud-summit",
      year: "2026",
      title: "Remote Marketing & Design Volunteer",
      organization: "IEEE Cloud Summit 2026 (Washington DC, USA)",
      date: "May 2026 - Present",
      category: "volunteer",
      description: "Collaborating remotely with the IEEE Washington DC Section to design digital marketing banners, brochures, and speaker badges, and drafting international PR distributions.",
      skills: ["Branding", "Digital Marketing", "Visual Design"],
      color: "#8B5CF6" // Purple
    },
    {
      id: "public-visibility",
      year: "2026",
      title: "Public Visibility Sub-Committee Team Member",
      organization: "IEEE Student Branch of SLIIT",
      date: "Mar 2026 - Present",
      category: "volunteer",
      description: "Designing visual graphics, YouTube thumbnails, and social media flyers while managing deck templates and typography systems for committee publications.",
      skills: ["Graphic Design", "Brand Spacing", "Typography"],
      color: "#4285F4" // Blue
    },
    {
      id: "cs50",
      year: "2026",
      title: "Certificate in CS50's Introduction to Computer Science",
      organization: "Harvard University",
      date: "Issued Jan 2026",
      category: "education",
      description: "Completed Harvard's introductory course, gaining core skills in C, Python, SQL, web development, algorithms, and data structures.",
      skills: ["C Programming", "Python", "SQL", "Algorithms"],
      color: "#EA4335" // Red
    },
    {
      id: "icpc-ambassador",
      year: "2025",
      title: "Student Branch Ambassador - ICPC Sri Lanka Regional",
      organization: "ICPC - International Collegiate Programming Contest",
      date: "Nov 2025 - Feb 2026",
      category: "volunteer",
      description: "Represented SLIIT City Uni as the primary point of contact, coordinating registration, team communications, and delegate check-ins for the regional contest.",
      skills: ["Public Relations", "Team Coordination", "Logistics"],
      color: "#FBBC05" // Amber
    },
    {
      id: "publicity-member",
      year: "2025",
      title: "Publicity Team Member - LeadSpring '25, LaunchPad '25 & RevUp 1.0",
      organization: "IEEE Student Branch of SLIIT",
      date: "Oct 2025 - Dec 2025",
      category: "volunteer",
      description: "Coordinated digital visibility campaigns and designed promotional layouts for a series of local student tech events, boosting registrations.",
      skills: ["Publicity", "Event Outreach", "Branding"],
      color: "#4285F4" // Blue
    },
    {
      id: "sliitxtreme-secretary",
      year: "2025",
      title: "Secretary Team Member - SLIITXtreme 4.0 Hackathon",
      organization: "IEEE Computer Society of SLIIT",
      date: "Sep 2025 - Oct 2025",
      category: "volunteer",
      description: "Supported registration desk logistics, attendee check-ins, and coding hall information flows for the computer society hackathon.",
      skills: ["Logistics", "Operations", "Event Day Coordinator"],
      color: "#8B5CF6" // Purple
    },
    {
      id: "java-duke",
      year: "2025",
      title: "Java Programming Specialization",
      organization: "Duke University",
      date: "Issued July 2025",
      category: "education",
      description: "Demonstrated Java programming proficiency, object-oriented design principles, and problem-solving through hands-on software projects.",
      skills: ["OOP", "Java", "Problem Solving"],
      color: "#34A853" // Green
    },
    {
      id: "photography-club",
      year: "2025",
      title: "Committee Member",
      organization: "SCU Photography Club (SLIIT City UNI)",
      date: "May 2025 - May 2026",
      category: "volunteer",
      description: "Assisted in club meeting logistics, photo walk operations, database archives, and provided high-resolution photography coverage for campus events.",
      skills: ["Photography", "Event Coverage", "Database Archives"],
      color: "#34A853" // Green
    },
    {
      id: "election-2025",
      year: "2025",
      title: "Assistant to Presiding Officer - Local Government Election",
      organization: "Election Commission of Sri Lanka",
      date: "May 2025",
      category: "achievements",
      description: "Assisted the Presiding Officer in enforcing polling station protocols, handling ballot registration registries, and verifying security seals.",
      skills: ["Protocol Compliance", "Accountability", "Electoral Law"],
      color: "#FBBC05" // Amber
    },
    {
      id: "election-2024",
      year: "2024",
      title: "Assistant to Presiding Officer - Parliamentary Election",
      organization: "Election Commission of Sri Lanka",
      date: "Nov 2024",
      category: "achievements",
      description: "Supported security verification and protocol adherence at the polling station, ensuring legal compliance and secure ballot box logistics.",
      skills: ["Logistics Compliance", "Security", "Public Service"],
      color: "#FBBC05" // Amber
    },
    {
      id: "devfest-coordinator",
      year: "2024",
      title: "Community Organizer – GDG DevFest Sri Lanka",
      organization: "Google Developer Group (GDG)",
      date: "2024",
      category: "volunteer",
      description: "Supported session layouts, speaker alignments, and attendee registration pipelines for Sri Lanka's largest developer event.",
      skills: ["Logistics Coordination", "Tech Outreach", "Event Operations"],
      color: "#EA4335" // Red
    },
    {
      id: "ieeextreme",
      year: "2024",
      title: "IEEEXTREME 18.0 Programming Contest – Participant",
      organization: "IEEE",
      date: "Oct 2024",
      category: "achievements",
      description: "Competed in the global 24-hour virtual programming challenge, solving high-difficulty logic problems under intense time constraints.",
      skills: ["Competitive Programming", "Advanced Algorithms", "Dynamic Programming"],
      color: "#4285F4" // Blue
    },
    {
      id: "gcp-ace",
      year: "2024",
      title: "Google Cloud Certified – Associate Cloud Engineer",
      organization: "Google Cloud",
      date: "Issued Aug 2024",
      category: "education",
      description: "Demonstrated capacity to plan, configure, deploy, and secure cloud solutions, with active administration of GCP projects.",
      skills: ["GCP Platform", "Kubernetes (GKE)", "IAM Roles", "Stackdriver"],
      color: "#4285F4" // Blue
    },
    {
      id: "deep-learning",
      year: "2024",
      title: "Deep Learning Specialization",
      organization: "DeepLearning.AI (via Coursera)",
      date: "Issued Jun 2024",
      category: "education",
      description: "Completed a 5-course specialization covering fundamental deep learning concepts, neural networks, convolutional networks (CV), and NLP.",
      skills: ["Neural Networks", "TensorFlow", "Computer Vision", "NLP"],
      color: "#8B5CF6" // Purple
    },
    {
      id: "ieee-secretary",
      year: "2024",
      title: "IEEE Student Branch – Secretary & Committee Member",
      organization: "IEEE University of Moratuwa Student Branch",
      date: "2024 - Present",
      category: "volunteer",
      description: "Driving administrative operations, coordinating volunteers, and spearheading major university student activities and technical workshops.",
      skills: ["Operations Management", "Strategic Planning", "Volunteer Leadership"],
      color: "#4285F4" // Blue
    },
    {
      id: "memberships-2023",
      year: "2023",
      title: "IEEE & ACM Student Member",
      organization: "IEEE & ACM Societies",
      date: "2023 - Present",
      category: "volunteer",
      description: "Active member in the world's largest professional technical organizations, participating in research, standard publications, and local workshops.",
      skills: ["Global Networking", "Research Publications", "Computer Architecture"],
      color: "#34A853" // Green
    },
    {
      id: "national-hackathons",
      year: "2023",
      title: "National Hackathons – Top 10 Finisher",
      organization: "Various (HackX, Mora Extreme)",
      date: "2023 - 2024",
      category: "achievements",
      description: "Designed, engineered, and presented novel products in 24-hour hackathons, qualifying in the top tiers nationally.",
      skills: ["Rapid Prototyping", "Pitching & Presentation", "Product Design"],
      color: "#EA4335" // Red
    },
    {
      id: "civicpulse",
      year: "2023",
      title: "Lead Volunteer & Full Stack Developer - CivicPulse",
      organization: "University of Moratuwa",
      date: "2023",
      category: "volunteer",
      description: "Led a software volunteer team to develop and launch CivicPulse, a web platform tracking and visualizing public civic benchmarks.",
      skills: ["Full Stack Development", "Civic Technology", "Agile Management"],
      color: "#34A853" // Green
    },
    {
      id: "uni-entrance",
      year: "2023",
      title: "Entered University of Moratuwa (BSc Hons)",
      organization: "University of Moratuwa",
      date: "2023",
      category: "education",
      description: "Commenced undergraduate studies in Computer Science at the University of Moratuwa, Sri Lanka's leading engineering institution.",
      skills: ["Computer Science", "Algorithms", "Mathematics"],
      color: "#4285F4" // Blue
    },
    {
      //finalized
      id: "Ordinery-level",
      year: "2023",
      title: "G.C.E. O/L Examination",
      organization: "Private Candidate",
      date: "2023",
      category: "education",
      description: "Completed G.C.E. O/L Examination as a private candidate, laying the groundwork for my A-Level studies.",
      skills: ["Mathematics", "Physics", "Chemistry"],
      color: "#EA4335" // Red
    }
  ]
};
