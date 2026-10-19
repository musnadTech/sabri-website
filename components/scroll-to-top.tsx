"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const hero = document.getElementById("home")

    if (!hero) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 400)
      }
      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll()
      return () => window.removeEventListener("scroll", handleScroll)
    }

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // When hero is intersecting with the visible area, hide the button.
          // When hero leaves the visible area (scrolled past it), show the button.
          setIsVisible(!entry.isIntersecting)
        },
        {
          // Header height is 64px (h-16), so hero is out of view once its bottom passes behind the header
          rootMargin: "-64px 0px 0px 0px",
          threshold: 0,
        }
      )

      observer.observe(hero)
      return () => observer.disconnect()
    } else {
      const handleScroll = () => {
        const rect = hero.getBoundingClientRect()
        setIsVisible(rect.bottom <= 64)
      }
      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll()
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        "fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-border bg-background/80 shadow-md backdrop-blur-md transition-all duration-300 ease-out hover:bg-muted hover:shadow-lg active:scale-95 motion-reduce:transition-none",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </Button>
  )
}
