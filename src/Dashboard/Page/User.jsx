import React from "react";
const User = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>

      {/* Table for larger screens */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="min-w-full text-left table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-b">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">john@example.com</td>
              <td className="px-4 py-2">Seller</td>
              <td className="px-4 py-2">
                <span className="text-green-600 font-semibold">Active</span>
              </td>
              <td className="px-4 py-2 flex gap-5">
                <button className="text-blue-600 btn">Seller</button>
                <button className="text-blue-600 btn">Admin</button>
                <button className="text-red-600 btn">Delete</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">jane@example.com</td>
              <td className="px-4 py-2">User</td>
              <td className="px-4 py-2">
                <span className="text-red-600 font-semibold">Inactive</span>
              </td>
              <td className="px-4 py-2 flex gap-5">
                <button className="text-blue-600 btn">Seller</button>
                <button className="text-blue-600 btn">Admin</button>
                <button className="text-red-600 btn">Delete</button>
              </td>
            </tr>
            {/* Additional rows can be added here */}
          </tbody>
        </table>
      </div>

      {/* Grid for smaller screens */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
        {/* User 1 */}
        <div className="border p-4 rounded-lg shadow-md">
          <div className="mb-2">
            <span className="font-bold">User Name:</span> John Doe
          </div>
          <div className="mb-2">
            <span className="font-bold">Email:</span> john@example.com
          </div>
          <div className="mb-2">
            <span className="font-bold">Role:</span> Seller
          </div>
          <div className="mb-2">
            <span className="text-green-600 font-semibold">Active</span>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 btn">Seller</button>
            <button className="text-blue-600 btn">Admin</button>
            <button className="text-red-600 btn">Delete</button>
          </div>
        </div>

        {/* User 2 */}
        <div className="border p-4 rounded-lg shadow-md">
          <div className="mb-2">
            <span className="font-bold">User Name:</span> Jane Smith
          </div>
          <div className="mb-2">
            <span className="font-bold">Email:</span> jane@example.com
          </div>
          <div className="mb-2">
            <span className="font-bold">Role:</span> User
          </div>
          <div className="mb-2">
            <span className="text-red-600 font-semibold">Inactive</span>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 btn">Seller</button>
            <button className="text-blue-600 btn">Admin</button>
            <button className="text-red-600 btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
