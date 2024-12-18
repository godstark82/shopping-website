import { app } from '../firebase/config'
import { UserModel } from '@/lib/models/user-model'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth'
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'

// Initialize Firebase Authentication
const auth = getAuth(app)
// Initialize Firebase Firestore
const db = getFirestore(app)

//? function to sign-up with email and password
export const register = async (userModel: UserModel) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userModel.email,
      userModel.password
    )
    const userId = userCredential.user.uid
    userModel.id = userId

    const docRef = doc(collection(db, 'users'), userId)

    await setDoc(docRef, {
      id: userId,
      email: userModel.email,
      password: userModel.password, 
      name: userModel.name
    })

    // Navigate to home page after successful signup
    document.hasStorageAccess().then(access => {
      if (access) {
        localStorage.setItem('userId', userId)
        console.log('User saved to localStorage')
      }
    })
    window.location.href = '/'
  } catch (error) {
    console.error('Error signing up with email and password:', error)
  }
}

// function to sign-in with email and password
export const login = async (userModel: UserModel) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      userModel.email,
      userModel.password
    ).then(async user => {
      localStorage.setItem('userId', user.user.uid)
      console.log('User saved to localStorage')
    })
    window.location.href = '/'
  } catch (error) {
    console.error('Error signing in with email and password:', error)
  }
}

// reset password
export const resetPassword = async (userModel: UserModel) => {
  await sendPasswordResetEmail(auth, userModel.email)
}

// sign-in with google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}


export const logout = async () => {
  await signOut(auth)
  localStorage.removeItem('userId')
  window.location.href = '/auth/login'
}
