import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { IoGrid, IoList } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import FilterCompo from "../../components/FilterCompo/FilterCompo";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ProductsPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const booksData = async () => {
      const response = await fetch("/books.json");
      const data = await response.json();
      setBooks(data);
    };
    booksData();
  }, []);
  return (
    <div>
      <div className=" w-5/6 mx-auto ">
        <div className="flex justify-between items-center">
          <h1 className=" text-3xl font-semibold text-center my-10">
            Explore Our Collections
          </h1>
          <div className="flex items-center gap-3">
            <FilterCompo />
            <div className="join">
              <button className="btn btn-sm btn-ghost join-item text-xl">
                <IoGrid />
              </button>
              <button className="btn btn-sm btn-ghost join-item text-xl">
                <IoList />
              </button>
            </div>
          </div>
        </div>
        <h1 className=" text-xl">Total Books: {books.length}</h1>
        <div className="flex flex-col gap-3">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {books.map((book) => (
              <ProductCard key={book._id} book={book}></ProductCard>
            ))}
          </div>
          <div className="flex gap-1 items-center mb-10 mx-auto">
            <button className="btn btn-ghost join-item">
              <IoIosArrowRoundBack className="text-lg" />
              Prev
            </button>
            {[1, 2, 3, 4, 5, "..."].map((i) => (
              <button
                key={i}
                className={`btn btn-sm ${i === 1 ? "btn-neutral" : "btn-ghost"}`}
              >
                {i}
              </button>
            ))}
            <button className="btn btn-ghost">
              Next
              <IoIosArrowRoundForward className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
