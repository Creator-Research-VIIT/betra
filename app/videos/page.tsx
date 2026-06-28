'use client'

import { Footer } from '@/components/Footer'
import { Play } from 'lucide-react'
import Image from 'next/image'

type VideoItem = {
  type: 'youtube' | 'youtube-link'
  src: string
  thumbnail: string
  title: string
  description: string
}

const videos: VideoItem[] = [
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/t5GQd-3h8oY',
    thumbnail:
      'https://img.youtube.com/vi/t5GQd-3h8oY/hqdefault.jpg',
    title:
      'BANK आणि BANKING म्हणजे काय? नेमका अर्थ समजून घ्या',
    description:
      'BANK आणि BANKING म्हणजे काय? सोप्या आणि साध्या शब्दात समजून घ्या.',
  },
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/lhx7UZRcAXc',
    thumbnail:
      'https://img.youtube.com/vi/lhx7UZRcAXc/hqdefault.jpg',
    title: 'नवीन आर्थिक साक्षरता व्हिडिओ',
    description:
      'Financial awareness and educational video from Paryaya.',
  },
  {
    type: 'youtube',
    src: 'https://youtu.be/y2Q5jlQMYvU?si=iJ3hAnwoebMc9Q7H',
    thumbnail:
      'https://img.youtube.com/vi/y2Q5jlQMYvU/maxresdefault.jpg',
    title: 'नवीन आर्थिक साक्षरता व्हिडिओ',
    description:
      'Financial awareness and educational video from Paryaya.',
  },
  {
    type: 'youtube-link',
    src: 'https://youtube.com/@paryayabettertomorrow',
    thumbnail: '/gallery/gallery-14.png',
    title: 'पर्याय YouTube Channel',
    description:
      'Financial awareness, banking education, and research videos.',
  },
  {
  type: 'youtube',
  src: 'https://www.youtube.com/embed/eqIQHySg1XM',
  thumbnail:
    'https://img.youtube.com/vi/eqIQHySg1XM/maxresdefault.jpg',
  title: 'भारतीय बँकिंगचा इतिहास आणि प्रवास',
  description:
    'Financial awareness and educational video from Paryaya.',
},

{
  type: 'youtube',
  src: 'https://www.youtube.com/embed/Tct-YjRR-aI',
  thumbnail:
    'https://img.youtube.com/vi/Tct-YjRR-aI/maxresdefault.jpg',
  title:
    'बँकांचे राष्ट्रीयीकरण आणि परिणाम : एक क्रांतिकारी पाऊल',
  description:
    'Financial awareness and educational video from Paryaya.',
},

{
  type: 'youtube',
  src: 'https://www.youtube.com/embed/nkdt8C9ohHM',
  thumbnail:
    'https://img.youtube.com/vi/nkdt8C9ohHM/maxresdefault.jpg',
  title: 'कर्ज देणं म्हणजे बँकेसाठी गणित',
  description:
    'Financial awareness and educational video from Paryaya.',
},
]

export default function VideoSection() {
  const handleClick = (video: VideoItem) => {
    // Redirect channel link
    if (video.type === 'youtube-link') {
      window.open(video.src, '_blank')
      return
    }

    // Redirect normal YouTube video
    if (video.type === 'youtube') {
      window.open(
        video.src.replace('/embed/', '/watch?v='),
        '_blank'
      )
    }
  }

  return (
    <>
      <main>

        {/* HERO SECTION */}
        <section className="bg-[#0a1a3a] py-20">
          <div className="mx-auto max-w-7xl px-6">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Video Gallery
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Explore financial literacy videos, banking awareness
              sessions, and educational resources from Paryaya.
            </p>

          </div>
        </section>

        {/* VIDEO GRID */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleClick(video)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition duration-300"
              >

                {/* THUMBNAIL */}
                <div className="relative h-[320px] overflow-hidden">

                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="bg-red-600 group-hover:bg-red-700 transition rounded-full p-5 shadow-2xl">

                      <Play
                        size={34}
                        className="text-white fill-white"
                      />

                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="text-xl font-semibold text-gray-900">
                    {video.title}
                  </h2>

                  {/* <p className="mt-3 text-gray-600 leading-relaxed">
                    {video.description}
                  </p> */}

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}