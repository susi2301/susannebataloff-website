import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Thirteen Games - Indie Game Studio",
  author: "Thirteen Games",
  description:
    "Indie Game Developer and founder of Thirteen Games",
  lang: "de",
  navLinks: [
  { text: "Projects", href: "/#projects" },
  { text: "About Me", href: "/me" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dani-lipke-066a81372/" },
    { text: "Github", href: "https://github.com/Dambthirteen" },
    { text: "Youtube", href: "https://www.youtube.com/@Thirteen-games" },
    { text: "Steam", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};
 
export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Thirteen Games",
    specialty: "INDIE GAME STUDIO",
    summary:
      "Cologne Germany",
    email: "Danijasonlipke@gmail.com",
  },
  experience: [
    {
      company: "Thirteen Games",
      position: "Founder",
      startDate: "January 2026",
      endDate: "To this Day",
      summary: [
        "I founded Thirteen Games with the start of my first project",
      ]
    },
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "8",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
 projects: [
  {
    name: "PROJECT X",
    category: "Game Development",
    summary: "WORK IN PROGRESS",
    info: "A mysterious upcoming title currently in early development. More details coming soon.",
    linkPreview: "/",
    linkSource: "https://assetstore.unity.com/packages/slug/361974",
    image: "/simple-light-flicker.png",
  },
  {
    name: "Simple Light Flicker",
    category: "Unity Asset",
    summary: "A simple solution for Ambience and Atmosphere inside the Unity Game Engine",
    info: "A lightweight Unity tool that adds dynamic flickering effects to any light source. Perfect for creating atmospheric environments like dungeons, horror scenes, or cozy fireplaces.",
    linkPreview: "/",
    linkSource: "https://assetstore.unity.com/packages/slug/361974",
    image: "/simple-light-flicker.png",
  },
  {
    name: "ClonTagram",
    category: "Sounddesign",
    summary: "A social network that replicates the features of Instagram",
    info: "Full-stack social media clone featuring real-time feeds, image uploads, stories, and user interactions built from scratch.",
    linkPreview: "/",
    linkSource: "https://github.com/immois/astro-zen",
    image: "/clone-ig.png",
  },
  ],
  about: {
    description: `
      Hi! My name is Dani, I'm a <span class="text-primary font-bold">Game Developer</span>and <span class="text-primary font-bold">Game Designer</span> as well as the founder of <span class="text-primary font-bold">Thirteen Games</span>, an independent game studio established in 2026. Game development has been my passion for years, and even while working in other fields, I always spent my free time creating and developing games.

      Before founding Thirteen Games, I gained valuable experience in project management and worked as a manager of a fitness studio. This background helped me build strong leadership, organization, and communication skills, which I now bring into my work as a developer and designer.

      I strongly believe that <span class="text-primary font-bold">indie games represent the future of the gaming industry</span>. My goal is to be part of that future by bringing my vision, creativity, and management experience into every project I work on. I am especially passionate about designing systems and transforming them into creative and engaging gameplay experiences that feel meaningful and memorable for players.

      With Thirteen Games, I aim to create unique and innovative games that stand out, inspire players, and contribute to the growing indie game community.

    `,
    image: "/BildDani.png",
  },
};

// #ff0000

