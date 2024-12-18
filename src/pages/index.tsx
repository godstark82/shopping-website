import Navbar from '@/components/home/navbar'
import { HomeCarousel } from '@/components/home/home-carousel'
import CardList from '@/components/home/card-list'
import Footer from '@/components/home/footer'
import { getCategories } from '@/services/product/category-service'
import { use } from 'react'
import { useEffect, useState } from 'react'
import { CategoryModel } from '@/models/category-model'
import { SubCategoryModel } from '@/models/subcategory-model'
import { getSubCategories } from '@/services/product/subcategory-service'
import { ProductModel } from '@/models/product-model'
import { getProducts } from '@/services/product/product-service'

export default function Home () {
  //! Variables
  const [subCategories, setSubCategories] = useState<SubCategoryModel[]>([])
  const [products, setProducts] = useState<ProductModel[]>([])

  //! Effects


  useEffect(() => {
    const fetchSubCategories = async () => {
      const fetchedSubCategories = await getSubCategories()
      setSubCategories(fetchedSubCategories)
    }
    fetchSubCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts()
      setProducts(fetchedProducts)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />
      {/* <HomeCarousel /> */}
      {subCategories.map(subCategory => (
        <CardList
          title={subCategory.name}
          subCategory={subCategory}
          cards={products.filter(product =>
            product.subCategoryId.includes(subCategory.id)
          )}
        />
      ))}
      <Footer />
    </>
  )
}
