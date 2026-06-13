// src/data/navbarData.ts

export const navbarData = {
  logoFirstName: "Yasith",
  logoLastName: "Tharuka",
  contactBtnText: "Contact",
  contactBtnUrl: "#download",

  backgroundMenu: {
    label: "Background",
    desc: "Exploring my academic journey, <br />volunteer roles, and personal milestones.",
    links: [
      { name: "Education", url: "/#education", icon: "education" },
      { name: "Volunteer Experience", url: "/volunteer", icon: "volunteer" },
      { name: "Recommendations", url: "/#recommendations", icon: "recommendations" },
      { name: "Timeline Tree", url: "/timeline", icon: "timeline" }
    ]
  },

  resourcesMenu: {
    label: "Resources",
    desc: "My story, professional credentials, <br />and touchpoints to collaborate.",
    links: [
      { name: "About Me", url: "/about", icon: "about" },
      { name: "Download CV", url: "/Yasith_Tharuka_CV.pdf", icon: "download" },
      { name: "Contact Info", url: "/#contact", icon: "contact" },
      { name: "Tools & Tech Stack", url: "/#tools", icon: "tools" }
    ]
  },

  flatLinks: [
    { name: "Projects", url: "/#projects" },
    { name: "Certifications", url: "/certifications" },
    { name: "Blog", url: "/#blog" }
  ]
};
