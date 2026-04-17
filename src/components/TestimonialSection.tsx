import { useEffect, useRef } from "react";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    kicker: "TÉMOIGNAGES",
    title1: "CE QUE NOS CLIENTS DISENT",
    title2: "DE NOUS",
    cta: "PRENDRE RENDEZ-VOUS",
    testimonials: [
      {
        name: "Jean Dupont",
        role: "CEO, TechStartup",
        text:
          "SDG Techs a transformé notre présence en ligne. Grâce à leur expertise en growth hacking et en publicité payante, nous avons vu notre trafic augmenter de 300% en seulement 3 mois.",
      },
      {
        name: "Marie Martin",
        role: "Directrice Marketing, E-commerce Plus",
        text:
          "L'équipe de SDG Techs est professionnelle, réactive et extrêmement compétente. Ils ont réussi à doubler notre taux de conversion grâce à leurs stratégies de CRO et d'optimisation de landing pages.",
      },
      {
        name: "Sophie Laurent",
        role: "Fondatrice, GreenSolutions",
        text:
          "Je recommande vivement SDG Techs pour toute entreprise souhaitant accélérer sa croissance digitale. Leur approche data-driven et leur maîtrise des outils d'IA ont fait toute la différence pour notre entreprise.",
      },
      {
        name: "Koffi Mensah",
        role: "Entrepreneur, Cotonou - Bénin",
        text:
          "Une agence qui comprend réellement les défis du marché africain. Leur accompagnement sur nos campagnes Ads au Bénin a été exceptionnel. Je recommande les yeux fermés.",
      },
      {
        name: "Amina Diallo",
        role: "Coach en Leadership, Dakar - Sénégal",
        text:
          "Grâce à SDG Techs, j'ai enfin un tunnel de vente qui travaille pour moi. Mes prises de rendez-vous ont doublé en moins d'un mois. Une expertise IA bluffante !",
      },
      {
        name: "Moussa Traoré",
        role: "Directeur, Traoré Industrie",
        text:
          "Leur approche du marketing digital est innovante et surtout axée sur le ROI. Nous avons modernisé toute notre image de marque et nos processus commerciaux grâce à eux.",
      },
    ],
  },
  en: {
    kicker: "TESTIMONIALS",
    title1: "WHAT OUR CLIENTS SAY",
    title2: "ABOUT US",
    cta: "BOOK A CALL",
    testimonials: [
      {
        name: "Jean Dupont",
        role: "CEO, TechStartup",
        text:
          "SDG Techs transformed our online presence. Thanks to their expertise in growth tactics and paid advertising, our traffic increased by 300% in just 3 months.",
      },
      {
        name: "Marie Martin",
        role: "Marketing Director, E-commerce Plus",
        text:
          "The SDG Techs team is professional, responsive, and extremely skilled. They doubled our conversion rate thanks to their CRO strategies and landing page optimization.",
      },
      {
        name: "Sophie Laurent",
        role: "Founder, GreenSolutions",
        text:
          "I highly recommend SDG Techs for any business looking to accelerate its digital growth. Their data-driven approach and mastery of AI tools made all the difference for us.",
      },
      {
        name: "Koffi Mensah",
        role: "Entrepreneur, Cotonou - Benin",
        text:
          "An agency that truly understands the challenges of African markets. Their support on our ad campaigns in Benin was outstanding. Highly recommended.",
      },
      {
        name: "Amina Diallo",
        role: "Leadership Coach, Dakar - Senegal",
        text:
          "With SDG Techs, I finally have a sales funnel working for me. My bookings doubled in less than a month. Their AI expertise is impressive!",
      },
      {
        name: "Moussa Traoré",
        role: "Director, Traoré Industrie",
        text:
          "Their digital marketing approach is innovative and strongly ROI-focused. We modernized our brand image and commercial processes thanks to them.",
      },
    ],
  },
} as const;

export default function TestimonialSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const $ = (window as any).$;
    if (!carouselRef.current || !$?.fn?.owlCarousel) return;
    
    const $el = $(carouselRef.current);

    if ($el.data("owl.carousel")) {
      try {
        $el.trigger("destroy.owl.carousel");
        $el.removeClass("owl-loaded");
      } catch {
        // ignore
      }
    }

    $el.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      margin: 30,
      dots: true,
      nav: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
      },
    });
    
    return () => {
      try { $el.trigger("destroy.owl.carousel"); } catch (e) {}
    };
  }, [language]);

  return (
    <div className="testimonial-area pt-100 pb-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title text-center pb-5">
              <h5>{c.kicker}</h5>
              <h1>{c.title1}</h1>
              <h1><span>{c.title2}</span></h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div ref={carouselRef} className="owl-carousel">
            {c.testimonials.map((t, i) => (
                <div key={i} className="item">
                <div className="single-testimonial" style={{ 
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                  textAlign: "center",
                  margin: "15px 5px",
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                  <div className="testimonial-content">
                    <div style={{ marginBottom: "15px", color: "#ffc107", fontSize: "18px" }}>
                      ★★★★★
                    </div>
                    <p style={{ 
                      fontStyle: "italic", 
                      color: "#555", 
                      marginBottom: "20px",
                      lineHeight: "1.6",
                      fontSize: "15px"
                    }}>
                      "{t.text}"
                    </p>
                    <h4 style={{ fontWeight: "700", marginBottom: "5px", fontSize: "18px" }}>{t.name}</h4>
                    <p style={{ color: "#888", fontSize: "13px", margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 text-center" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <a
              href="https://cal.com/sdg-techs/30min"
              target="_blank"
              rel="noreferrer"
              className="dreamit-btn"
              style={{
                background: "linear-gradient(100deg, #ff4500 0%, #ed2c41 100%)", 
                color: "#fff", 
                padding: "15px 40px", 
                borderRadius: "30px", 
                boxShadow: "0 10px 24px rgba(237, 44, 65, 0.28)",
                textDecoration: "none", 
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              {c.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
