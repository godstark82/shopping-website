'use client'

import { getProducts } from '@/lib/services/product/product-service'
import { getCategories } from '@/lib/services/product/category-service'
import { getSubCategories } from '@/lib/services/product/subcategory-service'
import { ProductModel } from '@/lib/models/product-model'
import { SubCategoryModel } from '@/lib/models/subcategory-model'
import { CategoryModel } from '@/lib/models/category-model'
import Link from 'next/link'
import { useEffect, useState, Suspense, use } from 'react';
import { ProductCard } from '@/components/home/product/ProductCard'

interface CategoryPageProps {
  searchParams: Promise<{ id: string }>
}

export default function CategoryPage(props: CategoryPageProps) {
  const searchParams = use(props.searchParams);
  const { id } = searchParams;
  const [categories, setCategories] = useState<CategoryModel[]>([])
  const [subcategories, setSubcategories] = useState<SubCategoryModel[]>([])
  const [products, setProducts] = useState<ProductModel[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getCategories()
        const subcategories = await getSubCategories()
        const products = await getProducts()
        setCategories(categories)
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

  const filteredSubcategories = subcategories.filter(subcategory =>
    subcategory.categoryId.includes(id)
  )
  const filteredProducts = products.filter(product =>
    product.categoryId.includes(id)
  )
  const category = categories.find(category => category.id === id)

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='border-gray-900 dark:border-white border-t-2 border-b-2 rounded-full w-32 h-32 animate-spin'></div>
      </div>
    )
  }

  return (
    <main className='mx-auto px-4 py-8 max-w-screen-xl'>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='mb-8'>
          <h1 className='mb-4 font-bold text-3xl'>{category?.name}</h1>
          <p className='text-gray-600 dark:text-gray-400'>
            {category?.description}
          </p>
        </div>
      </Suspense>

      {filteredSubcategories.length > 0 && (
        <section className='mb-12'>
          <h2 className='mb-6 font-semibold text-2xl'>Subcategories</h2>
          <div className='gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {filteredSubcategories.map(subcategory => (
              <Link
                key={subcategory.id}
                href={`/subcategory?id=${subcategory.id}`}
                className='border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 p-4 border rounded-lg'
              >
                <h3 className='font-medium'>{subcategory.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

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
