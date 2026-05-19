'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { FileText, BarChart2, Landmark, ChevronDown, ChevronUp, Download, Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react'
import { blogs } from '@/data/blogs'

export default function Blog() {
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null)

  const toggleArticle = (id: string) => {
    setExpandedBlog((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <main className="bg-gray-50/30 min-h-screen">

  {/* HERO */}
  <section className="bg-gradient-to-r from-[#0a1a3a] via-[#07132a] to-[#0a1a3a] text-white pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 relative overflow-hidden">
    {/* Subtle graphic accent */}
    <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.02] rounded-full -mr-32 -mt-32 pointer-events-none" />
    <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/[0.01] rounded-full -ml-20 -mb-20 pointer-events-none" />

    <div className="max-w-4xl mx-auto relative z-10 space-y-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        Financial Insights
      </h1>
      <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
        Stay informed with banking, finance, policy updates, and global career trends.
      </p>
    </div>
  </section>

        {/* BLOG GRID */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                id={blog.id}
                className="bg-white rounded-2xl shadow-xs hover:shadow-lg border border-gray-200/50 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* IMAGE / PLACEHOLDER */}
                {/* IMAGE / VIDEO / PLACEHOLDER */}
{blog.video ? (
  <div className="relative h-[240px] bg-black border-b border-gray-100 overflow-hidden">
    <iframe
      src={blog.video}
      title={blog.title}
      className="w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
) : blog.image ? (
  <div className="relative h-[240px] bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden">
    <Image
      src={blog.image}
      alt={blog.title}
      width={1200}
      height={600}
      className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
    />
  </div>
) : (
                  <div
                    className={`h-[240px] flex flex-col items-center justify-center gap-4 px-6 relative overflow-hidden border-b border-gray-100 ${
                      blog.color === 'red'
                        ? 'bg-gradient-to-br from-red-50 to-red-100/50'
                        : blog.color === 'blue'
                        ? 'bg-gradient-to-br from-blue-50 to-blue-100/50'
                        : 'bg-gradient-to-br from-yellow-50 to-yellow-100/50'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-110 ${
                        blog.color === 'red'
                          ? 'bg-red-100 text-red-500'
                          : blog.color === 'blue'
                          ? 'bg-blue-100 text-blue-500'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {blog.color === 'blue' ? (
                        <BarChart2 size={24} />
                      ) : blog.color === 'red' ? (
                        <Landmark size={24} />
                      ) : (
                        <FileText size={24} />
                      )}
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${
                        blog.color === 'red'
                          ? 'bg-red-50 text-red-600 border-red-100/50'
                          : blog.color === 'blue'
                          ? 'bg-blue-50 text-blue-600 border-blue-100/50'
                          : 'bg-yellow-50 text-yellow-700 border-yellow-100/50'
                      }`}
                    >
                      {blog.category || (blog.color === 'blue' ? 'Finance' : blog.color === 'red' ? 'Banking' : 'Policy')}
                    </span>

                    <p className="text-center text-sm font-bold text-gray-800 line-clamp-2 max-w-[280px] leading-snug">
                      {blog.title}
                    </p>
                  </div>
                )}

                {/* CARD BODY */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Category and date above title */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                      <span>{blog.category || (blog.color === 'blue' ? 'Finance' : blog.color === 'red' ? 'Banking' : 'Policy')}</span>
                      {blog.date && (
                        <>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-400 font-medium">{blog.date}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-extrabold text-gray-900 leading-snug group-hover:text-blue-900 transition-colors duration-200">
                      {blog.title}
                    </h2>

                    {/* Excerpt / description */}
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* 🎛️ SMOOTH ACCORDION TRANSITION FOR FULL CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedBlog === blog.id
                          ? 'max-h-[5000px] opacity-100 mt-6 pt-6 border-t border-gray-100/80 space-y-6'
                          : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      {/* Highlight quote banner */}
                      <div
                        className={`p-4 rounded-xl border-l-4 shadow-3xs ${
                          blog.color === 'red'
                            ? 'bg-rose-50/50 border-rose-500 text-rose-950 font-medium'
                            : blog.color === 'blue'
                            ? 'bg-blue-50/50 border-blue-500 text-blue-950 font-medium'
                            : 'bg-yellow-50/50 border-yellow-500 text-yellow-950 font-medium'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-1">Key Takeaway / मुख्य विचार</div>
                        <p className="text-xs md:text-sm leading-relaxed italic">
                          {blog.highlight}
                        </p>
                      </div>

                      {/* Main markup content */}
                      <div
                        className="prose prose-sm prose-gray max-w-none text-gray-700 leading-relaxed space-y-4 md:leading-loose prose-p:my-2 prose-a:text-blue-600 prose-a:no-underline"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                      />

                      {/* 📸 EVENT PHOTO SNAPSHOTS - RENDER ALL 3 IMAGES (Post 5) */}
                      {blog.id === '5' && (
                        <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
                          <h4 className="text-xs font-bold text-gray-900 border-l-4 border-blue-600 pl-2 uppercase tracking-wider">
                            कार्यशाळेतील काही क्षणचित्रे (Workshop Photos)
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                              { src: '/blog1.jpg', alt: 'Workshop Snapshot 1' },
                              { src: '/blog2.jpeg', alt: 'Workshop Snapshot 2' },
                              { src: '/blog3.jpg', alt: 'Workshop Snapshot 3' },
                            ].map((img, idx) => (
                              <div
                                key={idx}
                                className="relative h-32 rounded-xl overflow-hidden bg-gray-100 border border-gray-200/50 shadow-3xs group/img"
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Paytm Post 4 PDF Download Button */}
                      {blog.id === '4' && (
                        <div className="mt-6 border-t border-gray-100 pt-6">
                          <a
                            href="/blog.png"
                            download="blog.png"
                            className="inline-flex items-center gap-2 bg-[#0a1a3a] text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-[#08122c] transition shadow-xs"
                          >
                            <Download size={14} />
                            Download PDF
                          </a>
                        </div>
                      )}

                      {/* Social Share Bar */}
                      {/* <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          <Share2 size={13} className="text-blue-600" />
                          Share this Analysis
                        </div>
                        <div className="flex items-center gap-2">
                          {[
                            { icon: <Facebook size={13} />, href: `https://www.facebook.com/sharer/sharer.php?u=https://be-tra.in/blog#${blog.id}`, color: 'text-[#1877f2]' },
                            { icon: <Twitter size={13} />, href: `https://twitter.com/intent/tweet?url=https://be-tra.in/blog#${blog.id}`, color: 'text-black' },
                            { icon: <Linkedin size={13} />, href: `https://www.linkedin.com/shareArticle?mini=true&url=https://be-tra.in/blog#${blog.id}`, color: 'text-[#0a66c2]' }
                          ].map((share, idx) => (
                            <a
                              key={idx}
                              href={share.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center ${share.color} hover:bg-gray-100 transition-all hover:scale-105`}
                            >
                              {share.icon}
                            </a>
                          ))}
                          <button
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                navigator.clipboard.writeText(`${window.location.origin}/blog#${blog.id}`);
                                alert('Link copied to clipboard!');
                              }
                            }}
                            className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all"
                            title="Copy link"
                          >
                            <Link2 size={13} />
                          </button>
                        </div>
                      </div> */}

                      {/* Dynamic Inline contact advisory card - ONLY for Post 5 */}
                      {blog.id === '5' && (
                        <div className="bg-[#0a1a3a] text-white rounded-xl p-6 shadow-xs relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border border-white/5">
                          <div className="absolute right-0 top-0 w-32 h-32 bg-white/[0.02] rounded-full pointer-events-none -mr-8 -mt-8" />
                          <div className="space-y-1 text-center sm:text-left z-10">
                            <h4 className="text-sm font-bold tracking-tight">मार्गदर्शन हवे आहे का?</h4>
                            <p className="text-gray-300 text-[11px] leading-normal max-w-md">
                              बँकिंग क्षेत्रातील करिअर संधींविषयी आणि परीक्षा तयारीबाबत अधिक मार्गदर्शनासाठी आमच्या सल्लागार मंडळाशी आजच संपर्क साधा.
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="bg-white text-black font-bold text-[11px] px-4 py-2 rounded-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shrink-0 z-10 shadow-xs"
                          >
                            संपर्क साधा (Contact Us)
                          </Link>
                        </div>
                      )}

                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-100/70">
                    {/* Author info */}
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                      By {blog.author}
                    </span>

                    {/* Inline Toggle Button */}
                    <button
                      onClick={() => toggleArticle(blog.id)}
                      className={`inline-flex items-center gap-1 text-xs font-bold transition-all ${
                        blog.color === 'red'
                          ? 'text-red-600 hover:text-red-800'
                          : blog.color === 'blue'
                          ? 'text-blue-600 hover:text-blue-800'
                          : 'text-yellow-700 hover:text-yellow-900'
                      }`}
                    >
                      <span>{expandedBlog === blog.id ? 'Show Less' : 'Read Full Article'}</span>
                      {expandedBlog === blog.id ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto bg-[#0a1a3a] text-white p-10 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-lg">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/[0.02] rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="space-y-2 relative z-10 text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight">Stay Ahead with Insights</h2>
              <p className="text-gray-300 text-sm max-w-md">Get expert financial advisory analyses and course schedules directly from BETRA.</p>
            </div>
            <Link
              href="/membership"
              className="bg-white text-black px-6 py-3 rounded-xl font-bold text-xs md:text-sm hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shrink-0 relative z-10 shadow-md"
            >
              Subscribe Now
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
