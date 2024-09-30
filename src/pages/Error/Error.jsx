
const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-2xl font-semibold mt-6">OOPS! THAT PAGE CAN'T BE FOUND.</p>
        <p className="text-gray-500 mt-4">
          It looks like nothing was found at this location. You can either go back to the last page or go to the homepage.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
        >
          Homepage
        </button>
      </div>
    </div>
  );
};

export default Error;
