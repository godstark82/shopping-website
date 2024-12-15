export default function Products({productList = []}) {
    return (
        <div className="mx-auto px-4 py-8 container">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-2xl text-gray-900 dark:text-white">All Products</h2>
            </div>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productList.map((product, index) => (
                    <div key={index} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow border rounded-lg w-full max-w-sm">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src={product.image || "https://flowbite.com/docs/images/products/apple-watch.png"}
                                alt={product.title || "product image"}
                            />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="font-semibold text-gray-900 text-xl dark:text-white tracking-tight">
                                    {product.title || "Product Title"}
                                </h5>
                            </a>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {product.description || "No description available"}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-3xl text-gray-900 dark:text-white">
                                    ${product.price || "599"}
                                </span>
                                <a
                                    href="#"
                                    className="bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-5 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center text-sm text-white focus:outline-none"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}