"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/container"

import { navLinks as footerLinks } from "@/data/navigation"

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number | null>(null)

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link href="#home" className="inline-block transition-opacity hover:opacity-90">
            <Image
              src="/logo-light.png"
              alt="Sabri Alshibani Logo"
              width={90}
              height={30}
              className="dark:hidden object-contain"
            />
            <Image
              src="/logo-dark.png"
              alt="Sabri Alshibani Logo"
              width={90}
              height={30}
              className="hidden dark:block object-contain"
            />
          </Link>
          <span className="text-xs text-muted-foreground" suppressHydrationWarning>
            © {currentYear ?? 2026} All rights reserved.
          </span>
        </div>


        {/* Links */}
        <nav className="flex items-center flex-wrap gap-4 sm:gap-6 text-xs text-muted-foreground">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  )
}

