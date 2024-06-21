import React, { useState } from 'react';
import { Trash, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import useCartStore from '../utils/store/cart.store';
import { createOrder } from '../Api/order.api';
import { toast } from 'sonner';

export default function Cart() {
  const products = useCartStore((state) => state.cartItems);
  const removeProduct = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cartItems);
  const totalAmount = useCartStore((state) => state.totalAmount);

  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [address, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async () => {
    if(!fullName || !city || !address || !phoneNumber) {
    return toast.error('Please fill all the fields');
    }
    await createOrder({
      cart,
      totalAmount,
      fullName,
      city,
      address,
      phoneNumber,
    });
    toast.success('Order placed successfully');
  };


  return (
    <>
      <Navbar />
      {products.length > 0 ? (
        <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
          <h2 className="text-3xl font-bold">Your cart</h2>
          <ul className="flex flex-col divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                    src={product.picture}
                    alt={product.name}
                  />
                  <div className="flex w-full flex-col justify-between pb-4">
                    <div className="flex w-full justify-between space-x-2 pb-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                        <h3 className="text-sm sm:pr-8">Quantity {product.count}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">PKR {product.price}</p>
                      </div>
                    </div>
                    <div className="flex divide-x text-sm">
                      <button
                        type="button"
                        className="flex items-center space-x-2 px-2 py-1 pl-0"
                        onClick={() => removeProduct(product.id)}
                      >
                        <Trash size={16} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Location</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setLocation(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold"> PKR {totalAmount}</span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Back to shop
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleSubmit}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="justify-center items-center w-full flex flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <img
            src="https://www.devui.io/shopping-girl.svg"
            alt="Empty Cart"
            className="mx-auto"
            width={600}
            height={600}
          />
        </div>
      )}
    </>
  );
}
