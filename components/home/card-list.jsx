import Card from '@/components/home/card'


export default function CardList({ cards, title, subCategory }) {



    const handleViewMore = () => {
        router.push('/products', { productList: cardsContent });
    }

    if (cards.length === 0) {
        return <></>
    }
    return <>
        <div className="mx-auto px-4 py-8 container">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
                <a href={`/screens/category/${subCategory.id}`} className="font-medium text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 dark:text-blue-400">
                    View More →
                </a>
            </div>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cards.map((card, index) => (
                    <Card key={index} product={card} />
                ))}
            </div>
        </div>
    </>;
}
