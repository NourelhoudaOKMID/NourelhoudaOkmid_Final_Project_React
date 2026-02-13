import { Navbar } from './layouts/navbar';
import { Route, Routes } from 'react-router';
import About from './pages/about';
import { Footer } from './layouts/footer';
import { Contact } from './pages/contact';
import Shop from './pages/shop';
import Blog from './pages/blog';
import Scrollbtn from './layouts/scrollbtn';
import { Home } from './pages/home';

 export const App = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Scrollbtn/>
    <Footer/>
    
      
    </>
  );
};

