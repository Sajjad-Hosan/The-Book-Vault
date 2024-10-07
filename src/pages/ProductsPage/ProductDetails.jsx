import { Link, useLoaderData } from "react-router-dom";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaShareNodes } from "react-icons/fa6";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const details = useLoaderData();
    const { _id, title, author, cover_pic, genre, short_description, publisher, publishing_year, price, rating } = details;

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=" w-3/4 mx-auto min-h-screen">

            <div className=" flex justify-center">
                {
                    spinner && <span className="loading loading-infinity w-36 text-red-500"></span>
                }
            </div>

            <div className="card flex-col md:flex-row bg-slate-100 shadow-xl my-20 p-5 gap-10">
                <figure>
                    <img
                        src={cover_pic}
                        alt="cover_pic"
                        className=" max-h-[600px]" />
                </figure>
                <div className="card-body p-0 md:p-5 space-y-3">
                    <h2 className="card-title text-4xl lg:text-5xl">{title}</h2>
                    <p className=" text-xl lg:text-2xl"><span className=" font-semibold">By:</span> {author}</p>
                    <p className=" font-semibold text-lg lg:text-xl">{genre}</p>
                    <p className=" text-lg lg:text-2xl"><span className=" font-semibold">Summary: </span>{short_description}</p>
                    <p className=" text-xl lg:text-xl font-semibold"> <span>Rating: </span> {rating}<IoStarHalfOutline className=" inline pb-1" /></p>
                    <div className=" flex flex-col md:flex-row justify-between gap-3 lg:text-lg">
                        <p><span className=" font-semibold">Publisher: </span>{publisher}</p>
                        <p><span className=" font-semibold">Published on: </span>{publishing_year}</p>
                    </div>
                    <p className="py-2 font-bold text-2xl lg:text-3xl">
                        {price} BDT
                    </p>
                    <div className="card-actions justify-end">
                        <div className=" flex flex-col md:flex-row gap-6">
                            <Link className="btn bg-[#ef4444] text-white text-xl h-14 ">Add To Cart</Link>
                            <Link className="btn bg-[#ef4444] text-white text-xl h-14 ">Buy Now</Link>
                            <Link className="btn bg-[#ef4444] text-white text-xl h-14 "><FaShareNodes /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;