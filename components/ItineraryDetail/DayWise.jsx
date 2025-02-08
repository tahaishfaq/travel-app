import React from "react";

const DayWise = () => {
  const itinerary = [
    {
      day: "Day 1-2",
      highlight: "Highlight-1",
      description:
        "Embark on an unforgettable journey with our carefully crafted itinerary. Begin with a seamless airport transfer to the enchanting town of Ubud, where you'll experience the breathtaking Tegenungan Waterfall, the lush Tegalalang Rice Fields, and the playful Ubud Monkey Forest. Delight in an exhilarating swing adventure at Aloha, offering stunning views, and explore the vibrant Ubud Village. On the third day, discover the majestic Handra Gate and the iconic Tanah Lot temple before settling into you...",
      image: "https://via.placeholder.com/800x400", // Replace with actual image URL
    },
    {
      day: "Day 2",
      highlight: "Highlight-2",
      description:
        "Embark on an unforgettable journey with our carefully crafted itinerary. Begin with a seamless airport transfer to the enchanting town of Ubud, where you'll experience the breathtaking Tegenungan Waterfall, the lush Tegalalang Rice Fields, and the playful Ubud Monkey Forest."
    },
    {
      day: "Day 2",
      highlight: "Highlight-2",
      description:
        "Embark on an unforgettable journey with our carefully crafted itinerary. Begin with a seamless airport transfer to the enchanting town of Ubud, where you'll experience the breathtaking Tegenungan Waterfall, the lush Tegalalang Rice Fields, and the playful Ubud Monkey Forest."
    },
    {
      day: "Day 2",
      highlight: "Highlight-2",
      description:
        "Embark on an unforgettable journey with our carefully crafted itinerary. Begin with a seamless airport transfer to the enchanting town of Ubud, where you'll experience the breathtaking Tegenungan Waterfall, the lush Tegalalang Rice Fields, and the playful Ubud Monkey Forest."
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Day wise Itinerary</h2>
      <div className="border-l-4 border-red-400 pl-6 mt-6">
        {itinerary.map((item, index) => (
          <div key={index} className="relative mb-6 bg-white p-4 rounded-lg shadow-md">
            <div className="absolute -left-20 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">{item.day}</div>
            <h3 className="text-lg font-semibold text-orange-600">{item.highlight}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
            {item.image && (
              <img src={item.image} alt={item.highlight} className="w-full h-auto rounded-lg mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayWise;
