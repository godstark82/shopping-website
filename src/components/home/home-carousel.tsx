import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )

  const arr = [
    '/images/carousel/image1.jpg',
    '/images/carousel/image2.jpg',
    '/images/carousel/image3.jpg'
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs mx-auto"
    >
      <CarouselContent>
        {arr.map((image, index) => (
          <CarouselItem key={index}>
            <div className='relative w-full h-[50vh]'>
              <Image
                src={image}
                fill
                alt='profile'
                className='object-cover'
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

