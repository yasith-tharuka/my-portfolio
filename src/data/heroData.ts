// src/data/heroData.ts

export const heroData = {
  typedName: "Yasith Tharuka",
  typedTitle: "Computer Science Undergraduate",
  description: "Pushing the boundaries of open-source software and machine learning. Computer Science undergraduate, full-stack developer, and IEEE Volunteer",
  ctaProjectsText: "View Projects",
  ctaContactText: "Get in Touch",
  ctaSummaryText: "Quick Summary",
  
  slides: [
    {
      index: 0,
      path: "yasith-tharuka/volunteer",
      image: "/Hero_Images/volunteer.png",
      alt: "Volunteer work and projects"
    },
    {
      index: 1,
      path: "yasith-tharuka/certificates",
      image: "/Hero_Images/certificates.png",
      alt: "Certificates and achievements"
    },
    {
      index: 2,
      path: "bash - terminal",
      gitCommands: [
        { type: "prompt", text: "git log --oneline --recent" },
        { type: "log", commit: "a1b2c3d", msg: "Deploy Acoustic ML Classifier using Scikit-learn" },
        { type: "log", commit: "f4e5d6c", msg: "Merge pull request: Open-source tech stack updates" },
        { type: "log", commit: "7b8a9f0", msg: "Initialize CivicPulse - CS50x Final Submission" },
        { type: "log", commit: "9c8d7e6", msg: "Setup Python/Flask backend architecture" }
      ]
    }
  ],

  quickSummary: {
    downloadCvUrl: "/Yasith_Tharuka_CV.pdf",
    downloadCvText: "Download CV",
    certificatesUrl: "/certifications",
    certificatesText: "Certificates",
    portfolioUrl: "#projects",
    portfolioText: "Full Portfolio"
  },

  typewriterItems: [
    {
      id: "summary-job-title",
      text: "Yasith Tharuka - Computer Science Undergraduate",
      delay: 0,
    },
    { id: "summary-tag-candidate", text: "Yasith Tharuka", delay: 80 },
    { id: "summary-tag-location", text: "Moratuwa, LK", delay: 90 },
    { id: "summary-tag-level", text: "Open to Work", delay: 100 },
    { id: "summary-about-title", text: "About Yasith", delay: 120 },
    {
      id: "summary-about-p1",
      text: "I am a Computer Science undergraduate passionate about bridging robust full-stack engineering with scalable machine learning. I enjoy building clean, high-performance systems and managing active cloud deployments. Driven by curiosity and a commitment to open source, I am constantly learning and sharing my work.",
      delay: 140,
    },
    {
      id: "summary-min-title",
      text: "Minimum qualifications:",
      delay: 180,
    },
    {
      id: "summary-min-q1",
      text: "Bachelor's degree in Computer Science or equivalent practical experience.",
      delay: 200,
    },
    {
      id: "summary-min-q2",
      text: "Experience in software development with one or more programming languages (Python, Java, C, JavaScript).",
      delay: 210,
    },
    {
      id: "summary-min-q3",
      text: "Experience building full-stack web applications using React, Next.js, Node, Flask, and Astro.",
      delay: 220,
    },
    {
      id: "summary-pref-title",
      text: "Preferred qualifications:",
      delay: 240,
    },
    {
      id: "summary-pref-q1",
      text: "Active Cloud Administrator experience with Google Cloud Platform (GCP ACE Certified).",
      delay: 260,
    },
    {
      id: "summary-pref-q2",
      text: "Solid foundation in Machine Learning, Deep Learning (Neural Networks, CV, NLP), and Scikit-learn.",
      delay: 270,
    },
    {
      id: "summary-pref-q3",
      text: "Demonstrated leadership record in active student tech communities (IEEE SB Secretary, GDG Organizer).",
      delay: 280,
    },
    { id: "summary-resp-title", text: "Key Capabilities", delay: 300 },
    {
      id: "summary-resp-r1",
      text: "Write highly testable, modular, and optimized product source code.",
      delay: 320,
    },
    {
      id: "summary-resp-r2",
      text: "Deploy and secure cloud services using Google Cloud Engine (GCP) and container technologies (Docker, Kubernetes).",
      delay: 330,
    },
    {
      id: "summary-resp-r3",
      text: "Design database schemas (SQL, MongoDB) and REST API integrations.",
      delay: 340,
    },
    {
      id: "summary-resp-r4",
      text: "Coordinate technical outreach events and manage documentation protocols.",
      delay: 350,
    },
  ]
};
