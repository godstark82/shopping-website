import { ProductModel } from '@/lib/models/product-model'

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export class OrderModel {
  id: string
  userId: string
  product: ProductModel
  quantity: number
  status: OrderStatus
  orderDate: Date
  deliveryDate: Date
  totalPrice: number
  shippingAddress: string
  paymentMethod: string
  customerId: string

  constructor (
    id: string,
    userId: string,
    product: ProductModel,
    quantity: number,
    status: OrderStatus,
    orderDate: Date,
    deliveryDate: Date,
    totalPrice: number,
    shippingAddress: string,
    paymentMethod: string,
    customerId: string
  ) {
    this.id = id
    this.userId = userId
    this.product = product
    this.quantity = quantity
    this.status = status
    this.orderDate = orderDate
    this.deliveryDate = deliveryDate
    this.totalPrice = totalPrice
    this.shippingAddress = shippingAddress
    this.paymentMethod = paymentMethod
    this.customerId = customerId
  }

  static toJson (order: OrderModel) {
    return {
      id: order.id,
      userId: order.userId,
      product: ProductModel.toJson(order.product),
      quantity: order.quantity,
      status: order.status as OrderStatus,
      orderDate: order.orderDate,
      deliveryDate: order.deliveryDate,
      totalPrice: order.totalPrice,
      shippingAddress: order.shippingAddress,
      paymentMethod: order.paymentMethod,
      customerId: order.customerId
    }
  }

  static fromJson (json: string) {
    const data = JSON.parse(json)
    return new OrderModel(
      data.id,
      data.userId,
      ProductModel.fromJson(JSON.stringify(data.product)),
      data.quantity,
      data.status as OrderStatus,
      new Date(data.orderDate),
      new Date(data.deliveryDate),
      data.totalPrice,
      data.shippingAddress,
      data.paymentMethod,
      data.customerId
    )
  }
}
