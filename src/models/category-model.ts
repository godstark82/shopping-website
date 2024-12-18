export class CategoryModel {
  id: string
  name: string
  description: string
  image: string

  constructor (id: string, name: string, description: string, image: string) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
  }

  static toJson (category: CategoryModel) {
    const json = {
      id: category.id,
      name: category.name,
      description: category.description,
      image: category.image
    }
    return json
  }

  static fromJson (json: string) {
    const category = JSON.parse(json)
    return new CategoryModel(
      category.id,
      category.name,
      category.description,
      category.image
    )
  }
}
