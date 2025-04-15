import React from 'react';
import { FaPhone } from 'react-icons/fa';
// Only import the icons you're actually using
// Remove FaFacebook, FaInstagram, FaTwitter, FaEnvelope from imports if not using them

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Poopsie Doopsie",
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhone className="icon" /> (707) 761-2600</p>
          {/* <p><FaEnvelope className="icon" /> info@poopsiedoopsie.com</p> */}
          <p>2010 Harbison Dr. Ste. A 633</p>
          <p>Vacaville, CA 95688</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Social icons will be added here later */}
            <p className="coming-soon">Social links coming soon!</p>
          </div>
          <p className="service-area">Proudly serving Vacaville and surrounding areas</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} {companyName}. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
      
      <style>{`
        /* Your existing styles */
        .footer-container {
          background-color: #00a67d;
          color: white;
          padding: 2rem 1rem 1rem;
          font-family: sans-serif;
        }
        
        /* Add this new style */
        .coming-soon {
          font-size: 0.9rem;
          font-style: italic;
          opacity: 0.8;
        }
        
        /* Rest of your existing styles */
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          gap: 2rem;
        }
        
        .footer-section {
          flex: 1;
          min-width: 250px;
        }
        
        h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          position: relative;
        }
        
        h3:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 50px;
          height: 2px;
          background-color: #ffc107;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        li {
          margin-bottom: 0.5rem;
        }
        
        a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        a:hover {
          color: #ffc107;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: background-color 0.3s;
        }
        
        .social-icons a:hover {
          background-color: #ffc107;
          color: #00a67d;
        }
        
        .icon {
          margin-right: 8px;
        }
        
        .service-area {
          font-size: 0.9rem;
          margin-top: 1rem;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 2rem;
          padding-top: 1rem;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          gap: 1rem;
        }
        
        .footer-bottom p {
          margin: 0;
        }
        
        .footer-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .separator {
          color: rgba(255, 255, 255, 0.5);
        }
        
        @media (max-width: 768px) {
          .footer-content, .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-section {
            margin-bottom: 1.5rem;
          }
          
          h3:after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .social-icons {
            justify-content: center;
          }
          
          .footer-links {
            justify-content: center;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;