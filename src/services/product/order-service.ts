import { OrderModel } from '@/models/order-model'
import { app } from '@/services/firebase/config'
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'

const db = getFirestore(app)

export const addOrder = async (order: OrderModel) => {
  try {
    const orderRef = collection(db, 'orders')
    const docRef = await addDoc(orderRef, OrderModel.toJson(order))
    order.id = docRef.id
    await updateDoc(docRef, OrderModel.toJson(order))
  } catch (error) {
    console.error('Error adding order:', error)
    throw error
  }
}

export const getOrders = async () => {
  try {
    const orderRef = collection(db, 'orders')
    const snapshot = await getDocs(orderRef)
    return snapshot.docs.map(doc =>
      OrderModel.fromJson(JSON.stringify(doc.data()))
    )
  } catch (error) {
    console.error('Error getting orders:', error)
    throw error
  }
}

export const deleteOrder = async (orderId: string) => {
  try {
    const orderRef = doc(db, 'orders', orderId)
    await deleteDoc(orderRef)
  } catch (error) {
    console.error('Error deleting order:', error)
    throw error
  }
}

export const updateOrder = async (order: OrderModel) => {
  try {
    const orderRef = doc(db, 'orders', order.id)
    await updateDoc(orderRef, OrderModel.toJson(order))
  } catch (error) {
    console.error('Error updating order:', error)
    throw error
  }
}
