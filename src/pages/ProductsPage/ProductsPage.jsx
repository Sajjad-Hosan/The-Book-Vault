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
            
        </div>
    );
};

export default ProductsPage;