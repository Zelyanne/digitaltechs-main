import { useI18n } from "../i18n";

const COPY = {
  fr: {
    kicker: "SECTEURS D'ACTIVITÉ",
    title: "DES EXPERTISES ",
    titleHighlight: "ADAPTÉES",
    intro:
      "Nous accompagnons les entreprises avec des plans d'action précis, calibrés selon leur marché, leurs objectifs et leur maturité digitale.",
    sectors: [
      {
        icon: "fas fa-cart-shopping",
        title: "E-commerce",
        description: "Stratégies d'acquisition, automation et conversion pour faire évoluer vos ventes en ligne.",
      },
      {
        icon: "fas fa-building",
        title: "Immobilier",
        description: "Génération de leads qualifiés, visibilité locale et tunnels adaptés aux cycles longs.",
      },
      {
        icon: "fas fa-stethoscope",
        title: "Santé & Bien-être",
        description: "Communication de confiance, présence digitale réglementée et fidélisation des patients.",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Éducation",
        description: "Campagnes ciblées pour augmenter inscriptions, notoriété et engagement des apprenants.",
      },
      {
        icon: "fas fa-industry",
        title: "Industrie & B2B",
        description: "Positionnement expert, inbound marketing et contenus performants pour cycles complexes.",
      },
      {
        icon: "fas fa-utensils",
        title: "Restauration & Hôtellerie",
        description:
          "Visibilité locale, réservation directe et campagnes saisonnières axées sur la rentabilité.",
      },
    ],
  },
  en: {
    kicker: "INDUSTRIES",
    title: "EXPERTISE ",
    titleHighlight: "TAILORED",
    intro:
      "We support businesses with clear action plans tailored to their market, goals, and digital maturity.",
    sectors: [
      {
        icon: "fas fa-cart-shopping",
        title: "E-commerce",
        description: "Acquisition, automation, and conversion strategies to grow your online sales.",
      },
      {
        icon: "fas fa-building",
        title: "Real Estate",
        description: "Qualified lead generation, local visibility, and funnels built for longer cycles.",
      },
      {
        icon: "fas fa-stethoscope",
        title: "Health & Wellness",
        description: "Trust-based communication, compliant digital presence, and patient retention.",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Education",
        description: "Targeted campaigns to increase enrollments, awareness, and learner engagement.",
      },
      {
        icon: "fas fa-industry",
        title: "Industry & B2B",
        description: "Expert positioning, inbound marketing, and high-performing content for complex cycles.",
      },
      {
        icon: "fas fa-utensils",
        title: "Restaurants & Hospitality",
        description: "Local visibility, direct bookings, and seasonal campaigns focused on profitability.",
      },
    ],
  },
} as const;

export default function SectorSection() {
  const { language } = useI18n();
  const c = COPY[language];

  return (
    <div id="sectors" className="sector-activity-area pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title style-two text-center">
              <h5>{c.kicker}</h5>
              <h1>
                {c.title}
                <span>{c.titleHighlight}</span>
              </h1>
              <p>{c.intro}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {c.sectors.map((sector) => (
            <div key={sector.title} className="col-lg-4 col-md-6 col-sm-12">
              <div className="sector-activity-card">
                <div className="sector-icon-wrap">
                  <i className={sector.icon} />
                </div>
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
