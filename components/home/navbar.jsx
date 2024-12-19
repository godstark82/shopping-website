'use client'

import { useState, useEffect } from 'react'
import { getCategories } from '@/lib/services/product/category-service'
import { logout } from '@/lib/services/login/login-service'

export function NavItem({ title, href }) {
    return (
        <>
            <li>
                <a
                    href={href}
                    title={title}
                    className='flex font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white'
                >
                    {title}
                </a>
            </li>
        </>
    )
}

export function NavbarSearch() {
    return (
        <>
            <form className='flex items-center mx-auto max-w-sm'>
                <label htmlFor='simple-search' className='sr-only'>
                    Search
                </label>
                <div className='relative w-full'>
                    <div className='absolute inset-y-0 flex items-center pointer-events-none ps-3 start-0'>
                        <svg
                            className='w-4 h-4 text-gray-500 dark:text-gray-400'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 20'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
                            />
                        </svg>
                    </div>
                    <input
                        type='text'
                        id='simple-search'
                        className='block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 border focus:border-blue-500 dark:focus:border-blue-500 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 w-full text-gray-900 text-sm dark:text-white dark:placeholder-gray-400 ps-10'
                        placeholder='Search Product...'
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 p-2.5 border border-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-white focus:outline-none ms-2'
                >
                    <svg
                        className='w-4 h-4'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                    </svg>
                    <span className='sr-only'>Search</span>
                </button>
            </form>
        </>
    )
}

export function CartButton() {
    return (
        <>
            <button
                id='myCartDropdownButton1'
                onClick={() => {
                    window.location.href = '/screens/cart'
                }}
                type='button'
                className='inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-medium text-gray-900 text-sm dark:text-white leading-none'
            >
                <span className='sr-only'>Cart</span>
                <svg
                    className='w-5 h-5 lg:me-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    fill='none'
                    viewBox='0 0 24 24'
                >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312'
                    />
                </svg>
                <span className='sm:flex hidden'>My Cart</span>
            </button>
            {/* Dialoge Menu */}
            <div
                id='userDropdown1'
                className='z-10 hidden bg-white dark:bg-gray-700 shadow rounded-lg divide-y divide-gray-100 dark:divide-gray-600 w-56 antialiased overflow-hidden overflow-y-auto'
            >
                <ul className='p-2 font-medium text-gray-900 text-sm text-start dark:text-white'>
                    <li>
                        <a
                            href='#'
                            title=''
                            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                        >
                            {' '}
                            My Account{' '}
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            title=''
                            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                        >
                            {' '}
                            My Orders{' '}
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            title=''
                            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                        >
                            {' '}
                            Settings{' '}
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            title=''
                            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                        >
                            {' '}
                            Favourites{' '}
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            title=''
                            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                        >
                            {' '}
                            Delivery Addresses{' '}
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            title=''
                            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                        >
                            {' '}
                            Billing Data{' '}
                        </a>
                    </li>
                </ul>
                <div className='p-2 font-medium text-gray-900 text-sm dark:text-white'>
                    <a
                        onClick={logout}
                        title=''
                        className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
                    >
                        {' '}
                        Sign Out{' '}
                    </a>
                </div>
            </div>
        </>
    )
}


export function AccountButton() {
    return (
        <>
            <button
                id='userDropdownButton1'
                data-dropdown-toggle='userDropdown1'
                type='button'
                className='inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-medium text-gray-900 text-sm dark:text-white leading-none'
            >
                <svg
                    className='w-5 h-5 me-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    fill='none'
                    viewBox='0 0 24 24'
                >
                    <path
                        stroke='currentColor'
                        strokeWidth={2}
                        d='M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                </svg>
                Account
                <svg
                    className='w-4 h-4 text-gray-900 dark:text-white ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    fill='none'
                    viewBox='0 0 24 24'
                >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='m19 9-7 7-7-7'
                    />
                </svg>
            </button>
        </>
    )
}

export default function Navbar() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        // Import Flowbite's dropdown functionality
        const initFlowbite = async () => {
            const flowbite = await import('flowbite')
            // Initialize all dropdowns
            flowbite.initDropdowns()
        }

        initFlowbite()
    }, [])

    useEffect(() => {
        const fetchCategories = async () => {
          const fetchedCategories = await getCategories()
          setCategories(fetchedCategories)
        }
        fetchCategories()
      }, [])
   

    return (
        <nav className='bg-white dark:bg-gray-800 antialiased'>
            <div className='mx-auto px-4 2xl:px-0 py-4 max-w-screen-xl'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-8'>
                        <div className='shrink-0'>
                            <a href='/' title='' className=''>
                                <img
                                    className='block dark:hidden w-auto h-8'
                                    src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg'
                                    alt=''
                                />
                                <img
                                    className='dark:block hidden w-auto h-8'
                                    src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg'
                                    alt=''
                                />
                            </a>
                        </div>
                        <ul className='lg:flex justify-start sm:justify-center items-center gap-6 md:gap-8 hidden py-3'>
                            {categories.map((category) => (
                                <NavItem key={category.id} title={category.name} href={`/screens/category/${category.id}`} />
                            ))}
                            {/* <NavItem title='Best Sellers' href='/' />
                            <NavItem title='Gift Ideas' href='/' />
                            <NavItem title="Today's Deals" href='/' />
                            <NavItem title='Sell' href='/' /> */}
                            <NavbarSearch />
                        </ul>
                    </div>

                    <div className='flex items-center lg:space-x-2'>

                        <CartButton />
                        <AccountButton />

                        <button
                            type='button'
                            data-collapse-toggle='ecommerce-navbar-menu-1'
                            aria-controls='ecommerce-navbar-menu-1'
                            aria-expanded='false'
                            className='inline-flex justify-center items-center lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md text-gray-900 dark:text-white'
                        >
                            <span className='sr-only'>Open Menu</span>
                            <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeWidth={2}
                                    d='M5 7h14M5 12h14M5 17h14'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id='ecommerce-navbar-menu-1'
                    className='border-gray-200 dark:border-gray-600 hidden bg-gray-50 dark:bg-gray-700 mt-4 px-4 py-3 border rounded-lg'
                >
                    <ul className='space-y-3 font-medium text-gray-900 text-sm dark:text-white'>
                        <NavItem title='Home &amp; Garden' href='/' />
                        <NavItem title='Best Sellers' href='/' />
                        <NavItem title='Gift Ideas' href='/' />
                        <NavItem title="Today's Deals" href='/' />
                        <NavItem title='Sell' href='/' />
                        <NavbarSearch />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
