import { useI18n } from "../i18n";

const COPY = {
  fr: {
    kicker: "PARCOURS CLIENT",
    title: "DE L'IDÉE À LA ",
    titleHighlight: "CROISSANCE",
    intro:
      "Un accompagnement clair et progressif pour transformer vos objectifs business en résultats digitaux mesurables.",
    benefitLabel: "Bénéfice :",
    steps: [
      {
        icon: "fas fa-magnifying-glass-chart",
        title: "Analyse",
        description: "Audit de votre présence, de vos offres et de vos priorités business.",
        benefit: "Une vision claire des leviers les plus rentables.",
      },
      {
        icon: "fas fa-chess-knight",
        title: "Stratégie",
        description: "Plan d'action, canaux, messages et parcours de conversion adaptés à votre cible.",
        benefit: "Des décisions alignées sur vos objectifs de croissance.",
      },
      {
        icon: "fas fa-code",
        title: "Développement",
        description: "Création des sites, tunnels, automatisations et contenus nécessaires au lancement.",
        benefit: "Des actifs digitaux prêts à convertir.",
      },
      {
        icon: "fas fa-gauge-high",
        title: "Optimisation",
        description: "Mesure des performances, tests, ajustements SEO, Ads, UX et automatisations.",
        benefit: "Plus d'efficacité sans gaspiller le budget.",
      },
      {
        icon: "fas fa-arrow-trend-up",
        title: "Croissance",
        description: "Suivi, itérations et nouveaux leviers pour stabiliser l'acquisition et scaler.",
        benefit: "Une progression durable, pilotée par les données.",
      },
    ],
  },
  en: {
    kicker: "CLIENT JOURNEY",
    title: "FROM IDEA TO ",
    titleHighlight: "GROWTH",
    intro:
      "A clear step-by-step partnership that turns your business goals into measurable digital outcomes.",
    benefitLabel: "Benefit:",
    steps: [
      {
        icon: "fas fa-magnifying-glass-chart",
        title: "Analysis",
        description: "Audit of your presence, offers, and highest-priority business objectives.",
        benefit: "A clear view of the most profitable levers.",
      },
      {
        icon: "fas fa-chess-knight",
        title: "Strategy",
        description: "Action plan, channels, messaging, and conversion paths tailored to your audience.",
        benefit: "Decisions aligned with your growth goals.",
      },
      {
        icon: "fas fa-code",
        title: "Development",
        description: "Build the websites, funnels, automations, and content needed for launch.",
        benefit: "Digital assets ready to convert.",
      },
      {
        icon: "fas fa-gauge-high",
        title: "Optimization",
        description: "Performance tracking, testing, and SEO, Ads, UX, and automation improvements.",
        benefit: "More efficiency without wasting budget.",
      },
      {
        icon: "fas fa-arrow-trend-up",
        title: "Growth",
        description: "Ongoing follow-up, iterations, and new levers to stabilize acquisition and scale.",
        benefit: "Sustainable progress driven by data.",
      },
    ],
  },
} as const;

export default function SectorSection() {
  const { language } = useI18n();
  const c = COPY[language];

  return (
    <div id="process" className="sector-activity-area pt-100 pb-90">
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
          {c.steps.map((step, index) => (
            <div key={step.title} className="col-lg col-md-6 col-sm-12">
              <div className="sector-activity-card process-card">
                <span className="process-step-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="sector-icon-wrap">
                  <i className={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <p className="process-benefit">
                  <strong>{c.benefitLabel}</strong> {step.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
