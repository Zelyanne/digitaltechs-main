import { useEffect, useState } from "react";
import { IMG } from "../utils/images";
import { useI18n } from "../i18n";
import { useBookingModal } from "./BookingModal";

const COPY = {
  fr: {
    kicker: "PROJETS",
    title: "NOS ",
    titleHighlight: "RÉALISATIONS",
    filters: {
      all: "TOUS",
      apps: "APPLICATIONS",
      graphics: "GRAPHISMES",
      websites: "SITES WEB",
      ads: "ADS",
    },
    categoryByFilter: {
      websites: "Sites Web",
      graphics: "Graphismes",
      apps: "Applications",
      ads: "Publicité",
    },
    cta: "PRENDRE RENDEZ-VOUS",
  },
  en: {
    kicker: "PROJECTS",
    title: "OUR ",
    titleHighlight: "WORK",
    filters: {
      all: "ALL",
      apps: "APPS",
      graphics: "GRAPHICS",
      websites: "WEBSITES",
      ads: "ADS",
    },
    categoryByFilter: {
      websites: "Websites",
      graphics: "Graphics",
      apps: "Applications",
      ads: "Advertising",
    },
    cta: "BOOK A CALL",
  },
} as const;

const projects = [
  { img: "resource/website1.png", category: "Sites Web", title: "Digital Agency", filters: "websites" },
  { img: "resource/website2.png", category: "Sites Web", title: "Globe Design", filters: "websites" },
  { img: "resource/website3.png", category: "Sites Web", title: "Marketing Agency", filters: "websites" },
  { img: "resource/website4.png", category: "Sites Web", title: "Beauty Parlor", filters: "websites" },
  { img: "resource/website5.png", category: "Sites Web", title: "Apps Design", filters: "websites" },
  { img: "resource/website6.png", category: "Sites Web", title: "Shopping Mohol", filters: "websites" },
  { img: "resource/website7.png", category: "Sites Web", title: "Shopping Mohol", filters: "websites" },
  { img: "resource/website8.png", category: "Sites Web", title: "Shopping Mohol", filters: "websites" },
  { img: "resource/website9.png", category: "Sites Web", title: "Shopping Mohol", filters: "websites" },
  { img: "resource/website10.png", category: "Sites Web", title: "Shopping Mohol", filters: "websites" },
  { img: "resource/flyer1.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer2.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer3.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer4.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer5.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer6.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer7.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/flyer8.png", category: "Graphismes", title: "Flyer Design", filters: "graphics" },
  { img: "resource/poster1.png", category: "Graphismes", title: "Poster Design", filters: "graphics" },
  { img: "resource/FB_IMG_1773773068519.jpg.jpeg", category: "Graphismes", title: "Social Media Design", filters: "graphics" },
  { img: "resource/FB_IMG_1773773188162.jpg.jpeg", category: "Graphismes", title: "Social Media Design", filters: "graphics" },
  { img: "resource/FB_IMG_1773773296659.jpg.jpeg", category: "Graphismes", title: "Social Media Design", filters: "graphics" },
  { img: "resource/FB_IMG_1773773380115.jpg.jpeg", category: "Graphismes", title: "Social Media Design", filters: "graphics" },
  { img: "resource/FB_IMG_1773773391272.jpg.jpeg", category: "Graphismes", title: "Social Media Design", filters: "graphics" },
  { img: "resource/FB_IMG_1773773448085.jpg.jpeg", category: "Graphismes", title: "Social Media Design", filters: "graphics" },
  { img: "resource/saas1.png", category: "Applications", title: "Shopping Mohol", filters: "apps" },
  { img: "resource/saas2.png", category: "Applications", title: "Shopping Mohol", filters: "apps" },
  { img: "resource/saas3.png", category: "Applications", title: "Shopping Mohol", filters: "apps" },
  { img: "resource/crm1.png", category: "Applications", title: "Shopping Mohol", filters: "apps" },
  { img: "resource/crm2.png", category: "Applications", title: "Shopping Mohol", filters: "apps" },
  { img: "resource/crm3.png", category: "Applications", title: "Shopping Mohol", filters: "apps" },
  // Ads Campaign Projects
  { img: "resource/ad1.png", category: "Publicité", title: "Campagne Google Ads", filters: "ads" },
  { img: "resource/ad2.png", category: "Publicité", title: "Campagne Facebook Ads", filters: "ads" },
  { img: "resource/ad3.png", category: "Publicité", title: "Campagne Instagram Ads", filters: "ads" },
  { img: "resource/ad4.png", category: "Publicité", title: "Campagne LinkedIn Ads", filters: "ads" },
  { img: "resource/ad5.png", category: "Publicité", title: "Campagne Display", filters: "ads" },
  { img: "resource/ad6.png", category: "Publicité", title: "Campagne Shopping", filters: "ads" },
  { img: "resource/ad7.png", category: "Publicité", title: "Campagne TikTok Ads", filters: "ads" },
];

