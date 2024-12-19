import { IoMdCart } from "react-icons/io";

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
                <IoMdCart className='w-4 h-4 me-1' />
                <span className='sm:flex hidden'>My Cart</span>
            </button>
            {/* Dialoge Menu */}

        </>
    )
}
