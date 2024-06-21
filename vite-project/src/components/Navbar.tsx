import React from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import useCartStore from '../utils/store/cart.store';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Products',
    href: '/products',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cart = useCartStore((state) => state.cartItems);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  return (
    <>
      <div className="relative w-full mt-2 border-b-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 text-black">
          <div className="inline-flex items-center space-x-2">
            <span></span>
            <span className="font-bold text-green-500">SHIPPing</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`text-sm font-semibold hover:text-gray-900 ${location.pathname === item.href ? 'text-green-500' : 'text-black'
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Link to={'/cart'}>
              <button
                type="button"
                className="relative mt-4 flex items-center gap-5 justify-center w-full rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white"
              >
                <ShoppingBag size={30} />
                {cart.length > 0 && (
                  <p className='text-white py-1 px-2 rounded-full absolute -right-4 -top-3 font-bold bg-red-600'>
                    {cart.length}
                  </p>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

