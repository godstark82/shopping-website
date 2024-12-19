import { logout } from '@/lib/services/login/login-service'
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export function AccountButton () {
  return (
    <>
      <button
        id='userDropdownButton1'
        data-dropdown-toggle='userDropdown1'
        type='button'
        className='inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-medium text-gray-900 text-sm dark:text-white leading-none'
      >
        <FaUser className='w-4 h-4 me-1' />
        Account
        <RiArrowDropDownLine className='w-6 h-6 me-1' />
      </button>
      <div
        id='userDropdown1'
        className='z-10 hidden bg-white dark:bg-gray-700 shadow rounded-lg divide-y divide-gray-100 dark:divide-gray-600 w-56 antialiased overflow-hidden overflow-y-auto'
      >
        <ul className='p-2 font-medium text-gray-900 text-sm text-start dark:text-white'>
          <AccountButtonItem title='My Account' href='/user/account' />
          <AccountButtonItem title='My Orders' href='#' />
          <AccountButtonItem title='Settings' href='#' />
          <AccountButtonItem title='Favourites' href='#' />
          <AccountButtonItem title='Billing Data' href='#' />
        </ul>
        <div className='p-2 font-medium text-gray-900 text-sm dark:text-white'>
          <button
            onClick={logout}
            title=''
            className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
          >
            {' '}
            Sign Out{' '}
          </button>
        </div>
      </div>
    </>
  )
}

function AccountButtonItem ({ title, href }: { title: string; href: string }) {
  return (
    <>
      <li>
        <a
          href={href}
          title=''
          className='inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm'
        >
          {' '}
          {title}
        </a>
      </li>
    </>
  )
}
