import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import Services from './Components/services';
import Pricing from './Components/pricing';
import About from './Components/about';
import ContactForm from './Components/contactForm';
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