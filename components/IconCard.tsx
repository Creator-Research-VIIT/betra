import { LucideIcon } from 'lucide-react'

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md">
      <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
