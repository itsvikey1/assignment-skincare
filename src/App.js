// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/navbar/Navbar';
import Herosection1 from './Components/Hero section/Herosection1';
import Herosection2 from './Components/Hero section/Herosection2';
import BestSellingSlider from './Components/slide/BestSellingSlider';

import Card from './Components/card/Card';
import Card2 from './Components/card/Card2';
import Footer from './Components/Footer/Footer';
const AllProducts = () => <p>.</p>;
const Serum = () => <p>.</p>;
const Sunscreen = () => <p>.</p>;
const Bundle = () =>  <p>.</p>;
const Cart = () => <p>.</p>;
const Admin = () => <p>.</p>;

function App() {
  return (
    <Router>
      <div className="bg-skincare-light font-montserrat min-h-screen">
        <Navbar />
       <Herosection1/>
      <Herosection2/>
      <BestSellingSlider/>
      <Card/>
      <Card2/>
      <Footer/>
        <Routes>
          
        <Route path="/products" element={<AllProducts />} />
        <Route path="/serum" element={<Serum />} />
        <Route path="/sunscreen" element={<Sunscreen />} />
        <Route path="/bundle" element={<Bundle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;