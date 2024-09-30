import { IoStarHalfOutline } from "react-icons/io5";
<<<<<<< HEAD
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ book }) => {
  const { title, author, cover_pic, genre, price, rating } = book;
  return (
    <Link>
      <div className="bg-slate-100 card p-8 w-full  transition-all duration-150 hover:scale-95 cursor-pointer">
        <div className="flex lex-col lg:flex-row justify-between items-center">
          <img
            src={cover_pic}
            className=" w-[200px] rounded-lg shadow-2xl object-fill"
          />
          <div className="w-full pl-6 relative flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <small className="text-xl font-semibold">{genre}</small>
              <p>
                <span className="text-3xl font-semibold">{price}</span> BDT
              </p>
=======
import { Link } from "react-router-dom";

const ProductCard = ({ book }) => {
    const { _id, title, author, cover_pic, genre, price, rating } = book;

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="hero bg-slate-100 rounded-lg">
            <div className="hero-content flex-col lg:flex-row gap-5 py-7">
                <img
                    src={cover_pic}
                    className=" w-[200px] h-[300px] rounded-lg shadow-2xl" />
                <div className=" space-y-2 w-[200px]">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className=" text-lg"><span className=" font-semibold">By:</span> {author}</p>
                    <small className=" font-semibold">{genre}</small>
                    <p>{rating}<IoStarHalfOutline className=" inline pb-1"/></p>
                    <p className="py-2 font-bold text-xl">
                        {price} BDT
                    </p>
                    <Link to={`/details/${_id}`} onClick={scrollUp} className="btn bg-[#ef4444] text-white">View Details</Link>
                </div>
>>>>>>> b47cc53ab041655c2118425fd7fda8574c0eb819
            </div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-sm font-semibold">{author}</p>
            <div className="flex items-center justify-between mt-14 w-full">
              <p className="text-2xl">
                {rating}
                <IoStarHalfOutline className=" inline pb-1" />
              </p>
              <button className="btn btn-neutral">
                <FaShoppingCart className="text-lg" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
