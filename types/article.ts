export interface Article {
  id: string
  title: string
  description: string
  category: string
  readTime: string
  image: string
  link?: string
}

export interface ArticlesData {
  badge: string
  title: string
  description: string
  viewAllText: string
  viewAllLink: string
  articles: Article[]
}

