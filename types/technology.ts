export type TechCategory = "frontend" | "backend" | "database" | "mobile" | "tools" | "desktop"

export interface TechItem {
  name: string
  label: string
  category: TechCategory
  image: string
  invertInDark?: boolean
}

