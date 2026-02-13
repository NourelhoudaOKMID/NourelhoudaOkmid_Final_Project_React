import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram } from "react-icons/fa";

export const Footer = () => {
return (
        <footer className="bg-gray-100 text-gray-700 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 " >

            {/* Get in Touch */}
            <div className="col-span-1">
            <h3 className="font-bold mb-4">GET IN TOUCH</h3>
            <p className="text-sm mb-4">
                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex space-x-3 text-gray-600">
                <FaFacebookF className="hover:text-red-900 cursor-pointer" />
                <FaTwitter className="hover:text-red-900 cursor-pointer" />
                <FaPinterestP className="hover:text-red-900 cursor-pointer" />
                <FaGooglePlusG className="hover:text-red-900 cursor-pointer" />
                <FaInstagram className="hover:text-red-900 cursor-pointer" />
            </div>
            </div>

            <div className="col-span-1 ">
            <h3 className="font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-red-900 cursor-pointer">Men</li>
                <li className="hover:text-red-900 cursor-pointer">Women</li>
                <li className="hover:text-red-900 cursor-pointer">Dresses</li>
                <li className="hover:text-red-900 cursor-pointer">Sunglasses</li>
            </ul>
            </div>

            <div className="col-span-1">
            <h3 className="font-bold mb-4">LINKS</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-red-900 cursor-pointer">Search</li>
                <li className="hover:text-red-900 cursor-pointer">About Us</li>
                <li className="hover:text-red-900 cursor-pointer">Contact Us</li>
                <li className="hover:text-red-900 cursor-pointer">Returns</li>
            </ul>
            </div>
            <div className="col-span-1">
            <h3 className="font-bold mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-red-900 cursor-pointer">Track Order</li>
                <li className="hover:text-red-900 cursor-pointer">Returns</li>
                <li className="hover:text-red-900 cursor-pointer">Shipping</li>
                <li className="hover:text-red-900 cursor-pointer">FAQs</li>
            </ul>
            </div>

            <div className="col-span-1 ">
            <h3 className="font-bold mb-4">NEWSLETTER</h3>
            <div className="flex  flex-col  sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input 
                type="email" 
                placeholder="Email Address"
                className="w-full sm:w-auto max-w-md border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />

                <button className="bg-black  text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                SUBSCRIBE
                </button>
            </div>
            </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-500">
            &copy; 2022 Shopify Theme Developed by MassTechnologist. All rights reserved.
        </div>
        </footer>
);
};

        