import Card from '@/components/home/card'

export default function CardList({ cards = [] }) {
    const featuredCards = cards.slice(0, 4);

    const cardsContent = [
        {
          title: 'Product 1',
          description: 'Description 1',
          image: '/images/product1.jpg',
        },
        {
          title: 'Product 2',
          description: 'Description 2',
          image: '/images/product2.jpg',
        },
        {
          title: 'Product 3',
          description: 'Description 3',
          image: '/images/product3.jpg',
        },
        {
          title: 'Product 4',
          description: 'Description 4',
          image: '/images/product4.jpg',
        },
        {
          title: 'Product 5',
          description: 'Description 5',
          image: '/images/product5.jpg',
        },
        {
          title: 'Product 6',
          description: 'Description 6',
          image: '/images/product6.jpg',
        },
      ]

    const handleViewMore = () => {
        router.push('/products', { productList: cardsContent });
    }

    return <>
        <div className="mx-auto px-4 py-8 container">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Featured Products</h2>
                <a href="/products" className="font-medium text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 dark:text-blue-400">
                    View More →
                </a>
            </div>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {featuredCards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    </>;
}
