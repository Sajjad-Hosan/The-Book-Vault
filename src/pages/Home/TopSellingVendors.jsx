import { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const TopSellingVendors = () => {
  const [books, setBooks] = useState([]);

  // Fetch the book data from the JSON file
  useEffect(() => {
    fetch('/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0, 4))) // Only show the first 4 books
      .catch((error) => console.error('Error fetching book data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-8">
        <div className="my-8 flex items-center justify-between">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Top Selling Books</h1>
        <button className="px-6 py-2 bg-red-500 text-white rounded-full">View All</button>
      </div>
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Book Cover Image */}
            <img
              src={book.cover_pic}
              alt={`Cover of ${book.title}`}
              className="w-24 sm:w-32 h-36 sm:h-48 object-cover rounded-lg shadow-md"
            />

            {/* Book Details */}
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-center">{book.title}</h2>
              <p className="text-gray-500">{book.author}</p>
              <p className="text-sm text-gray-400">{book.publisher}</p>

              {/* Star Rating */}
              <div className="flex items-center">
                {[...Array(Math.floor(book.rating))].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                {book.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-500" />}
              </div>

              <p className="text-gray-500">Price: ৳{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingVendors;
