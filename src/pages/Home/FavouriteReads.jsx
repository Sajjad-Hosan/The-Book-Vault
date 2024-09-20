import { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// BookCard component for left and right sections
const BookCard = ({ book, isSmall }) => (
  <div className={`flex items-center justify-between ${isSmall ? 'py-2' : 'py-4'} border-b border-gray-200`}>
    <div className="flex items-center space-x-4">
      <img
        src={book.cover_pic}
        alt={book.title}
        className={`${isSmall ? 'w-12 h-18' : 'w-16 h-24'} object-cover`}
      />
      <div>
        <h3 className={`${isSmall ? 'text-sm' : 'text-base'} font-semibold`}>{book.title}</h3>
        <p className="text-xs text-gray-500">{book.author}</p>
        <div className="flex items-center">
          {Array.from({ length: Math.floor(book.rating) }).map((_, i) => (
            <AiFillStar key={i} className="text-yellow-500 w-4 h-4" />
          ))}
          {book.rating % 1 !== 0 && <AiOutlineStar className="text-yellow-500 w-4 h-4" />}
        </div>
      </div>
    </div>
    <div className="text-right">
      <p className={`${isSmall ? 'text-sm' : 'text-lg'} font-bold text-red-600`}>
        ₹{book.price}
      </p>
      {book.originalPrice && (
        <p className="text-xs line-through text-gray-400">₹{book.originalPrice}</p>
      )}
    </div>
  </div>
);

// FeaturedBook component for center section
const FeaturedBook = ({ book }) => (
  <div className="text-center space-y-4 shadow-lg p-4">
    <img
      src={book.cover_pic}
      alt={book.title}
      className="w-48 h-72 object-cover mx-auto"
    />
    <h3 className="text-lg font-semibold">{book.title}</h3>
    <p className="text-sm text-gray-500">{book.author}</p>
    <div className="flex justify-center space-x-1">
      {Array.from({ length: Math.floor(book.rating) }).map((_, i) => (
        <AiFillStar key={i} className="text-yellow-500 w-4 h-4" />
      ))}
      {book.rating % 1 !== 0 && <AiOutlineStar className="text-yellow-500 w-4 h-4" />}
    </div>
    <p className="text-lg font-bold text-red-600">₹{book.price}</p>
  </div>
);

// Main Component
const FavouriteReads = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the data from the local JSON file or API endpoint
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Split books data into left, center, and right sections
  const leftBooks = books.slice(0, 4); // First 4 books for the left column
  const featuredBooks = books.slice(4, 6); // 2 Featured books for the center
  const rightBooks = books.slice(6, 10); // 4 books for the right column

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Our Favourite Reads</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
          View All
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          {leftBooks.map((book, index) => (
            <BookCard key={index} book={book} isSmall={true} />
          ))}
        </div>

        {/* Center Section with Featured Books */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          {featuredBooks.map((book, index) => (
            <FeaturedBook key={index} book={book} />
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-4">
          {rightBooks.map((book, index) => (
            <BookCard key={index} book={book} isSmall={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteReads;
