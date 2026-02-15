import { Images } from "../../../constant/img";

export const Ourblog = () => {
  return (
    <>
      <section className=" w-full py-9">
        <h2 className="text-center text-3xl font-bold py-6">OUR BLOG</h2>
        <div className="grid  grid-cols-3 px-35 gap-3   ">
          {/* first */}
          <div className="flex     flex-col justify-between gap-3  overflow-hidden  rounded-lg ">
            <img
              className=" object-cover h-[70%] object-center transition  duration-500 hover:scale-105 "
              src={Images.blog1}
              alt="blog"
            />

            <h4 className=" font-semibold    transition duration-300 hover:text-red-600   ">
              Winter to spring Hoodie
            </h4>

            <p className="text-gray-500 ">
              A bold black hoodie featuring an artistic hand illustration and an inspiring message on the back. <br />
              Designed for comfort and style,
              this piece represents hope, change, and streetwear culture in one unique look.
            </p>
          </div>

          {/* second blog  */}
          <div className="flex  flex-col justify-between gap-3   overflow-hidden rounded-lg   ">
            <img
              className=" object-cover h-[70%] object-center  hover:scale-105 transition duration-300   "
              src={Images.blog2}
              alt="blog"
            />

            <h4 className=" font-semibold    transition duration-300 hover:text-red-600"  >
              Dawn Breaks Hoodie 
            </h4>

            <p className="text-gray-500  pb-5">
              A brown hoodie showcases minimalist hand graphics  <br /> 
              A perfect blend of motivation and modern urban fashion  for everyday wear. <br />
            </p>
          </div>

          {/* third blog  */}
          <div className="flex  flex-col justify-between gap-3  overflow-hidden rounded-lg ">
            <img
              className=" object-cover h-[70%] object-center  transition hover:scale-105 "
              src={Images.blog3}
              alt="blog"
            />

            <h4 className=" font-semibold    transition duration-300 hover:text-red-600"  >
              Lucky <em> 77</em> Street Hoodie
            </h4>

            <p className=" text-gray-500 ">
              A clean white hoodie with a dripping “77” graphic on the back, symbolizing luck and individuality. <br />
              Its simple yet striking design makes it ideal for casual outfits and street-style lovers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
