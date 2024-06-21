import React, { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar';
import { getSupport } from '../Api/support.api';


export default function Support() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchSupports();
  }, []);

  const fetchSupports = async () =>{

    const data = await getSupport();
      setRequests(data?.data);
  }
  return (
    <>
      <SideBar Active={4}>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Support Requests</h2>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-normal text-gray-700">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-normal text-gray-700">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-normal text-gray-700">
                      Message
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-normal text-gray-700">
                      Received At
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {requests && requests.map((request:{
                    id: number,
                    firstName: string,
                    lastName: string,
                    email: string,
                    message: string,
                    createdAt: string,
                  }) => (
                    <tr key={request.id}>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">{request.firstName + " " + request.lastName}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm text-gray-700">{request.email}</div>
                      </td>
                      <td className="whitespace-wrap break-words px-4 py-4">
                        <div className="text-sm text-gray-700">{request.message}</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm text-gray-700">{new Date(request.createdAt).toLocaleString()}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SideBar>
    </>
  );
}
