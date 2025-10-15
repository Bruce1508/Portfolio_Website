const config = {
  title: "Bruce Vo | Full-Stack Software Engineer",
  description: {
    long: "Explore the portfolio of Bruce Vo, a full-stack software engineer specializing in modern web technologies, scalable applications, and innovative solutions. Discover my work and let's build something amazing together!",
    short:
      "Discover the portfolio of Bruce Vo, a full-stack software engineer creating modern web applications and innovative solutions.",
  },
  keywords: [
    "Bruce Vo",
    "portfolio",
    "full-stack developer",
    "software engineer",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "web design",
    "modern web development",
  ],
  author: "Bruce Vo",
  email: "brucevo158@gmail.com",
  site: "https://brucevo.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/brucevo/",
    instagram: "https://www.instagram.com/ruce_1111?igsh=MTF4cDQyNTJrNmphcA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1GyCKHpn4H/?mibextid=wwXIfr",
    github: "https://github.com/Bruce1508",
  },
};
export { config };
