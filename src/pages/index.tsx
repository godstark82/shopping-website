import Navbar from '@/components/home/navbar'
import { HomeCarousel } from '@/components/home/home-carousel'
import CardList from '@/components/home/card-list'

export default function Home () {

  const cards = [
    {
      title: 'Product 1',
      description: 'Description 1',
      image: '/images/product1.jpg',
    },
    {
      title: 'Product 2',
      description: 'Description 2',
      image: '/images/product2.jpg',
    },
    {
      title: 'Product 3',
      description: 'Description 3',
      image: '/images/product3.jpg',
    },
    {
      title: 'Product 4',
      description: 'Description 4',
      image: '/images/product4.jpg',
    },
    {
      title: 'Product 5',
      description: 'Description 5',
      image: '/images/product5.jpg',
    },
    {
      title: 'Product 6',
      description: 'Description 6',
      image: '/images/product6.jpg',
    },
  ]

  return (
    <>
      <Navbar />
      <HomeCarousel />
      <CardList cards={cards} />
    </>
  )
}
