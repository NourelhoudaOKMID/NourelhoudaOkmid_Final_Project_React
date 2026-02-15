import { AnimatePresence , motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram, FaWindowClose } from "react-icons/fa";

export const Footer = () => {
    const [submit , setSubmit] =useState(false)
    const [email , setEmail] = useState()
    const conditionSubscribe = (e)=>{
        if (!email){
            alert("email is required"
            )
            return
        }
        setSubmit(true)
    }
return (
        <footer className="bg-gray-100 text-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 " >

            {/* Get in Touch */}
            <div className="col-span-1">
            <h3 className="font-bold mb-4 hover:text-orange-950 cursor-pointer ">GET IN TOUCH</h3>
            <p className="text-sm mb-4">
                Any questions? Let us know in store at 8th floor, 379 Hudson St, <br /> New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex  pt-3 gap-3    space-x-3 text-gray-600">
                <FaFacebookF   size={20} className="hover:text-orange-950 cursor-pointer" />
                <FaTwitter  size={20} className="hover:text-orange-950 cursor-pointer" />
                <FaPinterestP  size={20} className="hover:text-orange-950 cursor-pointer" />
                <FaGooglePlusG  size={26} className="hover:text-orange-950 cursor-pointer" />
                <FaInstagram  size={20} className="hover:text-orange-950 cursor-pointer" />
            </div>
            </div>
            
            <div className="col-span-1 ">
            <h3 className="font-bold mb-4 hover:text-orange-950 cursor-pointer ">CATEGORIES</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-orange-950 cursor-pointer">Men</li>
                <li className="hover:text-orange-950 cursor-pointer">Women</li>
                <li className="hover:text-orange-950 cursor-pointer">Dresses</li>
                <li className="hover:text-orange-950 cursor-pointer">Sunglasses</li>
            </ul>
            </div>

            <div className="col-span-1">
            <h3 className="font-bold mb-4 hover:text-orange-950 cursor-pointer ">LINKS</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-orange-950 cursor-pointer">Search</li>
                <li className="hover:text-orange-950 cursor-pointer">About Us</li>
                <li className="hover:text-orange-950 cursor-pointer">Contact Us</li>
                <li className="hover:text-orange-950 cursor-pointer">Returns</li>
            </ul>
            </div>
            <div className="col-span-1">
            <h3 className="font-bold mb-4 hover:text-orange-950 cursor-pointer ">HELP</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-orange-950 cursor-pointer">Track Order</li>
                <li className="hover:text-orange-950 cursor-pointer">Returns</li>
                <li className="hover:text-orange-950 cursor-pointer">Shipping</li>
                <li className="hover:text-orange-950 cursor-pointer">FAQs</li>
            </ul>
            </div>

            <div className="col-span-1 ">
            <h3 className="font-bold mb-4 hover:text-orange-950 cursor-pointer ">NEWSLETTER</h3>

            { !submit && ( 
            <div className="flex  flex-col space-y-2 ">
                <input 
                required
                value={email}
                type="email" 
                placeholder="Email Address"
                onChange={(e)=> setEmail(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        conditionSubscribe()
                    }
                }}
                className="w-full  sm:w-auto max-w-md border-b-2 border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-orange-900 "
                    />
                <button onClick={conditionSubscribe} className="bg-black hover:bg-orange-950 text-white rounded-2xl w-40  py-1.5  transition-colors">
                SUBSCRIBE
                </button>
            </div>

                )}


                <AnimatePresence>
                    {submit && (
                        <motion.div 
                        initial={{opacity: 0 , scale:0.8}}
                        animate={{opacity: 1 , scale:1}}
                        exit={{opacity: 0 , scale:0.8}}
                        className="fixed inset-0 flex items-center justify-center bg-black/50"
                        
                        
                        >
                        <motion.div className="bg-green-200 px-6 py-4 rounded  text-green-950 shadow-lg">
                            Thanks for subscribing 
                            <button onMouseEnter={()=>setSubmit(false)} className=" px-2">
                                <FaWindowClose size={24}/>

                            </button>

                        </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-500">
            &copy; 2022 Shopify Theme Developed by MassTechnologist. All rights reserved.
        </div>
        </footer>
);
};

        