import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { DollarSignIcon, Eye, ShoppingBag } from 'lucide-react';
import { changeOrderStatus, order, pendingOrder, totalSales } from '../Api/order.api';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState(0)
  const [sales, setTotalSales] = useState(0)

  useEffect(() => {
    fetchOrders();
    fetchPendingOrders();
    fetchTotalSales();
    
  }, []);

  const fetchOrders = async () => {
    const data = await order();
    setOrders(data.data);
  };

  const fetchPendingOrders = async () => {
    const data = await pendingOrder();
    setPendingOrders(data.data)
  }

  const fetchTotalSales = async () => {
    const data = await totalSales();
    setTotalSales(data.data)
  }
  const changeStatus = async (id:number,status:string) => {
    console.log("HELLO WORLD")
    console.log(id,status);
    await changeOrderStatus(id,status);
  }

  return (
    <div>
      <Sidebar Active={1}>
        <div className="flex-1 p-8">
          <div>
            <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Admin Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Sales Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                  <DollarSignIcon className="text-green-600 dark:text-green-400" size={32} />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    Total Sales
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">PKR {sales || 0}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total revenue generated from sales
                  </p>
                </div>
              </div>
              {/* Total Pending Orders Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                  <ShoppingBag className="text-yellow-600 dark:text-yellow-400" size={32} />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    Total Pending Orders
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{pendingOrders}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Orders that are yet to be fulfilled
                  </p>
                </div>
              </div>
              {/* View Orders Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Eye className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    View Orders
                  </h2>
                  <Link
                    to="/orders"
                    className="text-lg text-blue-500 dark:text-blue-300 hover:underline"
                  >
                    View All Orders
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Check and manage all customer orders
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Total Amount
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    items
                  </th>
                  <th scope="col" className="relative px-4 py-3.5">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {orders &&
                  orders.map((order:{
                    id:number,
                    name:string,
                    address:string,
                    phoneNo:string,
                    status:string,
                    total:number
                  }) => (
                    <tr key={order.id}>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.address}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.phoneNo}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.status}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.total}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900 underline cursor-pointer">items</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                      <select
                          onChange={(e) => changeStatus(order.id, e.target.value)}
                          defaultValue=""
                          className="text-blue-600 hover:underline"
                        >
                          <option value="">Status Change</option>
                          <option value="Pending">Pending</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
