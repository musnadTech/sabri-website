import { siteConfig } from "@/lib/site"
import { techStack } from "@/data/technologies"

export function StructuredData() {
  const skills = techStack.map((tech) => tech.label)

  const personSchema = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    alternateName: "Sabri Al-Shibani",
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    email: siteConfig.author.email,
    telephone: siteConfig.author.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Yemen",
    },
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.facebook,
      siteConfig.author.instagram,
      siteConfig.author.whatsapp,
    ],
    knowsAbout: skills,
    description: siteConfig.description,
  }

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} - Portfolio`,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
  }

  const profilePageSchema = {
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, profilePageSchema],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

