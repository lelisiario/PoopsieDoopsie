import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
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