import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";

type Pack = {
  badge: string;
  title: string;
  ideal: string;
  features: string[];
  bonus?: string;
  tagline: string;
  accent1: string;
  accent2: string;
  featured?: boolean;
};

type ElitePack = {
  badge: string;
  title: string;
  ideal: string;
  price: string;
  features: string[];
  tagline: string;
  accent1: string;
  accent2: string;
};

const COPY = {
  fr: {
    kicker: "NOS OFFRES",
    title: "CHOISISSEZ VOTRE ",
    titleHighlight: "PACK",
    intro: "Des formules adaptées à chaque étape de votre croissance digitale",
    featuredBadge: "POPULAIRE",
    idealFor: "Idéal pour :",
    contactUs: "CONTACTEZ-NOUS",
    bonusLabel: "🎁 Bonus:",
    startNow: "COMMENCER MAINTENANT",
    wantMore: "Vous en voulez plus ?",
    discoverElite: "DÉCOUVRIR LE PACK ÉLITE",
    elitePriceLabel: "SUR DEVIS",
    everythingIncluded: "Tout compris :",
    requestQuote: "DEMANDER UN DEVIS",
    packs: [
      {
        badge: "PACK STARTER",
        title: "Visibilité Garantie",
        ideal: "Freelances, coachs, consultants, commerçants qui débutent en ligne",
        features: [
          "🌐 Site web professionnel 5 pages (mobile-first, ultra-rapide)",
          "✍️ Rédaction du contenu optimisé SEO incluse",
          "📍 Référencement Google local (Google My Business)",
          "📱 Intégration réseaux sociaux",
          "📬 Formulaire de contact + appel à l'action",
          "✅ Livraison en 7 jours ouvrés",
        ],
        bonus: "1 mois de support technique gratuit",
        tagline: "Votre carte de visite digitale, disponible 24h/24, sans vous ruiner.",
        accent1: "#ff4500",
        accent2: "#292643",
      },
      {
        badge: "PACK GROWTH",
        title: "Acquisition Clients",
        ideal: "TPE, PME, entrepreneurs qui veulent générer des leads réguliers",
        features: [
          "Tout le Pack Starter + ou :",
          "🎯 Tunnel de vente complet (page de capture + page de vente + thank you page)",
          "📧 Séquence d'emails automatisés (5 emails de nurturing)",
          "🤖 Agent IA de qualification des prospects",
          "📊 Tableau de bord analytique (Google Analytics + heatmap)",
          "📅 Intégration prise de RDV automatique (Calendly)",
          "🔁 1 campagne publicitaire Meta Ads ou Google Ads configurée",
          "✅ Livraison en 14 jours ouvrés",
        ],
        bonus: "Audit de votre présence digitale actuelle (valeur 200 €)",
        tagline: "Un système qui attire, capture et relance vos prospects, même quand vous dormez.",
        accent1: "#ff4500",
        accent2: "#292643",
      },
      {
        badge: "PACK SCALE",
        title: "Croissance Automatisée",
        ideal: "PME ambitieuses, startups, coachs & consultants en pleine croissance",
        features: [
          "Tout le Pack Growth + ou :",
          "🔥 Stratégie marketing digitale complète sur 3 mois",
          "📈 SEO avancé (audit + optimisation + création de contenu mensuel)",
          "📣 Gestion réseaux sociaux (3 publications/semaine pendant 1 mois)",
          "💌 Email marketing mensuel (newsletters + séquences de vente)",
          "⚡ Growth hacking & stratégies d'acquisition sur mesure",
          "🤖 Agents IA personnalisés (chatbot, relance automatique, CRM)",
          "📞 Suivi mensuel avec rapport de performance détaillé",
          "✅ Livraison en 21 jours ouvrés",
        ],
        bonus: "Session stratégie 1h en visio avec l'expert Gislain (valeur 300 €)",
        tagline: "Votre département marketing complet, sans recruter une équipe.",
        accent1: "#ff7a18",
        accent2: "#292643",
        featured: true,
      },
    ] satisfies Pack[],
    elitePack: {
      badge: "PACK ÉLITE",
      title: "Partenariat Stratégique",
      ideal: "Entreprises établies, hôtels, cliniques, e-commerces, franchises",
      price: "Sur devis personnalisé",
      features: [
        "🏗️ Refonte complète de l'écosystème digital",
        "🛒 Site e-commerce ou plateforme sur mesure",
        "🌍 Stratégie multicanale (SEO + Ads + Social + Email + IA)",
        "📊 Reporting hebdomadaire + réunion mensuelle",
        "🔒 Accompagnement sur 6 à 12 mois",
        "🤝 Gestionnaire de compte dédié",
      ],
      tagline: "Un partenariat premium, sur devis, pour accélérer votre croissance.",
      accent1: "#ff4500",
      accent2: "#292643",
    } satisfies ElitePack,
  },
  en: {
    kicker: "OUR PLANS",
    title: "CHOOSE YOUR ",
    titleHighlight: "PACKAGE",
    intro: "Packages designed for every stage of your digital growth",
    featuredBadge: "POPULAR",
    idealFor: "Ideal for:",
    contactUs: "CONTACT US",
    bonusLabel: "🎁 Bonus:",
    startNow: "GET STARTED",
    wantMore: "Want more?",
    discoverElite: "DISCOVER THE ELITE PACK",
    elitePriceLabel: "CUSTOM QUOTE",
    everythingIncluded: "Everything included:",
    requestQuote: "REQUEST A QUOTE",
    packs: [
      {
        badge: "STARTER PACK",
        title: "Guaranteed Visibility",
        ideal: "Freelancers, coaches, consultants, and small businesses starting online",
        features: [
          "🌐 5-page professional website (mobile-first, ultra-fast)",
          "✍️ SEO-optimized copywriting included",
          "📍 Local Google SEO (Google Business Profile)",
          "📱 Social media integration",
          "📬 Contact form + clear call-to-action",
          "✅ Delivery in 7 business days",
        ],
        bonus: "1 month of free technical support",
        tagline: "Your digital business card, available 24/7, without breaking the bank.",
        accent1: "#ff4500",
        accent2: "#292643",
      },
      {
        badge: "GROWTH PACK",
        title: "Customer Acquisition",
        ideal: "SMBs and entrepreneurs who want consistent lead generation",
        features: [
          "Everything in the Starter Pack, plus:",
          "🎯 Full sales funnel (lead capture + sales page + thank-you page)",
          "📧 Automated email sequence (5 nurturing emails)",
          "🤖 AI agent to qualify prospects",
          "📊 Analytics dashboard (Google Analytics + heatmap)",
          "📅 Automated booking integration (Calendly)",
          "🔁 1 Meta Ads or Google Ads campaign setup",
          "✅ Delivery in 14 business days",
        ],
        bonus: "Audit of your current digital presence (value €200)",
        tagline: "A system that attracts, captures, and follows up with prospects, even while you sleep.",
        accent1: "#ff4500",
        accent2: "#292643",
      },
      {
        badge: "SCALE PACK",
        title: "Automated Growth",
        ideal: "Ambitious SMEs, startups, and fast-growing coaches & consultants",
        features: [
          "Everything in the Growth Pack, plus:",
          "🔥 Complete 3-month digital marketing strategy",
          "📈 Advanced SEO (audit + optimization + monthly content)",
          "📣 Social media management (3 posts/week for 1 month)",
          "💌 Monthly email marketing (newsletters + sales sequences)",
          "⚡ Growth tactics and tailored acquisition strategies",
          "🤖 Custom AI agents (chatbot, automated follow-up, CRM)",
          "📞 Monthly performance review with detailed reporting",
          "✅ Delivery in 21 business days",
        ],
        bonus: "1-hour strategy session with Gislain (video call, value €300)",
        tagline: "Your full marketing department, without hiring a team.",
        accent1: "#ff7a18",
        accent2: "#292643",
        featured: true,
      },
    ] satisfies Pack[],
    elitePack: {
      badge: "ELITE PACK",
      title: "Strategic Partnership",
      ideal: "Established companies, hotels, clinics, e-commerce brands, franchises",
      price: "Custom quote",
      features: [
        "🏗️ Full redesign of your digital ecosystem",
        "🛒 E-commerce site or custom platform",
        "🌍 Multi-channel strategy (SEO + Ads + Social + Email + AI)",
        "📊 Weekly reporting + monthly meeting",
        "🔒 Support for 6 to 12 months",
        "🤝 Dedicated account manager",
      ],
      tagline: "A premium partnership to accelerate your growth.",
      accent1: "#ff4500",
      accent2: "#292643",
    } satisfies ElitePack,
  },
} as const;

