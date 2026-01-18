
'use client';
import { useParams } from 'next/navigation';
import items from '../../../mobiledata/mobiledata.json';
import toast, { Toaster } from 'react-hot-toast';

export default function MobileDetailsPage() {

  const { id } = useParams();
  const item = items.find((itm) => itm.id === parseInt(id));

  if (!item) {
    return (
      <div className="w-10/12 mx-auto my-20 text-center">
        <h2 className="text-3xl font-bold text-[#CE8946] mb-4">Item Not Found</h2>
        <p className="text-gray-600">The product you are looking for does not exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => toast.success(`${item.title} added to cart! 🎉`);
  const handleBuyNow = () => toast.success(`Proceeding to buy ${item.title}! 🛒`);

  return (
    <section className="w-10/12 mx-auto my-18">
      <Toaster position="top-right" />

      <div className="flex flex-col md:flex-row gap-10">

        {/* Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-[#EBD6B8] h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col justify-end h-[500px]">
          <div className="bg-[#fdfbc8] p-6 rounded-xl shadow-lg flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-[#7C3AED]">{item.title}</h1>

            <div className="flex items-center gap-2 text-purple-500 mb-2">
              {'⭐'.repeat(Math.round(item.rating))}
              <span className="text-gray-700 ml-2 text-sm">({item.rating.toFixed(1)})</span>
            </div>

            <p className="font-bold text-2xl text-[#e02323]">${item.price.toFixed(2)}</p>

            <p className="text-gray-700">{item.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={handleAddToCart}
                className="px-6 py-3 bg-[#7C3AED] text-white font-semibold rounded-md hover:opacity-90 transition shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="px-6 py-3 bg-gray-200 text-[#3A2A14] font-semibold rounded-md hover:bg-[#e868f7] transition shadow-md hover:shadow-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}