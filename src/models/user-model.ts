export class UserModel {
  id: string
  name: string
  email: string
  password: string
  role: string
  address: string[] // addresses
  phone: string[] // phone number
  cart: string[] // product id
  orders: string[] // order id
  createdAt: Date
  updatedAt: Date

  constructor (
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    address: string[],
    phone: string[],
    cart: string[],
    orders: string[],
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.role = role
    this.address = address
    this.phone = phone
    this.cart = cart
    this.orders = orders
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromJson (json: string): UserModel {
    const model = JSON.parse(json) as UserModel
    return new UserModel(
      model.id,
      model.name,
      model.email,
      model.password,
      model.role,
      model.address,
      model.phone,
      model.cart,
      model.orders,
      model.createdAt,
      model.updatedAt
    )
  }

  static toJson (user: UserModel) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      address: user.address,
      phone: user.phone,
      cart: user.cart,
      orders: user.orders,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}
