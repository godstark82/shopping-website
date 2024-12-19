'use client'

import Navbar from '@/components/home/navbar/NavBar'
import CardList from '@/components/home/card-list'
import { useEffect, useState } from 'react'
import { SubCategoryModel } from '@/lib/models/subcategory-model'
import { getSubCategories } from '@/lib/services/product/subcategory-service'
import { ProductModel } from '@/lib/models/product-model'
import { getProducts } from '@/lib/services/product/product-service'

export default function Home () {
  //! Variables
  const [subCategories, setSubCategories] = useState<SubCategoryModel[]>([])
  const [products, setProducts] = useState<ProductModel[]>([])
  const [isLoading, setIsLoading] = useState(true)

  //! Effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedSubCategories, fetchedProducts] = await Promise.all([
          getSubCategories(),
          getProducts()
        ])
        setSubCategories(fetchedSubCategories)
        setProducts(fetchedProducts)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className='flex justify-center items-center min-h-screen'>
          <div className='border-gray-900 dark:border-white border-t-2 border-b-2 rounded-full w-16 h-16 animate-spin'></div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      {/* <HomeCarousel /> */}
      {subCategories.map(subCategory => (
        <CardList
          key={subCategory.id}
          title={subCategory.name}
          subCategory={subCategory}
          cards={products.filter(product =>
            product.subCategoryId.includes(subCategory.id)
          )}
        />
      ))}
    </>
  )
}
