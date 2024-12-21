import Link from "next/link";

export function NavItem({ title, href }: { title: string, href: string }) {
    return (
        <>
            <li>
                <Link
                        href={href}
                    title={title}
                    className='flex font-medium text-gray-900 text-sm hover:text-primary-700 dark:hover:text-primary-500 dark:text-white'
                >
                    {title}
                </Link>
            </li>
        </>
    )
}