import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { sendSupport } from '../Api/support.api';
import { toast } from 'sonner';
import Footer from '../components/Footer';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if(!firstName || !lastName || !email || !message) return toast.error('Please fill all fields');
    if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error('Invalid email address');
    
    const {success} = await sendSupport({ firstName, lastName, email, message });
    
    if(!success) return toast.error('Failed to send message');
    toast.success('Message sent successfully');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="container px-6 py-12 mx-auto flex justify-center items-center">
          <div className="w-full max-w-lg p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>

    </>
  );
}
