import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Crown,
  Gem,
  Layers3,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WandSparkles
} from "lucide-react";

import { Link } from "react-router-dom";
import { services } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const whyChoose = [
  {
    icon: Crown,
    title: "Premium Design Quality",
    text: "Every creative is designed with professional layout, clean spacing, strong typography, and brand-focused direction."
  },
  {
    icon: Users,
    title: "Seller-Friendly Platform",
    text: "Designers and creative sellers can showcase their services while clients easily discover the right creative solution."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Work Process",
    text: "Clear project flow, proper communication, and organized design delivery make every commission smooth and trustworthy."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    text: "Get high-quality design assets within practical timelines without compromising professional visual standards."
  },
  {
    icon: Layers3,
    title: "Multiple Creative Categories",
    text: "From logos and social banners to business cards, posters, branding materials, and UI designs — everything is available."
  },
  {
    icon: Gem,
    title: "Business-Ready Output",
    text: "Designs are created for real business use across websites, social media, ads, campaigns, printing, and brand communication."
  }
];

const features = [
  "Verified creative sellers",
  "Custom commission work",
  "Professional service categories",
  "Brand identity support",
  "Campaign-ready creatives",
  "Responsive marketplace experience"
];

function Home() {
  return (
    <>
      <section className="ld-hero">
  <div className="container ld-hero-container">
    <div className="ld-hero-left">
      <span className="ld-hero-badge">
        Creative Marketplace for Modern Brands
      </span>

      <h1>
        Discover, Sell & Commission{" "}
        <span>Limitless Creative Designs.</span>
      </h1>

      <p>
        Limitless Design is a professional platform where sellers offer
        logo designs, social media banners, photo frames, posters,
        business cards, branding materials, UI designs, and many more
        creative services.
      </p>

      <div className="ld-hero-actions">
        <a href="#services" className="ld-primary-btn">
          Explore Services
        </a>

        <Link to="/contact" className="ld-secondary-btn">
          Commission Work
        </Link>
      </div>
    </div>

    <div className="ld-hero-right">
      <div className="ld-text-card main-card">
        <span>01</span>
        <h3>Creative Marketplace</h3>
        <p>Sell and discover premium creative services in one professional platform.</p>
      </div>

      <div className="ld-text-card">
        <span>02</span>
        <h3>Design Categories</h3>
        <p>Logo, banner, poster, branding, business card, UI design and more.</p>
      </div>

      <div className="ld-text-card">
        <span>03</span>
        <h3>Commission Work</h3>
        <p>Request custom creative work based on your brand or campaign need.</p>
      </div>
    </div>

    <div className="ld-hero-stats">
      <div>
        <strong>50+</strong>
        <span>Creative Categories</span>
      </div>

      <div>
        <strong>500+</strong>
        <span>Design Assets</span>
      </div>

      <div>
        <strong>100%</strong>
        <span>Business Focused</span>
      </div>
    </div>
  </div>
</section>

      <section className="section" id="why">
        <div className="container">
          <SectionHeading
            label="Why Choose Us"
            title="A creative platform built for serious brands and sellers"
            text="Limitless Design gives sellers a professional platform and gives businesses a trusted space to commission high-quality creative work."
          />

          <div className="why-grid">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div className="why-card" key={item.title}>
                  <div className="why-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section service-section" id="services">
        <div className="container">
          <SectionHeading
            label="What We Offer"
            title="Professional creative services for every business need"
            text="Explore premium design categories created for brands, creators, ecommerce sellers, agencies, startups, and growing businesses."
          />

          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="container features-grid">
          <div className="features-content">
            <span className="section-label dark-label">Platform Features</span>

            <h2>Everything required to start creative selling professionally</h2>

            <p>
              Limitless Design is built as a future-ready creative marketplace
              where sellers can list their services and clients can commission
              professional design work with confidence.
            </p>

            <div className="feature-list">
              {features.map((feature) => (
                <div key={feature}>
                  <BadgeCheck size={19} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="features-panel">
            <div className="feature-card active">
              <span>01</span>
              <h3>Discover Creative Sellers</h3>
              <p>
                Find talented designers based on service category, style, and
                business requirements.
              </p>
            </div>

            <div className="feature-card">
              <span>02</span>
              <h3>Commission Custom Work</h3>
              <p>
                Request personalized designs for campaigns, brands, products,
                and digital platforms.
              </p>
            </div>

            <div className="feature-card">
              <span>03</span>
              <h3>Build Brand Identity</h3>
              <p>
                Create consistent visuals across websites, print, ads, social
                media, and business communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="section-label dark-label">Start Your Project</span>
            <h2>Need a custom design for your brand?</h2>
            <p>
              Commission professional creative work and bring your visual idea
              to life with Limitless Design.
            </p>
          </div>

          <Link to="/contact" className="primary-btn white-btn">
            Commission Work <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
