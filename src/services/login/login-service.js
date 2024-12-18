import { app } from '../firebase/config'
import { UserModel } from '@/models/user-model'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
// Initialize Firebase Authentication
const auth = getAuth(app)
// Initialize Firebase Firestore
const db = getFirestore(app)

// function to sign-up with email and password
export const register = async (email, password, name) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async user => {
        await addDoc(collection(db, 'users'), {
          email: email,
          password: password,
          name: name
        })
        // Navigate to home page after successful signup
        document.hasStorageAccess().then(access => {
          if (access) {
            localStorage.setItem('isLoggedIn', 'true')
            console.log('User saved to localStorage')
          }
        })
        window.location.href = '/'
      }
    )
  } catch (error) {
    console.error('Error signing up with email and password:', error)
  }
}

// function to sign-in with email and password
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(async user => {
      localStorage.setItem('isLoggedIn', 'true')
      console.log('User saved to localStorage')
    })
    window.location.href = '/'
  } catch (error) {
    console.error('Error signing in with email and password:', error)
  }
}

// reset password
export const resetPassword = async email => {
  await sendPasswordResetEmail(auth, email)
}

// sign-in with google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}
