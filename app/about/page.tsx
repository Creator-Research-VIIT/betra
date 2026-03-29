import { Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, GraduationCap, Landmark, Briefcase } from 'lucide-react'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | BETRA',
  description: 'Learn about BETRA, its mission, services, and contributions to banking and financial literacy.',
}



export default function About() {
  // const router = useRouter()
  return (
    <>


      <main>
        {/* 🔥 HERO SECTION */}
        <section className="relative text-white"> 
            <div className="absolute inset-0"> 
              <img src="/building.jpg" alt="Background" className="w-full h-full object-cover" /> 
              <div className="bg-[#0a1a3a] absolute inset-0" /> 
            </div> 

            <div className="bg-[#0a1a3a] relative mx-auto max-w-7xl px-6 py-25"> 
              <span className="text-xs tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                Editorial Precision in Banking
              </span> 

              <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                About <span className="text-gray-300">BETRA</span>
              </h1> 

              <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
                Building Excellence in Banking Education, Training & Research. We are the architects of modern financial literacy and institutional strength.
              </p> 
            </div> 
        </section>

        {/* 🔥 ROLE SECTION */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">

            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                The Role of Banking in Global Prosperity
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Banking is the backbone of any economy. BETRA bridges the gap between traditional banking and modern financial demands through education and institutional support.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <Shield className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Financial Literacy</h4>
                    <p className="text-sm text-gray-600">
                      Empowering individuals with financial knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Landmark className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Strong Institutions</h4>
                    <p className="text-sm text-gray-600">
                      Strengthening co-operative and rural banking systems.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6">
              {[
                { title: 'Ethics First', icon: Shield },
                { title: 'Inclusive Growth', icon: Users },
                { title: 'Competitive Edge', icon: GraduationCap },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <Card
                    key={item.title}
                    className="rounded-xl shadow-sm hover:shadow-xl transition hover:-translate-y-1"
                  >
                    <CardContent className="p-6 flex gap-4">
                      <Icon className="text-primary" />
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          High-impact programs designed for banking excellence.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

          </div>
        </section>

        {/* 🔥 GENESIS SECTION */}
        <section className="py-24">
          <div className="text-center mb-16">
            <p className="text-xs uppercase text-gray-500 tracking-widest">Foundation</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Genesis & Infrastructure
            </h2>
          </div>

          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
            {[
              { title: 'Genesis', icon: Briefcase },
              { title: 'Infrastructure', icon: Landmark },
              { title: 'Governance', icon: Users },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="group rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition"
                >
                  <CardContent className="p-6">
                    <Icon className="mb-4 text-primary group-hover:scale-110 transition" />
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Structured foundation ensuring institutional excellence.
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* 🔥 SERVICES SECTION (MODERN MINIMAL UI) */}
<section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-900">
        Service Portfolio
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Specialized solutions designed for every level of the financial ecosystem.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

      {[
        { title: 'Academy', icon: GraduationCap },
        { title: 'Corporate Training', icon: Briefcase },
        { title: 'Market Insights', icon: Landmark },
        { title: 'Consultancy', icon: Users },
        { title: 'Financial Discipline', icon: Shield },
      ].map((service) => {
        const Icon = service.icon
        return (
          <div
            key={service.title}
            className="border border-gray-200 rounded-lg p-4 bg-white hover:border-[#0a1a3a] transition"
          >
            <Icon size={18} className="text-gray-700 mb-2" />
            <h4 className="text-sm font-medium text-gray-900">
              {service.title}
            </h4>
          </div>
        )
      })}
    </div>

    {/* 🔥 Highlight Banner (Bank Clinic) */}
    <div className="mt-12 bg-[#0a1a3a] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">

      <div>
        <span className="text-xs bg-green-500 px-2 py-1 rounded text-white">
          UNIQUE SERVICE
        </span>

        <h4 className="text-white text-lg font-semibold mt-3">
          The Bank Clinic
        </h4>

        <p className="text-gray-300 text-sm mt-1 max-w-md">
          A diagnostic approach to institutional challenges. We analyze, identify, and provide surgical solutions for systemic inefficiencies.
        </p>
      </div>

      <Link href="/contact">
        <button className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
          Book Consultation
        </button>
      </Link>

    </div>

  </div>
</section>

        {/* 🔥 INSTITUTIONAL CHARTER */}

        {/* 🔥 INSTITUTIONAL CHARTER (MODERN UI LIKE IMAGE) */}
<section className="py-24 bg-gray-50">
  <div className="mx-auto max-w-6xl px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-gray-900">
        Institutional Charter
      </h2>
      <p className="text-xs uppercase tracking-widest text-gray-500 mt-3">
        The Foundation of Our Governance and Ethics
      </p>
    </div>

    {/* PREAMBLE */}
    <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
      <h3 className="font-semibold text-lg mb-3">📄 Preamble</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        The Banking Education, Training & Research Academy (BETRA) is established as a specialised institutional platform dedicated to strengthening financial literacy, institutional capacity, and inclusive banking systems. In an era of rapid financial digitisation and expanding Direct Benefit Transfer (DBT) architecture, there is a pressing need for structured capacity building at the grassroots level to ensure meaningful financial inclusion.
      </p>
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        BETRA seeks to function as a knowledge-driven and development-oriented institution committed to promoting equitable access to banking and finance, strengthening cooperative and community-based financial systems, and enhancing digital and financial competencies among stakeholders.
      </p>
    </div>

    {/* VISION + MISSION */}
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">VISION</h3>
        <p className="text-sm text-gray-600">
          To build an inclusive, transparent, and people-centric financial ecosystem by promoting financial education, institutional capacity, and development-oriented banking practices across all sections of society.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">MISSION</h3>
        <p className="text-sm text-gray-600">
          Promoting financial and digital literacy, strengthening institutional systems, and advancing inclusive and development-oriented banking practices across communities.
        </p>
      </div>
    </div>

    {/* FUNCTIONAL DOMAINS */}
    <div className="mb-20">
      <h3 className="text-lg font-semibold mb-6">Functional Domains</h3>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-3xl text-gray-300 font-bold">01</p>
          <h4 className="font-semibold mt-2">Education</h4>
          <p className="text-xs text-gray-500 mt-1">
            Delivering structured financial literacy and awareness programs.
          </p>
        </div>

        <div>
          <p className="text-3xl text-gray-300 font-bold">02</p>
          <h4 className="font-semibold mt-2">Research</h4>
          <p className="text-xs text-gray-500 mt-1">
            Analyzing financial inclusion gaps and policy frameworks.
          </p>
        </div>

        <div>
          <p className="text-3xl text-gray-300 font-bold">03</p>
          <h4 className="font-semibold mt-2">Transformation</h4>
          <p className="text-xs text-gray-500 mt-1">
            Driving systemic improvements in banking and finance systems.
          </p>
        </div>
      </div>
    </div>

    {/* PRINCIPLES + COLLABORATION */}
    <div className="grid md:grid-cols-2 gap-8 mb-20">

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Our Principles</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✔ Inclusivity and Equity</li>
          <li>✔ Transparency and Accountability</li>
          <li>✔ Community Participation</li>
          <li>✔ Ethical Financial Practices</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Collaboration</h3>
        <p className="text-sm text-gray-600">
          We collaborate with public sector banks, cooperative institutions, SHGs, government bodies, and financial regulators to strengthen the financial ecosystem.
        </p>
      </div>

    </div>

    {/* IMPACT */}
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="font-semibold text-lg mb-4">
        Impact & Commitment
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our success is measured by the stability we provide to institutions and the career trajectories of the professionals we train. We are committed to enhancing financial literacy, strengthening institutions, and promoting inclusive financial development across regions.
      </p>

      {/* <div className="mt-6 flex justify-center gap-4">
        <button className="bg-black text-white px-4 py-2 text-sm rounded">
          Download Full Charter
        </button>
        <button className="border px-4 py-2 text-sm rounded">
          Governance Report 2024
        </button>
      </div> */}
    </div>

  </div>
</section>


      </main>


      <Footer />
    </>
  )
}