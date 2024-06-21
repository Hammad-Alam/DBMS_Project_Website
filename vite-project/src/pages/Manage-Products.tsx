import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Edit, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { deleteProduct, getProducts } from '../Api/product.api';


export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { success, data } = await getProducts();
    if (!success) return toast.error(data.message);
    setProducts(data);
  }

  const HandleDelete = async (id: number) => {
    
    const { success, data } = await deleteProduct(id);
    if (!success) return toast.error(data.message);
    toast.success('Product Deleted Successfully');
    fetchProducts();
  }

  return (
    <>
      <Sidebar Active={2}>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">Products</h2>
            </div>
            <div>
              <Link
                to={'/add-products'}
              >
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add new Products
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          <span>Picture</span>
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-500">
                          Name
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-500">
                          Price
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-500">
                          Stock
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          Featured
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          Status
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          Edit
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          Delete
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {products && products.map((product: {
                        id: number
                        name: string,
                        price: string,
                        stock: number,
                        isFeature: boolean,
                        category: string,
                        picture: string
                      }) => (
                        <tr key={product.id} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={product.picture}
                                  alt={product.name}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">{product.name}</div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">{product.price}</div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">{product.stock}</div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {product.isFeature ? 'Yes' : 'No'}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {product.category}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            <Link to={`/edit-products/${product.id}`} className="text-gray-500 hover:text-indigo-600">
                              <Edit size={20} />
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium cursor-pointer text-red-600" onClick={()=>HandleDelete(product.id)}>
                              <Trash size={20} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Sidebar>
    </>
  );
}
