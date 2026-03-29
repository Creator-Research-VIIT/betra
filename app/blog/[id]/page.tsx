import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Share2, Bookmark } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

// Mock blog posts data
const blogPosts: Record<string, any> = {
  '1': {
    id: '1',
    title: 'The Impact of Evidence-Based Policy on Economic Growth',
    excerpt: 'Exploring how data-driven decision-making transforms policy effectiveness and drives sustainable growth.',
    date: new Date('2024-03-10'),
    author: 'Dr. Sarah Mitchell',
    category: 'Research',
    content: `
      <h2>Introduction</h2>
      <p>Evidence-based policy making has emerged as a critical approach to addressing complex societal challenges. This comprehensive analysis examines the relationship between data-driven policy development and economic growth outcomes.</p>

      <h2>Key Findings</h2>
      <p>Our research identified several critical factors that contribute to successful implementation of evidence-based policies:</p>
      <ul>
        <li>Strong institutional capacity for data collection and analysis</li>
        <li>Collaborative frameworks between researchers and policymakers</li>
        <li>Clear communication channels for research dissemination</li>
        <li>Commitment to continuous evaluation and adaptation</li>
      </ul>

      <h2>Implications for Policy Development</h2>
      <p>The findings suggest that investment in research infrastructure and institutional capacity is essential for maximizing policy effectiveness. Countries that prioritize evidence-based approaches consistently demonstrate higher economic growth rates and improved institutional performance.</p>

      <h2>Recommendations</h2>
      <p>We recommend a multi-stakeholder approach to policy development that emphasizes the integration of research findings with practical policy implementation. This requires sustained commitment to institutional development and knowledge sharing across sectors.</p>
    `,
  },
  '2': {
    id: '2',
    title: 'Emerging Trends in Research Methodology',
    excerpt: 'Latest developments in research approaches and methodologies reshaping the analytical landscape.',
    date: new Date('2024-03-05'),
    author: 'Prof. James Chen',
    category: 'Methodology',
    content: `
      <h2>Overview of Methodological Advances</h2>
      <p>The field of research methodology has undergone significant transformation in recent years. Advanced computational techniques, artificial intelligence integration, and mixed-methods approaches are reshaping how researchers conduct and analyze studies.</p>

      <h2>Digital Transformation in Research</h2>
      <p>The adoption of digital tools has revolutionized data collection, analysis, and dissemination. Real-time data processing, cloud computing, and collaborative research platforms enable researchers to tackle increasingly complex problems.</p>

      <h2>Mixed-Methods Approaches</h2>
      <p>Integration of qualitative and quantitative methods provides richer insights into research questions. This holistic approach allows researchers to capture both numerical patterns and contextual nuances in their findings.</p>

      <h2>Future Directions</h2>
      <p>As technology continues to evolve, we anticipate further innovation in methodological approaches. The key challenge will be maintaining rigorous standards while embracing new tools and techniques that enhance research quality and impact.</p>
    `,
  },
  '3': {
    id: '3',
    title: 'Building Institutional Capacity Through Knowledge Sharing',
    excerpt: 'How collaborative learning and knowledge transfer strengthen institutional research capabilities.',
    date: new Date('2024-02-28'),
    author: 'Dr. Emma Rodriguez',
    category: 'Development',
    content: `
      <h2>Institutional Capacity Building Framework</h2>
      <p>Institutional capacity represents the ability of organizations to effectively utilize resources, knowledge, and skills to achieve organizational objectives. Building this capacity is essential for long-term institutional success and sustainability.</p>

      <h2>Knowledge Sharing Mechanisms</h2>
      <p>Effective knowledge sharing creates networks that strengthen institutional capabilities. Key mechanisms include formal training programs, peer mentoring, documentation of best practices, and collaborative research projects.</p>

      <h2>Case Studies</h2>
      <p>Several institutions have successfully implemented knowledge-sharing initiatives that resulted in measurable improvements in research quality and organizational performance. These case studies demonstrate the tangible benefits of investing in institutional development.</p>

      <h2>Sustainability Considerations</h2>
      <p>Successful capacity building requires sustained commitment and resources. Institutions must balance immediate operational needs with long-term strategic development objectives.</p>
    `,
  },
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts[params.id]
  return {
    title: post ? `${post.title} | BETRA Blog` : 'Blog | BETRA',
    description: post ? post.excerpt : 'Read the latest from BETRA',
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }))
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id]

  if (!post) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-2xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Article Not Found</h1>
            <p className="mb-8 text-muted-foreground">
              Sorry, we couldn't find the article you're looking for.
            </p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="mb-6"
          >
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </Button>

          <article>
            <header className="mb-8 border-b border-border pb-8">
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {post.category}
                </span>
                <div className="flex gap-2">
                  <button className="rounded-lg p-2 transition-colors hover:bg-muted">
                    <Share2 size={18} className="text-muted-foreground" />
                  </button>
                  <button className="rounded-lg p-2 transition-colors hover:bg-muted">
                    <Bookmark size={18} className="text-muted-foreground" />
                  </button>
                </div>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6"
              />
            </div>

            {/* Author Bio */}
            <div className="mt-16 border-t border-border pt-8">
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{post.author}</h3>
                  <p className="text-sm text-muted-foreground">
                    Research expert and institutional development specialist with extensive experience in evidence-based policy analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 border-y border-border py-8">
              <h3 className="mb-4 font-semibold text-foreground">Share This Article</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm">
                  Share on Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Share on LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Copy Link
                </Button>
              </div>
            </div>
          </article>
        </section>

        {/* Related Articles */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(blogPosts)
              .filter(([id]) => id !== params.id)
              .slice(0, 3)
              .map(([, relatedPost]) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                >
                  <Card className="h-full hover:border-accent hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="mb-3 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {relatedPost.category}
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">
                        {relatedPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        By {relatedPost.author} • {formatDate(relatedPost.date)}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
