import Navbar from '@/components/home/navbar'
import { HomeCarousel } from '@/components/home/home-carousel'
import CardList from '@/components/home/card-list'
import Footer from '@/components/home/footer'

export default function Home () {

  return (
    <>
      <Navbar />
      <HomeCarousel />
      <CardList />
      <Footer />
    </>
  )
}
