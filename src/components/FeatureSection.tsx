import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    kicker: "NOS SERVICES",
    title1: "SOLUTIONS DIGITALES",
    title2: "ORIENTÉES",
    title3: "RÉSULTATS",
    intro:
      "SDG Techs, agence digital créée en 2016. Nous aidons les organisations de tout genre et entrepreneurs à maximiser leurs résultats grâce à des déploiements en ligne au meilleur prix. Stratégies sur-mesure, résultats rapides et mesurables, grâce à des professionnels polyvalents et des outils d'intelligence artificielle.",
    tabs: {
      satisfaction: "SATISFACTION",
      experts: "ÉQUIPE D'EXPERTS",
      mission: "MISSION & VISION",
    },
    content: {
      satisfaction:
        "Nous plaçons la satisfaction client au cœur de notre démarche. Chaque projet est suivi de près pour garantir des résultats optimaux. Notre engagement : des livrables de qualité, des délais respectés et un accompagnement personnalisé tout au long de notre collaboration.",
      experts:
        "Notre équipe d'experts certifiés combine compétences techniques et savoir-faire marketing. Du développement web à l'IA, en passant par le growth hacking et le graphisme, nous disposons de tous les talents pour propulser votre entreprise vers le succès digital.",
      mission:
        "Notre mission est de démocratiser l'accès aux solutions digitales performantes pour tous types d'organisations. Nous croyons en une technologie au service de l'humain, avec des stratégies innovantes et des outils IA de pointe pour des résultats mesurables et durables.",
    },
    bullets: [
      "Plus de 10 ans d'expérience",
      "Intervention en France, Belgique, USA, Canada, Suisse, Londres, Chine, Allemagne, Tunisie, Maroc, Bénin, Togo, Côte d'Ivoire, Congo, Cameroun, etc.",
      "Stratégies sur-mesure",
      "Spécialistes certifiés et outils IA",
    ],
    alts: {
      feature1: "Solutions digitales SDG Techs",
      img2: "Équipe d'experts SDG Techs",
    },
  },
  en: {
    kicker: "OUR SERVICES",
    title1: "DIGITAL SOLUTIONS",
    title2: "FOCUSED ON",
    title3: "RESULTS",
    intro:
      "SDG Techs is a digital agency founded in 2016. We help organizations of all kinds and entrepreneurs maximize their results through online execution at the best price. Tailor-made strategies and fast, measurable results, powered by versatile experts and AI tools.",
    tabs: {
      satisfaction: "SATISFACTION",
      experts: "EXPERT TEAM",
      mission: "MISSION & VISION",
    },
    content: {
      satisfaction:
        "We put client satisfaction at the center of our approach. Every project is closely monitored to deliver optimal outcomes. Our commitment: high-quality deliverables, respected timelines, and personalized support throughout our collaboration.",
      experts:
        "Our certified experts combine technical skills with marketing know-how. From web development to AI, including growth tactics and design, we bring together the talent needed to drive your business toward digital success.",
      mission:
        "Our mission is to make high-performing digital solutions accessible to all kinds of organizations. We believe in technology that serves people, with innovative strategies and cutting-edge AI tools for measurable, sustainable results.",
    },
    bullets: [
      "10+ years of experience",
      "Operations in France, Belgium, USA, Canada, Switzerland, London, China, Germany, Tunisia, Morocco, Benin, Togo, Côte d'Ivoire, Congo, Cameroon, and more.",
      "Tailor-made strategies",
      "Certified specialists and AI tools",
    ],
    alts: {
      feature1: "SDG Techs digital solutions",
      img2: "SDG Techs expert team",
    },
  },
} as const;

export default function FeatureSection() {
  const { language } = useI18n();
  const c = COPY[language];

  return (
    <div className="feture-area style-two pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="dreamit-section-title style-four text-left pb-3">
              <h5>{c.kicker}</h5>
              <h1>{c.title1}</h1>
              <h1>{c.title2}</h1>
              <h1>
                <span> {c.title3}</span>
              </h1>
              <p>
                {c.intro}
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="dreamit-department-tab">
              <ul className="nav nav-pills mb-30" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  ><span>{c.tabs.satisfaction}</span></a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  ><span>{c.tabs.experts}</span></a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  ><span>{c.tabs.mission}</span></a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="dreamit-department-tab-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tab-content-text">
                          <p>{c.content.satisfaction}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="dreamit-department-thumb">
                          <img src={IMG("resource/feature1.png")} alt={c.alts.feature1} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="dreamit-department-bottom-content-inner">
                          <ul>
                            <li><i className="fas fa-check" /><span>{c.bullets[0]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[1]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[2]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[3]}</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="dreamit-department-tab-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tab-content-text">
                          <p>{c.content.experts}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="dreamit-department-thumb">
                          <img src={IMG("resource/img-2.png")} alt={c.alts.img2} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="dreamit-department-bottom-content-inner">
                          <ul>
                            <li><i className="fas fa-check" /><span>{c.bullets[0]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[1]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[2]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[3]}</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="dreamit-department-tab-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tab-content-text">
                          <p>{c.content.mission}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="dreamit-department-thumb">
                          <img src={IMG("resource/feature1.png")} alt={c.alts.feature1} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="dreamit-department-bottom-content-inner">
                          <ul>
                            <li><i className="fas fa-check" /><span>{c.bullets[0]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[1]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[2]}</span></li>
                            <li><i className="fas fa-check" /><span>{c.bullets[3]}</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
