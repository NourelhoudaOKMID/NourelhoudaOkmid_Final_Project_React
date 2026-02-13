import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="w-full">
      <div className="bg-gray-100 text-gray-600 text-sm flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        {/* Social icons */}
        <div className="flex gap-3 text-base">
          <FaFacebookF className=" hover:text-red-700" />
          <FaTwitter className=" hover:text-red-700" />
          <FaPinterestP className=" hover:text-red-700" />
          <FaGooglePlusG className=" hover:text-red-700" />
          <FaInstagram className=" hover:text-red-700" />
        </div>

        <span className="text-center md:text-left">
          Free shipping for standard order over $100
        </span>

        <div className="flex gap-4 items-center text-center md:text-left">
          <span>fashe@example.com</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="PKR">PKR</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
      </div>



{/* second nav bar  */}
      <nav className="w-full bg-white shadow-sm px-4 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="text-2xl font-bold">
          <Link to="/">
            Fashe<span className="text-red-500">.</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/shop" className="hover:text-red-500 transition">Shop</Link>
          <Link to="/blog" className="hover:text-red-500 transition">Blog</Link>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-700 mt-2 md:mt-0">
          <CiUser className="cursor-pointer hover:text-red-500 transition" />
          <MdOutlineShoppingBag className="cursor-pointer hover:text-red-500 transition" />
        </div>
      </nav>
    </header>
  );
};
