import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { addProducts} from '../Api/product.api';
import { toast } from 'sonner';
export default function AddProduct() {

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Men');
  const [isFeature, setIsFeatured] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: parseInt(price),
      stock:parseInt(stock),
      description,
      category,
      type,
      isFeature,
      picture: imageUrl,
    };



    const {success}  = await addProducts(newProduct);

    if(!success) return toast.error('Failed to add product');
    toast.success('Product added successfully');
    // Reset the form fields
    setProductName('');
    setPrice('');
    setStock('');
    setCategory('');
    setIsFeatured(false);
    setImageUrl('');
  };

return (
    <>
        <Sidebar Active={2} />
        <div className="ml-64 p-8">
            <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="productName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                        Stock
                    </label>
                    <input
                        type="number"
                        id="stock"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Descripition">
                        Descripition
                    </label>
                    <input
                        type="text"
                        id="Descripition"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Type">
                        Type
                    </label>
                    <select
                        id="Type"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Shirts">Shirts</option>
                        <option value="T-shirts">T-shirts</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={'Men'}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isFeatured">
                        Featured
                    </label>
                    <input
                        type="checkbox"
                        id="isFeatured"
                        className="mr-2 leading-tight"
                        checked={isFeature}
                        onChange={(e) => setIsFeatured(e.target.checked)}
                    />
                    <span className="text-gray-700 text-sm">Is this product featured?</span>
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    </>
);
}