const PORTFOLIO_PAGE_SIZE = 3;
type PortfolioFilter = "*" | "apps" | "graphics" | "websites" | "ads";

export default function PortfolioSection() {
  const { language } = useI18n();
  const { openModal } = useBookingModal();
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("*");
  const [slideStart, setSlideStart] = useState(0);
  const c = COPY[language];
  
  const filteredProjects = activeFilter === "*"
    ? projects
    : projects.filter((project) => project.filters === activeFilter);
  const visibleProjects = Array.from(
    { length: Math.min(PORTFOLIO_PAGE_SIZE, filteredProjects.length) },
    (_, index) => filteredProjects[(slideStart + index) % filteredProjects.length]
  );

  const portfolioFilters: { key: PortfolioFilter; label: string }[] = [
    { key: "*", label: c.filters.all },
    { key: "apps", label: c.filters.apps },
    { key: "graphics", label: c.filters.graphics },
    { key: "websites", label: c.filters.websites },
    { key: "ads", label: c.filters.ads },
  ];

  useEffect(() => {
    setSlideStart(0);
  }, [activeFilter]);

  useEffect(() => {
    if (filteredProjects.length <= PORTFOLIO_PAGE_SIZE) return;
    const timer = window.setInterval(() => {
      setSlideStart((current) => (current + PORTFOLIO_PAGE_SIZE) % filteredProjects.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [filteredProjects.length]);

  return (
    <div id="portfolio" className="portfolio_area style-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="dreamit-section-title text-left style-four">
              <h5>{c.kicker}</h5>
              <h1>
                {c.title}
                <span>{c.titleHighlight}</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="portfolio_nav text-right pt-5">
              <div className="portfolio_menu">
                <ul className="menu-filtering">
                  {portfolioFilters.map((filter) => (
                    <li
                      key={filter.key}
                      className={activeFilter === filter.key ? "current_menu_item" : ""}
                      data-filter={filter.key === "*" ? "*" : `.${filter.key}`}
                      role="button"
                      tabIndex={0}
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveFilter(filter.key);
                      }}
                      onKeyDown={(event) => {
                        if (event.key !== "Enter" && event.key !== " ") return;
                        event.preventDefault();
                        setActiveFilter(filter.key);
                      }}
                    >
                      {filter.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-rotating-slider">
          {visibleProjects.map((p, i) => (
            <div
              key={`${p.img}-${slideStart}-${i}`}
              className={`col-lg-4 col-md-6 col-sm-12 grid-item ${p.filters}`}
            >
              <div className="single_portfolio">
                <div className="single_portfolio_inner">
                  <div className="single_portfolio_thumb">
                    <img
                      src={IMG(p.img)}
                      alt={`${p.title} - ${c.categoryByFilter[p.filters as keyof typeof c.categoryByFilter]}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <button
              onClick={openModal}
              className="dreamit-btn"
              style={{
                background: "#7b1e24", 
                color: "#fff", 
                padding: "15px 40px", 
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              {language === "fr" ? "PRENDRE RENDEZ-VOUS" : "BOOK A CALL"}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .portfolio-rotating-slider .grid-item {
          animation: portfolioFadeIn 0.45s ease both;
        }
        @keyframes portfolioFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
