import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scrollbtn = () => {
  const [visible, setVisible] = useState(false);

  const visibility = () => {
    if (window.scrollY > 300) {
      setVisible(true); // ila  300px button yban
    } else {
      setVisible(false); 
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,          
      behavior: "smooth" 
    });
  };


  useEffect(() => {

    window.addEventListener("scroll", visibility);

    return () => {
      window.removeEventListener("scroll", visibility);
    };
  }, []); // [] kat3ni run once mli component tban

  return (
    visible && (
      <button
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-opacity duration-300 z-50"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default Scrollbtn;
