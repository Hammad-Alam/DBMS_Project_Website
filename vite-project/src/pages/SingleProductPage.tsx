import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import useCartStore from '../utils/store/cart.store';
import { getProductById } from '../Api/product.api';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

export default function SingleProductPage() {

  const [count, setCount] = React.useState(1);
  const [product, setProduct] = React.useState({} as any);
  const { id } = useParams();

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchProduct();
  }, [])

  const fetchProduct = async () => {
    const { data } = await getProductById(Number(id));
    setProduct(data[0]);
  }
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">

        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
          <div className="col-span-5 grid grid-cols-2 gap-2.5">
            <div className="col-span-2 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.picture}
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                {product.name}
              </h2>
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {product.description}
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  PKR{product.price}
                </div>
              </div>
            </div>

            <div className="mb-4 ">


            </div>
            <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
              <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                <button
                  className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                  {count}
                </span>
                <button
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                  className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                  -
                </button>
              </div>
              <button
                type="button"
                className="h-11 w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => {
                  product.count = count;
                  addToCart(product)
                }}
              >
                Add to cart
              </button>
            </div>
            <div className="py-6 ">
              <ul className="space-y-5 pb-1 text-sm">
                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
                  {product.type}
                </li>
                <li className="productTags">
                  <span className="text-heading inline-block pr-2 font-semibold">Tags:</span>
                  {product.type}
                </li>
              </ul>
            </div>
            <div className="shadow-sm ">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Product Details
                </h2>
                <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                  <div className="bg-heading h-0.5 w-full rounded-sm" />
                  <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                </div>
              </header>
              <div>
                <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}


