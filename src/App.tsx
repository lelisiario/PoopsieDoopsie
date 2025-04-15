import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Pricing from './components/pricing';
import About from './components/about';
import ContactForm from './components/contactForm';
import Footer from './components/footer';
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