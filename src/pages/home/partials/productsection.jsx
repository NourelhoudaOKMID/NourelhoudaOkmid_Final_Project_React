import { Link } from "react-router";
import { Images } from "../../../constant/img";

export const Productsection = () => {
    return (
        <>

            <section>

                <div className=' w-300  h-250 mx-auto px-2 py-12 mb-20 grid grid-cols-3 gap-4  '>
                    <div className="   ">
                        {/* card1 */}
                        <div className=" flex  flex-col gap-9 w-full">
                            <div className="relative overflow-hidden ">
                                <img src={Images.sportabaa} className=" object-cover object-center transition transform duration-300 ease-in-out hover:scale-110 " alt=" sport abaea " />
                                <button     className="bg-gray-100  rounded absolute bottom-6 left-1/2 -translate-x-1/2  py-2 px-6 hover:bg-orange-900 text-orange-900 hover:text-gray-100">
                                    <h2 className=" font-medium"> <Link  to="/shop"> Dress</Link>   </h2>
                                </button>
                            </div>
                            <div className="relative overflow-hidden">
                            <img src={Images.sunglasses} className=" object-cover object-center transition transform duration-300 ease-in-out hover:scale-110 "  alt="sunglasses " />
                                <button      className="bg-gray-100  rounded absolute bottom-6 left-1/2 -translate-x-1/2  py-2 px-6 hover:bg-orange-900 text-orange-900 hover:text-gray-100">
                                <h2 className=" font-medium"> <Link  to="/shop">sunglasses </Link></h2>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* card2 */}
                    <div className="flex  flex-col gap-15  w-full">
                    
                        <div className="relative overflow-hidden">
                            <img src={Images.watch} className=" object-cover object-center transition transform duration-300 ease-in-out hover:scale-110 "  alt="watch " />
                                <button      className="bg-gray-100  rounded absolute bottom-6 left-1/2 -translate-x-1/2  py-2 px-6 hover:bg-orange-900 text-orange-900 hover:text-gray-100">
                                <h2 className=" font-medium"> <Link to="/shop"> watch</Link></h2>
                                </button>
                            </div>
                            <div className="relative overflow-hidden">
                            <img src={Images.footwear} className=" object-cover object-center transition transform duration-300 ease-in-out hover:scale-110 "  alt="footwear " />
                                <button      className="bg-gray-100  rounded absolute bottom-6 left-1/2 -translate-x-1/2  py-2 px-6 hover:bg-orange-900 text-orange-900 hover:text-gray-100">
                                    <h2 className=" font-medium"> <Link to="/shop" > footwear</Link></h2>
                                </button>
                            </div>
                    </div>
                    
                    {/* card3 */}

                        <div className=" flex  flex-col gap-15 w-full">
                            <div className="relative overflow-hidden ">
                                <img src={Images.bag} className=" object-cover object-center transition transform duration-300 ease-in-out hover:scale-110 " alt=" bag " />
                                <button      className="bg-gray-100  rounded absolute bottom-6 left-1/2 -translate-x-1/2  py-2 px-6 hover:bg-orange-900 text-orange-900 hover:text-gray-100">
                                    <h2 className=" font-medium"> <Link to="/shop" >Bag </Link></h2>
                                </button>
                            </div>
                            <div className="relative overflow-hidden">
                            <img src={Images.accessories} className=" object-cover object-center transition transform duration-300 ease-in-out hover:scale-110 "  alt="accessories " />
                                <button      className="bg-gray-100  rounded absolute bottom-6 left-1/2 -translate-x-1/2  py-2 px-6 hover:bg-orange-900 text-orange-900 hover:text-gray-100">
                                    <h2 className=" font-medium"> <Link to="/shop" >accessories </Link></h2>
                                </button>
                            </div>
                        </div>





                </div>




            </section>






















            
        </>
    );
};

