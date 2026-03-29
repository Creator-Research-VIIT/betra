import { Metadata } from 'next'
// import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
// import { Download } from 'lucide-react'
import {
  Download,
  BookOpen,
  Briefcase,
  Tractor,
  Users,
  School,
  User,
  Presentation,
  Image as ImageIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resource Library | BETRA',
  description: 'Access financial literacy materials and resources.',
}

export default function Downloads() {

  const resources = [
  {
    title: 'Financial Diary',
    desc: 'A practical guide designed for maintaining strict financial discipline and tracking long-term goals.',
    link: 'https://share.google/obsTDO9sj7BngXs63',
    icon: BookOpen,
  },
  {
    title: 'For Entrepreneurs',
    desc: 'Essential material for aspiring and existing business owners seeking structured capital management.',
    link: 'https://share.google/pnC4xzYDVPJFvUOOu',
    icon: Briefcase,
  },
  {
    title: 'Farmers Financial Guide',
    desc: 'Tailored awareness modules for rural stakeholders and agricultural finance.',
    link: 'https://share.google/4XBRvzYJg6oRCLSaH',
    icon: Tractor,
  },
  {
    title: 'Small Entrepreneurs',
    desc: 'Focused frameworks for managing micro-finances and scaling small business operations efficiently.',
    link: 'https://share.google/sRkR1f0KSc1fTLLa0',
    icon: Users,
  },
  {
    title: 'School Children',
    desc: 'Building early money management habits through engaging and age-appropriate educational content.',
    link: 'https://share.google/0r4xbmQo1wXmUrrEf',
    icon: School,
  },
  {
    title: 'Self Help Groups (SHGs)',
    desc: 'Comprehensive training modules on collective savings, credit management, and community growth.',
    link: 'https://share.google/sgUkRNJnYByIuwQCu',
    icon: Users,
  },
  {
    title: 'Senior Citizens',
    desc: 'Specialized financial awareness guides focusing on wealth preservation and safety.',
    link: 'https://share.google/MSGTAgzpG3hLz7mvs',
    icon: User,
  },
  {
    title: 'Trainers Guide',
    desc: 'Expert-level resources and pedagogical frameworks for financial literacy educators.',
    link: 'https://share.google/Eyo7xJkOB8P63PMlH',
    icon: Presentation,
  },
  {
    title: 'Financial Literacy Posters',
    desc: 'High-impact visual educational tools for classrooms, community centers, and institutions.',
    link: 'https://share.google/RVc7S4SHniNqKSb8h',
    icon: ImageIcon,
  },
]

  return (
    <>
      {/* <Header /> */}

      <main>

        {/* 🔥 HERO (DARK PREMIUM) */}
        <section className="bg-[#0a1a3a] text-white">
          <div className="mx-auto max-w-7xl px-6 py-28">
            {/* <p className="text-xs uppercase tracking-widest text-blue-300 mb-4">
              Resource Center
            </p> */}

            <span className="text-xs uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full backdrop-blur mb-8">
              Resource Center
            </span>
            <h1 className="text-5xl font-bold mt-4 mb-6">
              Resource Library
            </h1>

            <p className="max-w-xl text-gray-300 text-lg">
              Access professionally curated financial literacy materials for individuals, institutions, and entrepreneurs.
            </p>
          </div>
        </section>

        {/* 🔥 RESOURCE GRID */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Educational Assets
                </h2>
                <p className="text-gray-500 text-sm">
                  Download our comprehensive PDF resources tailored for diverse demographics.
                </p>
              </div>

              <button className="bg-[#0a1a3a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#08122c] transition">
                All Categories
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((item) => (
                <Card
                  key={item.title}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition hover:-translate-y-1"
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#0a1a3a]/10 p-2 rounded-lg">
                          <item.icon size={20} className="text-[#0a1a3a]" />
                        </div>

                        <h3 className="font-semibold text-lg text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-500 mt-3">
                        {item.desc}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="mt-6 flex items-center justify-center gap-2 bg-[#0a1a3a] text-white hover:bg-[#08122c]"
                    >
                      <a href={item.link} target="_blank">
                        <Download size={16} />
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 GUIDELINES */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-2xl font-bold mb-6">
                Resource Usage Guidelines
              </h2>

              <ul className="space-y-4 text-gray-600 text-sm">
                <li>01. Resources are intended for educational and non-commercial purposes only.</li>
                <li>02. Redistribution is permitted with proper BETRA credit.</li>
                <li>03. For institutional use, please contact our advisory team.</li>
                <li>04. Content is reviewed by financial experts for accuracy.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 🔥 CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl bg-[#0a1a3a] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-2xl font-bold">
                Need More Resources?
              </h2>
              <p className="text-gray-300 mt-2">
                Our team can provide customized training materials for your institution.
              </p>
            </div>

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