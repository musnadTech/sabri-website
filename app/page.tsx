import { Hero } from "@/components/hero"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Articles } from "@/components/articles"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-8 sm:pt-14 overflow-hidden">
      <Hero />

      <Container>
        <Separator className="opacity-50" />
      </Container>

      <Technologies />

      <Container>
        <Separator className="opacity-50" />
      </Container>

      <Projects />

      <Container>
        <Separator className="opacity-50" />
      </Container>

      <Articles />

      <Container>
        <Separator className="opacity-50" />
      </Container>

      <About />

      <Container>
        <Separator className="opacity-50" />
      </Container>

      <Contact />
    </div>
  )
}

