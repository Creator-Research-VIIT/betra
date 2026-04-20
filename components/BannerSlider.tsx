'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

const slides = [
  {
    title: "Role of Banks - A Historical Analysis of Banking",
    image: "/banners/image_2.png",
    alt: "Vintage ledgers representing historical analysis",
  },
  {
    title: "Banking after Independence (1947–1969)",
    image: "/banners/image_3.png",
    alt: "Industrial growth in post-independence India",
  },
  {
    title: "Integration and Way Forward",
    image: "/banners/image_1.png",
    alt: "Modern banking bridge representing integration",
  },
  {
    title: "Banking after Nationalisation (1969 to 1991)",
    image: "/banners/image_4.png",
    alt: "Social banking expansion",
  },
  {
    title: "Nationalised Banking (2003 to 2019)",
    image: "/banners/image_5.png",
    alt: "Modern digital banking hall",
  },
]

export function BannerSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative w-full group">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-[220px] md:h-[280px] lg:h-[320px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="pl-0 h-[220px] md:h-[280px] lg:h-[320px] relative"
            >
              {/* Background wrapper to center image */}
              <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">

                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 hover:bg-black/50 text-white border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 hover:bg-black/50 text-white border-none" />

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`h-2.5 rounded-full transition-all ${i + 1 === current
                  ? "bg-white w-8"
                  : "bg-white/50 w-2.5"
                }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}