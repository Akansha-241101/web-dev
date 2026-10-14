import { useEffect, useState } from "react"
import { Moon, Package, ShoppingCart, Sun, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  brandColors,
  homeCopy,
  previewIcons,
  principles,
} from "@/constants/home"

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-12 md:px-10 md:py-16">
        <header className="flex flex-col gap-8 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <img
              src={isDark ? "/images/brand/logo-dark.png" : "/images/brand/logo-light.png"}
              alt="ShopNow"
              className="h-8 w-auto"
            />
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{homeCopy.eyebrow}</p>
              <h1 className="max-w-xl text-3xl tracking-tight md:text-4xl">
                {homeCopy.title}
              </h1>
              <p className="max-w-lg text-muted-foreground">{homeCopy.description}</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsDark((value) => !value)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun data-icon="inline-start" /> : <Moon data-icon="inline-start" />}
            {isDark ? "Light mode" : "Dark mode"}
          </Button>
        </header>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl tracking-tight">{homeCopy.palette.title}</h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              {homeCopy.palette.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brandColors.map((color) => (
              <article
                key={color.token}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className={`flex h-28 items-end p-4 ${color.swatch}`}>
                  <span className="text-sm font-medium">{color.hex}</span>
                </div>
                <div className="space-y-1 p-4">
                  <h3 className="text-sm">{color.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{color.token}</p>
                  <p className="text-sm text-muted-foreground">{color.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Type className="size-4" />
              {homeCopy.typography.label}
            </div>
            <p className="text-4xl tracking-tight">{homeCopy.typography.sampleHeading}</p>
            <p className="text-lg text-muted-foreground">
              {homeCopy.typography.sampleSubheading}
            </p>
            <p className="text-sm text-muted-foreground">{homeCopy.typography.sampleBody}</p>
          </div>

          <div className="space-y-4 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Package className="size-4" />
              {homeCopy.icons.label}
            </div>
            <div className="flex flex-wrap gap-3">
              {previewIcons.map((Icon) => (
                <div
                  key={Icon.displayName ?? Icon.name}
                  className="flex size-11 items-center justify-center rounded-lg border border-border bg-background"
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{homeCopy.icons.description}</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl tracking-tight">{homeCopy.components.title}</h2>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-6">
            <Button>
              <ShoppingCart data-icon="inline-start" />
              Add to cart
            </Button>
            <Button variant="secondary">In stock</Button>
            <Button variant="outline">Browse</Button>
            <Button variant="ghost">Details</Button>
            <Button variant="destructive">Remove</Button>
            <Button variant="link">View all</Button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl tracking-tight">{homeCopy.principles.title}</h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              {homeCopy.principles.description}
            </p>
          </div>

          <ol className="grid gap-3 md:grid-cols-2">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="mb-2 text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-1 text-sm">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
          {homeCopy.footer}
        </footer>
      </div>
    </main>
  )
}

export default App
