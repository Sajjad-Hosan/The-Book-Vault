import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link to='/products' className="px-7 py-3 border-2 rounded-2xl border-orange-500 font-semibold text-lg mb-5 transition duration-100 hover:scale-95 cursor-pointer">
        Products Page
      </Link>
      <h1 className="text-5xl font-semibold font-mono">This is App Page</h1>
      <p className="font-semibold text-red-500">
        Jubayer Khan vai you can work
      </p>
    </div>
  );
};

export default Home;
