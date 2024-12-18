export class ProductModel {
  id: string
  title: string
  description: string
  price: number
  discount: number
  rating: number
  inStock: boolean
  categoryId: string[]
  subCategoryId: string[]
  image?: string

  constructor (
    id: string,
    title: string,
    description: string,
    price: number,
    discount: number,
    rating: number,
    inStock: boolean,
    categoryId: string[],
    subCategoryId: string[],
    image?: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.price = price
    this.discount = discount
    this.rating = rating
    this.inStock = inStock
    this.categoryId = categoryId
    this.subCategoryId = subCategoryId
    this.image = image
  }

  static toJson (product: ProductModel) {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discount: product.discount,
      rating: product.rating,
      inStock: product.inStock,
      categoryId: product.categoryId,
      subCategoryId: product.subCategoryId,
      image: product.image
    }
  }

  static fromJson (json: string) {
    const data = JSON.parse(json)
    return new ProductModel(
      data.id,
      data.title,
      data.description,
      data.price,
      data.discount,
      data.rating,
      data.inStock,
      data.categoryId,
      data.subCategoryId,
      data.image
    )
  }
}
