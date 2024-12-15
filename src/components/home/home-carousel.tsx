import {
  CarouselItem,
  Carousel,
  CarouselContent,
  type CarouselApi
} from '@/components/ui/carousel'
import React from 'react'
import Image from 'next/image'
import { a } from 'framer-motion/client'

export function HomeCarousel () {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const arr = [
    '/images/carousel/image1.jpg',
    '/images/carousel/image2.jpg',
    '/images/carousel/image3.jpg'
  ]

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {arr.map((item, index) => (
          <CarouselItem key={index}>
            <div className='relative w-full h-[50vh]'>
              <Image
                src={item}
                fill
                alt='profile'
                className='object-cover'
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
