import React from "react";

const Booklist = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Book List</h2>
      <table className="min-w-full text-left table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2">Book Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">The Great Gatsby</td>
            <td className="px-4 py-2">F. Scott Fitzgerald</td>
            <td className="px-4 py-2">Classic</td>
            <td className="px-4 py-2">$10.99</td>
            <td className="px-4 py-2">
              <span className="text-green-600 font-semibold btn">In Stock</span>
            </td>
            <td className="px-4 py-2 flex gap-5">
            <button className="text-blue-600 hover:underline btn ">Edit</button>
            <button className="text-red-600 hover:underline btn">Delete</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">1984</td>
            <td className="px-4 py-2">George Orwell</td>
            <td className="px-4 py-2">Dystopian</td>
            <td className="px-4 py-2">$8.99</td>
            <td className="px-4 py-2">
              <span className="text-red-600 font-semibold btn">Out of Stock</span>
            </td>
            <td className="px-4 py-2 flex gap-5">
            <button className="text-blue-600 hover:underline btn ">Edit</button>
            <button className="text-red-600 hover:underline btn">Delete</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">To Kill a Mockingbird</td>
            <td className="px-4 py-2">Harper Lee</td>
            <td className="px-4 py-2">Fiction</td>
            <td className="px-4 py-2">$12.50</td>
            <td className="px-4 py-2">
              <span className="text-green-600 font-semibold btn">In Stock</span>
            </td>
            <td className="px-4 py-2 flex gap-5">
              <button className="text-blue-600 hover:underline btn ">Edit</button>
              <button className="text-red-600 hover:underline btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Booklist;
