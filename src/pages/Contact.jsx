import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setStatus("✅ Thank you! Your requirement has been sent successfully.");

      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label dark-label">Contact Us</span>

          <h1>Commission Creative Work</h1>

          <p>
            Share your design requirement and our creative team will help you
            build professional visuals for your brand, campaign, business, or
            digital product.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-content">
            <span className="section-label">Get In Touch</span>

            <h2>Let's create something limitless</h2>

            <p>
              Whether you need a logo, poster, UI design, branding kit, social
              media creative, or custom campaign design, Limitless Design is
              ready to help.
            </p>

            <div className="contact-list">
              <div>
                <Mail size={22} />
                <span>hello@limitlessdesign.com</span>
              </div>

              <div>
                <Phone size={22} />
                <span>+91 98765 43210</span>
              </div>

              <div>
                <MapPin size={22} />
                <span>India</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="service"
              placeholder="Service Required"
              value={form.service}
              onChange={handleChange}
              required
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project requirement"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Requirement"}
              <Send size={18} />
            </button>

            {status && (
              <p
                style={{
                  marginTop: "20px",
                  fontWeight: 600,
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;