'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
// import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto'
  }, [selectedImage])

  return (
    <>
      {/* <Header /> */}

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


        {/* GALLERY */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">

            {/* IMAGE 1 */}
            <div
              onClick={() => setSelectedImage('/gallery-1.jpeg')}
              className="group cursor-zoom-in overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src="/gallery-1.jpeg"
                alt="Awareness Image 1"
                width={1200}
                height={800}
                className="w-full h-125 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* IMAGE 2 */}
            <div
              onClick={() => setSelectedImage('/gallery-2.jpeg')}
              className="group cursor-zoom-in overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src="/gallery-2.jpeg"
                alt="Awareness Image 2"
                width={1200}
                height={800}
                className="w-full h-125 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        </section>

        {/* 🔥 LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-70"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-xl shadow-2xl animate-zoomIn"
              />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  )
}