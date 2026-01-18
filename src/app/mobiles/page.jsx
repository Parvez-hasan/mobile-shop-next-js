
'use client';
import { useState } from 'react';
import items from '../../mobiledata/mobiledata.json';

export default function MobilesPage() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items based on search
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <section className="w-10/12 mx-auto my-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#7C3AED]">
        Our All Mobiles
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CE8946] placeholder-gray-500"
        />
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#fdfbc8] text-[#3A2A14] rounded-md shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3A2A14] mb-2 line-clamp-3">{item.description}</p>
                  <p className="font-bold text-[#e02323]">${item.price.toFixed(2)}</p>
                  <p className="text-purple-400">
                    {'⭐'.repeat(Math.round(item.rating))} ({item.rating.toFixed(1)})
                  </p>
                </div>

                <a
                  href={`/mobiles/${item.id}`}
                  className="mt-4 block text-center bg-[#dd25f1] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {currentItems.length > 0 && (
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md font-semibold transition
                ${currentPage === page
                  ? 'bg-[#e843fa] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#fce9b7]'
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}