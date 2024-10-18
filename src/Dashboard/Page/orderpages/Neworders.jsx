import React from "react";

const Neworders = () => {
  return (
    <>
      {/* Table for small screens (sm and up) */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="min-w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Customer Name</th>
              <th className="border px-4 py-2">Order Date</th>
              <th className="border px-4 py-2">Books</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Order 1 */}
            <tr>
              <td className="border px-4 py-2">ORD12345</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">10/01/2024</td>
              <td className="border px-4 py-2">The Great Gatsby (x2)</td>
              <td className="border px-4 py-2">$50</td>
              <td className="border px-4 py-2">
                <button className="btn bg-blue-400 text-white font-bold px-4 py-2 mr-2">
                  Delivery Now
                </button>
                <button className="btn bg-red-600 text-white font-bold px-4 py-2">
                  Cancel Now
                </button>
              </td>
            </tr>

            {/* Order 2 */}
            <tr>
              <td className="border px-4 py-2">ORD67890</td>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">10/02/2024</td>
              <td className="border px-4 py-2">Moby Dick (x3)</td>
              <td className="border px-4 py-2">$75</td>
              <td className="border px-4 py-2">
                <button className="btn bg-blue-400 text-white font-bold px-4 py-2 mr-2">
                  Delivery Now
                </button>
                <button className="btn bg-red-600 text-white font-bold px-4 py-2">
                  Cancel Now
                </button>
              </td>
            </tr>

            {/* Order 3 */}
            <tr>
              <td className="border px-4 py-2">ORD11223</td>
              <td className="border px-4 py-2">Alice Brown</td>
              <td className="border px-4 py-2">10/03/2024</td>
              <td className="border px-4 py-2">To Kill a Mockingbird (x1)</td>
              <td className="border px-4 py-2">$25</td>
              <td className="border px-4 py-2">
                <button className="btn bg-blue-400 text-white font-bold px-4 py-2 mr-2">
                  Delivery Now
                </button>
                <button className="btn bg-red-600 text-white font-bold px-4 py-2">
                  Cancel Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Grid view for larger screens (lg and up) */}
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
              Delivery Now
            </button>
          </div>
          <div>
            <button className="btn bg-red-600 text-white font-bold w-full">
              Cancel Now
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
              Delivery Now
            </button>
          </div>
          <div>
            <button className="btn bg-red-600 text-white font-bold w-full">
              Cancel Now
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
              Delivery Now
            </button>
          </div>
          <div>
            <button className="btn bg-red-600 text-white font-bold w-full">
              Cancel Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Neworders;
