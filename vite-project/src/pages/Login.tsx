import React, { useState } from 'react';
import { login } from '../Api/auth.api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const naviagete = useNavigate();
  const handleLogin = async  () => {
    console.log('Email:', email);
    console.log('Password:', password);

    const {success} = await login({ email, password });
    if(!success) return toast.error('Failed to login');
    toast.success('Logged in successfully');
    naviagete('/admin-dashboard')
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Admin Login
          </h2>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex justify-center w-full'>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="rounded-md bg-green-600 px-3.5 py-2.5 font-semibold w-full leading-7 text-white hover:bg-black/80"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
