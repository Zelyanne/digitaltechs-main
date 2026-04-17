import { useEffect, useState } from "react";
import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    logoAlt: "SDG Techs - Agence marketing digital",
    nav: {
      home: "Accueil",
      partners: "Partenaires",
      services: "Services",
      about: "À Propos",
      projects: "Projets",
      faq: "FAQ",
      contact: "Contactez-nous",
    },
    callLabel: "Appelez au",
    languageLabel: "Langue",
  },
  en: {
    logoAlt: "SDG Techs - Digital marketing agency",
    nav: {
      home: "Home",
      partners: "Partners",
      services: "Services",
      about: "About",
      projects: "Projects",
      faq: "FAQ",
      contact: "Contact",
    },
    callLabel: "Call",
    languageLabel: "Language",
  },
} as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = `techno_nav_manu style-two ${scrolled ? "sticky" : ""}`;
  const desktopNavLinkStyle = language === "fr" ? { margin: "30px 4px" } : undefined;

  const langButtonStyle = (active: boolean) =>
    ({
      appearance: "none",
      border: "1px solid rgba(255, 255, 255, 0.35)",
      background: active ? "linear-gradient(100deg, #ff4500 0%, #ed2c41 100%)" : "rgba(255, 255, 255, 0.12)",
      color: "#fff",
      borderRadius: 999,
      padding: "8px 14px",
      fontWeight: 800,
      fontSize: 14,
      lineHeight: 1,
      cursor: "pointer",
      minWidth: "50px",
      minHeight: "44px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }) as const;

  return (
    <>
      <div id="sticky-header" className={headerClass}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <a className="logo_img" href="#home" title="sdgtechs">
                  <img src={IMG("logo.png")} alt={c.logoAlt} />
                </a>
                <a className="main_sticky" href="#home" title="sdgtechs">
                  <img src={IMG("logo.png")} alt={c.logoAlt} />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <nav className="techno_menu text-center">
                <ul className="nav_scroll">
                  <li>
                    <a href="#home" style={desktopNavLinkStyle}>{c.nav.home}</a>
                  </li>
                    <li>
                      <a href="#partner-area" style={desktopNavLinkStyle}>{c.nav.partners}</a>
                    </li>
                  <li>
                    <a href="#services" style={desktopNavLinkStyle}>{c.nav.services}</a>
                  </li>
                  <li>
                    <a href="#about" style={desktopNavLinkStyle}>{c.nav.about}</a>
                  </li>
                  <li><a href="#portfolio" style={desktopNavLinkStyle}>{c.nav.projects}</a></li>
                  <li>
                    <a href="#faq" style={desktopNavLinkStyle}>{c.nav.faq}</a>
                  </li>
                  <li><a href="#contact" style={desktopNavLinkStyle}>{c.nav.contact}</a></li>
                </ul>
                <div className="header-button">
                  <i className="flaticon-phone-call" />
                </div>
                <div className="slider-button-text">
                  <p>{c.callLabel}</p>
                  <h2>+33 6 55 44 33 22</h2>
                </div>
                <div
                  className="sdg-language-switcher"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, marginLeft: 14 }}
                  aria-label={c.languageLabel}
                >
                  <button type="button" onClick={() => setLanguage("fr")} aria-pressed={language === "fr"} style={langButtonStyle(language === "fr")}>
                    FR
                  </button>
                  <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} style={langButtonStyle(language === "en")}>
                    EN
                  </button>
                </div>
              </nav>
            </div>
            <div className="lines style-three">
              <div className="line" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu">
          <nav className="techno_menu">
            <ul className="nav_scroll">
              <li>
                <a href="#home">{c.nav.home}</a>
              </li>
               <li>
                 <a href="#partner-area">{c.nav.partners}</a>
               </li>
              <li>
                <a href="#services">{c.nav.services}</a>
              </li>
              <li><a href="#about">{c.nav.about}</a></li>
              <li>
                <a href="#portfolio">{c.nav.projects}</a>
              </li>
              <li><a href="#faq">{c.nav.faq}</a></li>
              <li><a href="#contact">{c.nav.contact}</a></li>
            </ul>
            <div
              className="sdg-language-switcher"
              style={{ display: "flex", gap: 8, padding: "10px 0" }}
              aria-label={c.languageLabel}
            >
              <button type="button" onClick={() => setLanguage("fr")} aria-pressed={language === "fr"} style={langButtonStyle(language === "fr")}>
                FR
              </button>
              <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} style={langButtonStyle(language === "en")}>
                EN
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
