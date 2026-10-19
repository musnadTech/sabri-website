"use client"

import * as React from "react"
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react"
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
} from "@/components/icons"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/contact-dialog"

import { contactData } from "@/data/contact"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container>
        {/* Label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
          Contact
        </span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          {/* Left: Message intro & Send Message button */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              {contactData.title}
            </h2>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
              {contactData.subtitle}
            </p>

            <ContactDialog>
              <Button className="gap-2 px-5 py-2" size={"2xl"}>
                <Send className="h-4 w-4" />
                Send Message
                <ArrowRight className="h-4 w-4" />
              </Button>
            </ContactDialog>
          </div>

          {/* Right: Contact details list in 2-col responsive grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs sm:text-sm">
            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <Mail className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.email}</span>
            </a>

            <a
              href={contactData.phoneUrl}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <Phone className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.phone}</span>
            </a>

            <a
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <WhatsappIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.whatsappDisplay}</span>
            </a>

            <div className="flex items-center gap-3 text-muted-foreground p-2 rounded-lg border border-transparent">
              <MapPin className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.location}</span>
            </div>

            <a
              href={contactData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <GithubIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.githubDisplay}</span>
            </a>

            <a
              href={contactData.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <LinkedinIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.linkedinDisplay}</span>
            </a>

            <a
              href={contactData.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <FacebookIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.facebookDisplay}</span>
            </a>

            <a
              href={contactData.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border/60"
            >
              <InstagramIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span className="truncate">{contactData.instagramDisplay}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact

