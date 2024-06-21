import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { register } from '../Api/auth.api';
import { toast } from 'sonner';

export default function AddSubAdmin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Sub-Admin');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const newSubAdmin = {
      name,
      password,
      email,
      role,
    };
    console.log('New Sub-Admin:', newSubAdmin);
    const { success } = await register(newSubAdmin);
    if(!success) return toast.error('Failed to add Sub-Admin');
    toast.success('Sub-Admin added successfully');
    setName('');
    setEmail('');
  };

  return (
    <>
      <Sidebar Active={3} />
      <div className="ml-64 p-8">
        <h2 className="text-2xl font-semibold mb-6">Add New Sub-Admin</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <input
              type="text"
              id="role"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
              Password
            </label>
            <input
              type="text"
              id="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Sub-Admin
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
