import React from 'react';

const Totalorders = () => {
    return (
        <div>
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="border-b">
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
                      Delivery Now
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
                  <td>
                    <button className="btn bg-red-600 ml-3 px-10 text-white font-bold">
                      Cancel
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
                      Delivery Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
};

export default Totalorders;