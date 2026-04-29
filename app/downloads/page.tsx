'use client'

import { useState, useMemo } from 'react'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'

import {
  Download,
  ExternalLink,
  Landmark,
  Building2,
  Search,
  FileText,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type DownloadItem = {
  title: string
  link: string
  category: 'Fraud' | 'Banking' | 'Digital' | 'Payments' | 'Literacy'
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const awarenessItems: DownloadItem[] = [
  { title: 'Inoperative Accounts',                          category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/rbi-inoperative.html' },
  { title: 'Know Your Banknotes',                           category: 'Literacy', link: 'https://rbikehtahai.rbi.org.in/know-your-banknotes.html' },
  { title: 'RBI Schemes Launch',                            category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/LaunchRBISchemes.html' },
  { title: 'Prevent Loss in Fraudulent Transactions',       category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/limit-your-loss.html' },
  { title: 'MANI Mobile App',                               category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/mani-app.html' },
  { title: 'Coin Misinformation Awareness',                 category: 'Literacy', link: 'https://rbikehtahai.rbi.org.in/coin-misinformation.html' },
  { title: 'Money Mule Awareness',                          category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/money-mule.html' },
  { title: 'Nomination and Settlement',                     category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/nomination.html' },
  { title: 'Positive Pay System',                           category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/positive-pay-system.html' },
  { title: 'Raju and Forty Thieves (Fraud Awareness Campaign)', category: 'Fraud', link: 'https://rbikehtahai.rbi.org.in/raju-and-forty-thieves.html' },
  { title: 'Re-KYC (Know Your Customer Update)',            category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/re-kyc.html' },
  { title: 'Banking Ombudsman Complaint Resolution',        category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/banking-ombudsman.html' },
  { title: 'Retail Direct Scheme',                          category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/retail-direct.html' },
  { title: 'Risk vs Returns in Investments',                category: 'Literacy', link: 'https://rbikehtahai.rbi.org.in/risk-return.html' },
  { title: 'Sachet Portal (Fraud Reporting)',               category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/sachet.html' },
  { title: 'Digital Banking Safety Measures',               category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/digital-banking-safety.html' },
  { title: 'Senior Citizen Banking Facilities',             category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/senior-citizen.html' },
  { title: 'Card Transaction Limits Setting',               category: 'Payments', link: 'https://rbikehtahai.rbi.org.in/card-transaction-limit.html' },
  { title: 'Social Media Financial Awareness',              category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/social-media-awareness.html' },
  { title: 'Card Tokenisation',                             category: 'Payments', link: 'https://rbikehtahai.rbi.org.in/card-tokenisation.html' },
  { title: 'UDGAM Portal (Unclaimed Deposits)',             category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/udgam.html' },
  { title: 'Unclaimed Deposits Awareness',                  category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/unclaimed-deposits.html' },
  { title: 'Video KYC',                                     category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/video-kyc.html' },
  { title: 'Account Aggregator Framework',                  category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/account-aggregator.html' },
  { title: 'AEPS (Aadhaar Enabled Payment System)',         category: 'Payments', link: 'https://rbikehtahai.rbi.org.in/aeps.html' },
  { title: 'Alert Your Family (Fraud Awareness)',           category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/alert-your-family.html' },
  { title: 'Basic Savings Bank Deposit Account (Zero Balance)', category: 'Banking', link: 'https://rbikehtahai.rbi.org.in/bsbda.html' },
  { title: 'Beware of Unknown Pop-Ups',                     category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/beware-of-popups.html' },
  { title: 'Central Bank Digital Currency (CBDC)',          category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/cbdc.html' },
  { title: 'CKYCR (Central KYC Registry)',                  category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/ckycr.html' },
  { title: 'Digital Banking Convenience',                   category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/digital-banking-convenience.html' },
  { title: 'Continuous Cheque Clearing System',             category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/cheque-clearing.html' },
  { title: 'Digital Arrest Scam Awareness',                 category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/digital-arrest.html' },
  { title: 'Cyber Security in Digital Banking',             category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/cyber-security.html' },
  { title: 'Digital Lending Applications',                  category: 'Digital',  link: 'https://rbikehtahai.rbi.org.in/digital-lending.html' },
  { title: 'Digital Payment Awareness Week',                category: 'Payments', link: 'https://rbikehtahai.rbi.org.in/digital-payment-awareness.html' },
  { title: 'Avoid Clicking Unknown Links',                  category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/unknown-links.html' },
  { title: 'Exchange of Soiled Notes',                      category: 'Literacy', link: 'https://rbikehtahai.rbi.org.in/soiled-notes.html' },
  { title: 'Financial Literacy Week',                       category: 'Literacy', link: 'https://rbikehtahai.rbi.org.in/financial-literacy-week.html' },
  { title: 'Forex Trading Awareness',                       category: 'Literacy', link: 'https://rbikehtahai.rbi.org.in/forex-trading.html' },
  { title: 'Fraud via Emails, Calls, and SMS',              category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/fraud-emails-calls-sms.html' },
  { title: 'UPI QR Fraud Awareness',                        category: 'Fraud',    link: 'https://rbikehtahai.rbi.org.in/upi-qr-fraud.html' },
  { title: 'Harmonisation of Turnaround Time',              category: 'Banking',  link: 'https://rbikehtahai.rbi.org.in/harmonisation-tat.html' },
]

const CATEGORIES = ['All', 'Fraud', 'Banking', 'Digital', 'Payments', 'Literacy'] as const
type CategoryFilter = (typeof CATEGORIES)[number]

const categoryColors: Record<string, string> = {
  Fraud:    'bg-red-100 text-red-700',
  Banking:  'bg-blue-100 text-blue-700',
  Digital:  'bg-purple-100 text-purple-700',
  Payments: 'bg-green-100 text-green-700',
  Literacy: 'bg-yellow-100 text-yellow-700',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Downloads() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filtered = useMemo(() => {
    return awarenessItems.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  const usefulLinks = {
    regulatory: [
      { name: 'Reserve Bank of India (RBI)', url: 'https://www.rbi.org.in' },
      { name: "Indian Banks' Association (IBA)", url: 'https://www.iba.org.in' },
      { name: 'Indian Institute of Banking and Finance (IIBF)', url: 'https://www.iibf.org.in' },
      { name: 'National Bank for Agriculture and Rural Development (NABARD)', url: 'https://www.nabard.org' },
      { name: 'Ministry of Finance', url: 'https://financialservices.gov.in' },
      { name: 'Banking Ombudsman', url: 'https://cms.rbi.org.in' },
    ],
    banks: [
      { name: 'State Bank of India', url: 'https://www.sbi.co.in' },
      { name: 'HDFC Bank', url: 'https://www.hdfcbank.com' },
      { name: 'ICICI Bank', url: 'https://www.icicibank.com' },
      { name: 'Punjab National Bank', url: 'https://www.pnbindia.in' },
      { name: 'Bank of Baroda', url: 'https://www.bankofbaroda.in' },
    ],
  }

  return (
    <>
      <main>

        {/* HERO */}
        <section className="bg-[#0a1a3a] text-white">
          <div className="mx-auto max-w-7xl px-6 py-28">
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

        {/* FINANCIAL AWARENESS TOPICS */}
        <section className="bg-white py-20 border-t">
          <div className="mx-auto max-w-7xl px-6">

            {/* Section header */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Financial Awareness Topics
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                RBI-aligned awareness materials on banking safety, digital payments, and fraud prevention.
              </p>
            </div>

            {/* Search + Filter bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3a]/30"
                />
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                      activeCategory === cat
                        ? 'bg-[#0a1a3a] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-gray-400 mb-6">
              Showing {filtered.length} of {awarenessItems.length} topics
            </p>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition flex flex-col gap-3"
                  >
                    {/* Top row: icon + category badge */}
                    <div className="flex items-center justify-between">
                      <div className="bg-[#0a1a3a]/10 p-2 rounded-lg">
                        <FileText size={18} className="text-[#0a1a3a]" />
                      </div>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="text-sm font-semibold text-gray-800 leading-snug flex-1">
                      {item.title}
                    </p>

                    {/* Download button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#0a1a3a] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#08122c] transition"
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <Search size={32} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">No topics match your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* USEFUL LINKS */}
        <section className="bg-gray-50 py-20 border-t">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Useful Links
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Access official banking institutions and regulatory bodies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

              {/* Regulatory */}
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Landmark size={18} />
                  Regulatory Bodies
                </h3>
                <ul className="space-y-4">
                  {usefulLinks.regulatory.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${link.name}`}
                        className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition hover:-translate-y-1"
                      >
                        <span className="text-sm font-medium text-gray-800">
                          {link.name}
                        </span>
                        <ExternalLink size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Banks */}
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Building2 size={18} />
                  Major Banks
                </h3>
                <ul className="space-y-4">
                  {usefulLinks.banks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${link.name}`}
                        className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition hover:-translate-y-1"
                      >
                        <span className="text-sm font-medium text-gray-800">
                          {link.name}
                        </span>
                        <ExternalLink size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl bg-[#0a1a3a] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">
                Need More Resources?
              </h2>
              <p className="text-gray-300 mt-2">
                Our team can provide customized training materials.
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
