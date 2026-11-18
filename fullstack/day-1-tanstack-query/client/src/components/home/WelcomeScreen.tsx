import { Button } from "@/components/ui/button"
import { welcomeCopy } from "@/constants/home/copy"

function WelcomeScreen() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center gap-6">
      <p className="text-sm text-muted-foreground">{welcomeCopy.eyebrow}</p>
      <h1 className="max-w-2xl text-4xl tracking-tight md:text-5xl">
        {welcomeCopy.title}
      </h1>
      <p className="max-w-xl text-muted-foreground">{welcomeCopy.description}</p>
      <Button size="lg">{welcomeCopy.cta}</Button>
    </section>
  )
}

export default WelcomeScreen