export default function PricingSection() {
  const [showElite, setShowElite] = useState(false);
  const eliteRef = useRef<HTMLDivElement>(null);
  const { language } = useI18n();
  const c = COPY[language];
  const packs = c.packs;
  const elitePack = c.elitePack;

  useEffect(() => {
    if (!showElite) return;
    const t = window.setTimeout(() => {
      const el = eliteRef.current;
      if (!el) return;
      const headerOffset = 110;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }, 0);
    return () => window.clearTimeout(t);
  }, [showElite]);

  return (
    <div id="pricing" className="pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title text-center pb-5">
              <h5>{c.kicker}</h5>
              <h1>
                {c.title}
                <span>{c.titleHighlight}</span>
              </h1>
              <p>{c.intro}</p>
            </div>
          </div>
        </div>

        {!showElite ? (
          <>
            <div className="row">
              {packs.map((pack, index) => (
                <div key={index} className={`col-lg-4 col-md-6 col-sm-12 ${pack.featured ? "featured-pack" : ""}`}>
                  <div 
                    className="pricing-card"
                    style={{
                      // used by CSS for gradient accents
                      ["--accent1" as any]: pack.accent1,
                      ["--accent2" as any]: pack.accent2,
                    }}
                  >
                    {pack.featured && (
                      <div className="featured-badge">
                        {c.featuredBadge}
                      </div>
                    )}
                    <div className="pricing-header">
                      <span 
                        className="pack-badge"
                      >
                        {pack.badge}
                      </span>
                      <h3 className="pack-title">{pack.title}</h3>
                      <p className="pack-ideal">
                        <span className="ideal-label">{c.idealFor}</span> {pack.ideal}
                      </p>
                    </div>
                    <div className="pricing-price">
                      <span className="price-contact">
                        {c.contactUs}
                      </span>
                    </div>
                    <ul className="pricing-features">
                      {pack.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    {pack.bonus && (
                      <div className="pricing-bonus">
                        <strong>{c.bonusLabel}</strong> {pack.bonus}
                      </div>
                    )}
                    <div className="pricing-footer">
                    <a 
                      href="#contact" 
                      className="pricing-btn"
                    >
                      {c.startNow}
                    </a>
                    </div>
                    <p className="pack-tagline">{pack.tagline}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-4">
              <div
                className="col-lg-12 text-center"
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <p className="elite-text">{c.wantMore}</p>
                <button onClick={() => setShowElite(true)} className="elite-btn" type="button">
                  {c.discoverElite}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div ref={eliteRef} className="elite-card">
                <button 
                  onClick={() => setShowElite(false)}
                  className="elite-close"
                >
                  ✕
                </button>
                <div className="elite-card-inner">
                  <div className="elite-left">
                    <span 
                      className="pack-badge"
                    >
                      {elitePack.badge}
                    </span>
                    <h3 className="pack-title">{elitePack.title}</h3>
                    <p className="pack-ideal">
                      <span className="ideal-label">Idéal pour :</span> {elitePack.ideal}
                    </p>
                    <div className="elite-price">
                      <span className="price-label">{c.elitePriceLabel}</span>
                      <span className="price-value">{elitePack.price}</span>
                    </div>
                    <p className="pack-tagline">{elitePack.tagline}</p>
                  </div>
                  <div className="elite-right">
                    <h4 className="elite-features-title">{c.everythingIncluded}</h4>
                    <ul className="pricing-features">
                      {elitePack.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <a 
                      href="#contact" 
                      className="pricing-btn"
                    >
                      {c.requestQuote}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        .pricing-area {
          padding: 100px 0 70px;
          background: linear-gradient(180deg, #fffaf7 0%, #ffffff 55%, #fffaf7 100%);
        }
        .pricing-card {
          position: relative;
          border: 1px solid rgba(41, 38, 67, 0.12);
          border-top: 4px solid var(--accent1);
          border-radius: 16px;
          padding: 20px 18px;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          color: #111827;
          background: linear-gradient(180deg, #ffffff 0%, #fffaf7 100%);
          box-shadow: 0 10px 30px rgba(17, 24, 39, 0.08);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .pricing-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(520px 220px at 0% 0%, rgba(255, 69, 0, 0.12), transparent 60%),
            radial-gradient(520px 240px at 100% 0%, rgba(41, 38, 67, 0.10), transparent 60%);
          opacity: 1;
        }
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 52px rgba(17, 24, 39, 0.14);
        }
        .featured-pack .pricing-card {
          transform: scale(1.02);
          z-index: 2;
          box-shadow: 0 26px 70px rgba(17, 24, 39, 0.16);
        }
        .featured-pack .pricing-card:hover {
          transform: scale(1.02) translateY(-8px);
        }
        .featured-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: 0 12px 26px rgba(17, 24, 39, 0.16);
        }
        .pricing-header {
          text-align: center;
          padding-bottom: 12px;
          margin-bottom: 12px;
          border-bottom: 1px dashed rgba(17, 24, 39, 0.10);
          position: relative;
          z-index: 1;
        }
        .pack-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-bottom: 10px;
          color: #111827;
          background: linear-gradient(90deg, rgba(255, 69, 0, 0.10), rgba(41, 38, 67, 0.08));
          border: 1px solid rgba(41, 38, 67, 0.12);
        }
        .pack-title {
          font-size: 20px;
          font-weight: 700;
          margin: 6px 0;
          color: #0f172a;
        }
        .pack-ideal {
          font-size: 12px;
          color: rgba(17, 24, 39, 0.72);
          line-height: 1.4;
          margin-bottom: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ideal-label {
          font-weight: 700;
          color: rgba(17, 24, 39, 0.88);
        }
        .pricing-price {
          text-align: center;
          padding: 6px 0 10px;
          position: relative;
          z-index: 1;
        }
        .price-label {
          font-size: 10px;
          color: rgba(17, 24, 39, 0.58);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .price-value {
          font-size: 28px;
          font-weight: 700;
          margin-top: 3px;
          color: #0f172a;
        }
        .price-contact {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 15px 0;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }
        .pricing-features li {
          font-size: 13px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(17, 24, 39, 0.08);
          display: block;
          line-height: 1.4;
        }
        .pricing-features li.more-features {
          border-bottom: none;
          font-weight: 600;
          color: rgba(17, 24, 39, 0.62);
          font-size: 12px;
          justify-content: center;
          padding-top: 8px;
        }
        .pricing-bonus {
          border: 1px solid rgba(255, 69, 0, 0.18);
          border-radius: 10px;
          padding: 8px;
          font-size: 12px;
          text-align: center;
          margin-bottom: 12px;
          line-height: 1.4;
          color: rgba(17, 24, 39, 0.86);
          background: linear-gradient(90deg, rgba(255, 69, 0, 0.08), rgba(41, 38, 67, 0.06));
          position: relative;
          z-index: 1;
        }
        .pricing-footer {
          text-align: center;
          margin-top: auto;
          position: relative;
          z-index: 1;
        }
        .pricing-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 20px;
          color: #fff !important;
          border-radius: 999px;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.4px;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid rgba(41, 38, 67, 0.14);
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: 0 14px 26px rgba(17, 24, 39, 0.18);
        }
        .pricing-btn:hover {
          transform: translateY(-2px);
          filter: brightness(0.95);
          color: #fff !important;
        }
        .pricing-btn--button {
          cursor: pointer;
        }
        .pack-tagline {
          text-align: center;
          font-size: 10px;
          color: rgba(17, 24, 39, 0.58);
          font-style: italic;
          margin-top: 8px;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .elite-text {
          font-size: 18px;
          color: #333;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .elite-btn {
          display: inline-block;
          padding: 14px 35px;
          background: linear-gradient(90deg, ${elitePack.accent1}, ${elitePack.accent2});
          color: #fff;
          border: none;
          border-radius: 999px;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          box-shadow: 0 14px 26px rgba(15, 23, 42, 0.18);
        }
        .elite-btn:hover {
          transform: translateY(-2px);
          filter: brightness(0.98);
          box-shadow: 0 22px 40px rgba(15, 23, 42, 0.22);
        }
        .elite-card {
          border: 1px solid transparent;
          border-radius: 16px;
          padding: 40px;
          position: relative;
          color: rgba(255, 255, 255, 0.92);
          background:
            linear-gradient(#0b0d10, #0b0d10) padding-box,
            linear-gradient(135deg, ${elitePack.accent1}, ${elitePack.accent2}) border-box;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);
          animation: fadeIn 0.3s ease;
        }

        /* Ensure elite stays readable on dark card */
        .elite-card .pack-badge {
          color: rgba(255, 255, 255, 0.92);
          background: linear-gradient(90deg, rgba(255, 69, 0, 0.22), rgba(41, 38, 67, 0.18));
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
        .elite-card .pack-title {
          color: #ffffff;
        }
        .elite-card .pack-ideal {
          color: rgba(255, 255, 255, 0.76);
        }
        .elite-card .ideal-label {
          color: rgba(255, 255, 255, 0.92);
        }
        .elite-card .price-label {
          color: rgba(255, 255, 255, 0.70);
        }
        .elite-card .price-value {
          color: #ffffff;
        }
        .elite-card .pack-tagline {
          color: rgba(255, 255, 255, 0.62);
        }
        .elite-card .pricing-features li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.86);
        }
        .elite-card .pricing-btn {
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.40);
        }
        .elite-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(700px 260px at 10% 0%, rgba(255, 69, 0, 0.22), transparent 55%),
            radial-gradient(640px 240px at 90% 0%, rgba(41, 38, 67, 0.22), transparent 55%);
          opacity: 0.9;
          mix-blend-mode: screen;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .elite-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.10);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.78);
          transition: all 0.3s ease;
          z-index: 2;
        }
        .elite-close:hover {
          background: linear-gradient(90deg, ${elitePack.accent1}, ${elitePack.accent2});
          color: #fff;
        }
        .elite-card-inner {
          display: flex;
          gap: 40px;
          position: relative;
          z-index: 1;
        }
        .elite-left {
          flex: 1;
          text-align: center;
          padding-right: 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }
        .elite-right {
          flex: 1.5;
        }
        .elite-price {
          margin: 25px 0;
        }
        .elite-price .price-label {
          display: block;
          margin-bottom: 4px;
        }
        .elite-price .price-value {
          display: block;
        }
        .elite-features-title {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.90);
          margin-bottom: 15px;
          font-weight: 600;
        }
        .elite-right .pricing-features li {
          padding: 8px 0;
          font-size: 13px;
        }
        .elite-right .pricing-btn {
          margin-top: 20px;
          padding: 12px 30px;
          font-size: 14px;
        }
        @media (max-width: 991px) {
          .featured-pack .pricing-card {
            transform: scale(1);
          }
          .featured-pack .pricing-card:hover {
            transform: translateY(-8px);
          }
          .elite-card-inner {
            flex-direction: column;
            gap: 20px;
          }
          .elite-left {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            padding-right: 0;
            padding-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
