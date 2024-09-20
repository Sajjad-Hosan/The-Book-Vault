import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const booksData = async () => {
            const response = await fetch('/books.json');
            const data = await response.json();
            setBooks(data);
        }
        booksData();
    }, [])
    return (
        <div>
            <div className=" w-5/6 mx-auto ">
                <h1 className=" text-4xl font-bold text-center my-10">Explore Our Collections</h1>
                <h1 className=" text-xl">Total Books: {books.length}</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
                    {
                        books.map(book=> <ProductCard key={book._id} book={book}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;