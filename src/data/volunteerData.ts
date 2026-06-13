// src/data/volunteerData.ts

export const volunteerData = {
  accent: "Impact & Outreach",
  heading: "Volunteer experience <br class=\"hidden sm:inline\" />for community impact",
  description: "An overview of my contributions across technology committees, student leadership bodies, and public civic service initiatives.",
  returnHomeText: "Return to Home",
  viewAllBtnText: "View All Volunteer Work",
  scopeTitle: "Scope of Activities",
  projectGalleryTitle: "Project Gallery",
  serviceLetterTitle: "Service Letter",
  clickToZoomText: "CLICK TO ZOOM",
  verifiedLetterLabel: "VERIFIED LETTER",
  campusLiaisonLabel: "SLIIT City Campus Liaison",
  archivedPortfolioDesignLabel: "ARCHIVED PORTFOLIO DESIGN",

  categories: [
    { id: "all", name: "All Initiatives" },
    { id: "science-tech", name: "Science & Tech", colorClass: "border-[#4285F4] text-[#4285F4] hover:bg-[#e8f0fe] active-tab-blue" },
    { id: "education", name: "Education", colorClass: "border-[#34A853] text-[#34A853] hover:bg-[#e6f4ea] active-tab-green" },
    { id: "social-services", name: "Social Services", colorClass: "border-[#FBBC05] text-[#b06000] hover:bg-[#fef7e0] active-tab-amber" }
  ],

  volunteerExperiences: [
    {
      id: "challenge-sphere",
      title: "Program Coordinator - IEEE Challenge Sphere 2026",
      organization: "IEEE Sri Lanka Section",
      duration: "Apr 2026 - Present",
      period: "3 mos",
      category: "science-tech",
      categoryLabel: "Science & Tech",
      description: "Serving on the national organizing committee for IEEE Challenge Sphere 2026, a flagship event by the IEEE Sri Lanka Section Student Activities Committee (SLSAC).",
      logo: "IEEE_UCSC.jpg",
      color: "#4285F4", // Google Blue
      activities: [
        "Serving on the national organizing committee to lead program planning, speaker alignments, and SLSAC coordinators.",
        "Coordinating session schedules, resource allocation, and logistical pipelines across university student branches.",
        "Managing participant outreach, feedback forms, and event registration pipelines on a national scale."
      ],
      media: []
    },
    {
      id: "cloud-summit",
      title: "Remote Marketing & Design Volunteer (Washington DC, USA) - IEEE Cloud Summit 2026",
      organization: "IEEE",
      duration: "May 2026 - Present",
      period: "2 mos",
      category: "science-tech",
      categoryLabel: "Science & Tech",
      description: "Remote marketing and design volunteer for the IEEE Cloud Summit 2026, organized by the IEEE Washington DC Section, USA.",
      logo: "IEEE_UCSC.jpg",
      color: "#4285F4", // Google Blue
      activities: [
        "Collaborated with the IEEE Washington DC Section to design digital marketing banners, brochures, and speaker badges.",
        "Assisted in formatting international PR distributions and drafting email campaigns for prospective summit attendees.",
        "Coordinated with marketing chairs to align branding guidelines across digital channels."
      ],
      media: []
    },
    {
      id: "public-visibility",
      title: "Public Visibility Sub-Committee Team Member",
      organization: "IEEE Student Branch of SLIIT",
      duration: "Mar 2026 - Present",
      period: "4 mos",
      category: "science-tech",
      categoryLabel: "Science & Tech",
      description: "Serving as an active designer and editor in SLIIT's student branch publicity campaigns.",
      logo: "sliit_logo.jpg",
      color: "#4285F4", // Google Blue
      activities: [
        "Designing visual graphics, YouTube thumbnails, and social media flyers using standard brand elements.",
        "Created reusable deck templates and typography systems for the standing committee publications.",
        "Collaborated on video edits and micro-interactions for public announcements to boost student engagement."
      ],
      media: [
        { 
          id: "pub-sub",
          type: "image", 
          name: "Public Visibility Sub-Committee", 
          desc: "Design templates and typography guidelines created for public sub-committee operations.",
          mockTheme: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          mockTitle: "Public Visibility Sub-Committee"
        },
        { 
          id: "sb-standing",
          type: "image", 
          name: "IEEE SB 2026 Standing Committee", 
          desc: "Branding collateral and administrative visibility assets for the standing committee.",
          mockTheme: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          mockTitle: "IEEE SB 2026 Standing Committee"
        },
        { 
          id: "pub-team",
          type: "image", 
          name: "Public Visibility Team .jpg", 
          desc: "Highlight poster featuring design team layouts, typography spacing, and color theory implementations.",
          mockTheme: "linear-gradient(135deg, #111827 0%, #374151 100%)",
          mockTitle: "Public Visibility Design Team"
        }
      ]
    },
    {
      id: "icpc-ambassador",
      title: "Student Branch Ambassador | Sri Lanka Regional",
      organization: "ICPC - International Collegiate Programming Contest",
      duration: "Nov 2025 - Feb 2026",
      period: "4 mos",
      category: "science-tech",
      categoryLabel: "Science & Tech",
      description: "Served as the Student Branch Ambassador for SLIIT City Uni during the ICPC Sri Lanka Regional Contest 2025/26.",
      logo: "sliit_logo.jpg",
      color: "#EA4335", // Google Red
      activities: [
        "Represented SLIIT City Uni as the primary point of contact for Sri Lanka's first-ever ICPC Regional Contest.",
        "Coordinated contest registration, team communication pipelines, and delegate alignments under regional guidelines.",
        "Helped manage contest day check-in desks and participant logistics, ensuring operations ran smoothly."
      ],
      media: [
        { 
          id: "icpc-letter",
          type: "document", 
          name: "ICPC 2025 Sri Lanka Service Letter - Ambassador", 
          desc: "Official service letter recognizing role as Student Branch Ambassador during the ICPC Sri Lanka Regional Contest 2025/26, highlighting coordination excellence.",
          letterHeader: "INTERNATIONAL COLLEGIATE PROGRAMMING CONTEST",
          letterSubHeader: "Sri Lanka Regional Secretariat — 2025/26",
          letterTitle: "LETTER OF SERVICE APPRECIATION",
          letterBody: "This service letter is awarded to Yasith Tharuka in recognition of his outstanding contribution and service as the Student Branch Ambassador for SLIIT City Uni during the first-ever ICPC Sri Lanka Regional Contest. Throughout the contest cycle, he successfully coordinated student registrations, streamlined administrative communications, and represented regional contest standards with diligence and integrity.",
          letterSignatory: "Prof. Karunaratne Silva\nICPC Sri Lanka Regional Director"
        }
      ]
    },
    {
      id: "publicity-member",
      title: "Publicity Team Member - LeadSpring '25, LaunchPad '25 & RevUp 1.0",
      organization: "IEEE Student Branch of SLIIT",
      duration: "Oct 2025 - Dec 2025",
      period: "3 mos",
      category: "science-tech",
      categoryLabel: "Science & Tech",
      description: "Served on the organizing committees for LeadSpring 2025, RevUp 1.0, and LaunchPad ’25.",
      logo: "sliit_logo.jpg",
      color: "#4285F4", // Google Blue
      activities: [
        "Designed event visibility layouts and promotional calendars across major social handles.",
        "Drafted public relations announcements and newsletters that generated record participant registration metrics.",
        "Supported digital outreach channels and speaker highlight cards for organizing committees."
      ],
      media: [
        { 
          id: "leadspring",
          type: "image", 
          name: "LeadSpring '25 Organizing Committee", 
          desc: "Public relations and registration-boost templates designed for the LeadSpring '25 launch.",
          mockTheme: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
          mockTitle: "LeadSpring '25 Committee"
        },
        { 
          id: "launchpad",
          type: "image", 
          name: "LaunchPad 1.0 Organizing Committee", 
          desc: "Marketing templates, speaker announcement graphics, and PR schedule layouts.",
          mockTheme: "linear-gradient(135deg, #701a75 0%, #d946ef 100%)",
          mockTitle: "LaunchPad 1.0 Committee"
        },
        { 
          id: "revup",
          type: "image", 
          name: "RevUp '25 Organizing Committee", 
          desc: "Coordinated social campaign cards and outreach designs for RevUp 1.0.",
          mockTheme: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
          mockTitle: "RevUp '25 Committee"
        }
      ]
    },
    {
      id: "sliitxtreme-secretary",
      title: "Secretary Team Member of SLIITXtreme 4.0 Organizing Committee",
      organization: "IEEE Computer Society of SLIIT",
      duration: "Sep 2025 - Oct 2025",
      period: "2 mos",
      category: "science-tech",
      categoryLabel: "Science & Tech",
      description: "Supported the team on event day by assisting with logistics and ensuring smooth overall operations.",
      logo: "sliit_logo.jpg",
      color: "#4285F4", // Google Blue
      activities: [
        "Assisted day-of logistics, managing attendee registrations, and badges at check-in desks.",
        "Coordinated information flows and participant directions across coding halls.",
        "Supported administrative tasks of the Computer Society organizing committee."
      ],
      media: [
        { 
          id: "xtreme-org",
          type: "image", 
          name: "SLIITXtreme 4.0 Organizing Committee", 
          desc: "Official credentials and organizational framework for the SLIITXtreme 4.0 Hackathon.",
          mockTheme: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
          mockTitle: "SLIITXtreme 4.0 Committee"
        },
        { 
          id: "xtreme-pub",
          type: "image", 
          name: "SLIITXtreme 4.0 Public Visibility Team - Organizing Committee", 
          desc: "Campaign designs and team credits banner designed for event day.",
          mockTheme: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)",
          mockTitle: "SLIITXtreme 4.0 Visibility"
        },
        { 
          id: "xtreme-photo",
          type: "image", 
          name: "SLIITXtreme_4.0_002.jpeg", 
          desc: "Visual representation capturing event day registrations and check-in logistics operations.",
          mockTheme: "linear-gradient(135deg, #030712 0%, #1f2937 100%)",
          mockTitle: "SLIITXtreme 4.0 Setup"
        }
      ]
    },
    {
      id: "election-2024",
      title: "Parliamentary Election 2024 : Assistant to Presiding Officer",
      organization: "Election Commission of Sri Lanka",
      duration: "Nov 2024",
      period: "1 mo",
      category: "social-services",
      categoryLabel: "Social Services",
      description: "Assisted in the strict enforcement of election laws and protocol within the polling station, ensuring zero procedural violations.",
      logo: "election_commission",
      color: "#FBBC05", // Google Yellow
      activities: [
        "Assisted the Presiding Officer in enforcing strict election protocols and maintaining complete station security.",
        "Handled ballot boxes, verification registries, and official seals with absolute accountability.",
        "Provided guidelines and directions to polling attendees, ensuring a compliant voting process."
      ],
      media: []
    },
    {
      id: "photography-club",
      title: "Committee Member of SCU Photography Club",
      organization: "SLIIT City UNI",
      duration: "May 2025 - May 2026",
      period: "1 yr 1 mo",
      category: "education",
      categoryLabel: "Education",
      description: "Active committee member assisting in club operations and event media coverage.",
      logo: "sliit_logo.jpg",
      color: "#34A853", // Google Green
      activities: [
        "Assisted in club meeting logistics, photo walk operations, and database archives.",
        "Captured high-resolution photographs covering the SCU Annual General Meeting 2025.",
        "Collaborated with student photography teams for campus event distributions."
      ],
      media: [
        { 
          id: "scu-agm",
          type: "image", 
          name: "SCU_AGM_2025", 
          desc: "Annual General Meeting coverage and photography archive highlights.",
          mockTheme: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
          mockTitle: "SCU Photography Club AGM"
        }
      ]
    },
    {
      id: "election-2025",
      title: "Local Government Election 2025 : Assistant to Presiding Officer",
      organization: "Election Commission of Sri Lanka",
      duration: "May 2025",
      period: "1 mo",
      category: "social-services",
      categoryLabel: "Social Services",
      description: "Assisted in the strict enforcement of election laws and protocol within the polling station, ensuring zero procedural violations.",
      logo: "election_commission",
      color: "#FBBC05", // Google Yellow
      activities: [
        "Ensured electoral registry alignments, distributed ballot materials, and authenticated identities.",
        "Entrusted with security details, ballot box logistics, and post-polling seals verification.",
        "Collaborated with law enforcement to maintain polling station protocol compliance."
      ],
      media: []
    },
    {
      id: "edu-week",
      title: "Day Volunteer - IEEE Education Week 2026",
      organization: "IEEE Young Professionals Sri Lanka",
      duration: "May 2026",
      period: "1 mo",
      category: "education",
      categoryLabel: "Education",
      description: "Contributed as a day volunteer supporting event flow and logistics during IEEE Education Week 2026.",
      logo: "IEEE_UCSC.jpg",
      color: "#34A853", // Google Green
      activities: [
        "Assisted in technical setup, presenter microphone distributions, and slides flow.",
        "Guided visiting professional speakers, student delegates, and attendees to designated venues.",
        "Supported administrative coordination to maintain tight schedule timelines."
      ],
      media: []
    }
  ]
};
