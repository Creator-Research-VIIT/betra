import { Metadata } from 'next'
import Image from 'next/image'
// import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights & Updates | BETRA',
  description: 'Latest financial insights, banking analysis, and economic updates.',
}

export default function Blog() {
  return (
    <>
      {/* <Header /> */}

      <main>

        {/* 🔥 HERO (PREMIUM GRADIENT) */}
        {/* bg-gradient-to-br from-[#0a1a3a] via-[#0f2a5a] to-black */}
        <section className="relative bg-[#0a1a3a] text-white overflow-hidden">
          <div className="absolute bg-[#0a1a3a] inset-0 opacity-30" />

          <div className="relative mx-auto max-w-7xl px-6 py-22">
            <span className="text-xs uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full backdrop-blur">
              Insights & Analysis
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Financial Insights <br />
              <span className="text-gray-300">That Matter</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              Stay informed with critical developments in banking, financial systems, and global economic trends shaping the future.
            </p>
          </div>
        </section>

        {/* 🔥 BLOG CONTENT */}
        <section className="mx-auto max-w-6xl px-6 py-24 space-y-20">

          {/* 🔴 ARTICLE 1 */}
          <article className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src="/idbi-defaults.jpeg"
                alt="IDBI Defaults"
                width={1200}
                height={600}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8 space-y-6">

              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition">
                10 Wilful Defaults of ₹10,000 Crore that Impacted IDBI Bank
              </h2>

              <p className="text-gray-600 leading-relaxed">
                High-profile borrowers account for a significant portion of wilful defaults at IDBI Bank. The total amount of defaults exceeds government support, raising concerns about financial accountability.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With privatisation concerns rising, accountability of large defaulters becomes critical for maintaining public trust and financial discipline.
              </p>

              {/* Highlight Box */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-sm text-red-800">
                With the privatisation of IDBI all those cronies who have looted hard earned savings may escape accountability. Citizens must raise their voice.
              </div>

              {/* CTA */}
              <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition">
                Read More <ArrowRight size={16} />
              </button>

            </div>
          </article>

          {/* 🔵 ARTICLE 2 */}
          <article className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src="/bse-market.jpeg"
                alt="BSE Market"
                width={1200}
                height={600}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8 space-y-6">

              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition">
                BSE Market Decline & Global Financial Impact
              </h2>

              <p className="text-gray-600 leading-relaxed">
                The BSE index has dropped nearly 5,000 points, wiping out approximately ₹30 lakh crore in market capitalisation due to global instability.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Geopolitical tensions and global economic shifts continue to influence financial markets, raising concerns for long-term stability.
              </p>

              {/* Highlight Box */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md text-sm text-blue-800">
                Market capitalisation losses reflect global uncertainty. Strategic financial policy response is essential.
              </div>

              {/* CTA */}
              <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition">
                Read More <ArrowRight size={16} />
              </button>

            </div>
          </article>

        </section>

        {/* 🔥 CTA SECTION (PREMIUM STRIPE STYLE) */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl bg-[#0a1a3a] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">

            <div>
              <h2 className="text-2xl font-bold">
                Stay Ahead with Financial Insights
              </h2>
              <p className="text-gray-300 mt-2">
                Get expert-driven analysis and updates from BETRA.
              </p>
            </div>

            <Link
              href="/membership"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition text-center"
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