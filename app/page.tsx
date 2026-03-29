import Link from 'next/link'
// import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Users, TrendingUp, Landmark } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <main>

        {/* 🔥 HERO SECTION (REAL CONTENT + PREMIUM UI) */}
        <section className="bg-[#0a1a3a] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">

            <p className="text-xl md:text-2xl text-blue-300 mb-4 font-semibold tracking-wide">
              Banking Education Training & Research Academy (BETRA)
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Committed to Knowledge. <br />
              Dedicated to Banking Excellence.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              BETRA is a specialized institution focused on banking education, financial literacy, training, and research to strengthen India’s financial ecosystem.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Chhatrapati Sambhajinagar, Maharashtra
            </p>

            <div className="mt-10 flex gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/about">Learn More</Link>
              </Button>

              <Button asChild variant="outline" className="bg-white text-black hover:bg-gray-200">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 🔥 OVERVIEW SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About BETRA
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            BETRA is dedicated to building a robust financial ecosystem by enhancing banking knowledge, promoting financial literacy, and strengthening institutions through structured training and research initiatives.
          </p>

          {/* 🔥 DOWNLOAD BUTTON */}
            <a
              href="/BetraBrochure.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 rounded-lg bg-[#0a1a3a] text-white px-6 py-3 text-sm font-semibold shadow-lg hover:bg-gray-200 hover:scale-105 transition"
            >
              📄 Download Brochure
            </a>
        </section>

        {/* 🔥 VISION SECTION */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-600 mt-4">
                To emerge as a Center of Excellence in Banking Education, Training & Research
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">

              <Card className="rounded-xl shadow-sm hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Financial Stability</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Strengthening systems for long-term financial resilience.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-sm hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Inclusive Growth</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Promoting financial inclusion across all sections of society.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-sm hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <Landmark className="mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Institutional Integrity</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Enhancing governance and transparency in financial institutions.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* 🔥 FOCUS AREAS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Areas
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <Card className="rounded-xl hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <BookOpen className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Banking Education</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Structured programs including JAIIB, CAIIB, and competitive exams.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Training Programs</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Customized training for banks, SHGs, and financial institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <TrendingUp className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Financial Literacy</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Awareness initiatives for individuals, communities, and organizations.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* 🔥 FINAL CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl bg-[#0a1a3a] text-white rounded-2xl p-12 text-center">

            <h2 className="text-3xl font-bold mb-4">
              Join us in building a stronger banking ecosystem
            </h2>

            <p className="text-gray-300 mb-6">
              Partner with BETRA to advance financial literacy, institutional strength, and sustainable banking practices.
            </p>

            <Button className="bg-white text-black hover:bg-gray-200">
              Contact Us
            </Button>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}