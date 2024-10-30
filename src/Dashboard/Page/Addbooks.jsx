import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Addbooks = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);

    const formData = new FormData();
    formData.append("image", file);

    //image upload
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=40e12a0fb8ad7194b0c97ec21a585d32",
        formData
      );
      setImageUrl(response.data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //Books added
  const handleSubmitedBooks = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const publisher = e.target.publisher.value;
    const short_description = e.target.short_description.value;
    const author = e.target.author.value;
    const price = e.target.price.value;
    const publishing_year = e.target.publishing_year.value;
    const genre = e.target.genre.value;
    const email = user?.email;
    const status = "pending";
    const rating = 4.5; // Default rating
    const username = user?.displayName;
    const userphoto = user?.photoURL;

    // Create book object
    const newBook = {
      title,
      short_description,
      publisher,
      cover_pic: imageUrl, // Using uploaded image URL
      author,
      price,
      publishing_year,
      email,
      status,
      username,
      userphoto,
      rating,
      genre,
    };

    console.log(newBook);

    try {
      const response = await axiosSecure.post("/addbook", newBook);
      // If the request was successful, refetch data and show success alert
      Swal.fire({
        title: "Added!",
        text: "Book added successfully.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Can't add this book. It might already be in your cart.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md my-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Book</h2>
      <form onSubmit={handleSubmitedBooks} className="space-y-4">
        {/* Book Name */}
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Book Name
          </label>
          <input
            name="title"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the book name"
          />
        </div>

        {/* Writer Name */}
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Writer Name
          </label>
          <input
            name="author"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the writer's name"
          />
        </div>

        {/* Publisher */}
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Publisher
          </label>
          <input
            name="publisher"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the publisher's name"
          />
        </div>
        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Image Upload
        </h6>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">Genre</label>
          <input
            name="genre"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the genre"
          />
        </div>
        {/* Summary */}
        <div className="w-full md:w-full lg:w-full mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Short_description
          </label>
          <textarea
            name="short_description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter a brief summary of the book"
          ></textarea>
        </div>

        {/* Published Date */}
        <div className="w-full md:w-1/2 lg:w-1/2 mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Published Date
          </label>
          <input
            name="publishing_year"
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="w-full md:w-1/2 lg:w-1/2 mx-auto">
          <label className="block text-gray-700 font-medium mb-1">
            Price ($)
          </label>
          <input
            name="price"
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the price"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right w-full">
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addbooks;
