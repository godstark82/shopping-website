export class UserModel {
  id: string
  name: string
  email: string
  password: string
  profilePicture: string
  gender: string
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
    profilePicture: string,
    gender: string,
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
    this.profilePicture = profilePicture
    this.gender = gender
    this.role = role
    this.address = address
    this.phone = phone
    this.cart = cart
    this.orders = orders
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromEmailAndPassword (email: string, password: string) {
    return new UserModel(
      '',
      '',
      email,
      password,
      '',
      '',
      '',
      [],
      [],
      [],
      [],
      new Date(Date.now()),
      new Date(Date.now())
    )
  }

  static fromJson (json: string): UserModel {
    const model = JSON.parse(json) as UserModel
    return new UserModel(
      model.id,
      model.name,
      model.email,
      model.password,
      model.profilePicture,
      model.gender,
      model.role,
      model.address,
      model.phone,
      model.cart,
      model.orders,
      model.createdAt,
      model.updatedAt
    )
  }

  static toMap (user: UserModel) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      profilePicture: user.profilePicture,
      gender: user.gender,
      role: user.role,
      address: user.address,
      phone: user.phone,
      cart: user.cart,
      orders: user.orders,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt

    }
  }

  static toJson (user: UserModel) {
    return JSON.stringify(UserModel.toMap(user))
  }
}
