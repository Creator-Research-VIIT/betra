'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { FileText, BarChart2, Landmark, ChevronDown, ChevronUp, Download } from 'lucide-react'
import { blogs } from '@/data/blogs'

export default function Blog() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <>
      <main>

        {/* HERO */}
        <section className="bg-[#0a1a3a] text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold">Financial Insights</h1>
            <p className="text-gray-300 mt-4 max-w-xl">
              Stay informed with banking, finance, and global trends.
            </p>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden"
            >

              {/* IMAGE / PLACEHOLDER */}
              {blog.image ? (
                <div className="relative h-[250px] bg-gray-100 flex items-center justify-center">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1200}
                    height={600}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className={`h-[250px] flex flex-col items-center justify-center gap-4 px-6 ${
                    blog.color === 'red'
                      ? 'bg-gradient-to-br from-red-50 to-red-100'
                      : blog.color === 'blue'
                      ? 'bg-gradient-to-br from-blue-50 to-blue-100'
                      : 'bg-gradient-to-br from-yellow-50 to-yellow-100'
                  }`}
                >
                  <div
                    className={`p-3 rounded-full ${
                      blog.color === 'red'
                        ? 'bg-red-100 text-red-400'
                        : blog.color === 'blue'
                        ? 'bg-blue-100 text-blue-400'
                        : 'bg-yellow-100 text-yellow-500'
                    }`}
                  >
                    {blog.color === 'blue' ? (
                      <BarChart2 size={28} />
                    ) : blog.color === 'red' ? (
                      <Landmark size={28} />
                    ) : (
                      <FileText size={28} />
                    )}
                  </div>

                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                      blog.color === 'red'
                        ? 'bg-red-100 text-red-600'
                        : blog.color === 'blue'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {blog.color === 'blue' ? 'Finance' : blog.color === 'red' ? 'Banking' : 'Policy'}
                  </span>

                  <p className="text-center text-sm font-semibold text-gray-600 line-clamp-2 max-w-[260px] leading-snug">
                    {blog.title}
                  </p>
                </div>
              )}

              {/* CARD BODY */}
              <div className="p-6 flex flex-col flex-1 space-y-4">

                {/* Title — plain, not a link */}
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  {blog.title}
                </h2>

                {/* Author + read time */}
                <p className="text-xs text-gray-400">
                  {blog.author} &bull; {blog.readTime}
                </p>

                {/* Description lines */}
                {blog.description.map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {para}
                  </p>
                ))}

                {/* Highlight */}
                <div
                  className={`p-3 text-sm rounded border-l-4 ${
                    blog.color === 'red'
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : blog.color === 'blue'
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-yellow-50 border-yellow-500 text-yellow-700'
                  }`}
                >
                  {blog.highlight}
                </div>

                {/* Full content — only for expanded card */}
                {expandedId === blog.id && (
                  <>
                    <div
                      className="prose prose-sm prose-gray max-w-none text-gray-700 leading-relaxed pt-2 border-t"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Download button — only for Marathi blog (id: '4') */}
                    {blog.id === '4' && (
                      <a
                        href="/blog.png"
                        download="blog.png"
                        className="inline-flex items-center gap-2 bg-[#0a1a3a] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#08122c] transition mt-2 w-fit"
                      >
                        <Download size={15} />
                        Download PDF
                      </a>
                    )}
                  </>
                )}

                {/* Toggle button */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === blog.id ? null : blog.id)
                  }
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition ${
                    blog.color === 'red'
                      ? 'text-red-600 hover:text-red-800'
                      : blog.color === 'blue'
                      ? 'text-blue-600 hover:text-blue-800'
                      : 'text-yellow-700 hover:text-yellow-900'
                  }`}
                >
                  {expandedId === blog.id ? (
                    <><ChevronUp size={16} /> Show Less</>
                  ) : (
                    <><ChevronDown size={16} /> Read Full Article</>
                  )}
                </button>

              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto bg-[#0a1a3a] text-white p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold">Stay Ahead with Insights</h2>
              <p className="text-gray-300">Get expert analysis from BETRA.</p>
            </div>
            <Link
              href="/membership"
              className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Subscribe
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
