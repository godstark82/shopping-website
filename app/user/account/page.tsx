'use client'

import { useState, useEffect } from 'react'
import { UserModel } from '@/lib/models/user-model'
import { getUser } from '@/lib/services/user/user-services'
import Navbar from '@/components/home/navbar/NavBar'

export default function AccountPage () {
  const [user, setUser] = useState<UserModel | null>(null)
  const [editingField, setEditingField] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [addresses, setAddresses] = useState<string[]>([])

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId')
      if (userId) {
        const user = await getUser(userId)
        setUser(user)
        setName(user?.name || '')
        setGender(user?.gender || '')
        setAddresses(user?.address || [])
      }
    }
    fetchUserData()
  }, [])

  return (
    <>
      <Navbar />
      <div className='mx-auto p-4 max-w-4xl'>
        <h1 className='mb-8 font-bold text-2xl text-gray-900 dark:text-white'>
          Account Details
        </h1>

        <div className='gap-6 grid md:grid-cols-2'>
          <div className='bg-white dark:bg-gray-800 shadow p-6 rounded-lg'>
            <h2 className='mb-4 font-semibold text-gray-900 text-xl dark:text-white'>
              Personal Information
            </h2>
            <div className='space-y-4'>
              <div>
                <div className='flex justify-between items-center mb-2'>
                  <label className='font-medium text-gray-700 text-sm dark:text-gray-300'>
                    Name
                  </label>
                  <button
                    onClick={() => setEditingField(editingField === 'name' ? null : 'name')}
                    className='font-medium text-blue-600 text-sm hover:text-blue-700'
                  >
                    {editingField === 'name' ? 'Save' : 'Edit'}
                  </button>
                </div>
                {editingField === 'name' ? (
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
                <div className='flex justify-between items-center mb-2'>
                  <label className='font-medium text-gray-700 text-sm dark:text-gray-300'>
                    Gender
                  </label>
                  <button
                    onClick={() => setEditingField(editingField === 'gender' ? null : 'gender')}
                    className='font-medium text-blue-600 text-sm hover:text-blue-700'
                  >
                    {editingField === 'gender' ? 'Save' : 'Edit'}
                  </button>
                </div>
                {editingField === 'gender' ? (
                  <select
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    className='dark:border-gray-600 dark:bg-gray-700 p-2 border rounded-lg w-full'
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <p className='text-gray-900 dark:text-white'>{user?.gender || 'Not specified'}</p>
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

              <div>
                <div className='flex justify-between items-center mb-2'>
                  <label className='font-medium text-gray-700 text-sm dark:text-gray-300'>
                    Addresses
                  </label>
                  <button
                    onClick={() => setEditingField(editingField === 'addresses' ? null : 'addresses')}
                    className='font-medium text-blue-600 text-sm hover:text-blue-700'
                  >
                    {editingField === 'addresses' ? 'Save' : 'Edit'}
                  </button>
                </div>
                {editingField === 'addresses' ? (
                  <div className='space-y-2'>
                    {addresses.map((address, index) => (
                      <div key={index} className='flex gap-2'>
                        <input
                          type='text'
                          value={address}
                          onChange={e => {
                            const newAddresses = [...addresses]
                            newAddresses[index] = e.target.value
                            setAddresses(newAddresses)
                          }}
                          className='dark:border-gray-600 dark:bg-gray-700 p-2 border rounded-lg w-full'
                        />
                        <button
                          onClick={() => {
                            const newAddresses = addresses.filter((_, i) => i !== index)
                            setAddresses(newAddresses)
                          }}
                          className='text-red-600 hover:text-red-700'
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setAddresses([...addresses, ''])}
                      className='font-medium text-blue-600 text-sm hover:text-blue-700'
                    >
                      + Add Address
                    </button>
                  </div>
                ) : (
                  <div className='space-y-2'>
                    {user?.address && user.address.length > 0 ? (
                      user.address.map((address, index) => (
                        <p key={index} className='text-gray-900 dark:text-white'>
                          {address}
                        </p>
                      ))
                    ) : (
                      <p className='text-gray-500 dark:text-gray-400'>No addresses added</p>
                    )}
                  </div>
                )}
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
                  {new Date().toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                  })}
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
              
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 shadow p-6 rounded-lg'>
            <h2 className='mb-4 font-semibold text-gray-900 text-xl dark:text-white'>
              Preferences
            </h2>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='emailNotifications'
                  className='mr-2'
                />
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
    </>
  )
}
