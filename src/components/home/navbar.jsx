import { useState, useEffect } from 'react'


export default function Navbar() {

    useEffect(() => {
        // Import Flowbite's dropdown functionality
        const initFlowbite = async () => {
            const flowbite = await import('flowbite');
            // Initialize all dropdowns
            flowbite.initDropdowns();
        }
        
        initFlowbite();
    }, []);

    return (
        <nav className="bg-white dark:bg-gray-800 antialiased">
            <div className="mx-auto px-4 2xl:px-0 py-4 max-w-screen-xl">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-8">
                        <div className="shrink-0">
                            <a href="#" title="" className="">
                                <img
                                    className="block dark:hidden w-auto h-8"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                                    alt=""
                                />
                                <img
                                    className="dark:block hidden w-auto h-8"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <ul className="lg:flex justify-start sm:justify-center items-center gap-6 md:gap-8 hidden py-3">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    href="#"
                                    title=""
                                    className="flex font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                                >
                                    Best Sellers
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    href="#"
                                    title=""
                                    className="flex font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                                >
                                    Gift Ideas
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    href="#"
                                    title=""
                                    className="font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                                >
                                    Today's Deals
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a
                                    href="#"
                                    title=""
                                    className="font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                                >
                                    Sell
                                </a>
                            </li>
                            <form className="flex items-center max-w-sm mx-auto">   
                                <label for="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product..." required />
                                </div>
                                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                        </ul>
                    </div>

                    <div className="flex items-center lg:space-x-2">
                        <button
                            id="myCartDropdownButton1"
                            data-dropdown-toggle="myCartDropdown1"
                            type="button"
                            className="inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-medium text-gray-900 text-sm dark:text-white leading-none"
                        >
                            <span className="sr-only">Cart</span>
                            <svg
                                className="w-5 h-5 lg:me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                                />
                            </svg>
                            <span className="sm:flex hidden">My Cart</span>
                            <svg
                                className="sm:flex hidden w-4 h-4 text-gray-900 dark:text-white ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 9-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            id="myCartDropdown1"
                            className="z-10 space-y-4 hidden bg-white dark:bg-gray-800 shadow-lg mx-auto p-4 rounded-lg max-w-sm antialiased overflow-hidden"
                        >
                            <div className="grid grid-cols-2">
                                <div>
                                    <a
                                        href="#"
                                        className="font-semibold text-gray-900 text-sm dark:text-white hover:underline truncate leading-none"
                                    >
                                        Apple iPhone 15
                                    </a>
                                    <p className="mt-0.5 font-normal text-gray-500 text-sm dark:text-gray-400 truncate">
                                        $599
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-6">
                                    <p className="font-normal text-gray-500 text-sm dark:text-gray-400 leading-none">
                                        Qty: 1
                                    </p>
                                    <button
                                        data-tooltip-target="tooltipRemoveItem1a"
                                        type="button"
                                        className="text-red-600 hover:text-red-700 dark:hover:text-red-600 dark:text-red-500"
                                    >
                                        <span className="sr-only"> Remove </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="tooltipRemoveItem1a"
                                        role="tooltip"
                                        className="inline-block z-10 absolute bg-gray-900 dark:bg-gray-700 opacity-0 shadow-sm px-3 py-2 rounded-lg font-medium text-sm text-white transition-opacity duration-300 invisible tooltip"
                                    >
                                        Remove item
                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <a
                                        href="#"
                                        className="font-semibold text-gray-900 text-sm dark:text-white hover:underline truncate leading-none"
                                    >
                                        Apple iPad Air
                                    </a>
                                    <p className="mt-0.5 font-normal text-gray-500 text-sm dark:text-gray-400 truncate">
                                        $499
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-6">
                                    <p className="font-normal text-gray-500 text-sm dark:text-gray-400 leading-none">
                                        Qty: 1
                                    </p>
                                    <button
                                        data-tooltip-target="tooltipRemoveItem2a"
                                        type="button"
                                        className="text-red-600 hover:text-red-700 dark:hover:text-red-600 dark:text-red-500"
                                    >
                                        <span className="sr-only"> Remove </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="tooltipRemoveItem2a"
                                        role="tooltip"
                                        className="inline-block z-10 absolute bg-gray-900 dark:bg-gray-700 opacity-0 shadow-sm px-3 py-2 rounded-lg font-medium text-sm text-white transition-opacity duration-300 invisible tooltip"
                                    >
                                        Remove item
                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <a
                                        href="#"
                                        className="font-semibold text-gray-900 text-sm dark:text-white hover:underline truncate leading-none"
                                    >
                                        Apple Watch SE
                                    </a>
                                    <p className="mt-0.5 font-normal text-gray-500 text-sm dark:text-gray-400 truncate">
                                        $598
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-6">
                                    <p className="font-normal text-gray-500 text-sm dark:text-gray-400 leading-none">
                                        Qty: 2
                                    </p>
                                    <button
                                        data-tooltip-target="tooltipRemoveItem3b"
                                        type="button"
                                        className="text-red-600 hover:text-red-700 dark:hover:text-red-600 dark:text-red-500"
                                    >
                                        <span className="sr-only"> Remove </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="tooltipRemoveItem3b"
                                        role="tooltip"
                                        className="inline-block z-10 absolute bg-gray-900 dark:bg-gray-700 opacity-0 shadow-sm px-3 py-2 rounded-lg font-medium text-sm text-white transition-opacity duration-300 invisible tooltip"
                                    >
                                        Remove item
                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <a
                                        href="#"
                                        className="font-semibold text-gray-900 text-sm dark:text-white hover:underline truncate leading-none"
                                    >
                                        Sony Playstation 5
                                    </a>
                                    <p className="mt-0.5 font-normal text-gray-500 text-sm dark:text-gray-400 truncate">
                                        $799
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-6">
                                    <p className="font-normal text-gray-500 text-sm dark:text-gray-400 leading-none">
                                        Qty: 1
                                    </p>
                                    <button
                                        data-tooltip-target="tooltipRemoveItem4b"
                                        type="button"
                                        className="text-red-600 hover:text-red-700 dark:hover:text-red-600 dark:text-red-500"
                                    >
                                        <span className="sr-only"> Remove </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="tooltipRemoveItem4b"
                                        role="tooltip"
                                        className="inline-block z-10 absolute bg-gray-900 dark:bg-gray-700 opacity-0 shadow-sm px-3 py-2 rounded-lg font-medium text-sm text-white transition-opacity duration-300 invisible tooltip"
                                    >
                                        Remove item
                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <a
                                        href="#"
                                        className="font-semibold text-gray-900 text-sm dark:text-white hover:underline truncate leading-none"
                                    >
                                        Apple iMac 20"
                                    </a>
                                    <p className="mt-0.5 font-normal text-gray-500 text-sm dark:text-gray-400 truncate">
                                        $8,997
                                    </p>
                                </div>
                                <div className="flex justify-end items-center gap-6">
                                    <p className="font-normal text-gray-500 text-sm dark:text-gray-400 leading-none">
                                        Qty: 3
                                    </p>
                                    <button
                                        data-tooltip-target="tooltipRemoveItem5b"
                                        type="button"
                                        className="text-red-600 hover:text-red-700 dark:hover:text-red-600 dark:text-red-500"
                                    >
                                        <span className="sr-only"> Remove </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="tooltipRemoveItem5b"
                                        role="tooltip"
                                        className="inline-block z-10 absolute bg-gray-900 dark:bg-gray-700 opacity-0 shadow-sm px-3 py-2 rounded-lg font-medium text-sm text-white transition-opacity duration-300 invisible tooltip"
                                    >
                                        Remove item
                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                    </div>
                                </div>
                            </div>
                            <a
                                href="#"
                                title=""
                                className="inline-flex justify-center items-center bg-primary-700 hover:bg-primary-800 dark:hover:bg-primary-700 dark:bg-primary-600 mb-2 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 w-full font-medium text-sm text-white focus:outline-none me-2"
                                role="button"
                            >
                                {" "}
                                Proceed to Checkout{" "}
                            </a>
                        </div>
                        <button
                            id="userDropdownButton1"
                            data-dropdown-toggle="userDropdown1"
                            type="button"
                            className="inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg font-medium text-gray-900 text-sm dark:text-white leading-none"
                        >
                            <svg
                                className="w-5 h-5 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                            Account
                            <svg
                                className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 9-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            id="userDropdown1"
                            className="z-10 hidden bg-white dark:bg-gray-700 shadow rounded-lg divide-y divide-gray-100 dark:divide-gray-600 w-56 antialiased overflow-hidden overflow-y-auto"
                        >
                            <ul className="p-2 font-medium text-gray-900 text-sm text-start dark:text-white">
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                    >
                                        {" "}
                                        My Account{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                    >
                                        {" "}
                                        My Orders{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                    >
                                        {" "}
                                        Settings{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                    >
                                        {" "}
                                        Favourites{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                    >
                                        {" "}
                                        Delivery Addresses{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                    >
                                        {" "}
                                        Billing Data{" "}
                                    </a>
                                </li>
                            </ul>
                            <div className="p-2 font-medium text-gray-900 text-sm dark:text-white">
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md w-full text-sm"
                                >
                                    {" "}
                                    Sign Out{" "}
                                </a>
                            </div>
                        </div>
                        <button
                            type="button"
                            data-collapse-toggle="ecommerce-navbar-menu-1"
                            aria-controls="ecommerce-navbar-menu-1"
                            aria-expanded="false"
                            className="inline-flex justify-center items-center lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md text-gray-900 dark:text-white"
                        >
                            <span className="sr-only">Open Menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    d="M5 7h14M5 12h14M5 17h14"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="ecommerce-navbar-menu-1"
                    className="border-gray-200 dark:border-gray-600 hidden bg-gray-50 dark:bg-gray-700 mt-4 px-4 py-3 border rounded-lg"
                >
                    <ul className="space-y-3 font-medium text-gray-900 text-sm dark:text-white">
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-700 dark:hover:text-primary-500"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-700 dark:hover:text-primary-500"
                            >
                                Best Sellers
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-700 dark:hover:text-primary-500"
                            >
                                Gift Ideas
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-700 dark:hover:text-primary-500"
                            >
                                Games
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-700 dark:hover:text-primary-500"
                            >
                                Electronics
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-primary-700 dark:hover:text-primary-500"
                            >
                                Home &amp; Garden
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
