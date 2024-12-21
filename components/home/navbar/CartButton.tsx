import Link from 'next/link'
import { IoMdCart } from 'react-icons/io'

export function CartButton () {
  return (
    <>
      <Link
        id='myCartDropdownButton1'
        href='/user/cart'
        className='inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-medium text-gray-900 text-sm dark:text-white leading-none'
        type='button'
      >
        <span className='sr-only'>Cart</span>
        <IoMdCart className='w-4 h-4 me-1' />
        <span className='sm:flex hidden'>My Cart</span>
      </Link>
      {/* Dialoge Menu */}
    </>
  )
}
