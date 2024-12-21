'use client'

import { ProductModel } from '@/lib/models/product-model'
import { getProductById } from '@/lib/services/product/product-service'
import Image from 'next/image'
import { useEffect, useState, Suspense } from 'react'
import { use } from 'react'

interface ProductPageProps {
  searchParams: { id: string }
}

const LoadingSpinner = () => (
  <div className='flex justify-center items-center min-h-screen'>
    <div className='border-gray-900 dark:border-white border-t-2 border-b-2 rounded-full w-32 h-32 animate-spin'></div>
  </div>
)

const ProductDetails = ({ product }: { product: ProductModel }) => (
  <div className='flex flex-col'>
    <h1 className='mb-4 font-bold text-2xl text-gray-900 lg:text-3xl dark:text-white'>
      {product.title}
    </h1>

    {product.rating && (
      <div className='flex items-center mb-4'>
        <span className='text-xl text-yellow-300'>★</span>
        <span className='ml-1 text-gray-600 dark:text-gray-400'>
          {product.rating} Rating
        </span>
      </div>
    )}

    <div className='mb-6'>
      <div className='flex items-center gap-4'>
        <span className='font-bold text-3xl text-gray-900 dark:text-white'>
          ${product.price}
        </span>
        {product.discount && (
          <span className='bg-red-100 dark:bg-red-900 px-3 py-1 rounded-full font-medium text-red-800 dark:text-red-300'>
            {product.discount}% OFF
          </span>
        )}
      </div>
      {product.discount && (
        <p className='mt-1 text-gray-500 text-sm dark:text-gray-400'>
          MRP:{' '}
          <span className='line-through'>
            ${(product.price * (100 / (100 - product.discount))).toFixed(2)}
          </span>
        </p>
      )}
    </div>

    <div className='mb-6'>
      <h2 className='mb-2 font-semibold text-lg'>Description</h2>
      <p className='text-gray-600 dark:text-gray-400'>{product.description}</p>
    </div>

    <div className='flex sm:flex-row flex-col gap-4 mt-auto'>
      <button className='flex-1 bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg font-medium text-white transition-colors'>
        Add to Cart
      </button>
      <button className='flex-1 border-2 border-primary-600 hover:bg-primary-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-medium text-primary-600 transition-colors'>
        Buy Now
      </button>
    </div>
  </div>
)

export default function ProductPage ({ searchParams }: ProductPageProps) {
  const { id } = searchParams
  const [product, setProduct] = useState<ProductModel | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id)
        setProduct(fetchedProduct)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!product) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <h1 className='text-2xl'>Product not found</h1>
      </div>
    )
  }

  return (
    <main className='mx-auto px-4 py-8 max-w-screen-xl'>
      <div className='gap-8 grid grid-cols-1 lg:grid-cols-2'>
        {/* Product Image */}
        <Suspense fallback={<LoadingSpinner />}>
          <div className='top-0 sticky'>
            <div className='relative rounded-lg overflow-hidden aspect-square'>
              <Image
                src={product.image || ''}
                alt={product.title || 'NA'}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </Suspense>

        {/* Product Details */}
        <Suspense fallback={<LoadingSpinner />}>
          <ProductDetails product={product} />
        </Suspense>
      </div>
    </main>
  )
}
