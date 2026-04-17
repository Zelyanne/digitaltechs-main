import { useEffect, useRef } from "react";
import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    clientsTitle: "MES ",
    clientsHighlight: "CLIENTS",
    partnersTitle: "MES ",
    partnersHighlight: "PARTENAIRES",
    clientAlt: "Logo client SDG Techs",
    partnerAlt: "Logo partenaire SDG Techs",
  },
  en: {
    clientsTitle: "OUR ",
    clientsHighlight: "CLIENTS",
    partnersTitle: "OUR ",
    partnersHighlight: "PARTNERS",
    clientAlt: "SDG Techs client logo",
    partnerAlt: "SDG Techs partner logo",
  },
} as const;

const clients = [
  "resource/brand1.png", "resource/brand2.png", "resource/brand3.png", "resource/brand4.png",
  "resource/brand5.png", "resource/brand6.png", "resource/brand7.png", "resource/brand8.png",
  "resource/brand9.png", "resource/brand10.png", "resource/brand11.png", "resource/brand12.png",
];

const partners = [
  "resource/google-partner.png", "resource/meta-partner.webp", "resource/microsoft-partner.png",
  "resource/ovh-partner.webp", "resource/airtable-partner.png",
  "resource/tiktok.svg", "resource/brevo.svg", "resource/stape.svg", "resource/n8n.svg",
];

export default function BrandSection() {
  const clientCarouselRef = useRef<HTMLDivElement>(null);
  const partnerCarouselRef = useRef<HTMLDivElement>(null);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    let destroyed = false;
    const $ = (window as any).$;

    const destroy = (el: HTMLDivElement | null) => {
      if (!el || !$?.fn?.owlCarousel) return;
      try {
        const $el = $(el);
        if ($el.data("owl.carousel")) {
          $el.trigger("destroy.owl.carousel");
          $el.removeClass("owl-loaded");
        }
      } catch {
        // ignore
      }
    };

    const init = () => {
      if (destroyed) return;
      const $local = (window as any).$;
      if (!$local?.fn?.owlCarousel) {
        window.setTimeout(init, 150);
        return;
      }

      const baseOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 700,
        autoplayHoverPause: false,
        dots: false,
        center: false,
        nav: false,
        navText: [
          "<i class='fa fa-long-arrow-left'></i>",
          "<i class='fa fa-long-arrow-right'></i>",
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1000: { items: 5 },
          1400: { items: 5 },
          1920: { items: 5 },
        },
      };

      destroy(clientCarouselRef.current);
      destroy(partnerCarouselRef.current);

      if (clientCarouselRef.current) {
        $local(clientCarouselRef.current).owlCarousel({
          ...baseOptions,
          rtl: false,
        });
      }

      if (partnerCarouselRef.current) {
        $local(partnerCarouselRef.current).owlCarousel({
          ...baseOptions,
          rtl: true,
        });
      }
    };

    const timer = window.setTimeout(init, 250);
    return () => {
      destroyed = true;
      window.clearTimeout(timer);
      destroy(clientCarouselRef.current);
      destroy(partnerCarouselRef.current);
    };
  }, [language]);

  return (
    <>
      <div id="brand-area" className="brand-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <div className="dreamit-section-title2 white text-left center">
                  <h1>
                    {c.clientsTitle}<span>{c.clientsHighlight}</span>
                  </h1>
                </div>
            </div>
          </div>
          <div className="row">
            <div ref={clientCarouselRef} className="sdg-brand-list sdg-brand-list--clients owl-carousel">
              {clients.map((src, i) => (
                <div key={`client-${i}`} className="col-lg-12 col-md-12">
                  <div className="dreamit-single-brand">
                    <div
                      className="brand-thumb"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "80px",
                        padding: "10px",
                      }}
                    >
                      <img
                        src={IMG(src)}
                        alt={c.clientAlt}
                        style={{
                          maxWidth: "120px",
                          maxHeight: "60px",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="partner-area" className="brand-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <div className="dreamit-section-title2 white text-left center">
                  <h1>
                    {c.partnersTitle}<span>{c.partnersHighlight}</span>
                  </h1>
                </div>
            </div>
          </div>
          <div className="row">
            <div ref={partnerCarouselRef} className="sdg-brand-list sdg-brand-list--partners owl-carousel">
              {partners.map((src, i) => (
                <div key={`partner-${i}`} className="col-lg-12 col-md-12">
                  <div className="dreamit-single-brand">
                    <div
                      className="brand-thumb"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "80px",
                        padding: "10px",
                      }}
                    >
                      <img
                        src={IMG(src)}
                        alt={c.partnerAlt}
                        style={{
                          maxWidth: "120px",
                          maxHeight: "60px",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Fallback: OwlCarousel hides carousels until initialized */
        #brand-area .owl-carousel:not(.owl-loaded),
        #partner-area .owl-carousel:not(.owl-loaded) {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          gap: 24px;
          overflow: hidden;
        }
        #brand-area .owl-carousel:not(.owl-loaded) > div,
        #partner-area .owl-carousel:not(.owl-loaded) > div {
          flex: 0 0 auto !important;
          width: auto !important;
          max-width: none !important;
        }
      `}</style>
    </>
  );
}
