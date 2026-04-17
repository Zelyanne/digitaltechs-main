import { useEffect } from "react";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    headingKicker: "VOS DÉFIS",
    heading: "RECONNAISSEZ-VOUS CES ",
    headingHighlight: "OBSTACLES",
    intro:
      "Diriger une activité demande du temps et de l'énergie. Voici les problèmes fréquents qui freinent votre croissance.",
    problems: [
      {
        title: "Entreprises & PME",
        issues: [
          "Manque de visibilité en ligne face à la concurrence.",
          "Difficulté à transformer les visiteurs en clients fidèles.",
          "Processus internes lents et répétitifs sans automatisation.",
          "Coûts marketing élevés pour des résultats incertains.",
        ],
        icon: "flaticon-suitcase",
      },
      {
        title: "Coachs & Consultants",
        issues: [
          "Agenda vide et difficulté à trouver des prospects qualifiés.",
          "Passer trop de temps sur l'administratif plutôt que le coaching.",
          "Absence de tunnel de vente automatisé efficace.",
          "Image de marque peu percutante sur les réseaux sociaux.",
        ],
        icon: "flaticon-user",
      },
      {
        title: "E-commerçants",
        issues: [
          "Taux d'abandon de panier trop élevé.",
          "Gestion client chronophage et manque de réactivité.",
          "Publicités (Ads) qui coûtent cher sans ROI garanti.",
          "Site web lent ou non optimisé pour la conversion mobile.",
        ],
        icon: "flaticon-bag",
      },
    ],
    ctaTitle: "Rassurez-vous, nous avons exactement ",
    ctaTitleHighlight: "ce qu'il vous faut.",
    ctaText:
      "SDG Techs transforme vos problématiques en opportunités de croissance grâce à nos solutions sur-mesure.",
    ctaButton: "DÉCOUVRIR NOS SOLUTIONS",
  },
  en: {
    headingKicker: "YOUR CHALLENGES",
    heading: "DO YOU RECOGNIZE THESE ",
    headingHighlight: "OBSTACLES",
    intro:
      "Running a business takes time and energy. Here are the common problems that hold growth back.",
    problems: [
      {
        title: "Businesses & SMEs",
        issues: [
          "Not enough online visibility compared to competitors.",
          "Hard to turn visitors into loyal customers.",
          "Slow, repetitive internal processes with no automation.",
          "High marketing costs with uncertain results.",
        ],
        icon: "flaticon-suitcase",
      },
      {
        title: "Coaches & Consultants",
        issues: [
          "An empty calendar and difficulty finding qualified leads.",
          "Spending too much time on admin instead of coaching.",
          "No effective automated sales funnel.",
          "A brand image that fails to stand out on social media.",
        ],
        icon: "flaticon-user",
      },
      {
        title: "E-commerce",
        issues: [
          "Cart abandonment rate is too high.",
          "Customer management is time-consuming and not responsive enough.",
          "Ads are expensive with no guaranteed ROI.",
          "A slow website or not optimized for mobile conversion.",
        ],
        icon: "flaticon-bag",
      },
    ],
    ctaTitle: "Don't worry, we have exactly ",
    ctaTitleHighlight: "what you need.",
    ctaText:
      "SDG Techs turns your challenges into growth opportunities with tailor-made solutions.",
    ctaButton: "DISCOVER OUR SOLUTIONS",
  },
} as const;

export default function ProblemSection() {
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    // Initialisation AOS ou autre si nécessaire, sinon simple effet visuel
  }, []);

  return (
    <div id="problems" className="about-area style-two pt-100 pb-100" style={{ background: "#f9f9f9" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title text-center pb-5">
              <h5>{c.headingKicker}</h5>
              <h1>
                {c.heading}
                <span>{c.headingHighlight}</span> ?
              </h1>
              <p className="mt-3">
                {c.intro}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {c.problems.map((p, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="techno-sinlge-service-box wow fadeInUp" data-wow-delay={`${i * 0.2}s`} style={{ 
                padding: "40px 30px", 
                borderRadius: "15px", 
                background: "#fff", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #eee"
              }}>
                <style>{`
                  .techno-sinlge-service-box:hover {
                    background: linear-gradient(100deg, #ff4500 0%, #ed2c41 100%) !important;
                    transform: translateY(-10px);
                  }
                  /* Accessibilité: Assurer un contraste élevé au hover */
                  .techno-sinlge-service-box:hover h2,
                  .techno-sinlge-service-box:hover li,
                  .techno-sinlge-service-box:hover p,
                  .techno-sinlge-service-box:hover i {
                    color: #ffffff !important;
                  }
                  /* Rendre l'icône de la liste plus visible sur le fond sombre */
                  .techno-sinlge-service-box:hover .fas.fa-times-circle {
                    color: #ffffff !important;
                    opacity: 0.9;
                  }
                  /* Focus visible pour la navigation au clavier */
                  .techno-sinlge-service-box:focus-within {
                    outline: 3px solid #ed2c41;
                    outline-offset: 4px;
                  }
                `}</style>
                <div className="techno-service-box-inner">
                  <div className="techno-service-content">
                    <div className="techno-service-icon" style={{ marginBottom: "25px" }}>
                      <i className={p.icon} style={{ fontSize: "50px", color: "#ed2c41", transition: "color 0.3s" }} />
                    </div>
                    <div className="techno-service-title">
                      <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "#333", transition: "color 0.3s" }}>{p.title}</h2>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {p.issues.map((issue, idx) => (
                          <li key={idx} style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", fontSize: "15px", color: "#444", transition: "color 0.3s" }}>
                            <i className="fas fa-times-circle" style={{ color: "#ed2c41", marginRight: "10px", marginTop: "4px", transition: "color 0.3s" }} />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Solution CTA */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <div className="solution-cta-box p-5 wow zoomIn" style={{ 
              background: "linear-gradient(135deg, #1d1d1d 0%, #333 100%)", 
              borderRadius: "20px",
              color: "#fff",
              position: "relative",
              overflow: "hidden"
            }}>
              <div className="cta-content" style={{ position: "relative", zIndex: 2 }}>
                <h2 className="text-white mb-3" style={{ fontSize: "32px" }}>
                  {c.ctaTitle}
                  <span>{c.ctaTitleHighlight}</span>
                </h2>
                <p className="mb-4" style={{ fontSize: "18px", opacity: 0.9 }}>
                  {c.ctaText}
                </p>
                <div className="dreamit-btn mt-3">
                  <a href="#services" className="active" style={{ 
                    background: "linear-gradient(100deg, #ff4500 0%, #ed2c41 100%)", 
                    color: "#fff", 
                    padding: "15px 40px", 
                    borderRadius: "30px", 
                    textDecoration: "none", 
                    fontWeight: "600",
                    display: "inline-block",
                    boxShadow: "0 10px 20px rgba(237, 44, 65, 0.3)"
                  }}>
                    {c.ctaButton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
