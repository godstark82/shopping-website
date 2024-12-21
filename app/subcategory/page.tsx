'use client'

import { ProductModel } from '@/lib/models/product-model'
import { SubCategoryModel } from '@/lib/models/subcategory-model'
import { getSubCategories } from '@/lib/services/product/subcategory-service'
import { getProducts } from '@/lib/services/product/product-service'
import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/home/product/ProductCard'

interface SubcategoryPageProps {
  searchParams: { id: string }
}

const LoadingSpinner = () => (
  <div className='flex justify-center items-center min-h-screen'>
    <div className='border-gray-900 dark:border-white border-t-2 border-b-2 rounded-full w-32 h-32 animate-spin'></div>
  </div>
)

export default function SubcategoryPage ({
  searchParams
}: SubcategoryPageProps) {
  const { id } = searchParams
  const [subcategories, setSubcategories] = useState<SubCategoryModel[]>([])
  const [products, setProducts] = useState<ProductModel[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subcategories = await getSubCategories()
        const products = await getProducts()
        setSubcategories(subcategories)
        setProducts(products)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredProducts = products.filter(product =>
    product.subCategoryId.includes(id)
  )
  const subcategory = subcategories.find(subcategory => subcategory.id === id)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <main className='mx-auto px-4 py-8 max-w-screen-xl'>
      <div className='mb-8'>
        <h1 className='mb-4 font-bold text-3xl'>{subcategory?.name}</h1>
        <p className='text-gray-600 dark:text-gray-400'>
          {subcategory?.description}
        </p>
      </div>

      <section>
        <h2 className='mb-6 font-semibold text-2xl'>Products</h2>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
