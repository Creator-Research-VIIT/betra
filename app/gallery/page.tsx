'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { ZoomIn, Play } from 'lucide-react'

type GalleryItem = {
  type: 'image' | 'video' | 'youtube' | 'youtube-link'
  src: string
  thumbnail?: string
  alt: string
  caption: string
}

const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/gallery/gallery-1.jpeg',
    alt: 'Financial Literacy Awareness Program 1',
    caption: 'Financial Literacy Awareness Program',
  },

  {
    type: 'image',
    src: '/gallery/gallery-2.jpeg',
    alt: 'Financial Literacy Awareness Program 2',
    caption: 'Community Outreach Initiative',
  },

  {
    type: 'image',
    src: '/gallery/gallery-3.jpg',
    alt: 'Workshop',
    caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  },
  {
  type: 'image',
  src: '/gallery/gallery-4.jpg',
  alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
},

{
  type: 'image',
  src: '/gallery/gallery-5.jpg',
  alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
},

{
  type: 'image',
  src: '/gallery/gallery-6.jpg',
  alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
},

{
  type: 'image',
  src: '/gallery/gallery-7.jpeg',
  alt: 'India’s Outward Remittances Slip in FY 2026 : RBI Data',
  caption: 'India’s Outward Remittances Slip in FY 2026 : RBI Data',
},

{
  type: 'image',
  src: '/gallery/gallery-8.jpeg',
  alt: 'Top 10 States with Highest Loan Delinquencies',
  caption: 'Top 10 States with Highest Loan Delinquencies',
},

{
  type: 'image',
  src: '/gallery/gallery-9.jpeg',
  alt: '12 Major Public Sector Banks Today',
  caption: '12 Major Public Sector Banks Today',
},

{
  type: 'image',
  src: '/gallery/gallery-10.jpeg',
  alt: 'Public Sector Banks - Net Profit Trends',
  caption: 'Public Sector Banks - Net Profit Trends',
},

{
  type: 'image',
  src: '/gallery/gallery-11.jpeg',
  alt: 'RBI Divided the Payout to Government Over the Years',
  caption: 'RBI Divided the Payout to Government Over the Years',
},

{
  type: 'image',
  src: '/gallery/gallery-12.png',
  alt: 'FY 26 Consolidated Net Profit Leaders',
  caption: 'FY 26 Consolidated Net Profit Leaders',
},
{
    type: 'image',
    src: '/gallery/gallery-13.jpg',
    alt: 'Movement of Non performing Assets',
    caption: 'Movement of Non performing Assets',
  },

  // EMBEDDED YOUTUBE VIDEO
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/t5GQd-3h8oY',
    thumbnail: 'https://img.youtube.com/vi/t5GQd-3h8oY/hqdefault.jpg',
    alt: 'BANK आणि BANKING म्हणजे काय?',
    caption:
      'BANK आणि BANKING म्हणजे काय? नेमका अर्थ समजून घ्या',
  },

  // YOUTUBE CHANNEL LINK
  {
    type: 'youtube-link',
    src: 'https://youtube.com/@paryayabettertomorrow',
    thumbnail: '/gallery/gallery-14.png',
    alt: 'पर्याय YouTube Channel',
    caption: 'पर्याय YouTube Channel',
  },
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null)

  // ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKey)

    return () =>
      window.removeEventListener('keydown', handleKey)
  }, [])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  // Handle click
  const handleItemClick = (item: GalleryItem) => {
    // Open YouTube channel directly
    if (item.type === 'youtube-link') {
      window.open(item.src, '_blank')
      return
    }

    setSelectedItem(item)
  }

  return (
    <>
      <main>

        {/* HERO */}
        <section className="bg-[#0a1a3a] py-20 text-left">
          <div className="mx-auto max-w-7xl px-6">

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              Financial Literacy Initiatives
            </h1>

            <p className="mt-4 text-gray-300 text-lg max-w-2xl">
              Empowering communities through awareness,
              education, and financial knowledge.
            </p>

          </div>
        </section>

        {/* GALLERY */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item)}
                className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 bg-white border border-gray-100"
              >

                {/* MEDIA */}
                <div className="relative h-[280px] bg-gray-100 flex items-center justify-center overflow-hidden">

                  {/* IMAGE */}
                  {item.type === 'image' && (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={800}
                      className="max-h-[280px] w-full object-contain transition-opacity duration-300 group-hover:opacity-80"
                    />
                  )}

                  {/* LOCAL VIDEO */}
                  {item.type === 'video' && (
                    <video
                      src={item.src}
                      className="h-full w-full object-cover"
                      muted
                    />
                  )}

                  {/* YOUTUBE THUMBNAIL */}
                  {(item.type === 'youtube' ||
                    item.type === 'youtube-link') && (
                    <div className="relative w-full h-full">

                      <Image
                        src={item.thumbnail || ''}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/25" />

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 rounded-full p-4 shadow-xl">
                          <Play
                            size={28}
                            className="text-white fill-white"
                          />
                        </div>
                      </div>

                    </div>
                  )}

                  {/* IMAGE OVERLAY */}
                  {item.type === 'image' && (
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="opacity-0 group-hover:opacity-100 transition duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                        <ZoomIn
                          size={20}
                          className="text-gray-700"
                        />
                      </div>

                    </div>
                  )}

                </div>

                {/* CAPTION */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 text-center">
                    {item.caption}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* MODAL */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl transition"
            >
              ✕
            </button>

            {/* CONTENT */}
            <div
              className="flex flex-col items-center max-w-6xl w-full px-4 gap-4"
              onClick={(e) => e.stopPropagation()}
            >

              {/* IMAGE */}
              {selectedItem.type === 'image' && (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={1600}
                  height={1000}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              )}

              {/* VIDEO */}
              {selectedItem.type === 'video' && (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-xl shadow-2xl"
                />
              )}

              {/* YOUTUBE VIDEO */}
              {selectedItem.type === 'youtube' && (
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">

                  <iframe
                    src={`${selectedItem.src}?autoplay=1`}
                    title={selectedItem.alt}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                </div>
              )}

              {/* CAPTION */}
              <p className="text-white/80 text-sm text-center">
                {selectedItem.caption}
              </p>

            </div>

          </div>
        )}

      </main>

      <Footer />
    </>
  )
}