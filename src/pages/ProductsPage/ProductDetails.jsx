import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaShareNodes } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxios from "../../Hooks/useAxios";
import useUserCart from "../../Hooks/useUserCart";
import { BsWhatsapp } from "react-icons/bs";
import fb from "../../assets/fb-icon.png"
import x from "../../assets/x-icon.png"

const ProductDetails = () => {
    const details = useLoaderData();
    const { _id, title, author, cover_pic, genre, short_description, publisher, publishing_year, price, rating } = details;
    const [spinner, setSpinner] = useState(true);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxios();
    const [userCart, refetch] = useUserCart();

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const addToWishlist = (id) => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops !",
                text: "Please log in first to continue.",
            });
            navigate('/login');
        }

        else {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to add this book on you cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, add to cart!"
            }).then((result) => {
                if (result.isConfirmed) {

                    const alreadyAdded = userCart.find(book => book.bookId == id);

                    if (userCart && alreadyAdded) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops !",
                            text: "Can't add. This book is already on your cart.",
                        });
                    }

                    else {
                        const add = {
                            email: user.email,
                            bookId: id
                        }

                        axiosSecure.post("/add_to_cart", add)
                            .then(() => {
                                refetch();
                                Swal.fire({
                                    title: "Added!",
                                    text: "Added successfully.",
                                    icon: "success"
                                });
                            })
                            .catch(() => {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops !",
                                    text: "Can't add this. May be this book is already on your cart.",
                                });
                            })
                    }
                }
            })
        }

    }

    const copyLink = () => {
        const bookURL = window.location.href;
        navigator.clipboard.writeText(bookURL)
            .then(() => {
                Swal.fire({
                    title: "Copied!",
                    text: "URL copied.",
                    icon: "success"
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry !",
                    text: error.message,
                });
            })
    }

    const shareOnFacebook = () => {
        const bookURL = window.location.href;
        const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(bookURL)}`;
        window.open(facebook, '_blank', 'width=600,height=400');
    }

    const shareOnX = () => {
        const bookURL = window.location.href;
        const tweetText = encodeURIComponent("Check out this amazing book!");
        const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(bookURL)}&text=${tweetText}`;

        window.open(twitter, '_blank', 'width=600,height=400');

    }

    const shareOnWhatsapp = () => {
        const bookURL = window.location.href;
        const whatsappMessage = encodeURIComponent(`Check out this amazing book! ${bookURL}`);
        const whatsappURL = `https://wa.me/?text=${whatsappMessage}`;

        window.open(whatsappURL, '_blank');
    }


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
                            <Link onClick={() => addToWishlist(_id)} className="btn bg-[#ef4444] text-white text-xl h-14 ">Add To Cart</Link>
                            <Link className="btn bg-[#ef4444] text-white text-xl h-14 ">Buy Now</Link>
                            <label htmlFor="share_modal" className="btn bg-[#ef4444] text-white text-xl h-14 "><FaShareNodes /></label>
                        </div>
                    </div>
                </div>
            </div>

            {/* One Click Share Modal */}
            <input type="checkbox" id="share_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-[#ef4444]">

                    <div className=" p-5">

                        <h1 className=" text-center  mb-5 text-3xl font-semibold text-white">Share This book!</h1>
                        <button onClick={copyLink} className="btn text-[#ef4444] bg-white text-lg h-12 mb-4">Copy URL</button>

                        <h1 className=" mb-3 text-xl font-semibold text-white">Social Media</h1>

                        <div className="grid grid-flow-col gap-4">
                            <Link onClick={shareOnFacebook} className=" bg-white rounded-full w-12 h-12">
                                <img src={fb} alt="facebook" className=" bg-white rounded-2xl w-8 h-8 mx-auto mt-2" />
                            </Link>
                            <Link onClick={shareOnX} className=" bg-white rounded-full w-12 h-12">
                                <img src={x} alt="x" className=" bg-white rounded-2xl w-8 h-8 mx-auto mt-2" />
                            </Link>
                            <Link onClick={shareOnWhatsapp} className=" bg-white rounded-full w-12 h-12">
                                <BsWhatsapp className=" bg-white rounded-xl w-8 h-8 mx-auto mt-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="share_modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;