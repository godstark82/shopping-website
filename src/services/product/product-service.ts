import { ProductModel } from '@/models/product-model'
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

export const addProduct = async (product: ProductModel) => {
  try {
    const productRef = collection(db, 'products')
    const docRef = await addDoc(productRef, ProductModel.toJson(product))
    product.id = docRef.id
    await updateDoc(docRef, ProductModel.toJson(product))
  } catch (error) {
    console.error('Error adding product:', error)
    throw error
  }
}

export const getProducts = async () => {
  try {
    const productRef = collection(db, 'products')
    const snapshot = await getDocs(productRef)
    return snapshot.docs.map(doc =>
      ProductModel.fromJson(JSON.stringify(doc.data()))
    )
  } catch (error) {
    console.error('Error getting products:', error)
    throw error
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    const productRef = doc(db, 'products', productId)
    await deleteDoc(productRef)
  } catch (error) {
    console.error('Error deleting product:', error)
    throw error
  }
}

export const updateProduct = async (product: ProductModel) => {
  try {
    const productRef = doc(db, 'products', product.id)
    await updateDoc(productRef, ProductModel.toJson(product))
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}
