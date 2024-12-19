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
