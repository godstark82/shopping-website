'use client'

import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { login } from '@/lib/services/login/login-service'
import { UserModel } from '@/lib/models/user-model'
import { FirebaseError } from 'firebase/app'

export default function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const userModel = UserModel.fromEmailAndPassword(email, password)
      await login(userModel)
      
    } catch (err) {
      // Handle specific Firebase auth errors
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/user-not-found':
            setError('No account found with this email')
            break
          case 'auth/wrong-password':
            setError('Incorrect password')
            break
          case 'auth/invalid-email':
            setError('Invalid email address')
            break
          case 'auth/too-many-requests':
            setError('Too many failed attempts. Please try again later')
            break
          default:
            setError('An error occurred during login')
        }
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred during login')
      }
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center bg-gradient-to-br from-indigo-50 dark:from-gray-900 to-blue-100 dark:to-gray-800 px-4 sm:px-6 lg:px-8 py-12 min-h-screen'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='space-y-8 w-full max-w-md'
      >
        <div className='bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 shadow-2xl backdrop-blur-sm p-8 rounded-2xl'>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 mt-2 font-extrabold text-3xl text-center text-transparent'>
              Welcome Back
            </h2>
            <p className='mt-2 text-center text-gray-600 dark:text-gray-400'>
              Please sign in to continue
            </p>
          </motion.div>

          <form className='space-y-6 mt-8' onSubmit={handleSubmit}>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='bg-red-50 dark:bg-red-900/30 px-4 py-3 border border-red-200 dark:border-red-800 rounded-lg'
                >
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className='ml-3'>
                      <p className='font-medium text-red-800 text-sm dark:text-red-200'>{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className='space-y-6'>
              <div className='relative'>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block border-gray-300 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full dark:text-white transition-all duration-200 peer placeholder-transparent'
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label
                  htmlFor='email-address'
                  className='-top-6 peer-focus:-top-6 peer-placeholder-shown:top-2 left-3 absolute text-gray-600 text-sm peer-focus:text-sm peer-focus:text-indigo-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200'
                >
                  Email address
                </label>
              </div>

              <div className='relative'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block border-gray-300 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full dark:text-white transition-all duration-200 peer placeholder-transparent'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label
                  htmlFor='password'
                  className='-top-6 peer-focus:-top-6 peer-placeholder-shown:top-2 left-3 absolute text-gray-600 text-sm peer-focus:text-sm peer-focus:text-indigo-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200'
                >
                  Password
                </label>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='border-gray-300 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600 transition duration-150 ease-in-out'
                />
                <label
                  htmlFor='remember-me'
                  className='block ml-2 text-gray-700 text-sm dark:text-gray-300'
                >
                  Remember me
                </label>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#'
                className='font-medium text-indigo-600 text-sm hover:text-indigo-500 transition-colors'
              >
                Forgot password?
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              disabled={isLoading}
              className='relative flex justify-center items-center bg-gradient-to-r from-indigo-600 hover:from-indigo-700 to-blue-600 hover:to-blue-700 disabled:opacity-70 px-4 py-2 rounded-lg w-full font-medium text-white transition-all duration-200'
            >
              {isLoading ? (
                <div className='border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin' />
              ) : (
                'Sign in'
              )}
            </motion.button>

            <div className='text-center'>
              <span className='text-gray-600 text-sm dark:text-gray-400'>
                Don&apos;t have an account?{' '}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='/auth/register'
                  className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors'
                >
                  Register here
                </motion.a>
              </span>
            </div>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='border-gray-300 dark:border-gray-600 border-t w-full'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white dark:bg-gray-800 px-2 text-gray-500'>
                  Or continue with
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='button'
              className='flex justify-center items-center border-gray-300 dark:border-gray-600 bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-700 px-4 py-2 border rounded-lg w-full text-gray-700 dark:text-white transition-all duration-200'
            >
              <FaGoogle className='mr-2 w-5 h-5' />
              Sign in with Google
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
