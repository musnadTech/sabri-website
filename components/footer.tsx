"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

import { navLinks as footerLinks } from "@/data/navigation"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link href="#home" className="inline-block transition-opacity hover:opacity-90">
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={90}
              height={30}
              className="dark:hidden object-contain"
            />
            <Image
              src="/logo-dark.png"
              alt="Logo"
              width={90}
              height={30}
              className="hidden dark:block object-contain"
            />
          </Link>
          <span className="text-xs text-muted-foreground" suppressHydrationWarning>
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Links and Scroll-to-top */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4 sm:gap-6 text-xs text-muted-foreground">
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

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full border border-border hover:bg-muted"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </footer>
  )
}

