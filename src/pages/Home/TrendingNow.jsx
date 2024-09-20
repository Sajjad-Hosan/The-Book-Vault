import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// BookCard component for the book details
const BookCard = ({ book }) => (
  <div className="flex flex-col items-center space-y-2 shadow-lg p-4">
    <img
      src={book.cover_pic}
      alt={book.title}
      className="w-32 h-48 object-cover"
    />
    <h3 className="text-sm font-semibold text-center">{book.title}</h3>
    <p className="text-xs text-gray-500">{book.author}</p>
    <div className="flex space-x-1">
      {Array.from({ length: Math.floor(book.rating) }).map((_, i) => (
        <AiFillStar key={i} className="text-yellow-500 w-4 h-4" />
      ))}
      {book.rating % 1 !== 0 && <AiOutlineStar className="text-yellow-500 w-4 h-4" />}
    </div>
    <p className="text-sm font-bold text-red-600">₹{book.price}</p>
  </div>
);

// PromoCard component for the right side promo box
const PromoCard = () => (
  <div className="flex flex-col justify-center items-center text-center bg-red-50 p-6 rounded-lg shadow-lg">
    <h2 className="text-lg font-bold text-red-600 mb-4">Buy One, Get One 30% off</h2>
    <p className="text-sm text-gray-500 mb-4">
      This offer is valid at Book Vault from October 1, 2024.
    </p>
    <div className="text-4xl font-bold text-red-500 mb-4">30% Off</div>
    <p className="text-sm text-gray-500">Got Questions?</p>
    <p className="text-lg font-bold text-red-600">+84-1800-4635</p>
    <img
      src="/src/assets/book2.jpg"
      alt="Promo Image"
      className="w-32 h-32 mt-4"
    />
  </div>
);

// Main Component for Trending Now
const TrendingNow = () => {
  const [books, setBooks] = useState([]);

  // Fetch the book data from the JSON file
  useEffect(() => {
    fetch('/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0, 4))) // Only show the first 4 books
      .catch((error) => console.error('Error fetching book data:', error));
  }, []);

  

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Heading and View All Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Trending Now</h2>
        <button className="px-6 py-2 bg-red-500 text-white rounded-full">
          View All
        </button>
      </div>

      {/* Books Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Book Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 lg:flex-nowrap lg:space-x-4">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>

        {/* Promo Card */}
        <div className="mt-8 lg:mt-0">
          <PromoCard />
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
