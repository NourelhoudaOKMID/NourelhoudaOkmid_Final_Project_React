import { Link } from "react-router";
import { Images } from "../../../constant/img";

export const Collection = () => {
  return (
    <div className="w-full bg-gray-100 py-16 flex justify-center">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full max-w-6xl px-4">

        {/* first */}
        <div className="relative w-full  lg:w-1/2 h-75 md:h-100 overflow-hidden group">
          <img
            src={Images.collection}
            alt=""
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-sm md:text-xl tracking-widest">The Beauty</h3>
            <h1 className="text-3xl md:text-6xl font-bold">LOOKBOOK</h1>
            <Link to= "/shop"  className="tracking-[4px] mt-3 text-xs hover:underline   md:text-base">
              VIEW COLLECTION
            </Link>
          </div>
        </div>

        {/* second*/}
        <div className="relative w-full lg:w-1/2 h-75 md:h-100 overflow-hidden group flex flex-col items-center justify-center">
          <img
            src={Images.tshirt}
            alt="T-shirt"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-gray-800 font-medium text-sm md:text-lg   mt-6">
              Boxy2 T-Shirt with <span className="text-gray-200">Roll Sleeve </span>
            </h2>
            <p className="mt-2 font-medium  text-gray-600">¥3,123</p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">

              <div className="border border-black px-3 py-2 text-center">
                <span className="block text-black font-medium">-2600</span>
                <span className="block text-sm  text-gray-200">days</span>
              </div>

              <div className="border border-black px-3 py-2 text-center">
                <span className="block text-black font-medium">-14</span>
                <span className="block text-sm text-gray-800">hrs</span>
              </div>

              <div className="border border-black px-3 py-2 text-center">
                <span className="block text-black font-medium">-15</span>
                <span className="block text-sm text-gray-200">mins</span>
              </div>

              <div className="border border-black px-3 py-2 text-center">
                <span className="block text-black font-medium">-45</span>
                <span className="block text-sm text-gray-200">secs</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
