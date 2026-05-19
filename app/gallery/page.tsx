'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { ZoomIn } from 'lucide-react'

type GalleryImage = {
  src: string
  alt: string
  caption: string
}

const images: GalleryImage[] = [
  {
    src: '/gallery-1.jpeg',
    alt: 'Financial Literacy Awareness Program 1',
    caption: 'Financial Literacy Awareness Program',
  },
  {
    src: '/gallery-2.jpeg',
    alt: 'Financial Literacy Awareness Program 2',
    caption: 'Community Outreach Initiative',
  },
  {
    src: '/gallery-3.jpg',
    alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
    caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  },
  {
    src: '/gallery-4.jpg',
    alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
    caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  },
  {
    src: '/gallery-5.jpg',
    alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
    caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  },
  {
    src: '/gallery-6.jpg',
    alt: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
    caption: 'बँक नोकर भरती कार्यशाळा उत्साहात संपन्न !',
  },

]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

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
              Empowering communities through awareness, education, and financial knowledge.
            </p>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group cursor-zoom-in flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
              >
                {/* Image container — fixed height, full image visible */}
                <div className="relative h-[280px] bg-gray-100 flex items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="max-h-[280px] w-full object-contain transition-opacity duration-300 group-hover:opacity-80"
                  />

                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                      <ZoomIn size={20} className="text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 text-center">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
              className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl transition"
            >
              ✕
            </button>

            {/* Image + caption */}
            <div
              className="flex flex-col items-center max-w-5xl w-full px-4 gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1600}
                height={1000}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl animate-zoomIn"
              />
              <p className="text-white/80 text-sm text-center">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
