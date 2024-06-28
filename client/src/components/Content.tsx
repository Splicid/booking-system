import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Content = () => {
  return (
    <div className="bg-zinc-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-50 mb-6">Welcome to Paradise Beach Resort</h1>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img src="https://placehold.co/600x400/000000/FFF" alt="Beach view 1" />
            <p className="legend">Stunning Ocean Views</p>
          </div>
          <div>
            <img src="https://placehold.co/600x400/000000/FFF" alt="Beach view 2" />
            <p className="legend">Relax and Unwind</p>
          </div>
          <div>
            <img src="https://placehold.co/600x400/000000/FFF" alt="Beach view 3" />
            <p className="legend">Luxurious Accommodations</p>
          </div>
        </Carousel>
        <p className="text-lg text-sky-400 my-6">
          Experience the ultimate beach getaway at Paradise Beach Resort. Our luxurious resort offers stunning ocean views, pristine sandy beaches, and a variety of amenities to make your stay unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-50 mb-4">Accommodations</h2>
            <p className="text-sky-400">
              Choose from a range of accommodations, from cozy beachside cottages to luxurious oceanfront suites. Each room is designed with comfort and style in mind, ensuring you have a relaxing stay.
            </p>
          </div>
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-50 mb-4">Dining</h2>
            <p className="text-sky-400">
              Savor the flavors of the ocean at our on-site restaurants. Enjoy fresh seafood, tropical cocktails, and gourmet cuisine prepared by our expert chefs.
            </p>
          </div>
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-50 mb-4">Activities</h2>
            <p className="text-sky-400">
              Whether you want to relax on the beach, take a dip in our infinity pool, or explore the ocean with our water sports, there's something for everyone at Paradise Beach Resort.
            </p>
          </div>
          <div className="bg-black p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-50 mb-4">Spa</h2>
            <p className="text-sky-400">
              Rejuvenate your mind and body at our world-class spa. Indulge in a range of treatments, from massages to facials, all designed to leave you feeling refreshed and revitalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
