import { CategoryModel } from '@/lib/models/category-model'
import { app } from '@/lib/services/firebase/config'
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

export const addCategory = async (category: CategoryModel) => {
  try {
    const categoryRef = collection(db, 'categories')
    const docRef = await addDoc(categoryRef, CategoryModel.toJson(category))
    category.id = docRef.id
    await updateDoc(docRef, CategoryModel.toJson(category))
  } catch (error) {
    console.error('Error adding category:', error)
    throw error
  }
}

export const getCategories = async () => {
  try {
    const categoryRef = collection(db, 'categories')
    const snapshot = await getDocs(categoryRef)
    return snapshot.docs.map(doc =>
      CategoryModel.fromJson(JSON.stringify(doc.data()))
    )
  } catch (error) {
    console.error('Error getting categories:', error)
    throw error
  }
}

export const deleteCategory = async (categoryId: string) => {
  try {
    const categoryRef = doc(db, 'categories', categoryId)
    await deleteDoc(categoryRef)
  } catch (error) {
    console.error('Error deleting category:', error)
    throw error
  }
}

export const updateCategory = async (category: CategoryModel) => {
  try {
    const categoryRef = doc(db, 'categories', category.id)
    await updateDoc(categoryRef, CategoryModel.toJson(category))
  } catch (error) {
    console.error('Error updating category:', error)
    throw error
  }
}
