import React from "react";

const Delevary = () => {
  return (
    <div>
      <table className="min-w-full text-left table-auto hidden lg:block">
        <thead>
          <tr className="border-b bg-gray-200">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Books</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">ORD12345</td>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">10/01/2024</td>
            <td className="px-4 py-2">
              <div>The Great Gatsby (x2)</div>
              <div>1984 (x1)</div>
            </td>
            <td className="px-4 py-2">$50</td>
            <td className="px-4 py-2">
              <button className="btn bg-red-600 text-white font-bold">
                Delivered
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">ORD67890</td>
            <td className="px-4 py-2">Jane Smith</td>
            <td className="px-4 py-2">10/02/2024</td>
            <td className="px-4 py-2">
              <div>Moby Dick (x3)</div>
            </td>
            <td className="px-4 py-2">$75</td>
            <td className="px-4 py-2">
              <button className="btn bg-red-600 text-white font-bold">
                Delivered
              </button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">ORD11223</td>
            <td className="px-4 py-2">Alice Brown</td>
            <td className="px-4 py-2">10/03/2024</td>
            <td className="px-4 py-2">
              <div>To Kill a Mockingbird (x1)</div>
            </td>
            <td className="px-4 py-2">$25</td>
            <td className="px-4 py-2">
              <button className="btn bg-red-600 text-white font-bold">
                Delivered
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:hidden lg:grid">
        {/* Order 1 */}
        <div className="border p-4 rounded-lg shadow-sm">
          <div className="mb-2">
            <span className="font-bold">Order ID:</span> ORD12345
          </div>
          <div className="mb-2">
            <span className="font-bold">Customer Name:</span> John Doe
          </div>
          <div className="mb-2">
            <span className="font-bold">Order Date:</span> 10/01/2024
          </div>
          <div className="mb-2">
            <span className="font-bold">Books:</span>
            <div>The Great Gatsby (x2)</div>
          </div>
          <div className="mb-2">
            <span className="font-bold">Total Price:</span> $50
          </div>
          <div className="mb-4">
            <button className="btn bg-blue-400 text-white font-bold w-full">
              Deliverd
            </button>
          </div>
        </div>

        {/* Order 2 */}
        <div className="border p-4 rounded-lg shadow-sm">
          <div className="mb-2">
            <span className="font-bold">Order ID:</span> ORD67890
          </div>
          <div className="mb-2">
            <span className="font-bold">Customer Name:</span> Jane Smith
          </div>
          <div className="mb-2">
            <span className="font-bold">Order Date:</span> 10/02/2024
          </div>
          <div className="mb-2">
            <span className="font-bold">Books:</span>
            <div>Moby Dick (x3)</div>
          </div>
          <div className="mb-2">
            <span className="font-bold">Total Price:</span> $75
          </div>
          <div className="mb-4">
            <button className="btn bg-blue-400 text-white font-bold w-full">
              Delivered
            </button>
          </div>
        </div>

        {/* Order 3 */}
        <div className="border p-4 rounded-lg shadow-sm">
          <div className="mb-2">
            <span className="font-bold">Order ID:</span> ORD11223
          </div>
          <div className="mb-2">
            <span className="font-bold">Customer Name:</span> Alice Brown
          </div>
          <div className="mb-2">
            <span className="font-bold">Order Date:</span> 10/03/2024
          </div>
          <div className="mb-2">
            <span className="font-bold">Books:</span>
            <div>To Kill a Mockingbird (x1)</div>
          </div>
          <div className="mb-2">
            <span className="font-bold">Total Price:</span> $25
          </div>
          <div className="mb-4">
            <button className="btn bg-blue-400 text-white font-bold w-full">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delevary;
