export class SubCategoryModel {
    id: string
    name: string
    description: string
    categoryId: string
    image?: string
  
    constructor (id: string, name: string, description: string, categoryId: string, image?: string) {
      this.id = id
      this.name = name
      this.description = description
      this.categoryId = categoryId
      this.image = image
    }
  
    static toJson (category: SubCategoryModel) {
      const json = {
        id: category.id,
        name: category.name,
        description: category.description,
        categoryId: category.categoryId,
        image: category.image
      }
      return json
    }
  
    static fromJson (json: string) {
      const category = JSON.parse(json)
      return new SubCategoryModel(
        category.id,
        category.name,
        category.description,
        category.categoryId,
        category.image
      )
    }
  }