export function NavItem({ title, href }: { title: string, href: string }) {
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