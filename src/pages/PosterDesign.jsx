import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Eye,
  GalleryVerticalEnd,
  Layers3,
  Megaphone,
  Palette,
  Sparkles,
  X,
} from "lucide-react";

const posterSamples = [
  {
    title: "Event Poster",
    image: "/images/poster-design/poster-1.webp",
  },
  {
    title: "Festival Poster",
    image: "/images/poster-design/poster-2.webp",
  },
  {
    title: "Product Launch Poster",
    image: "/images/poster-design/poster-3.webp",
  },
  {
    title: "Sale Offer Poster",
    image: "/images/poster-design/poster-4.webp",
  },
  {
    title: "Awareness Poster",
    image: "/images/poster-design/poster-5.webp",
  },
  {
    title: "Business Poster",
    image: "/images/poster-design/poster-6.webp",
  },
  {
    title: "Educational Poster",
    image: "/images/poster-design/poster-7.webp",
  },
  {
    title: "Social Campaign Poster",
    image: "/images/poster-design/poster-8.webp",
  },
];

const benefits = [
  "Professional poster designs for events, offers, campaigns, and promotions",
  "Strong visual hierarchy with bold headline and clear message placement",
  "Perfect for schools, NGOs, brands, businesses, creators, and agencies",
  "Print-ready and digital-ready poster formats",
  "Attractive color, typography, layout, and CTA direction",
  "High-quality export for social media, website, WhatsApp, and printing",
];

const process = [
  {
    icon: Megaphone,
    title: "Message Understanding",
    text: "We understand your poster purpose, audience, content, brand style, and promotion goal before starting the design.",
  },
  {
    icon: Palette,
    title: "Creative Layout",
    text: "We create a professional layout with bold headline, balanced spacing, strong visuals, and readable content.",
  },
  {
    icon: Layers3,
    title: "Final Poster Delivery",
    text: "You receive polished poster files ready for digital promotion, social media, printing, and campaign use.",
  },
];

function PosterDesign() {
  const [previewPoster, setPreviewPoster] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePosters = showAll ? posterSamples : posterSamples.slice(0, 4);

  const getFileName = (title) => {
    return `${title.toLowerCase().replace(/\s+/g, "-")}.webp`;
  };

  const handleDownload = async (item) => {
    try {
      const response = await fetch(item.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = getFileName(item.title);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      window.open(item.image, "_blank");
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setPreviewPoster(null);
      }
    };

    if (previewPoster) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [previewPoster]);

  return (
    <>
      <section className="pd-page-hero">
        <div className="container pd-page-hero-grid">
          <div className="pd-page-hero-content">
            <span className="section-label dark-label">
              <Sparkles size={16} />
              Creative Service
            </span>

            <h1>Poster Design</h1>

            <p>
              Create powerful and professional poster designs for events,
              launches, offers, awareness campaigns, schools, NGOs, brands,
              social media promotions, and business marketing.
            </p>

            <div className="pd-page-hero-actions">
              <Link to="/contact" className="primary-btn">
                Commission Poster Work <ArrowRight size={18} />
              </Link>

              <a href="#poster-design-gallery" className="secondary-btn">
                View Samples
              </a>
            </div>
          </div>

          <div className="pd-page-hero-card">
            <div className="pd-page-card-icon">
              <GalleryVerticalEnd size={34} />
            </div>

            <h3>Impactful Poster Designs</h3>

            <p>
              Professionally designed posters with bold typography, attractive
              visuals, clean spacing, strong messaging, and business-ready
              presentation.
            </p>

            <div className="pd-page-tags">
              <span>Events</span>
              <span>Offers</span>
              <span>Campaigns</span>
              <span>Print</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-page-gallery-section" id="poster-design-gallery">
        <div className="container">
          <div className="pd-page-heading">
            <span className="section-label">Poster Design Gallery</span>
            <h2>Explore professional poster design styles</h2>
            <p>
              Showcase event posters, offer posters, campaign posters, product
              launch posters, and awareness posters in a clean portfolio-style
              grid.
            </p>
          </div>

          <div className="pd-page-gallery-grid">
            {visiblePosters.map((item) => (
              <div className="pd-page-card" key={item.title}>
                <div className="pd-page-image-wrap">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="pd-page-card-content">
                  <div className="pd-page-card-info">
                    <h3>{item.title}</h3>
                    <span>Poster Design</span>
                  </div>

                  <div className="pd-page-actions">
                    <button
                      type="button"
                      className="pd-page-preview-btn"
                      onClick={() => setPreviewPoster(item)}
                    >
                      <Eye size={15} />
                      Preview
                    </button>

                    <button
                      type="button"
                      className="pd-page-download-btn"
                      onClick={() => handleDownload(item)}
                    >
                      <Download size={15} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {posterSamples.length > 4 && (
            <div className="pd-page-view-all-wrap">
              <button
                type="button"
                className="pd-page-view-all-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View All Poster Designs"}
              </button>
            </div>
          )}
        </div>
      </section>

      {previewPoster && (
        <div
          className="pd-page-modal-overlay"
          onClick={() => setPreviewPoster(null)}
        >
          <div
            className="pd-page-modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="pd-page-modal-close"
              onClick={() => setPreviewPoster(null)}
              aria-label="Close preview"
            >
              <X size={22} />
            </button>

            <div className="pd-page-modal-image">
              <img src={previewPoster.image} alt={previewPoster.title} />
            </div>

            <div className="pd-page-modal-footer">
              <div>
                <h3>{previewPoster.title}</h3>
                <p>Full poster preview</p>
              </div>

              <button
                type="button"
                className="pd-page-download-btn"
                onClick={() => handleDownload(previewPoster)}
              >
                <Download size={15} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="pd-page-detail-section">
        <div className="container pd-page-detail-grid">
          <div className="pd-page-detail-content">
            <span className="section-label">Service Details</span>

            <h2>What you get in Poster Design</h2>

            <p>
              Our poster design service helps businesses and creators promote
              events, products, offers, awareness messages, and campaigns with
              professional visual quality and clear communication.
            </p>

            <div className="pd-page-benefit-list">
              {benefits.map((item) => (
                <div key={item}>
                  <BadgeCheck size={21} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="pd-page-quote-card">
            <h3>Need a custom poster?</h3>

            <p>
              Share your poster size, title, content, brand colors, images,
              logo, and design reference. We will create a professional poster
              direction for your campaign.
            </p>

            <Link to="/contact" className="primary-btn">
              Start Poster Project <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="pd-page-process-section">
        <div className="container">
          <div className="pd-page-heading">
            <span className="section-label">Our Process</span>
            <h2>Clear process, high-impact poster output</h2>
            <p>
              From idea to final poster export, the process is simple,
              professional, and focused on strong visual communication.
            </p>
          </div>

          <div className="pd-page-process-grid">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div className="pd-page-process-card" key={item.title}>
                  <div className="pd-page-process-icon">
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
    </>
  );
}

export default PosterDesign;