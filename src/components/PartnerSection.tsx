import { useEffect, useRef } from "react";
import { IMG } from "../utils/images";

const partners = [
  "resource/google-partner.png",
  "resource/meta-partner.webp",
  "resource/microsoft-partner.png",
  "resource/ovh-partner.webp",
  "resource/airtable-partner.png",
];

export default function PartnerSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject custom CSS to override theme defaults for this specific section
    const styleId = "partner-custom-css";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        #partner-area.brand-area.style-two {
          background-color: #1a1a1a !important;
          background-image: none !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    const $ = (window as any).$;
    if (!carouselRef.current || !$?.fn?.owlCarousel) return;
    const $el = $(carouselRef.current);
    if ($el.data("owl.carousel")) {
      $el.trigger("destroy.owl.carousel");
      $el.removeClass("owl-loaded");
    }
    $el.owlCarousel({
      rtl: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 200,
      margin: 0,
      dots: false,
      center: false,
      nav: false,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      responsive: {
        0: { items: 1, margin: 5 },
        600: { items: 2, margin: 5 },
        768: { items: 3, margin: 5 },
        992: { items: 4, margin: 5 },
        1000: { items: 5, margin: 5 },
        1400: { items: 5, margin: 5 },
        1920: { items: 5, margin: 5 },
      },
    });
    return () => {
      try { $el.trigger("destroy.owl.carousel"); } catch { /* ignore */ }
    };
  }, []);

  return (
    <div id="partner-area" className="brand-area style-two" style={{ backgroundColor: "transparent", borderTop: "none", marginTop: "-30px", paddingBottom: "80px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title2 white text-left center">
              <h1>NOS <span>PARTENAIRES</span></h1>
            </div>
          </div>
        </div>
        <div className="row" dir="rtl">
          <div ref={carouselRef} className="brand-list owl-carousel">
            {partners.map((src, i) => (
              <div key={i} className="col-lg-12 col-md-12">
                <div className="dreamit-single-brand">
                  <div className="brand-thumb" style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    height: "80px",
                    padding: "10px",
                  }}>
                    <img src={IMG(src)} alt="Logo partenaire STAPES" style={{ 
                      maxWidth: "120px", 
                      maxHeight: "60px", 
                      width: "auto", 
                      height: "auto", 
                      objectFit: "contain" 
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}