import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: Date
  author: string
  category: string
  image?: string
}

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  author,
  category,
  image,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-accent">
        {image && (
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">{formatDate(date)}</span>
          </div>
          <h3 className="line-clamp-2 mt-3 font-semibold text-foreground">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">By {author}</CardFooter>
      </Card>
    </Link>
  )
}
