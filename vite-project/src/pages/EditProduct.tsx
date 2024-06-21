import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { getProductById, updateProduct } from '../Api/product.api';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  isFeatured: boolean;
  image: string;
  description: string;
  type: string;
}

export default function EditProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Men');
  const [isFeatured, setIsFeatured] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    const fetchProductDetail = async () => {
      const { success, data } = await getProductById(Number(id));
      if (success && data && data.length > 0) {
        const productData = data[0];
        setProduct(productData);
        setProductName(productData.name);
        setPrice(productData.price.toString());
        setStock(productData.stock.toString());
        setCategory(productData.category);
        setIsFeatured(productData.isFeature);
        setImageUrl(productData.picture);
        setDescription(productData.description);
        setType(productData.type);
      }
    };
    fetchProductDetail();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {

    if(!productName || !price || !stock || !category || !imageUrl || !description || !type)
    {
      return toast.error('All fields are required');
    }

    e.preventDefault();
    // Handle the form submission logic, e.g., send the product data to the backend
    const updatedProduct = {
      name: productName,
      price,
      stock,
      category,
      isFeature:isFeatured,
      picture: imageUrl,
      description,
      type,
    };
    console.log('Updated Product:', updatedProduct);
    // Reset the form fields
    const {success} = await updateProduct(Number(id), updatedProduct);
    if (!success) return toast.error('Failed to update product');
    toast.success('Product updated successfully');
    setProductName('');
    setPrice('');
    setStock('');
    setCategory('Men');
    setIsFeatured(false);
    setImageUrl('');
    setDescription('');
    setType('');
  };

  return (
    <>
      <Sidebar Active={2} />
      <div className="ml-64 p-8">
        <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Type
            </label>
            <select
              id="type"
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
              onChange={(e) => setCategory(e.target.value)}
              required
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
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
            <span className="text-gray-700 text-sm">Is this product featured?</span>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
