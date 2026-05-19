import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Link2, BarChart2, Landmark, FileText, ChevronRight } from 'lucide-react'
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
    title: post ? `${post.title} | BETRA Insights` : 'Blog | BETRA',
    description: post?.excerpt,
  }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogById(params.id)

  if (!post) {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-gray-50">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm">
            The blog post you're looking for doesn't exist or has been removed from our archives.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#0a1a3a] text-white px-6 py-3.5 rounded-xl hover:bg-[#07132a] transition-all font-bold text-sm shadow-md"
          >
            <ArrowLeft size={16} /> Back to Blog Listing
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  // Find 2 other related blogs
  const relatedBlogs = blogs.filter((b) => b.id !== post.id).slice(0, 2)

  // Gradient definitions for abstract graphic banner placeholders
  const getBannerGradient = (color: string) => {
    switch (color) {
      case 'red':
        return 'from-rose-600 via-red-700 to-[#0a1a3a]'
      case 'blue':
        return 'from-blue-600 via-[#0a1a3a] to-slate-950'
      case 'yellow':
        return 'from-amber-500 via-yellow-600 to-[#0a1a3a]'
      default:
        return 'from-blue-600 via-[#0a1a3a] to-slate-950'
    }
  }

  return (
    <>
      <main className="bg-gray-50/20 min-h-screen pb-24 pt-24 lg:pt-28">
        
        {/* 🌟 HERO METADATA BAR SECTION */}
        <section className="bg-gradient-to-r from-[#0a1a3a] via-[#07132a] to-[#0a1a3a] text-white pt-12 lg:pt-16 pb-16 lg:pb-20 px-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.02] rounded-full pointer-events-none -mr-32 -mt-32" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/[0.01] rounded-full pointer-events-none -ml-20 -mb-20" />
          
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg backdrop-blur border border-white/5"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Blog Listing
            </Link>

            {/* Tags / Category */}
            <div className="flex items-center gap-2">
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-2xs ${
                post.color === 'red'
                  ? 'bg-rose-500/10 text-rose-300 border-rose-500/20'
                  : post.color === 'blue'
                  ? 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                  : 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20'
              }`}>
                {post.category || (post.color === 'blue' ? 'Finance' : post.color === 'red' ? 'Banking' : 'Policy')}
              </span>
            </div>

            {/* Large Marathi / English Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-snug drop-shadow-xs">
              {post.title}
            </h1>

            {/* Author / Date Meta Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-300 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <User size={15} className="text-blue-400" />
                <span className="font-semibold text-gray-200">By {post.author}</span>
              </div>
              
              {post.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-blue-400" />
                  <span>{post.date}</span>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 📚 MAIN ARTICLE BODY */}
        <section className="max-w-4xl mx-auto px-6 mt-12">
          <div className="bg-white rounded-3xl border border-gray-200/50 p-6 md:p-12 shadow-xs">
            
            {/* FEATURED IMAGE / VIDEO OR DYNAMIC GRAPHIC PLACEHOLDER */}
            <div className="mb-10">
              {post.video ? (
                <div className="rounded-2xl overflow-hidden bg-black border border-gray-100 shadow-2xs relative h-64 md:h-[450px]">
                  <iframe
                    src={post.video}
                    title={post.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : post.image ? (
                <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-2xs relative h-64 md:h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className={`w-full h-60 md:h-72 rounded-2xl bg-gradient-to-r ${getBannerGradient(post.color)} relative overflow-hidden flex items-center justify-center p-8 text-white shadow-2xs`}>
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none blur-xl" />
                  <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none blur-2xl" />
                  
                  <div className="text-center space-y-3 max-w-lg z-10">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 px-3 py-1.5 rounded-full backdrop-blur border border-white/10">
                      BETRA Analysis
                    </span>
                    <h2 className="text-lg md:text-2xl font-extrabold leading-snug">
                      {post.title}
                    </h2>
                  </div>
                </div>
              )}
            </div>

            {/* HIGHLIGHT QUOTE BOX */}
            <div
              className={`mb-10 p-6 rounded-2xl border-l-4 shadow-3xs ${
                post.color === 'red'
                  ? 'bg-rose-50/50 border-rose-500 text-rose-950 font-medium'
                  : post.color === 'blue'
                  ? 'bg-blue-50/50 border-blue-500 text-blue-950 font-medium'
                  : 'bg-yellow-50/50 border-yellow-500 text-yellow-950 font-medium'
              }`}
            >
              <div className="text-xs uppercase font-extrabold tracking-wider text-gray-400 mb-2">Key Takeaway / मुख्य उद्दिष्ट</div>
              <p className="text-sm md:text-base leading-relaxed italic">
                {post.highlight}
              </p>
            </div>

            {/* ARTICLE PROSE CONTENT */}
            <div
              className="prose prose-sm md:prose-base max-w-none text-gray-800 leading-relaxed md:leading-loose space-y-6 prose-headings:font-extrabold prose-headings:text-gray-900 prose-p:my-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* SOCIAL SHARING BAR */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <Share2 size={15} className="text-blue-600" />
                Share this Analysis
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://be-tra.in/blog/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#1877f2] hover:bg-[#1877f2]/10 hover:border-[#1877f2]/20 transition-all hover:scale-105 active:scale-95"
                  title="Share on Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://be-tra.in/blog/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-black hover:bg-black/10 hover:border-black/20 transition-all hover:scale-105 active:scale-95"
                  title="Share on Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://be-tra.in/blog/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0a66c2] hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/20 transition-all hover:scale-105 active:scale-95"
                  title="Share on LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
                  title="Copy link to clipboard"
                >
                  <Link2 size={15} />
                </button>
              </div>
            </div>

            {/* ADVISORY SERVICE CONTACT CTA */}
            <div className="bg-[#0a1a3a] text-white rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 mt-16 border border-white/5">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/[0.02] rounded-full pointer-events-none -mr-16 -mt-16" />
              <div className="space-y-2 text-center md:text-left z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">मार्गदर्शन हवे आहे का?</h3>
                <p className="text-gray-300 text-xs md:text-sm max-w-md leading-relaxed">
                  बँकिंग क्षेत्रातील करिअर संधींविषयी आणि परीक्षा तयारीबाबत अधिक मार्गदर्शनासाठी आमच्या सल्लागार मंडळाशी आजच संपर्क साधा.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-black font-bold text-xs md:text-sm px-6 py-3.5 rounded-xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shrink-0 z-10 shadow-md"
              >
                संपर्क साधा (Contact Us)
              </Link>
            </div>

          </div>
        </section>

        {/* 📚 RELATED BLOGS FOOTER SECTION */}
        {relatedBlogs.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-8">
              Related Articles / संबंधित लेख
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl border border-gray-200/50 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Graphic Thumbnail */}
                  {blog.image ? (
                    <div className="h-44 relative bg-gray-50 border-b border-gray-100 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className={`h-44 flex flex-col items-center justify-center gap-3 px-4 border-b border-gray-100 relative overflow-hidden ${
                      blog.color === 'red'
                        ? 'bg-gradient-to-br from-red-50 to-red-100/50'
                        : blog.color === 'blue'
                        ? 'bg-gradient-to-br from-blue-50 to-blue-100/50'
                        : 'bg-gradient-to-br from-yellow-50 to-yellow-100/50'
                    }`}>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        blog.color === 'red'
                          ? 'bg-red-50 text-red-600 border-red-100/50'
                          : blog.color === 'blue'
                          ? 'bg-blue-50 text-blue-600 border-blue-100/50'
                          : 'bg-yellow-50 text-yellow-700 border-yellow-100/50'
                      }`}>
                        {blog.category || (blog.color === 'blue' ? 'Finance' : blog.color === 'red' ? 'Banking' : 'Policy')}
                      </span>
                      <p className="text-center text-xs font-bold text-gray-800 line-clamp-2 max-w-[200px] leading-snug">
                        {blog.title}
                      </p>
                    </div>
                  )}

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-blue-900 transition-colors">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-end border-t border-gray-100/60">
                      <Link
                        href={`/blog/${blog.id}`}
                        className={`inline-flex items-center gap-0.5 text-xs font-bold transition-all ${
                          blog.color === 'red'
                            ? 'text-red-600 hover:text-red-800'
                            : blog.color === 'blue'
                            ? 'text-blue-600 hover:text-blue-800'
                            : 'text-yellow-700 hover:text-yellow-900'
                        }`}
                      >
                        <span>Read</span>
                        <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  )
}
