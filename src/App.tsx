import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
// import Testimonials from './Components/Testimonials';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Pricing />
      {/* Uncomment the following line to include testimonials */}
      {/* <Testimonials /> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;