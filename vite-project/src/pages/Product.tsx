import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card/Card';
import { fetchProductsByCategory } from '../Api/product.api';
import Footer from '../components/Footer';

export default function Product() {
  const [activeTab, setActiveTab] = useState('Shirts');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts()
   
  }, [activeTab])
  const fetchProducts = async () => {
    const {success,data} = await fetchProductsByCategory(activeTab);
    console.log(data);
    setProducts(data.data);
  }
  return (
    <div>
      <Navbar />
      <div className='flex justify-center gap-10 items-center mt-10'>
        <button
          className={`px-8 py-3 ${activeTab === 'Shirts' ? 'bg-green-400 text-white' : 'bg-white text-black shadow-xl'} rounded-xl`}
          onClick={() => setActiveTab('Shirts')}
        >
          Shirts
        </button>
        <button
          className={`px-8 py-3 ${activeTab === 'T-Shirts' ? 'bg-green-400 text-white' : 'bg-white text-black shadow-xl'} rounded-xl`}
          onClick={() => setActiveTab('T-Shirts')}
        >
          T-Shirts
        </button>
      </div>
      <div className='mt-10'>
        {activeTab === 'Shirts' && (
          <div className='flex justify-center'>
            <h2 className='text-2xl'>Shirts </h2>
          </div>
        )}
        {activeTab === 'T-Shirts' && (
          <div className='flex justify-center'>
            <h2 className='text-2xl'>T-Shirts </h2>
          </div>
        )}
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              Card(product)
            ))}
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}
