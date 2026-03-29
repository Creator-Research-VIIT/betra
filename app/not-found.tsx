import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
          <p className="text-3xl font-bold text-foreground">Page Not Found</p>
        </div>
        
        <p className="max-w-md text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        <div className="space-y-3">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-12 space-y-2 text-sm text-muted-foreground">
          <p>Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <span>•</span>
            <Link href="/activities" className="hover:text-foreground">
              Activities
            </Link>
            <span>•</span>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span>•</span>
            <Link href="/downloads" className="hover:text-foreground">
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
