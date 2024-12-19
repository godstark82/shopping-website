'use client'

import { useState, useEffect } from 'react'
import { getCategories } from '@/lib/services/product/category-service'
import { NavbarSearch } from './NavSearch'
import { CartButton } from './CartButton'
import { AccountButton } from './NavAccountButton'
import { CategoryModel } from '@/lib/models/category-model'
import { NavItem } from './NavItem'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [categories, setCategories] = useState<CategoryModel[]>([])
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
                            <Link href='/' title='' className=''>
                                <Image
                                    className='block dark:hidden w-auto h-8'
                                    src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg'
                                    alt=''
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    className='dark:block hidden w-auto h-8'
                                    src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg'
                                    alt=''
                                    width={100}
                                    height={100}
                                />
                            </Link>
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
