import { useEffect, useRef } from "react";
import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

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

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const $ = (window as unknown as { $?: { (el: Element): unknown; fn?: { isotope?: unknown } } }).$;
    if (!$?.fn?.isotope || !containerRef.current) return;
    const $container = $(containerRef.current) as {
      isotope: (o: object | string) => void;
      imagesLoaded?: (cb: () => void) => void;
      closest: (s: string) => unknown;
    };
    const initIsotope = () => {
      $container.isotope({
        itemSelector: ".grid-item",
        filter: "*",
        layoutMode: "masonry",
        transitionDuration: "0.8s",
      });
      const $portfolio = $container.closest("#portfolio") as { find: (s: string) => unknown };
      const $menu = ($portfolio.find(".menu-filtering li") as { off: (e: string) => { on: (e: string, fn: () => void) => void } });
      $menu.off("click.isotope").on("click.isotope", function (this: HTMLElement) {
        const $li = $(this) as { siblings: () => { removeClass: (c: string) => void }; addClass: (c: string) => void; attr: (key: string) => string };
        $li.siblings().removeClass("current_menu_item");
        $li.addClass("current_menu_item");
        const selector = $li.attr("data-filter") || "*";
        $container.isotope({ filter: selector });
      });
    };
    if (typeof $container.imagesLoaded === "function") {
      $container.imagesLoaded(initIsotope);
    } else {
      setTimeout(initIsotope, 300);
    }
    return () => {
      try {
        $container.isotope("destroy");
      } catch { /* ignore */ }
    };
  }, []);

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
                  <li className="current_menu_item" data-filter="*">{c.filters.all}</li>
                  <li data-filter=".apps">{c.filters.apps}</li>
                  <li data-filter=".graphics">{c.filters.graphics}</li>
                  <li data-filter=".websites">{c.filters.websites}</li>
                  <li data-filter=".ads">{c.filters.ads}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div ref={containerRef} className="row image_load">
          {projects.map((p, i) => (
            <div
              key={i}
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
