

import items from '../mobiledata/mobiledata.json'; 

export default function FeaturedMobiles() {
  
  const featuredMobiles = items.slice(0, 8);

  return (
    <section className="w-10/12 mx-auto my-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#CE8946]">
        Featured Mobiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredMobiles.map((item) => (
          <div
            key={item.id}
            className="bg-[#fdfbc8] text-[#CE8946] rounded-md shadow-lg overflow-hidden flex flex-col"
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
                <p className="text-sm text-black mb-2 line-clamp-3">{item.description}</p>
                <p className="font-bold text-[#e02323]">${item.price.toFixed(2)}</p>
                <p className="text-yellow-400">
                  {'⭐'.repeat(Math.round(item.rating))} ({item.rating.toFixed(1)})
                </p>
              </div>

              <a
                href={`/items/${item.id}`}
                className="mt-4 block text-center bg-[#CE8946] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}