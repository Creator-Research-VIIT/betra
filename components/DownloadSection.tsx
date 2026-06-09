'use client'

import { useState, useMemo } from 'react'
import {
  Search,
  FileText,
  Download,
  ExternalLink,
  Grid,
  List,
  CheckCircle2,
  Loader2,
  Calendar,
  Sparkles,
  ArrowUpDown,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PDFResource {
  id: string
  title: string
  description: string
  file: string
  size: string
  category:
  | 'Recruitment Analysis'
  | 'Career Guides'
  | 'Exam Patterns'
  | 'Consumer Awareness'
  | 'Fraud Prevention'
  | 'Digital Payments'
  | 'Ombudsman'
  uploadedAt: string
  type: 'PDF' | 'DOCX' | 'PPT' | 'PPTX'
  downloads: number
}

// ─── Study Materials Data ──────────────────────────────────────────────────────

const pdfFiles: PDFResource[] = [
  {
  id: 'complaint-form-english',
  title: 'RBI Ombudsman Complaint Form',
  description:
    'Official complaint form for filing grievances under the RBI Integrated Ombudsman Scheme.',
  file: '/pdfs/ComplaintForm_English.pdf',
  size: '230 KB',
  category: 'Ombudsman',
  uploadedAt: 'Jun 2026',
  type: 'PDF',
  downloads: 0,
},

{
  id: 'customer-care-emails',
  title: 'Customer Care Email Directory',
  description:
    'Customer grievance and complaint email addresses of major public and private sector banks in India.',
  file: '/pdfs/CUSTOMER_CARE_EMAIL_ADDRESSES.docx',
  size: '50 KB',
  category: 'Consumer Awareness',
  uploadedAt: 'Jun 2026',
  type: 'PDF',
  downloads: 0,
},

{
  id: 'financial-fraud-brochure',
  title: 'FinancialFraud Awareness Guide',
  description:
    'Comprehensive cyber fraud prevention guide covering OTP fraud, phishing attacks, online banking safety and digital transaction security.',
  file: '/pdfs/Financial_Fraud_Brochures_final_01.pdf',
  size: '4 MB',
  category: 'Fraud Prevention',
  uploadedAt: 'Jun 2026',
  type: 'PDF',
  downloads: 0,
},

{
  id: 'npci-booklet',
  title: 'NPCI Digital Payments Handbook',
  description:
    'Guide covering UPI, RuPay, IMPS, BHIM, AEPS, NACH, National Financial Switch and other NPCI payment systems.',
  file: '/pdfs/NPCI_Booklet.pdf',
  size: '6 MB',
  category: 'Digital Payments',
  uploadedAt: 'Jun 2026',
  type: 'PDF',
  downloads: 0,
},

{
  id: 'ombudsman-faq',
  title: 'RBI Integrated Ombudsman FAQs',
  description:
    'Frequently asked questions on RBI Integrated Ombudsman Scheme 2021, complaint filing process, eligibility and grievance redressal.',
  file: '/pdfs/FAQ_OMBUDSMAN.docx',
  size: '120 KB',
  category: 'Ombudsman',
  uploadedAt: 'Jun 2026',
  type: 'PDF',
  downloads: 0,
},
  {
    id: 'banking-recruitment',
    title: 'Banking Recruitment Last 5 Years India',
    description: 'A comprehensive statistical analysis of recruitment trends, vacancies, and selection ratios across public and private sector banks in India over the last five years.',
    file: '/pdfs/Banking_Recruitment_Last_5_Years_India.pptx',
    size: '393 KB',
    category: 'Recruitment Analysis',
    uploadedAt: 'May 2026',
    type: 'PDF',
    downloads: 1240,
  },
  {
    id: 'bfsi-counselling',
    title: 'BFSI Career Counselling Presentation',
    description: 'An interactive exploration of major career paths, professional growth matrices, and essential certifications inside the Banking, Financial Services, and Insurance (BFSI) sector.',
    file: '/pdfs/BFSI_Career_Counselling_Presentation.pptx',
    size: '414 KB',
    category: 'Career Guides',
    uploadedAt: 'May 2026',
    type: 'PDF',
    downloads: 856,
  },
  {
    id: 'bfsi-opportunities',
    title: 'BFSI Career Opportunities India',
    description: 'A deep-dive overview of the job market, emerging tech roles, skill gaps, key recruiters, and hiring standards across the modern Indian BFSI ecosystem.',
    file: '/pdfs/BFSI_Career_Opportunities_India.ppt',
    size: '393 KB',
    category: 'Career Guides',
    uploadedAt: 'Apr 2026',
    type: 'PDF',
    downloads: 942,
  },
  {
    id: 'banking-exam-patterns',
    title: 'Indian Banking Examination Patterns',
    description: 'Detailed analysis of exam patterns, syllabus breakdowns, marking systems, and target preparation guides for major banking exams (SBI PO, IBPS, RBI Grade B).',
    file: '/pdfs/Indian_Banking_Examination_Patterns.pptx',
    size: '394 KB',
    category: 'Exam Patterns',
    uploadedAt: 'Mar 2026',
    type: 'PDF',
    downloads: 1538,
  },
  {
  id: 'rajya-sabha-npa-writeoff',
  title: 'Rajya Sabha Question No. 392 – Category-wise Written-off Loans',
  description:
    'Category-wise details of written-off loans by Scheduled Commercial Banks from FY 2014-15 to Sep-2025, including Large Industries, Large Services, Agriculture & Allied Activities, Gross NPA and Net NPA data.',
  file: '/pdfs/rajya-sabha-page.pdf',
  size: '250 KB',
  category: 'Recruitment Analysis',
  uploadedAt: 'Feb 2026',
  type: 'PDF',
  downloads: 0,
},
{
  id: 'lok-sabha-psb-writeoff',
  title: 'Lok Sabha Question No. 2379 – Loans Written-off by PSBs',
  description:
    'Bank-wise and category-wise NPAs written off by Public Sector Banks for FY 2020-21 to FY 2024-25, covering Agriculture, Industry, Services and Retail Loan segments.',
  file: '/pdfs/lok-sabha-page.pdf',
  size: '230 KB',
  category: 'Recruitment Analysis',
  uploadedAt: 'Feb 2026',
  type: 'PDF',
  downloads: 0,
},
]

const CATEGORIES = [
  'All',
  'Recruitment Analysis',
  'Career Guides',
  'Exam Patterns',
  'Consumer Awareness',
  'Fraud Prevention',
  'Digital Payments',
  'Ombudsman',
] as const 
type CategoryFilter = (typeof CATEGORIES)[number]

export function DownloadSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'title' | 'downloads'>('title')
  
  // State to handle animated download simulations per resource ID
  const [downloadingStates, setDownloadingStates] = useState<Record<string, 'idle' | 'downloading' | 'completed'>>({})

  // Handle mock download animation
  const handleDownload = (id: string, fileUrl: string) => {
    // 1. Set state to downloading
    setDownloadingStates((prev) => ({ ...prev, [id]: 'downloading' }))

    // 2. Simulate complete state after 1200ms
    setTimeout(() => {
      setDownloadingStates((prev) => ({ ...prev, [id]: 'completed' }))
      
      // Trigger actual anchor tag click to start browser download
      const link = document.createElement('a')
      link.href = fileUrl
      link.setAttribute('download', '')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // 3. Reset back to idle after another 1500ms
      setTimeout(() => {
        setDownloadingStates((prev) => ({ ...prev, [id]: 'idle' }))
      }, 1500)
    }, 1200)
  }

  // Filter and sort PDF resources
  const filteredAndSortedResources = useMemo(() => {
    let result = pdfFiles.filter((file) => {
      const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            file.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'All' || file.category === activeCategory
      return matchesSearch && matchesCategory
    })

    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'downloads') {
      result.sort((a, b) => b.downloads - a.downloads)
    }

    return result
  }, [searchQuery, activeCategory, sortBy])

  return (
    <div className="space-y-8">
      {/* ─── Header & Description ─── */}
      <div className="bg-gradient-to-r from-blue-50/50 via-indigo-50/20 to-transparent p-6 rounded-2xl border border-blue-100/50 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#0a1a3a] font-semibold text-sm">
            <Sparkles size={16} className="text-amber-500 animate-pulse" />

          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Study Materials & Guides
          </h2>
          <p className="text-sm text-gray-500 max-w-xl">
            Empowering students and practitioners with high-quality syllabus patterns, career pathways, and multi-year recruitment analyses.
          </p>
        </div>
        
        {/* Quick statistics badge */}
        <div className="bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-xs flex items-center gap-4 shrink-0">
          <div className="p-2 bg-[#0a1a3a]/10 rounded-lg">
            <BookOpen size={20} className="text-[#0a1a3a]" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">Total Resources</p>
            <p className="text-lg font-bold text-[#0a1a3a] leading-tight">{pdfFiles.length} Guides Available</p>
          </div>
        </div>
      </div>

      {/* ─── Search, Filter, Layout Controls ─── */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search study materials, patterns, careers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3a]/30 transition"
          />
        </div>

        {/* Categories, Sort, and View Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Category Filters */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0a1a3a] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Separator on desktop */}
          <div className="hidden sm:block h-6 w-px bg-gray-200" />

          {/* Sort Selector */}
          {/* <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-600">
            <ArrowUpDown size={14} className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'title' | 'downloads')}
              className="bg-transparent focus:outline-none font-medium cursor-pointer"
            >
              <option value="title">Alphabetical</option>
              <option value="downloads">Popularity</option>
            </select>
          </div> */}

          {/* Grid/List Toggle buttons */}
          {/* <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid' ? 'bg-[#0a1a3a] text-white' : 'bg-white hover:bg-gray-50 text-gray-500'
              }`}
              title="Grid View"
              aria-label="Switch to Grid View"
            >
              <Grid size={15} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list' ? 'bg-[#0a1a3a] text-white' : 'bg-white hover:bg-gray-50 text-gray-500'
              }`}
              title="List View"
              aria-label="Switch to List View"
            >
              <List size={15} />
            </button>
          </div> */}

        </div>
      </div>

      {/* ─── Grid or List Rendering ─── */}
      {filteredAndSortedResources.length > 0 ? (
        viewMode === 'grid' ? (
          /* Grid View Layout */
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredAndSortedResources.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:border-blue-200/50 transition-all duration-300 flex flex-col h-full overflow-hidden p-6 justify-between space-y-5 group"
                >
                  {/* Icon and Category Tag */}
                  <div className="flex items-start justify-between">
                    <div className="bg-red-50 text-red-600 p-2.5 rounded-lg border border-red-100/50 group-hover:scale-105 transition-transform duration-300">
                      <FileText size={22} className="stroke-[2.2]" />
                    </div>
                    
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-800 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Download Action (Direct Link) */}
                  <div className="pt-2">
                    <a
                      href={item.file}
                      download
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0a1a3a] text-white hover:bg-[#07132a] text-xs font-bold py-2.5 shadow-xs transition-all hover:scale-[1.02] active:scale-98"
                    >
                      <Download size={13} />
                      Download
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* List View Layout */
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
            {filteredAndSortedResources.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:bg-[#0a1a3a]/[0.01] transition-colors duration-150 group"
                >
                  {/* Left Section: Icon & Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-red-50 text-red-600 p-2.5 rounded-lg border border-red-100/50 group-hover:scale-105 transition-transform duration-200 shrink-0 mt-0.5">
                      <FileText size={20} className="stroke-[2.2]" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-800 transition-colors duration-150">
                          {item.title}
                        </h3>
                        <span className="text-[9px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100/30">
                          {item.category}
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-500 max-w-3xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Section: Download Link */}
                  <div className="shrink-0 self-stretch md:self-auto flex justify-end w-full md:w-auto">
                    <a
                      href={item.file}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a1a3a] text-white hover:bg-[#07132a] px-5 py-2 text-xs font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-98 w-full md:w-auto text-center"
                    >
                      <Download size={13} />
                      Download
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-200 rounded-2xl text-gray-400">
          <Search size={40} className="mx-auto mb-4 opacity-40 text-gray-500" />
          <h4 className="text-sm font-semibold text-gray-700">No resources matched your filters</h4>
          <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
            Try adjusting your search keywords, clear category selections, or reset the filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setActiveCategory('All')
            }}
            className="mt-4 text-xs font-bold text-blue-700 hover:underline"
          >
            Clear Filters & Search
          </button>
        </div>
      )}
    </div>
  )
}

