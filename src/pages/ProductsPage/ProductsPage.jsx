import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

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
            <div className=" w-5/6 mx-auto ">
                <h1 className=" text-4xl font-bold text-center my-10">Explore Our Collections</h1>
                <div className=" flex flex-col lg:flex-row gap-5 justify-between">
                    <h1 className=" text-xl">Total Books: {selectedBooks.length}</h1>
                    <div>
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