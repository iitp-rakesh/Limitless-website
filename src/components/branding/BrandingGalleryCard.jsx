import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

function BrandingGalleryCard({ item }) {
  return (
    <article className="bmpro-card">
      <div className="bmpro-card-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="bmpro-card-body">
        <div className="bmpro-card-info">
          <h3>{item.title}</h3>
          <span>Branding Materials</span>
        </div>

        <Link
          to={`/services/branding-materials/${item.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bmpro-open-btn"
        >
          <Eye size={15} />
          Open
        </Link>
      </div>
    </article>
  );
}

export default BrandingGalleryCard;