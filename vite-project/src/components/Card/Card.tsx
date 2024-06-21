import React from "react";
import { Link } from "react-router-dom";

export default function Card(product: {
    id: number; name: string; picture: string; price: number; category: string,
    stock: number,
    isFeature: boolean,
    description: string,
}): React.JSX.Element {
    return (
        <Link to={`/products/${product.id}`}>
            <div key={product.id} className="group relative">
                <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src={product.picture}
                        alt={product.picture}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </div>
        </Link>
    )
}