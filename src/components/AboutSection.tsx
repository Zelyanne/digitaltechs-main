import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    imageAlt: "SDG Techs - Agence marketing digital",
    kicker: "À propos",
    titleTop: "SDG TECHS",
    title: "AGENCE ",
    titleHighlight: "MARKETING DIGITAL",
    paragraph:
      "Agence marketing digital orientée résultats depuis 2018. Plus de 10 ans d'expérience, interventions en Afrique, Europe, Asie et Canada. Stratégies sur-mesure portées par des spécialistes certifiés et des outils IA pour maximiser votre chiffre d'affaires.",
    bullets: [
      "Plus de 10 ans d'expérience, projets menés au niveau supérieur",
      "Interventions en Afrique, Europe, Asie et Canada",
      "Spécialistes certifiés et outils d'intelligence artificielle",
    ],
    yearsAlt: "Plus de 10 ans d'expérience SDG Techs",
    cta: "PRENDRE RENDEZ-VOUS",
  },
  en: {
    imageAlt: "SDG Techs - Digital marketing agency",
    kicker: "About",
    titleTop: "SDG TECHS",
    title: "DIGITAL MARKETING ",
    titleHighlight: "AGENCY",
    paragraph:
      "A results-driven digital marketing agency since 2018. 10+ years of experience with projects across Africa, Europe, Asia, and Canada. Tailor-made strategies delivered by certified specialists and AI tools to maximize your revenue.",
    bullets: [
      "10+ years of experience, projects taken to the next level",
      "Projects across Africa, Europe, Asia, and Canada",
      "Certified specialists and artificial intelligence tools",
    ],
    yearsAlt: "10+ years of experience - SDG Techs",
    cta: "BOOK A CALL",
  },
} as const;

export default function AboutSection() {
  const { language } = useI18n();
  const c = COPY[language];

  return (
    <div id="about" className="about-area style-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="techno-about-thumb-box">
                <div className="techno-about-thumb-3">
                  <img src={IMG("about/about1.png")} alt={c.imageAlt} />
                </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row about-left">
              <div className="col-lg-12">
                <div className="dreamit-section-title style-four white">
                  <h5>{c.kicker}</h5>
                  <h1>{c.titleTop}</h1>
                  <h1>
                    {c.title}
                    <span className="color2">{c.titleHighlight}</span>
                  </h1>
                  <p className="pt-text">
                    {c.paragraph}
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="elementor-about-icon-box white pt-2">
                  <div className="about-icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="elementor-about-title">
                    <p>{c.bullets[0]}</p>
                  </div>
                  <div className="about-icon">
                    <i className="fas fa-check" />
                  </div>
                     <div className="elementor-about-title">
                    <p>{c.bullets[1]}</p>
                  </div>
                  <div className="about-icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="elementor-about-title">
                    <p>{c.bullets[2]}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="elementor-about-icon-box text-center pt-2">
                  <img src={IMG("about/years1.png")} alt={c.yearsAlt} />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12 text-center">
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
      </div>
    </div>
  );
}
