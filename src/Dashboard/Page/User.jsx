

const User = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
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
          <tr className="border-b">
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">john@example.com</td>
            <td className="px-4 py-2">seller</td>
            <td className="px-4 py-2">
              <span className="text-green-600 font-semibold">Active</span>
            </td>
            <td className="px-4 py-2 flex gap-5">
              <button className="text-blue-600 btn">Seller</button>
              <button className="text-blue-600 btn">Admin</button>
              <button className="text-red-600 btn">Delete</button>
            </td>
          </tr>
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
          {/* More rows can be added dynamically */}
        </tbody>
      </table>
    </div>
    );
};

export default User;