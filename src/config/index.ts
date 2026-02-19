import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Thirteen Games - Indie Game Studio",
  author: "Dani Lipke",
  description:
    "Indie Game Developer and founder of Thirteen Games",
  lang: "de",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};
 
export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Thirteen Games",
    specialty: "by Dani Lipke",
    summary:
      "based in Cologne Germany",
    email: "Danijasonlipke@gmail.com",
  },
  experience: [
    {
      company: "Thirteen Games",
      position: "Founder",
      startDate: "January 2026",
      endDate: "To this Day",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
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
      name: "Simple Light Flicker",
      summary: "A simple solution for Ambience and Atmosphere inside the Unity Game Engine",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi! My name is Dani, I'm a <span class="text-primary font-bold">Game Developer<span>and <span class="text-primary font-bold">Game Designer<span> as well as the founder of <span class="text-primary font-bold">Thirteen Games<span>, an independent game studio established in 2026. Game development has been my passion for years, and even while working in other fields, I always spent my free time creating and developing games.

      Before founding Thirteen Games, I gained valuable experience in project management and worked as a manager of a fitness studio. This background helped me build strong leadership, organization, and communication skills, which I now bring into my work as a developer and designer.

      I strongly believe that <span class="text-primary font-bold">indie games represent the future of the gaming industry<span>. My goal is to be part of that future by bringing my vision, creativity, and management experience into every project I work on. I am especially passionate about designing systems and transforming them into creative and engaging gameplay experiences that feel meaningful and memorable for players.

      With Thirteen Games, I aim to create unique and innovative games that stand out, inspire players, and contribute to the growing indie game community.

    `,
    image: "/BildDani.png",
  },
};

// #ff0000

