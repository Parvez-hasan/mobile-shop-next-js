
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

export default function AddMobilePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(5);

  const [items, setItems] = useState([]);

  
  useEffect(() => {
    const auth = Cookies.get("auth");
    if (!auth) {
      toast.error("Please login to access this page");
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newItem = {
      id: Date.now(),
      title,
      description,
      price: parseFloat(price),
      image,
      rating: parseFloat(rating),
    };

    
    setItems((prev) => [...prev, newItem]);


    toast.success("Item added successfully!");

    
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setRating(5);
  };

  return (
    <div className="w-10/12 max-w-2xl mx-auto mt-20 bg-[#ece4f7] p-8 rounded-xl shadow-lg">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-center text-[#e537f8] mb-6">
        Add New Mobile
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e0dbe8]"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-3  rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eeedef]"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f6f6f6]"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f6f4fa]"
          required
        />

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          min={1}
          max={5}
          step={0.1}
          onChange={(e) => setRating(e.target.value)}
          className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b6af0]"
          required
        />

        <button
          type="submit"
          className="bg-[#e537f8] hover:bg-[#d525e8] text-white py-3 rounded-md font-semibold hover:opacity-90 transition mt-4"
        >
          Add Mobile
        </button>
      </form>

      
      {items.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#9b6af0]">Preview Added Mobiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-md shadow-md flex flex-col">
                <img src={item.image} alt={item.title} className="h-32 w-full object-cover rounded-md mb-2"/>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-2">{item.description}</p>
                <p className="font-bold text-[#e02323]">${item.price.toFixed(2)}</p>
                <p className="text-purple-400">{'⭐'.repeat(Math.round(item.rating))} ({item.rating})</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}