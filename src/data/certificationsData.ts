// src/data/certificationsData.ts

export const certificationsData = {
  title: "Certifications & Credentials | Yasith Tharuka",
  description: "A showcase of professional certifications, technical credentials, leadership impact, and extracurricular milestones.",
  heroAccent: "Achievements",
  heroTitle: "Professional Credentials & Certifications",
  heroDescription: "A curated summary of technical certifications, leadership roles, professional memberships, and extracurricular achievements verifying my expertise and community involvement.",
  returnHomeText: "Return to Home",
  
  categories: [
    { id: "all", name: "All Credentials", colorClass: "active-all" },
    { id: "cs-engineering", name: "CS & Engineering", colorClass: "active-tab-blue" },
    { id: "cloud", name: "Cloud", colorClass: "active-tab-purple" },
    { id: "leadership-impact", name: "Leadership & Impact", colorClass: "active-tab-amber" },
    { id: "memberships", name: "Professional Memberships", colorClass: "active-tab-green" },
    { id: "extracurricular", name: "Extracurricular", colorClass: "active-tab-red" }
  ],

  certifications: [
    {
      title: "Certificate in CS50’s Introduction to Computer Science",
      issuer: "Harvard",
      date: "Issued Jan 2026",
      category: "cs-engineering",
      issuerLogo: "harvard.jpg",
      skills: ["C Programming", "Python","Flask", "SQL & Database Design", "Algorithms"],
      verifyUrl: "https://certificates.cs50.io/d4495557-78e6-48a8-993c-69ff057b07d3.pdf?size=letter",
      proofImage: "/certificates/cs50x_certificate.png",
      description: "A comprehensive introduction to computer science and programming fundamentals, emphasizing data structures, algorithms, and web development principles."
    },
    {
      title: "Java Programming: Solving Problems with Software",
      issuer: "Duke University",
      date: "Issued July 2025",
      category: "cs-engineering",
      issuerLogo: "Uni-Duke.jpg",
      credentialId: "VPTMY6TC53VG",
      skills: ["Object-Oriented Programming (OOP)", "Java"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/VPTMY6TC53VG",
      proofImage: "/certificates/java_duke_certificate.jpg",
      description: "Demonstrated Java programming proficiency, problem‑solving ability, and object‑oriented design skills through hands‑on projects."
    },
    {
      title: "Community Organizer – GDG DevFest Sri Lanka",
      issuer: "Google Developer Group (GDG)",
      date: "2024",
      category: "leadership-impact",
      issuerLogo: "google_logo.jpg",
      skills: ["Logistics Coordinator", "Tech Outreach", "Event Operations"],
      proofImage: "/certificates/devfest_volunteer.png",
      verifyUrl: "https://gdg.community.dev/gdg-sri-lanka/",
      description: "Collaborated in organizing Sri Lanka's largest developer event. Managed session layouts, speaker alignments, and logistics."
    },
    {
      title: "IEEEXTREME 18.0 Programming Contest – Participant",
      issuer: "IEEE",
      date: "Oct 2024",
      category: "extracurricular",
      issuerLogo: "IEEE_UCSC.jpg",
      skills: ["Competitive Programming", "Advanced Algorithms", "Dynamic Programming"],
      proofImage: "/certificates/ieeextreme_score.png",
      verifyUrl: "https://ieeextreme.org",
      description: "Competed in the global 24-hour virtual programming challenge, solving high-difficulty logic problems under intense time constraints."
    },
    {
      title: "Google Cloud Certified – Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Issued Aug 2024",
      category: "cloud",
      issuerLogo: "google_cloud_logo.jpg",
      credentialId: "GCP-ACE-9821",
      skills: ["GCP Platform", "Kubernetes (GKE)", "IAM Roles", "Stackdriver"],
      verifyUrl: "https://google.acredly.com/verification",
      proofImage: "/certificates/google_certified.png",
      description: "Demonstrated capacity to plan, configure, deploy, and secure cloud solutions, with active administration of GCP projects."
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (via Coursera)",
      date: "Issued Jun 2024",
      category: "cs-engineering",
      issuerLogo: "google_logo.jpg",
      skills: ["Neural Networks", "TensorFlow", "Computer Vision", "Sequence Models"],
      verifyUrl: "https://coursera.org/verify/deeplearning",
      proofImage: "/certificates/deeplearning_certified.png",
      description: "A 5-course specialization covering fundamental deep learning concepts, structuring ML projects, convolutional networks, and NLP systems."
    },
    {
      title: "IEEE Student Branch – Secretary & Committee Member",
      issuer: "IEEE University of Moratuwa Student Branch",
      date: "2024 - Present",
      category: "leadership-impact",
      issuerLogo: "IEEE_UCSC.jpg",
      skills: ["Operations Management", "Strategic Planning", "Volunteer Leadership"],
      verifyUrl: "https://www.ieee.org",
      description: "Driving administrative operations, coordinating volunteers, and spearheading major university student activities and technical workshops."
    },
    {
      title: "IEEE Computer Society Member",
      issuer: "IEEE Computer Society",
      date: "2024 - Present",
      category: "memberships",
      issuerLogo: "IEEE_UCSC.jpg",
      skills: ["Software Engineering", "AI Research", "Computer Architecture"],
      verifyUrl: "https://www.computer.org",
      description: "Specialized society access focusing on advanced computing research, standard publications, and modern technological guidelines."
    },
    {
      title: "Association for Computing Machinery Student Member",
      issuer: "ACM",
      date: "2024 - Present",
      category: "memberships",
      issuerLogo: "github_logo.jpg",
      skills: ["ACM Digital Library", "Computing Ethics", "Research Networks"],
      verifyUrl: "https://www.acm.org",
      description: "Engaging with global computing professionals, utilizing research resources, and participating in academic forums."
    },
    {
      title: "IEEE Student Member",
      issuer: "Institute of Electrical and Electronics Engineers",
      date: "2023 - Present",
      category: "memberships",
      issuerLogo: "IEEE_UCSC.jpg",
      credentialId: "IEEE ID: #98765432",
      skills: ["Global Networking", "Research Publications", "IEEE Spectrum Access"],
      verifyUrl: "https://www.ieee.org",
      proofImage: "/certificates/ieee_membership.png",
      description: "Active member in the world's largest professional technical organization, participating in local and global engineering events."
    },
    {
      title: "Toastmasters Gavel Club – Member",
      issuer: "Toastmasters International Affiliate",
      date: "2023 - Present",
      category: "extracurricular",
      issuerLogo: "SLIC_logo.jpg",
      skills: ["Public Speaking", "Communication Skills", "Evaluation"],
      verifyUrl: "https://www.toastmasters.org",
      description: "Actively participating in toastmasters events to build impromptu speaking, formal presentations, and structured feedback mechanisms."
    },
    {
      title: "National Hackathons – Top 10 Finisher",
      issuer: "Various (HackX, Mora Extreme)",
      date: "2023 - 2024",
      category: "extracurricular",
      issuerLogo: "Uni-Moratuwa.jpg",
      skills: ["Rapid Prototyping", "Pitching & Presentation", "Product Design"],
      proofImage: "/certificates/hackx_cert.png",
      description: "Designed, engineered, and presented novel products in 24-hour hackathons, qualifying in the top tiers nationally."
    },
    {
      title: "Lead Volunteer – CivicPulse Initiative",
      issuer: "University of Moratuwa",
      date: "2023",
      category: "leadership-impact",
      issuerLogo: "Uni-Moratuwa.jpg",
      skills: ["Full Stack Development", "Civic Technology", "Agile Management"],
      verifyUrl: "https://github.com/yasith-tharuka/civicpulse",
      description: "Led a software volunteer team to develop and launch CivicPulse, a web platform tracking and visualizing public civic benchmarks."
    }
  ],

  emblemBadge: `
  <div class="flex flex-col items-center justify-center text-center p-6 bg-white/40 border border-white/50 backdrop-blur-md rounded-[2.2rem] shadow-sm max-w-[280px]">
    <div class="p-5 bg-blue-500/10 text-blue-600 rounded-full mb-4">
      <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
    <h3 class="font-san font-medium text-gray-900 text-base mb-1">Official Credential</h3>
    <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Not Applicable</p>
    <p class="text-[11px] text-gray-650 leading-normal">This membership or achievement has been officially logged and verified on the organization's member portal.</p>
  </div>
`
};
