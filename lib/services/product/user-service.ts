import { UserModel } from '@/lib/models/user-model'
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

export const addUser = async (user: UserModel) => {
  try {
    const userRef = collection(db, 'users')
    const docRef = await addDoc(userRef, UserModel.toJson(user))
    user.id = docRef.id
    await updateDoc(docRef, UserModel.toJson(user))
  } catch (error) {
    console.error('Error adding user:', error)
    throw error
  }
}

export const getUsers = async () => {
  try {
    const userRef = collection(db, 'users')
    const snapshot = await getDocs(userRef)
    return snapshot.docs.map(doc =>
      UserModel.fromJson(JSON.stringify(doc.data()))
    )
  } catch (error) {
    console.error('Error getting users:', error)
    throw error
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const userRef = doc(db, 'users', userId)
    await deleteDoc(userRef)
  } catch (error) {
    console.error('Error deleting user:', error)
    throw error
  }
}

export const updateUser = async (user: UserModel) => {
  try {
    const userRef = doc(db, 'users', user.id)
    await updateDoc(userRef, UserModel.toJson(user))
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}
