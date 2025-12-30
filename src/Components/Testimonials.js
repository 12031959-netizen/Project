// src/components/Testimonials/Testimonials.js
import '../Styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Wael kfoury",
      text: "The best Italian food I've had outside of Italy! The pasta was perfectly al dente and the service was exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Nancy Ajram",
      text: "We celebrated our anniversary here and it was magical. The ambiance, food, and wine pairing were perfect.",
      rating: 5
    },
    {
      id: 3,
      name: "Nabih berri",
      text: "Every dish we tried was incredible. The tiramisu is to die for! Will definitely be coming back soon.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Guests Say</h2>
        <p className="subtitle">Don't just take our word for it</p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;