import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    serviceType: 'residential',
    numPets: '1-2',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        serviceType: 'residential',
        numPets: '1-2',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>We’re all ears 🐶 — Drop us a message!</h2>
      <div className="contact-form-wrapper">
        {isSubmitted ? (
          <div className="thank-you-message">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you as soon as possible!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-container">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

            <label htmlFor="serviceType">Service Type</label>
            <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="government">Government</option>
              <option value="oneTime">One-Time Cleanup</option>
            </select>

            <label htmlFor="numPets">Number of Pets</label>
            <select id="numPets" name="numPets" value={formData.numPets} onChange={handleChange}>
              <option value="1-2">1-2 pets</option>
              <option value="3-4">3-4 pets</option>
              <option value="5+">5+ pets</option>
              <option value="commercial">Commercial property</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your specific needs or any questions you have..."
            />

<button type="submit" className="submit-button">
  🐾 Send Message
</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
