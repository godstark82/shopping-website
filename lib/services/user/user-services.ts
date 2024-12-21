import { doc, updateDoc } from 'firebase/firestore'
import { UserModel } from '@/lib/models/user-model'
import { getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { app } from '@/lib/services/firebase/config'

const db = getFirestore(app)

export const getUser = async (userId: string) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId))
    return userDoc.data() as UserModel
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

export const updateUser = async (user: UserModel) => {
  try {
    const userRef = doc(db, 'users', user.id)
    await updateDoc(userRef, UserModel.toMap(user))
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

