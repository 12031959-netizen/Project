// src/Pages/Contact.js
import { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); // NEW

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const apiBase = process.env.REACT_APP_API_URL;

      if (!apiBase) {
        throw new Error(
          "REACT_APP_API_URL is missing. Add it to your frontend .env and restart npm start."
        );
      }

      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message:
          "شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح. (Thank you! Your message was sent successfully.)",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.message ||
          "حدث خطأ أثناء الإرسال. حاول مرة أخرى. (Something went wrong. Please try again.)",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>اتصل بنا</h1>
          <p>Contact Us</p>
          <p className="hero-subtitle">نحن هنا لمساعدتك! تواصل معنا لأي استفسار أو حجز</p>
          <p className="hero-subtitle">We're here to help! Contact us for any inquiries or reservations</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>معلومات التواصل</h2>
            <h3>Contact Information</h3>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>عنواننا / Our Address</h4>
                  <p>
                    شارع الحمرا، بيروت
                    <br />
                    Hamra Street, Beirut
                  </p>
                  <p className="info-note">
                    قرب الجامعة الأميركية في بيروت
                    <br />
                    Near American University of Beirut
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>هاتف / Phone</h4>
                  <p>+961 1 123 456</p>
                  <p>+961 70 123 456</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h4>بريد إلكتروني / Email</h4>
                  <p>info@gustoitaliano-lb.com</p>
                  <p>reservations@gustoitaliano-lb.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h4>ساعات العمل / Opening Hours</h4>
                  <p>
                    الإثنين - الجمعة: ١٢ ظهراً - ١١ مساءً
                    <br />
                    Monday - Friday: 12 PM - 11 PM
                  </p>
                  <p>
                    السبت - الأحد: ١٢ ظهراً - ١٢ منتصف الليل
                    <br />
                    Saturday - Sunday: 12 PM - 12 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h4>تابعونا على وسائل التواصل الاجتماعي</h4>
              <p>Follow us on social media</p>
              <div className="social-links">
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">👥</span>
                  <span>Facebook</span>
                </a>
                <a href="https://tripadvisor.com" aria-label="TripAdvisor" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">⭐</span>
                  <span>TripAdvisor</span>
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <h4>موقعنا على الخريطة</h4>
              <p>Our Location on Map</p>
              <div className="map-placeholder">
                <div className="map-content">
                  <p>📍 Hamra Street, Beirut</p>
                  <p>قريب من الجامعة الأميركية في بيروت</p>
                  <button
                    className="map-btn"
                    onClick={() =>
                      window.open("https://maps.google.com/?q=Hamra+Street,+Beirut,+Lebanon", "_blank")
                    }
                  >
                    فتح في خرائط جوجل / Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>أرسل رسالة</h2>
            <h3>Send us a Message</h3>
            <p className="form-description">
              سنكون سعداء بالرد على استفساراتك في أقرب وقت ممكن
              <br />
              We'll be happy to respond to your inquiries as soon as possible
            </p>

            {/* NEW: Status message */}
            {status.message && (
              <div
                style={{
                  marginBottom: "12px",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <strong style={{ display: "block", marginBottom: "6px" }}>
                  {status.type === "success" ? "✅ Success" : "❌ Error"}
                </strong>
                <span>{status.message}</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    الاسم الكامل *<br />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل / Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>
                    البريد الإلكتروني *<br />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    رقم الهاتف<br />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+961 XX XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label>
                    الموضوع<br />
                    Subject
                  </label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">اختر الموضوع / Select Subject</option>
                    <option value="reservation">حجز طاولة / Table Reservation</option>
                    <option value="catering">خدمات التموين / Catering Services</option>
                    <option value="private-events">مناسبات خاصة / Private Events</option>
                    <option value="feedback">ملاحظات واقتراحات / Feedback</option>
                    <option value="other">استفسار آخر / Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label>
                  الرسالة *<br />
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="اكتب رسالتك هنا... / Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    جاري الإرسال... / Sending...
                  </>
                ) : (
                  "إرسال الرسالة / Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Section */}
        <section className="quick-contact">
          <div className="quick-contact-grid">
            <div className="quick-contact-card">
              <div className="card-icon">📞</div>
              <h4>اتصل بنا مباشرة</h4>
              <p>Call Us Directly</p>
              <a href="tel:+9611123456" className="contact-link">
                +961 1 123 456
              </a>
            </div>

            <div className="quick-contact-card">
              <div className="card-icon">✉️</div>
              <h4>أرسل بريد إلكتروني</h4>
              <p>Send us an Email</p>
              <a href="mailto:info@gustoitaliano-lb.com" className="contact-link">
                info@gustoitaliano-lb.com
              </a>
            </div>

            <div className="quick-contact-card">
              <div className="card-icon">📍</div>
              <h4>زورنا</h4>
              <p>Visit Us</p>
              <p className="contact-address">
                شارع الحمرا، بيروت
                <br />
                Hamra Street, Beirut
              </p>
            </div>

            <div className="quick-contact-card">
              <div className="card-icon">🕒</div>
              <h4>ساعات العمل</h4>
              <p>Opening Hours</p>
              <p className="contact-hours">
                ١٢ ظهراً - ١١ مساءً
                <br />
                12 PM - 11 PM
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
