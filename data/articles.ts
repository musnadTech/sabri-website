import type { ArticlesData } from "@/types/article"

export const articlesData: ArticlesData = {
  badge: "ARTICLES",
  title: "Thoughts & Writings",
  description:
    "A collection of my thoughts, experiences, and what I learn along the way. Here you'll find articles about development, technology, and life in general.",
  viewAllText: "View All Articles",
  viewAllLink: "#articles",
  articles: [
    {
      id: "building-better-habits-as-a-developer",
      title: "Building Better Habits as a Developer",
      description:
        "A personal take on how small, consistent habits can make a big difference in your progress as a developer. It's not about motivation, but about systems.",
      category: "DEVELOPMENT",
      readTime: "5 min read",
      image: "/article-habits.jpg",
      link: "#",
    },
    {
      id: "the-future-of-web-development",
      title: "The Future of Web Development",
      description:
        "From modern frameworks to AI-assisted tools, let's explore how the web development landscape is evolving and what it means for developers.",
      category: "TECHNOLOGY",
      readTime: "8 min read",
      image: "/article-webdev.jpg",
      link: "#",
    },
  ],
}

