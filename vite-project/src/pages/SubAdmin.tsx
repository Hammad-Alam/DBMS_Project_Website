import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSubAdmins,deleteAdmin } from '../Api/auth.api';
import { toast } from 'sonner';


export default function SubAdmin() {

  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetchAdmins();
  }, [])
  
  const fetchAdmins = async () => {
    const { success, data } = await getSubAdmins();
    if (!success) return toast.error(data.message);
    setAdmins(data);
  }
  return (
    <>
      <SideBar Active={3}>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">Sub-Admins</h2>
           
            </div>
            <div>
                <Link to={`/add-SubAdmin`}>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add Sub-Admin
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
                      <tr>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                          Full Name
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                          Email
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                          Role
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {admins &&  admins.map((subAdmin:{
                        id:number
                        name:string,
                        email:string
                      }) => (
                        <tr key={subAdmin.email}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="text-sm font-medium text-gray-900">{subAdmin.name}</div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="text-sm text-gray-700">{subAdmin.email}</div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            Sub Admin
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            <div className="text-red-600 hover:text-red-800 cursor-pointer">
                              <Trash className="inline-block" size={20} onClick={()=>deleteAdmin(subAdmin.id)}/>
                            </div>
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
      </SideBar>
    </>
  );
}
