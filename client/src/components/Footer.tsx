const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-gray-300">
              Paradise Beach Resort is your ultimate destination for relaxation and adventure. Enjoy our luxurious amenities and stunning views.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li><a href="#accommodations" className="text-gray-300 hover:text-white">Accommodations</a></li>
              <li><a href="#dining" className="text-gray-300 hover:text-white">Dining</a></li>
              <li><a href="#activities" className="text-gray-300 hover:text-white">Activities</a></li>
              <li><a href="#spa" className="text-gray-300 hover:text-white">Spa</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-300">
              123 Beachfront Avenue<br />
              Paradise City, PC 12345<br />
              Email: info@paradisebeach.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.73 0-1.325.597-1.325 1.326v21.348c0 .73.596 1.326 1.325 1.326h11.498v-9.294h-3.122v-3.622h3.122v-2.671c0-3.1 1.892-4.788 4.655-4.788 1.325 0 2.463.098 2.793.143v3.238h-1.918c-1.503 0-1.795.715-1.795 1.762v2.316h3.59l-.467 3.622h-3.123v9.294h6.124c.73 0 1.325-.596 1.325-1.326v-21.349c0-.73-.596-1.326-1.325-1.326z"/></svg>
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.566-2.005.978-3.127 1.2-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.204-4.924 4.924 0 .386.043.762.127 1.124-4.092-.205-7.725-2.165-10.148-5.144-.424.727-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.388 1.699 4.384 3.95 4.837-.413.112-.849.172-1.296.172-.317 0-.626-.031-.929-.089.627 1.956 2.445 3.379 4.604 3.419-1.684 1.319-3.808 2.105-6.115 2.105-.397 0-.788-.023-1.174-.068 2.179 1.398 4.768 2.214 7.548 2.214 9.054 0 14-7.504 14-14.002 0-.213-.004-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.312 3.608 1.288.976.975 1.226 2.242 1.288 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.312 2.633-1.288 3.608-.975.976-2.242 1.226-3.608 1.288-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.312-3.608-1.288-.976-.975-1.226-2.242-1.288-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.312-2.633 1.288-3.608.975-.976 2.242-1.226 3.608-1.288 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.012-4.947.071-1.519.07-2.894.312-3.986 1.404-1.092 1.092-1.333 2.467-1.404 3.986-.059 1.276-.071 1.688-.071 4.947s.012 3.671.071 4.947c.07 1.519.312 2.894 1.404 3.986 1.092 1.092 2.467 1.333 3.986 1.404 1.276.059 1.688.071 4.947.071s3.671-.012 4.947-.071c1.519-.07 2.894-.312 3.986-1.404 1.092-1.092 1.333-2.467 1.404-3.986.059-1.276.071-1.688.071-4.947s-.012-3.671-.071-4.947c-.07-1.519-.312-2.894-1.404-3.986-1.092-1.092-2.467-1.333-3.986-1.404-1.276-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441 0 .796.645 1.441 1.441 1.441.796 0 1.441-.645 1.441-1.441 0-.796-.645-1.441-1.441-1.441z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 Paradise Beach Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


export default Footer;
