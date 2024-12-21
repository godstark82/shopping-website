import { ProductModel } from "@/lib/models/product-model"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
    product: ProductModel
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg rounded-lg transition-shadow duration-300 overflow-hidden">
            <Link href={`/product?id=${product.id}`}>
                <div className="relative aspect-square">
                    <Image 
                        src={product.image || ''} 
                        alt={product.title || 'NA'} 
                        fill
                        className="transition-transform duration-300 hover:scale-105 object-cover" 
                    />
                </div>
                <div className="p-4">
                    <h3 className="mb-2 line-clamp-2 font-medium text-gray-900 text-lg dark:text-white">
                        {product.title}
                    </h3>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900 text-xl dark:text-white">
                            ${product.price}
                        </span>
                        {product.discount && (
                            <span className="bg-red-100 dark:bg-red-900 px-2.5 py-0.5 rounded font-medium text-red-800 text-sm dark:text-red-300">
                                {product.discount}% OFF
                            </span>
                        )}
                    </div>
                    {product.rating && (
                        <div className="flex items-center mt-2.5 mb-1">
                            <span className="text-yellow-300">★</span>
                            <span className="ml-1 text-gray-600 text-sm dark:text-gray-400">
                                {product.rating}
                            </span>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    )
}
