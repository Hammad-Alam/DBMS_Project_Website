import React from 'react'

export default function NewsLetter() {
  return (
    <div className="flex w-full  justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 rounded-lg  space-y-6 lg:space-y-0 lg:space-x-96">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Subscribe To The <span className="text-blue-500">Newsletter</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Be the first to know when our <span className="font-medium text-blue-500">Coupon</span> are live to 5% discount on all products.
          </p>
          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Email Address"
            />
            <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full max-w-md"
            src="https://merakiui.com/images/components/Email-campaign-bro.svg"
            alt="email illustration vector art"
          />
        </div>
      </div>
    </div>
  )
}
