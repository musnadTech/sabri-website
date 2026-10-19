"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { Project } from "@/types/project"
import { projects as defaultProjects } from "@/data/projects"
import { contactData } from "@/data/contact"

export type { Project }
export { defaultProjects }

interface ProjectsProps {
  projects?: Project[]
}

export function Projects({ projects = defaultProjects }: ProjectsProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="projects" className="scroll-mt-24">
      <Container>
        {/* Header */}
        <div className="flex items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
              Projects
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Selected Projects
            </h2>
          </div>

          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:gap-1.5 shrink-0 whitespace-nowrap pb-0.5 group"
          >
            <span className="sm:hidden">View all</span>
            <span className="hidden sm:inline">View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Desktop Grid of 3 Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden flex flex-col justify-between border-border/80 bg-card/60 hover:border-foreground/20 transition-all duration-200 hover:shadow-sm"
            >
              <div>
                {/* Mockup Preview Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Badges */}
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] font-normal px-2 py-0.5 rounded-sm border border-border/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Footer Action Links */}
              <CardFooter className="pt-0 flex items-center gap-4 text-xs text-muted-foreground border-t border-border/30 mt-auto py-3">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  View Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile Pager / Carousel */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, idx) => (
                <CarouselItem key={project.title}>
                  <Card className="h-full overflow-hidden flex flex-col justify-between border-border/80 bg-card/60 shadow-xs">
                    <div>
                      {/* Mockup Preview Area */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/60">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center"
                          priority={idx === 0}
                        />
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-xs leading-relaxed line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-[10px] font-normal px-2 py-0.5 rounded-sm border border-border/40"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 py-3 mt-auto">
                      <div className="flex items-center gap-4">
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          View Code
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pager Controls: Counter, Dots Indicator, and Navigation Buttons */}
          <div className="flex items-center justify-between mt-4 px-1">
            <span className="text-xs font-medium text-muted-foreground">
              {current + 1} / {projects.length}
            </span>

            {/* Carousel Dots */}
            <div className="flex items-center gap-1.5">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-6 bg-foreground"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Previous project"
                className="h-7 w-7 rounded-full"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Next project"
                className="h-7 w-7 rounded-full"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects

