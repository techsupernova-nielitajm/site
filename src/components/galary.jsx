 
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Search } from 'lucide-react';

const galleryData = [
  {
    event: "Brains & Bots 1.0",
    images: [
     "bb.jpeg",
      "bb2.jpeg",
      "bb3.jpeg",
      "bb4.jpeg",
    ],
  },
     
];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = galleryData.filter((e) =>
    e.event.toLowerCase().includes(search.toLowerCase())
  );

  const openSlider = (event) => {
    setSelectedEvent(event);
    setSliderIndex(0);
    setIsOpen(true);
  };

  const nextImage = () => {
    setSliderIndex((prev) =>
      (prev + 1) % selectedEvent.images.length
    );
  };

  const prevImage = () => {
    setSliderIndex((prev) =>
      (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
    );
  };

  return (
    <div className="relative flex flex-col top-20 min-h-60 items-center justify-center text-center pt-16">
      <div className="flex justify-center mb-6">
      <div className="flex h-7  items-center justify-center w-60% bg-white rounded-full p-4 "><input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-70% h-4 focus:outline-none bg-white    "
      /><Search size="15"/></div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-0 w-[80vw]">
        {filteredData.map((group, idx) => (
          <div
            key={idx}
            className="cursor-pointer shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            onClick={() => openSlider(group)}
          >
            <img
              src={group.images[0]}
              alt={group.event}
              className="object-cover w-full h-48"
            />
            <div className="p-2 text-center font-semibold text-lg text-gray-700 bg-white">
              {group.event}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-lg w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">{selectedEvent.event}</h2>
            <img
              src={selectedEvent.images[sliderIndex]}
              alt="slider"
              className="w-full h-[300px] object-contain rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

 