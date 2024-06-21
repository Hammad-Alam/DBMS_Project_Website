import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import { popularProducts } from '../Api/product.api';
  
  export default function Products() {

    const [products, setProducts] = useState([]);
    useEffect(() =>  {
      fetchProducts()
    }, [])

    const fetchProducts = async () => {
      // Fetch products from the backend
      const {success,data} = await popularProducts();
      setProducts(data.data);

    }

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products && products.map((product:{
              id: number,
              name: string,
              price: number,
              picture: string,
              category: string,
              stock: number,
              isFeature: boolean,
              description: string,
            
            }) => (
              Card({
                id: product.id,
                name: product.name,
                price: product.price,
                picture: product.picture,
                category: product.category,
                stock: product.stock,
                isFeature: product.isFeature,
                description: product.description,
              })
            ))}
          </div>
        </div>
      </div>
    )
  }
  