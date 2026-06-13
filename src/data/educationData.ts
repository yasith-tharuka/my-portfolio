// src/data/educationData.ts

export const educationData = {
  accent: "Academic dossier",
  heading: "Education &<br class=\"hidden sm:inline\" /> academic journey",
  description: "A verified chronicle of my academic degrees, GPA standings, leadership roles, and transcripts.",
  keyActivitiesTitle: "Key Activities & Roles",
  verifiedCredentialsTitle: "Verified Credentials",
  lightboxDefaultTitle: "Document Viewer",
  lightboxDefaultDesc: "Document verification details...",
  gradArtifactsExpectedText: "Graduation artifacts expected modular release 2027",
  academicRegistryText: "Academic registry verified entry",

  verifiedResultPortalTitle: "Verified Result Portal",
  verifiedResultPortalDesc: "This secondary credential is authenticated through the Ministry of Education results portal. Click below to verify manually.",
  openExternalPortalText: "Open External Portal",

  educationList: [
    {
      id: "sliit-hdip",
      degree: "Higher Diploma in Information Technology (Software Engineering)",
      shortDegree: "Higher Diploma in IT (SE)",
      institution: "SLIIT City UNI",
      awardingBody: "Awarded by SLIIT City Uni (Subsidiary of SLIIT)",
      period: "Jul 2025 – Jul 2027",
      grade: "Expected",
      gradeLabel: "Current Standing",
      gradeValue: "In Progress / Expected",
      gradeSub: "Expected Graduation: Jul 2027",
      gradeColor: "text-blue-600 bg-blue-50/70 border-blue-150/40",
      progressPercent: 35,
      progressLabel: "Degree Progress",
      activities: [
        {
          role: "IEEE SB Public Visibility Sub‑Committee Member",
          desc: "Leading visual communications, graphics design guidelines, and branding layouts across the student branch events."
        },
        {
          role: "ICPC 2026 Student Branch Ambassador",
          desc: "Coordinating team registrations, regional communication channels, and logistics for local participants."
        },
        {
          role: "SESC Member",
          desc: "Software Engineering Student Community active participant, collaborating on code sessions and peer workshops."
        }
      ],
      skills: [
        "Academic English",
        "Software Development",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Web Technologies",
        "Git & Collaborative Workflow"
      ],
      logoType: "sliit",
      logo: "/certificates/Issuer_Logos/sliit_logo.jpg",
      accentColor: "#4285F4", // Blue
      bgGrad: "from-blue-500/10 to-indigo-500/5",
      documents: []
    },
    {
      id: "sliit-fcit",
      degree: "Foundation Certificate in Information Technology (FCIT)",
      shortDegree: "Foundation Cert in IT",
      field: "Information Technology",
      institution: "SLIIT City UNI",
      awardingBody: "Awarded by SLIIT City Uni (Subsidiary of SLIIT)",
      period: "Jul 2024 – Jul 2025",
      grade: "GPA: 3.21",
      gradeLabel: "Academic Performance",
      gradeValue: "3.21 GPA",
      gradeSub: "Scale: 4.00",
      gradeColor: "text-emerald-600 bg-emerald-50/70 border-emerald-150/40",
      progressPercent: 100,
      progressLabel: "Completed",
      activities: [
        {
          role: "IEEE Student Member",
          desc: "Engaged in professional development, technical seminars, and student hackathon operations."
        },
        {
          role: "Photography Club Committee Member",
          desc: "Assisted in club meeting logistics, photo walk operations, and high-resolution event coverage."
        }
      ],
      skills: [
        "C# Programming",
        "Project Management",
        "Database Systems (SQL)",
        "UI/UX Design Fundamentals",
        "Computer Networking",
        "Problem Solving",
        "Academic Communication"
      ],
      logoType: "sliit",
      logo: "/certificates/Issuer_Logos/sliit_logo.jpg",
      accentColor: "#34A853", // Green
      bgGrad: "from-emerald-500/10 to-teal-500/5",
      documents: [
        {
          name: "FCIT Certificate File",
          filename: "FCIT_Certificate.jpg",
          type: "image",
          url: "/certificates/FCIT_Certificate.jpg",
          thumbnail: "/certificates/FCIT_Certificate.jpg",
          description: "Official Foundation Certificate in IT transcript and credentials."
        }
      ]
    },
    {
      id: "othm-spoken-english",
      degree: "International Diploma in Spoken English (Level 3)",
      shortDegree: "Diploma in Spoken English",
      field: "Spoken English",
      institution: "OTHM Qualifications",
      awardingBody: "Completed through ICBT Campus, Sri Lanka – an approved teaching center for OTHM Qualifications. EQF Level 4.",
      period: "Oct 2024 – Apr 2025",
      grade: "Pass",
      gradeLabel: "Evaluation Status",
      gradeValue: "Pass",
      gradeSub: "European Qualification Framework (EQF) Level 4",
      gradeColor: "text-purple-600 bg-purple-50/70 border-purple-150/40",
      progressPercent: 100,
      progressLabel: "Completed",
      activities: [
        {
          role: "Completed through ICBT Campus",
          desc: "Attended intensive sessions on public speaking guidelines and oral diagnostics at ICBT Colombo."
        },
        {
          role: "EQF Level 4 Framework Verification",
          desc: "Validated standardized credits aligned with international language competency scales."
        }
      ],
      skills: [
        "Presentation Skills",
        "Public Speaking",
        "Verbal Communication",
        "Professional English",
        "Interpersonal Skills"
      ],
      logoType: "othm",
      logo: "", // Render custom SVG/CSS OTHM logo
      accentColor: "#8B5CF6", // Purple
      bgGrad: "from-purple-500/10 to-pink-500/5",
      documents: [
        {
          name: "Official OTHM Certificate",
          filename: "spoken_english_certificate.pdf",
          type: "pdf",
          url: "/certificates/spoken_english_certificate.pdf",
          thumbnail: "/certificates/spoken_english_certificate.pdf",
          description: "Level 3 International Diploma Certificate issued by OTHM Qualifications."
        },
        {
          name: "Academic CQF Transcript",
          filename: "spoken_english_transcript.pdf",
          type: "pdf",
          url: "/certificates/spoken_english_transcript.pdf",
          thumbnail: "/certificates/spoken_english_transcript.pdf",
          description: "Official credit transcript documenting modular speaking scores."
        }
      ]
    },
    {
      id: "thelijjawila-secondary",
      degree: "Secondary School Education (GCE Ordinary Level)",
      shortDegree: "Ordinary Level (Secondary)",
      field: "Formal subjects",
      institution: "Thelijjawila Central College",
      awardingBody: "Thelijjawila Central College, Sri Lanka",
      period: "Feb 2019 – Nov 2023",
      grade: "3 A’s, 3 B’s, 3 C’s",
      gradeLabel: "GCE O/L Results (2021)",
      gradeValue: "3 A's, 3 B's, 3 C's",
      gradeSub: "Credential ID: CL‑CK1339",
      gradeColor: "text-amber-600 bg-amber-50/70 border-amber-150/40",
      progressPercent: 100,
      progressLabel: "Completed",
      activities: [
        {
          role: "Founder & Leader – School Stamp Society (2022–2024)",
          desc: "Initiated the formal stamp society, organized school exhibitions, and managed weekly newsletters."
        },
        {
          role: "Participant – SLIC “Sahasak Nimavum” (2020 & 2021)",
          desc: "Competed in the national invention competition, presenting prototype mechanics."
        },
        {
          role: "Prize Winner – “Brain Busters” Quiz (SLIIT)",
          desc: "Won regional team positions in the national school quiz competition organized by SLIIT."
        }
      ],
      skills: [
        "Critical Thinking",
        "Teamwork",
        "Leadership & Organization",
        "Creative Innovation"
      ],
      logoType: "school",
      logo: "", // Render custom SVG/CSS school logo
      accentColor: "#FBBC05", // Amber
      bgGrad: "from-amber-500/10 to-orange-500/5",
      documents: [
        {
          name: "Verification Link",
          filename: "certificate.doenets.lk",
          type: "link",
          url: "https://certificate.doenets.lk",
          thumbnail: "",
          description: "Official results verification portal via the Department of Examinations, Sri Lanka. Credential ID: CL-CK1339"
        }
      ]
    }
  ]
};
