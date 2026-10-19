export interface SocialLink {
  name: string
  url: string
  label: string
  icon?: string
}

export interface ContactInfo {
  title: string
  subtitle: string
  email: string
  phone: string
  phoneUrl: string
  location: string
  githubUrl: string
  githubDisplay: string
  linkedinUrl: string
  linkedinDisplay: string
  facebookUrl: string
  facebookDisplay: string
  instagramUrl: string
  instagramDisplay: string
  whatsappUrl: string
  whatsappDisplay: string
  socialLinks: SocialLink[]
}
