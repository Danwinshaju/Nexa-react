
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import GamingChair from './pages/Gamingchair';
import Gamingmouse from './pages/Gamingmouse';
import Gamingkeyboard from './pages/Keyboard';
import Headphone from './pages/Headphone';
import Support from './pages/Support';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Navbar />

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/gaming-chair" element={<GamingChair />} />
       <Route path="/gaming-mouse" element={<Gamingmouse />} />
       <Route path="/gaming-keyboard" element={<Gamingkeyboard/>} />
       <Route path="/headphones" element={<Headphone />} />
       <Route path="/support" element={<Support />} />
       <Route path="/products" element={<Products />} />

      </Routes>
      <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
