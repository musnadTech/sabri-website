import * as React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CardTitle, CardDescription } from "@/components/ui/card"
import { articlesData as defaultArticlesData } from "@/data/articles"
import type { ArticlesData } from "@/types/article"
import { cn } from "@/lib/utils"

interface ArticlesProps {
  data?: ArticlesData
}

export function Articles({ data = defaultArticlesData }: ArticlesProps) {
  return (
    <section id="articles" className="scroll-mt-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
              {data.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {data.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              {data.description}
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            render={<a href={data.viewAllLink} />}
            className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 shrink-0 self-start md:self-auto p-0 h-auto hover:bg-transparent group pt-1"
          >
            <span>{data.viewAllText}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Articles List */}
        <div className="flex flex-col">
          {data.articles.map((article, index) => {
            const isEven = index % 2 === 0

            return (
              <React.Fragment key={article.id}>
                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center group/article">
                  {/* Article Thumbnail */}
                  <div
                    className={cn(
                      "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-xs",
                      isEven ? "md:order-1" : "md:order-2"
                    )}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover/article:scale-105"
                    />
                  </div>

                  {/* Article Content */}
                  <div
                    className={cn(
                      "flex flex-col justify-center",
                      isEven ? "md:order-2" : "md:order-1"
                    )}
                  >
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 sm:mb-3">
                      <span>{article.category}</span>
                      <span className="text-muted-foreground/40 font-normal">—</span>
                      <span className="font-normal normal-case tracking-normal">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 leading-snug">
                      <a
                        href={article.link || "#"}
                        className="hover:text-primary transition-colors inline-block"
                      >
                        {article.title}
                      </a>
                    </CardTitle>

                    {/* Excerpt */}
                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {article.description}
                    </CardDescription>

                    {/* Read Action Button */}
                    <div>
                      <Button
                        variant="ghost"
                        render={<a href={article.link || "#"} />}
                        className="h-auto p-0 text-sm font-semibold text-foreground hover:text-primary hover:bg-transparent group/link inline-flex items-center gap-1.5"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </article>

                {/* Separator between articles */}
                {index < data.articles.length - 1 && (
                  <Separator className="my-10 sm:my-14 opacity-50" />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

