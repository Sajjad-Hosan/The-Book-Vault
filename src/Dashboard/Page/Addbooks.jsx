import React from "react";

const Addbooks = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md my-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Book</h2>
      <form className="space-y-4">
        {/* Book Name */}
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Book Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the book name"
          />
        </div>

        {/* Writer Name */}
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Writer Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the writer's name"
          />
        </div>

        {/* Publisher */}
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Publisher
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the publisher's name"
          />
        </div>

        {/* Summary */}
        <div className="w-full md:w-full lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Summary
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter a brief summary of the book"
          ></textarea>
        </div>

        {/* Published Date */}
        <div className="w-full md:w-1/2 lg:w-1/2 mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Published Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="w-full md:w-1/2 lg:w-1/2 mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Price ($)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the price"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right w-full">
          <button
            type="button"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addbooks;
