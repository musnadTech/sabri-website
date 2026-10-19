"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { techStack } from "@/data/technologies"
import { cn } from "@/lib/utils"

export function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-border/50">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
              Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              My Tech Stack
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              I work with a wide range of modern technologies to build fast,
              scalable and reliable applications.
            </p>
          </div>

          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 shrink-0">
            {techStack.length} Technologies —
          </span>
        </div>

        {/* Icons Grid: 10 per row on lg, 5 on md, 4 on sm */}
        <TooltipProvider delay={100}>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-y-8 gap-x-4">
            {techStack.map((tech) => {
              return (
                <Tooltip key={tech.name}>
                  <TooltipTrigger
                    render={
                      <div className="group flex flex-col items-center justify-center gap-2.5 p-2 rounded-xl transition-all duration-200 hover:bg-muted/50 cursor-pointer">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-card/60 p-2.5 shadow-2xs transition-all duration-200 group-hover:border-foreground/20 group-hover:scale-105 group-hover:shadow-xs">
                          <Image
                            src={tech.image}
                            alt={tech.label}
                            width={28}
                            height={28}
                            className={cn(
                              "h-6 w-6 object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110",
                              tech.invertInDark && "dark:invert"
                            )}
                            unoptimized={tech.image.endsWith(".svg")}
                          />
                        </div>
                        <span className="text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground tracking-tight text-center truncate max-w-full">
                          {tech.label}
                        </span>
                      </div>
                    }
                  />
                  <TooltipContent side="top">
                    <p className="capitalize font-medium">
                      {tech.name} <span className="opacity-70 text-[10px]">({tech.category})</span>
                    </p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
        </TooltipProvider>
      </Container>
    </section>
  )
}

export default Technologies
