import { IoStarHalfOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
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
            </div>
        </div>
  );
};

export default ProductCard;
