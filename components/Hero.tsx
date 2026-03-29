import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  description: string
  cta?: {
    text: string
    href: string
  }
  image?: string

  // ✅ NEW
  align?: 'center' | 'left'
  className?: string
}

export function Hero({
  title,
  description,
  cta,
  image,
  align = 'center',
  className = '',
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden px-4 py-24 sm:py-28 ${className}`}>

  {/* Background accents */}
  <div className="absolute -right-32 -top-32 h-90 w-96 rounded-full bg-accent/10 blur-3xl" />
  <div className="absolute -left-32 -bottom-32 h-90 w-96 rounded-full bg-primary/10 blur-3xl" />

  {/* 🔥 FIXED WIDTH + ALIGNMENT */}
  <div className="relative mx-auto max-w-7xl px-6">

    <div className={`${align === 'left' ? 'text-left' : 'text-center'}`}>

      {/* Title */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-xl text-lg text-gray-300 sm:text-xl">
        {description}
      </p>

      {/* CTA */}
      {cta && (
        <Button
          asChild
          size="lg"
          className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href={cta.href}>{cta.text}</Link>
        </Button>
      )}

    </div>

  </div>
</section>
  )
}
