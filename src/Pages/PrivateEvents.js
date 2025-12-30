// pages/PrivateEvents.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PrivateEvents.css';

const PrivateEvents = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    guests: 50,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const eventTypes = [
    { value: 'wedding', label: 'Wedding Reception', icon: '💒' },
    { value: 'corporate', label: 'Corporate Event', icon: '💼' },
    { value: 'birthday', label: 'Birthday Party', icon: '🎂' },
    { value: 'anniversary', label: 'Anniversary', icon: '🥂' },
    { value: 'rehearsal', label: 'Rehearsal Dinner', icon: '🎭' },
    { value: 'other', label: 'Other Celebration', icon: '🎉' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Event inquiry:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="private-events">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>Private Events & Catering</h1>
          <p>Create unforgettable moments in our elegant space</p>
        </div>
      </section>

      <div className="events-container">
        {/* Event Types */}
        <section className="event-types">
          <h2>Types of Events We Host</h2>
          <div className="event-cards">
            {eventTypes.map((event) => (
              <div key={event.value} className="event-card">
                <div className="event-icon">{event.icon}</div>
                <h3>{event.label}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Venue Details */}
        <section className="venue-details">
          <div className="venue-info">
            <h2>Our Venue</h2>
            <div className="venue-features">
              <div className="feature">
                <strong>Capacity:</strong>
                <span>Up to 120 guests</span>
              </div>
              <div className="feature">
                <strong>Private Dining Room:</strong>
                <span>Seats 40 guests</span>
              </div>
              <div className="feature">
                <strong>Full Restaurant Buyout:</strong>
                <span>Up to 150 guests</span>
              </div>
              <div className="feature">
                <strong>AV Equipment:</strong>
                <span>Available upon request</span>
              </div>
              <div className="feature">
                <strong>Custom Menus:</strong>
                <span>Tailored to your event</span>
              </div>
            </div>
          </div>

          <div className="pricing-info">
            <h3>Pricing Options</h3>
            <div className="pricing-options">
              <div className="pricing-option">
                <h4>Private Room</h4>
                <p className="price">$1,500 minimum</p>
                <p>Perfect for intimate gatherings</p>
              </div>
              <div className="pricing-option">
                <h4>Semi-Private</h4>
                <p className="price">$2,500 minimum</p>
                <p>Section of main dining area</p>
              </div>
              <div className="pricing-option">
                <h4>Full Buyout</h4>
                <p className="price">$5,000 minimum</p>
                <p>Exclusive use of entire restaurant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="inquiry-form-section">
          <h2>Request More Information</h2>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Event Type *</label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Event Type</option>
                  {eventTypes.map(event => (
                    <option key={event.value} value={event.value}>
                      {event.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Number of Guests *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  {[20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 150].map(num => (
                    <option key={num} value={num}>
                      {num} guests
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Additional Information</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your event, special requests, dietary restrictions, etc."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* CTA Section */}
        <section className="events-cta">
          <h2>Ready to Plan Your Event?</h2>
          <p>Contact our events team for a personalized consultation</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <a href="tel:555-123-4567" className="btn btn-secondary">
              Call Now: (555) 123-4567
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivateEvents;