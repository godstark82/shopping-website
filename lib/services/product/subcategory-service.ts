import { SubCategoryModel } from '@/lib/models/subcategory-model'
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

export const addSubCategory = async (category: SubCategoryModel) => {
  try {
    const categoryRef = collection(db, 'subcategories')
    const docRef = await addDoc(categoryRef, SubCategoryModel.toJson(category))
    category.id = docRef.id
    await updateDoc(docRef, SubCategoryModel.toJson(category))
  } catch (error) {
    console.error('Error adding category:', error)
    throw error
  }
}

export const getSubCategories = async () => {
  try {
    const categoryRef = collection(db, 'subcategories')
    const snapshot = await getDocs(categoryRef)
    return snapshot.docs.map(doc =>
      SubCategoryModel.fromJson(JSON.stringify(doc.data()))
    )
  } catch (error) {
    console.error('Error getting categories:', error)
    throw error
  }
}

export const deleteSubCategory = async (categoryId: string) => {
  try {
    const categoryRef = doc(db, 'subcategories', categoryId)
    await deleteDoc(categoryRef)
  } catch (error) {
    console.error('Error deleting category:', error)
    throw error
  }
}

export const updateSubCategory = async (category: SubCategoryModel) => {
  try {
    const categoryRef = doc(db, 'subcategories', category.id)
    await updateDoc(categoryRef, SubCategoryModel.toJson(category))
  } catch (error) {
    console.error('Error updating category:', error)
    throw error
  }
}
