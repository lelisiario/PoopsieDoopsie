
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;