'use client'

import { useState, useMemo } from 'react'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { DownloadSection } from '@/components/DownloadSection'

import {
  Download,
  ExternalLink,
  Landmark,
  Building2,
  Search,
  FileText,
  BookOpen,
  Sparkles,
  Info
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
  Fraud:    'bg-red-100 text-red-700 border-red-200/50',
  Banking:  'bg-blue-100 text-blue-700 border-blue-200/50',
  Digital:  'bg-purple-100 text-purple-700 border-purple-200/50',
  Payments: 'bg-green-100 text-green-700 border-green-200/50',
  Literacy: 'bg-yellow-100 text-yellow-700 border-yellow-200/50',
}

type TabType = 'study' | 'awareness' | 'links'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Downloads() {
  const [activeTab, setActiveTab] = useState<TabType>('study')

  // Search & category filters for existing RBI Awareness topics
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filteredAwarenessItems = useMemo(() => {
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
      <main className="bg-gray-50/50 min-h-screen">

        {/* HERO */}
        <section className="bg-[#0a1a3a] text-white relative overflow-hidden">
          {/* Subtle gradient background mesh */}
          <div className="absolute inset-0 bg-radial-at-t from-[#152e60] via-transparent to-transparent opacity-40 pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-6 py-28 relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md font-semibold text-blue-200">
              <Sparkles size={12} className="text-amber-300 animate-pulse" />
              Resource Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
              Resource Library
            </h1>
            <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Gain access to high-fidelity PDF guides, recruitment trends, banking pattern syllabus resources, and curated RBI awareness files.
            </p>
          </div>
        </section>

        {/* TABS SWITCHER NAVIGATION BAR */}
        <section className="stickey top-24 z-40 bg-white border-b border-gray-200 shadow-xs">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex overflow-x-auto scrollbar-none gap-6 md:gap-8 -mb-px">
              
              {/* Tab 1: Study & Career Materials */}
              <button
                onClick={() => setActiveTab('study')}
                className={`flex items-center gap-2 py-5 border-b-2 font-semibold text-sm transition-all whitespace-nowrap outline-none ${
                  activeTab === 'study'
                    ? 'border-[#0a1a3a] text-[#0a1a3a]'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <BookOpen size={16} />
                Study & Career Guides
                <span className="bg-blue-50 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold ml-1 border border-blue-100">
                  New
                </span>
              </button>

              {/* Tab 2: RBI Awareness Library */}
              <button
                onClick={() => setActiveTab('awareness')}
                className={`flex items-center gap-2 py-5 border-b-2 font-semibold text-sm transition-all whitespace-nowrap outline-none ${
                  activeTab === 'awareness'
                    ? 'border-[#0a1a3a] text-[#0a1a3a]'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <FileText size={16} />
                RBI Awareness Topics
                <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">
                  {awarenessItems.length}
                </span>
              </button>

              {/* Tab 3: Official Banking Links */}
              <button
                onClick={() => setActiveTab('links')}
                className={`flex items-center gap-2 py-5 border-b-2 font-semibold text-sm transition-all whitespace-nowrap outline-none ${
                  activeTab === 'links'
                    ? 'border-[#0a1a3a] text-[#0a1a3a]'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Landmark size={16} />
                Official Banking Links
              </button>

            </div>
          </div>
        </section>

        {/* ACTIVE TAB CONTENT */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            
            {activeTab === 'study' && (
              /* TAB 1: STUDY & CAREER GUIDES */
              <div className="animate-fadeIn duration-300">
                <DownloadSection />
              </div>
            )}

            {activeTab === 'awareness' && (
              /* TAB 2: RBI AWARENESS TOPICS (PREVIOUS MAIN DIRECTORY) */
              <div className="space-y-8 animate-fadeIn duration-300">
                
                {/* Section Info Header */}
                <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100/50 flex gap-3 items-start">
                  <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Access complete, RBI-aligned official financial safety directories. You can search, filter, and view the latest educational campaigns regarding digital lending safety, fraud reports, and card tokenization protocols.
                  </p>
                </div>

                {/* Search + Filter bar */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search RBI awareness topics..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3a]/30"
                    />
                  </div>

                  {/* Category pills */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                          activeCategory === cat
                            ? 'bg-[#0a1a3a] text-white shadow-2xs'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400 font-medium">
                    Showing {filteredAwarenessItems.length} of {awarenessItems.length} awareness topics
                  </p>
                  
                  {search || activeCategory !== 'All' ? (
                    <button
                      onClick={() => {
                        setSearch('')
                        setActiveCategory('All')
                      }}
                      className="text-xs text-blue-700 font-semibold hover:underline"
                    >
                      Reset Filters
                    </button>
                  ) : null}
                </div>

                {/* Grid */}
                {filteredAwarenessItems.length > 0 ? (
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredAwarenessItems.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-4 group"
                      >
                        {/* Top row: icon + category badge */}
                        <div className="flex items-center justify-between">
                          <div className="bg-[#0a1a3a]/10 p-2.5 rounded-lg text-[#0a1a3a]">
                            <FileText size={18} />
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColors[item.category]}`}>
                            {item.category}
                          </span>
                        </div>

                        {/* Title */}
                        <p className="text-sm font-semibold text-gray-800 leading-snug flex-1 group-hover:text-blue-800 transition-colors duration-150">
                          {item.title}
                        </p>

                        {/* Link to external site */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#0a1a3a] text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-[#08122c] transition-all hover:scale-[1.02]"
                        >
                          <ExternalLink size={13} />
                          Visit website
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white border border-gray-200 rounded-xl text-gray-400">
                    <Search size={32} className="mx-auto mb-3 opacity-40" />
                    <p className="text-sm font-medium">No awareness topics found matching your query.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'links' && (
              /* TAB 3: USEFUL LINKS (PREVIOUS BOTTOM DIRECTORY) */
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-fadeIn duration-300">

                {/* Regulatory */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-3">
                    <div className="p-1.5 bg-blue-50 text-blue-800 rounded-lg">
                      <Landmark size={18} />
                    </div>
                    Regulatory Bodies
                  </h3>
                  <ul className="space-y-3.5">
                    {usefulLinks.regulatory.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${link.name}`}
                          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all hover:-translate-y-0.5 group"
                        >
                          <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-blue-800 transition-colors">
                            {link.name}
                          </span>
                          <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-700 transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Banks */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-3">
                    <div className="p-1.5 bg-purple-50 text-purple-800 rounded-lg">
                      <Building2 size={18} />
                    </div>
                    Major Commercial Banks
                  </h3>
                  <ul className="space-y-3.5">
                    {usefulLinks.banks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${link.name}`}
                          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all hover:-translate-y-0.5 group"
                        >
                          <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-blue-800 transition-colors">
                            {link.name}
                          </span>
                          <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-700 transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl bg-[#0a1a3a] text-white rounded-2xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            {/* Background design accents */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/[0.03] rounded-full -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-white/[0.01] rounded-full -ml-16 -mb-16 pointer-events-none" />
            
            <div className="space-y-2 relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Need More Resources?
              </h2>
              <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                Our educational advisory board at BETRA can curate specialized JAIIB, CAIIB, or banking exam study guides tailored to your institute's cohorts.
              </p>
            </div>
            
            <a 
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-100 font-bold px-6 py-3.5 rounded-xl text-xs md:text-sm transition-all hover:scale-105 active:scale-95 shadow-md shrink-0 relative z-10"
            >
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
