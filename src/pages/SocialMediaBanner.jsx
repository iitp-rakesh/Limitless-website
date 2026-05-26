import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Eye,
  Image,
  Layers3,
  Megaphone,
  Palette,
  Sparkles,
  X,
} from "lucide-react";

const bannerSamples = [
  {
    title: "Fashion Sale Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Festival Offer Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Product Promotion Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Instagram Post Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Business Campaign Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Food Offer Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Brand Awareness Banner",
    image: "/images/social-media-banner/logo.webp",
  },
  {
    title: "Ecommerce Ad Banner",
    image: "/images/social-media-banner/logo.webp",
  },
];

const benefits = [
  "Scroll-stopping social media creatives for campaigns and promotions",
  "Platform-friendly sizes for Instagram, Facebook, LinkedIn, and YouTube",
  "Clean text hierarchy with strong call-to-action placement",
  "Perfect for ecommerce stores, startups, agencies, and creators",
  "High-quality export formats for ads, posts, stories, and banners",
  "Brand-consistent design using colors, typography, and visual identity",
];

const process = [
  {
    icon: Megaphone,
    title: "Campaign Understanding",
    text: "We understand your offer, audience, platform, brand style, and campaign goal before starting the creative.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    text: "We create a strong layout with attractive colors, readable text, product focus, and clear visual hierarchy.",
  },
  {
    icon: Layers3,
    title: "Final Banner Delivery",
    text: "You receive polished social media banners ready for posting, advertising, promotion, and brand marketing.",
  },
];

function SocialMediaBanner() {
  const [previewBanner, setPreviewBanner] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleBanners = showAll ? bannerSamples : bannerSamples.slice(0, 4);

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
        setPreviewBanner(null);
      }
    };

    if (previewBanner) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [previewBanner]);

  return (
    <>
      <section className="smb-v2-hero">
        <div className="container smb-v2-hero-grid">
          <div className="smb-v2-hero-content">
            <span className="section-label dark-label">
              <Sparkles size={16} />
              Creative Service
            </span>

            <h1>Social Media Banner</h1>

            <p>
              Create professional social media banners for Instagram, Facebook,
              LinkedIn, YouTube, ads, campaigns, offers, product promotions, and
              brand awareness.
            </p>

            <div className="smb-v2-hero-actions">
              <Link to="/contact" className="primary-btn">
                Commission Banner Work <ArrowRight size={18} />
              </Link>

              <a href="#social-banner-gallery" className="secondary-btn">
                View Samples
              </a>
            </div>
          </div>

          <div className="smb-v2-hero-card">
            <div className="smb-v2-card-icon">
              <Image size={34} />
            </div>

            <h3>High-Impact Social Creatives</h3>
            <p>
              Campaign-ready banners designed with clear message, premium
              visuals, strong CTA, and platform-friendly layout.
            </p>

            <div className="smb-v2-tags">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Ads</span>
              <span>Campaigns</span>
            </div>
          </div>
        </div>
      </section>

      <section className="smb-v2-gallery-section" id="social-banner-gallery">
        <div className="container">
          <div className="smb-v2-heading">
            <span className="section-label">Social Media Banner Gallery</span>
            <h2>Explore professional banner design styles</h2>
            <p>
              Showcase social media creatives, ad banners, festival campaigns,
              product promotions, and brand marketing designs in a clean
              portfolio-style grid.
            </p>
          </div>

          <div className="smb-v2-gallery-grid">
            {visibleBanners.map((item) => (
              <div className="smb-v2-card" key={item.title}>
                <div className="smb-v2-image-wrap">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="smb-v2-card-content">
                  <div className="smb-v2-card-info">
                    <h3>{item.title}</h3>
                    <span>Social Media Banner</span>
                  </div>

                  <div className="smb-v2-actions">
                    <button
                      type="button"
                      className="smb-v2-preview-btn"
                      onClick={() => setPreviewBanner(item)}
                    >
                      <Eye size={15} />
                      Preview
                    </button>

                    <button
                      type="button"
                      className="smb-v2-download-btn"
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

          {bannerSamples.length > 4 && (
            <div className="smb-v2-view-all-wrap">
              <button
                type="button"
                className="smb-v2-view-all-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View All Banner Designs"}
              </button>
            </div>
          )}
        </div>
      </section>

      {previewBanner && (
        <div
          className="smb-v2-modal-overlay"
          onClick={() => setPreviewBanner(null)}
        >
          <div
            className="smb-v2-modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="smb-v2-modal-close"
              onClick={() => setPreviewBanner(null)}
              aria-label="Close preview"
            >
              <X size={22} />
            </button>

            <div className="smb-v2-modal-image">
              <img src={previewBanner.image} alt={previewBanner.title} />
            </div>

            <div className="smb-v2-modal-footer">
              <div>
                <h3>{previewBanner.title}</h3>
                <p>Full banner preview</p>
              </div>

              <button
                type="button"
                className="smb-v2-download-btn"
                onClick={() => handleDownload(previewBanner)}
              >
                <Download size={15} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="smb-v2-detail-section">
        <div className="container smb-v2-detail-grid">
          <div className="smb-v2-detail-content">
            <span className="section-label">Service Details</span>

            <h2>What you get in Social Media Banner Design</h2>

            <p>
              Our social media banner design service helps businesses and
              creators communicate offers, launches, campaigns, and brand
              messages with professional visual quality.
            </p>

            <div className="smb-v2-benefit-list">
              {benefits.map((item) => (
                <div key={item}>
                  <BadgeCheck size={21} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="smb-v2-quote-card">
            <h3>Need a custom banner?</h3>

            <p>
              Share your platform, banner size, offer details, product images,
              brand colors, and content. We will create a professional banner
              direction for your campaign.
            </p>

            <Link to="/contact" className="primary-btn">
              Start Banner Project <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="smb-v2-process-section">
        <div className="container">
          <div className="smb-v2-heading">
            <span className="section-label">Our Process</span>
            <h2>Clear process, campaign-ready design</h2>
            <p>
              From campaign idea to final banner export, the process is simple,
              professional, and focused on better visual communication.
            </p>
          </div>

          <div className="smb-v2-process-grid">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div className="smb-v2-process-card" key={item.title}>
                  <div className="smb-v2-process-icon">
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

export default SocialMediaBanner;