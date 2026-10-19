import { AboutData } from "@/types/about"

export const aboutData: AboutData = {
  title: "About Me",
  subtitle: "A Little About Me",
  bio: [
    "I'm a passionate Full-Stack Developer from Yemen, currently studying at university. I love building useful software, learning new technologies, and solving real-world problems with code.",
    "I enjoy working with modern web and mobile technologies, exploring system design, and improving my skills every day. For me, programming isn't just a job — it's a way to think, create, and make an impact.",
  ],
  traits: [
    { label: "Problem Solver", icon: "Lightbulb" },
    { label: "Fast Learner", icon: "Zap" },
    { label: "Team Player", icon: "Users" },
  ],
  workspaceImage: {
    src: "/workspace.jpeg",
    alt: "Sabri Alshibani workspace desk setup with laptop, notebook and coffee",
  },
  education: {
    period: "2024 — Present",
    institution: "University",
    field: "Information Technology",
    level: "Currently Level 3",
  },
  interests: [
    "Web Development",
    "Mobile Development",
    "System Design",
    "Open Source",
    "Technology",
    "Reading",
    "Photography",
  ],
}

