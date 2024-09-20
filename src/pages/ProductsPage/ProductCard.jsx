import { IoStarHalfOutline } from "react-icons/io5";

const ProductCard = ({ book }) => {
    const { title, author, cover_pic, genre, price, rating } = book;
    return (
        <div className="hero bg-slate-100 ">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={cover_pic}
                    className=" w-[200px] h-[300px] rounded-lg shadow-2xl" />
                <div className=" space-y-2">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p><span className=" font-semibold">By:</span> {author}</p>
                    <small className=" font-semibold">{genre}</small>
                    <p>{rating}<IoStarHalfOutline className=" inline pb-1"/></p>
                    <p className="py-2 font-bold">
                    {price} BDT
                    </p>
                    <button className="px-6 py-2 bg-red-500 text-white rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;