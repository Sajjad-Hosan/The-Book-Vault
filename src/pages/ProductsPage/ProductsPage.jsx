import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { IoGrid, IoList } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import FilterCompo from "../../components/FilterCompo/FilterCompo";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ProductsPage = () => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const booksData = async () => {
            const response = await fetch('http://localhost:5000/allbooks');
            const data = await response.json();
            setBooks(data);

            const uniqueCategories = [
                ...new Set(data.map((book) => book.genre)),
            ];
            setCategories(uniqueCategories);


        }
        booksData();
    }, []);

    const handleCategory = e => {
        console.log(e.target.value);
        setSelectedCategory(e.target.value);
    }
    const selectedBooks = selectedCategory ? books.filter(book => book.genre == selectedCategory) : books;


    return (
        <div>
            <div className=" flex justify-center">
                {
                    spinner && <span className="loading loading-infinity w-36 text-red-500"></span>
                }
            </div>

            <div className=" w-5/6 mx-auto ">
                <h1 className=" text-4xl font-bold text-center my-10">Explore Our Collections</h1>
                <div className=" flex flex-col lg:flex-row gap-5 justify-between">
                    <h1 className=" text-xl">Total Books: {selectedBooks.length}</h1>
                    <div>

                        {/* Category */}

                        <select onChange={handleCategory} className="select select-bordered w-full max-w-xs text-lg font-medium">
                            <option selected disabled>
                                Category
                            </option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Book Cards */}

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
                    {
                        selectedBooks.length > 0 ? (selectedBooks.map(book => <ProductCard key={book._id} book={book}></ProductCard>))
                            :
                            (<h1 className=" text-6xl font-bold text-center"> No Books Available!</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
