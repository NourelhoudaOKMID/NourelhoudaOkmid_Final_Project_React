import { Images } from "../../../constant/img";

export const Glasses = () => {
    return (
        <>
        <div className="w-full bg-gray-100 py-16 flex justify-center">
  <div className="flex gap-10">

    <div className="relative w-[600px] h-[400px] overflow-hidden group">
      <img
        src={Images.marron}
        alt=""
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center">
        <h3 className="text-xl tracking-widest">The Beauty</h3>
        <h1 className="text-6xl font-bold">LOOKBOOK</h1>
        <p className="tracking-[4px] mt-3">VIEW COLLECTION</p>
      </div>
    </div>

    <div className=" relative w-[600px] h-[400px] overflow-hidden group   flex flex-col items-center justify-center">
      <img
        src={Images.men4}
        alt=""
        className="w-[600px] h-[ 400px] object-cover transition duration-500 group-hover:scale-110  "
      />
<div className="absolute inset-0  flex flex-col items-center pt-50 text-white text-center">
<h2 className="text-gray-700  text-lg mt-6">
        Boxy2 T-Shirt with Roll Sleeve
      </h2>
      <p className="mt-2 text-gray-600">Â¥3,123</p>

      <div className="flex gap-4 mt-6">

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-lg text-black font-medium">-2600</span>
          <span className="block text-sm text-gray-500">days</span>
        </div>

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-lg text-black font-medium">-14</span>
          <span className="block text-sm text-gray-500">hrs</span>
        </div>

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-black text-lg font-medium">-15</span>
          <span className="block text-black text-sm text-gray-500">mins</span>
        </div>

        <div className="border border-black px-4 py-2 text-center">
          <span className="block text-black text-lg font-medium">-45</span>
          <span className="block text-black text-sm text-gray-500">secs</span>
        </div>

      </div>
</div>
      

    </div>

  </div>
</div>
            
        </>
    );
};

