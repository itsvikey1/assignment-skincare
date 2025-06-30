// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/navbar/Navbar';
import Herosection1 from './Components/Hero section/Herosection1';
import Herosection2 from './Components/Hero section/Herosection2';
import BestSellingSlider from './Components/slide/BestSellingSlider';
import Card from './Components/card/Card';
import Card2 from './Components/card/Card2';
import Footer from './Components/Footer/Footer';

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
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;