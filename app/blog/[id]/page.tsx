import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import { getBlogById, blogs } from '@/data/blogs'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogById(params.id)
  return {
    title: post ? `${post.title} | BETRA` : 'Blog | BETRA',
    description: post?.excerpt,
  }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogById(params.id)

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#0a1a3a] text-white px-6 py-3 rounded-lg hover:bg-[#08122c] transition"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </main>
    )
  }

  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* BACK */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-gray-500 hover:text-gray-800 transition"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-snug">
          {post.title}
        </h1>

        {/* META */}
        <div className="text-sm text-gray-500 mb-8">
          {post.author} &bull; {post.readTime}
        </div>

        {/* IMAGE */}
        {post.image && (
          <div className="mb-10 rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full max-h-[400px] object-contain"
            />
          </div>
        )}

        {/* HIGHLIGHT BANNER */}
        <div
          className={`mb-8 p-4 text-sm rounded border-l-4 ${
            post.color === 'red'
              ? 'bg-red-50 border-red-500 text-red-700'
              : post.color === 'blue'
              ? 'bg-blue-50 border-blue-500 text-blue-700'
              : 'bg-yellow-50 border-yellow-500 text-yellow-700'
          }`}
        >
          {post.highlight}
        </div>

        {/* CONTENT */}
        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </main>

      <Footer />
    </>
  )
}
