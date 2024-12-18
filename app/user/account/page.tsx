'use client'

import { useState, useEffect } from 'react'
import { UserModel } from '@/lib/models/user-model'
import { getUser } from '@/lib/services/user/user-services'

export default function AccountPage () {
  const [user, setUser] = useState<UserModel | null>(null)
  const [name, setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId')
      if (userId) {
        const user = await getUser(userId)
        setUser(user)
        setName(user?.name || '')
      }
    }
    fetchUserData()
  }, [])

  return (
    <div className='mx-auto p-4 max-w-4xl'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='font-bold text-2xl text-gray-900 dark:text-white'>
          Account Details
        </h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-sm text-white transition-colors'
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className='gap-6 grid md:grid-cols-2'>
        <div className='bg-white dark:bg-gray-800 shadow p-6 rounded-lg'>
          <h2 className='mb-4 font-semibold text-gray-900 text-xl dark:text-white'>
            Personal Information
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                Name
              </label>
              {isEditing ? (
                <input
                  type='text'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='dark:border-gray-600 dark:bg-gray-700 p-2 border rounded-lg w-full'
                />
              ) : (
                <p className='text-gray-900 dark:text-white'>{user?.name}</p>
              )}
            </div>

            <div>
              <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                Email
              </label>
              <p className='text-gray-900 dark:text-white'>{user?.email}</p>
            </div>

            <div>
              <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                User ID
              </label>
              <p className='text-gray-900 dark:text-white'>{user?.id}</p>
            </div>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 shadow p-6 rounded-lg'>
          <h2 className='mb-4 font-semibold text-gray-900 text-xl dark:text-white'>
            Account Settings
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                Account Status
              </label>
              <p className='text-green-600 dark:text-green-400'>Active</p>
            </div>

            <div>
              <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                Member Since
              </label>
              <p className='text-gray-900 dark:text-white'>
                {new Date().toLocaleDateString()}
              </p>
            </div>

            <div>
              <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                Last Login
              </label>
              <p className='text-gray-900 dark:text-white'>
                {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 shadow p-6 rounded-lg'>
          <h2 className='mb-4 font-semibold text-gray-900 text-xl dark:text-white'>
            Security
          </h2>
          <div className='space-y-4'>
            <button className='font-medium text-blue-600 text-sm hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-400'>
              Change Password
            </button>
            <button className='font-medium text-blue-600 text-sm hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-400'>
              Enable Two-Factor Authentication
            </button>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 shadow p-6 rounded-lg'>
          <h2 className='mb-4 font-semibold text-gray-900 text-xl dark:text-white'>
            Preferences
          </h2>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <input type='checkbox' id='emailNotifications' className='mr-2' />
              <label
                htmlFor='emailNotifications'
                className='text-gray-900 text-sm dark:text-white'
              >
                Email Notifications
              </label>
            </div>
            <div className='flex items-center'>
              <input type='checkbox' id='marketingEmails' className='mr-2' />
              <label
                htmlFor='marketingEmails'
                className='text-gray-900 text-sm dark:text-white'
              >
                Marketing Emails
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
