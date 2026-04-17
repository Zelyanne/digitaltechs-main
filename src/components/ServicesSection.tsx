import { useI18n } from "../i18n";

const COPY = {
  fr: {
    headingKicker: "SERVICES",
    heading1: "NOUS PROPOSONS",
    heading2: "DES SOLUTIONS ",
    heading2Highlight: "PARFAITES",
    intro:
      "SDG Techs, agence digital créée en 2016. Nous aidons les organisations de tout genre et entrepreneurs à maximiser leurs résultats grâce à des déploiements en ligne au meilleur prix. Stratégies sur-mesure, résultats rapides et mesurables, grâce à des professionnels polyvalents et des outils d'intelligence artificielle.",
    cta: "PRENDRE RENDEZ-VOUS",
    services: [
      {
        icon: "flaticon-analytics",
        title: "GROWTH HACKING",
        active: true,
        description:
          "Accélérez votre croissance avec des tests rapides, l'automatisation intelligente et des leviers data-driven pour générer plus d'acquisition, d'activation et de rétention.",
      },
      {
        icon: "flaticon-advertising",
        title: "MARKETING DIGITAL",
        active: false,
        description:
          "Maximisez vos campagnes d'acquisition et tunnels de vente pour attirer clients et prospects, booster trafic, leads et ventes en ligne efficacement.",
      },
      {
        icon: "flaticon-share",
        title: "MÉDIAS SOCIAUX",
        active: true,
        description:
          "Déploiement marketing quotidien sur les réseaux sociaux : Facebook, Instagram, LinkedIn... pour atteindre vos objectifs.",
      },
      {
        icon: "flaticon-web",
        title: "SITE WEB & APPLICATION",
        active: false,
        description:
          "Sites web, pages de capture et applications fluides : CRM, SaaS, applications sur mesure... des outils puissants pour votre marketing et vos ventes.",
      },
      {
        icon: "flaticon-design",
        title: "GRAPHISME",
        active: false,
        description:
          "Contenu graphique à votre image pour ancrer votre marque. Visuels captivants pour vous démarquer et gagner en visibilité.",
      },
      {
        icon: "flaticon-analytics",
        title: "AI AGENT & AUTOMATISATION",
        active: false,
        description:
          "Automatisez vos processus métier avec des agents IA intelligents et des workflows automatisés. Gagnez en efficacité et réduisez les tâches répétitives grâce à l'IA.",
      },
      {
        icon: "flaticon-headset",
        title: "CUSTOMER SUPPORT E-COMMERCE & TPE",
        active: false,
        description:
          "Nous accompagnons PME et groupes dans l'optimisation de l'expérience client. Partenaire robuste pour secteurs variés : habitat, santé, industrie…",
      },
      {
        icon: "flaticon-fountain-pen",
        title: "RÉDACTION WEB & SEO/SEA",
        active: false,
        description:
          "Enrichir votre site, créer des pages à indexer, favoriser le linkbaiting. Notre expertise en rédaction web pour un SEO performant.",
      },
      {
        icon: "flaticon-user",
        title: "VIRTUAL ASSISTANCE",
        active: false,
        description:
          "Marre d'être au four et au moulin ? Faites-vous épauler par un Assistant Virtuel qualifié et dévoué à votre service au quotidien.",
      },
    ],
  },
  en: {
    headingKicker: "SERVICES",
    heading1: "WE PROVIDE",
    heading2: "THE RIGHT ",
    heading2Highlight: "SOLUTIONS",
    intro:
      "SDG Techs is a digital agency founded in 2016. We help organizations of all kinds and entrepreneurs maximize their results through online execution at the best price. Tailor-made strategies and fast, measurable results, powered by versatile experts and AI tools.",
    cta: "BOOK A CALL",
    services: [
      {
        icon: "flaticon-analytics",
        title: "GROWTH HACKING",
        active: true,
        description:
          "Accelerate growth with rapid experiments, smart automation, and data-driven levers to improve acquisition, activation, and retention.",
      },
      {
        icon: "flaticon-advertising",
        title: "DIGITAL MARKETING",
        active: false,
        description:
          "Maximize your acquisition campaigns and funnels to attract customers and prospects, boosting traffic, leads, and online sales efficiently.",
      },
      {
        icon: "flaticon-share",
        title: "SOCIAL MEDIA",
        active: true,
        description:
          "Daily marketing execution across social networks: Facebook, Instagram, LinkedIn, and more, aligned with your goals.",
      },
      {
        icon: "flaticon-web",
        title: "WEBSITES & APPS",
        active: false,
        description:
          "Websites, landing pages, and smooth applications: CRM, SaaS, custom builds—powerful tools for your marketing and sales.",
      },
      {
        icon: "flaticon-design",
        title: "DESIGN",
        active: false,
        description:
          "On-brand visuals that anchor your identity. Captivating graphics to stand out and gain visibility.",
      },
      {
        icon: "flaticon-analytics",
        title: "AI AGENTS & AUTOMATION",
        active: false,
        description:
          "Automate your business processes with smart AI agents and workflows. Increase efficiency and reduce repetitive tasks.",
      },
      {
        icon: "flaticon-headset",
        title: "E-COMMERCE CUSTOMER SUPPORT",
        active: false,
        description:
          "We help SMBs and groups optimize customer experience. A robust partner across industries: home, health, industrial, and more.",
      },
      {
        icon: "flaticon-fountain-pen",
        title: "CONTENT & SEO/SEM",
        active: false,
        description:
          "Enrich your site, create pages to index, and support link-building. Our content expertise helps you rank and convert.",
      },
      {
        icon: "flaticon-user",
        title: "VIRTUAL ASSISTANCE",
        active: false,
        description:
          "Tired of doing everything yourself? Get support from a qualified virtual assistant dedicated to your day-to-day operations.",
      },
    ],
  },
} as const;

export default function ServicesSection() {
  const { language } = useI18n();
  const c = COPY[language];

  return (
    <div id="services" className="service-area style-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="dreamit-section-title text-left pb-3">
              <h5>{c.headingKicker}</h5>
              <h1>{c.heading1}</h1>
              <h1>
                {c.heading2}
                <span>{c.heading2Highlight}</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="section-text">
              <p>
                {c.intro}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {c.services.map((s, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className={`techno-sinlge-service-box ${s.active ? "active" : ""}`}>
                <div className="techno-service-box-inner">
                  <div className="techno-service-content">
                    <div className="techno-service-icon">
                      <i className={s.icon} />
                    </div>
                    <div className="techno-service-title">
                      <h2>{s.title}</h2>
                      <p>{s.description}</p>
                    </div>
                  </div>
                  {/* <div className="service-button2">
                    <a href="#">
                      READ MORE
                      <span><i className="fas fa-angle-double-right" /></span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
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
