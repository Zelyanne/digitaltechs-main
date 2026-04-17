import { useState } from "react";
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
  const { language, setLanguage } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const c = COPY[language];

  const headerClass = "techno_nav_manu style-two";
  const desktopNavLinkStyle = { margin: "30px 4px" };

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

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinkClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

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
        <div className="mobile-menu-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px" }}>
          <div className="logo" style={{ flex: "0 0 auto" }}>
            <a href="#home" title="sdgtechs">
              <img src={IMG("logo.png")} alt={c.logoAlt} style={{ height: "40px", width: "auto" }} />
            </a>
          </div>
          <button
            type="button"
            className="meanmenu-reveal"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              position: "relative",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!mobileMenuOpen ? (
              <>
                <span style={{ width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transition: "all 0.3s" }} />
                <span style={{ width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transition: "all 0.3s" }} />
                <span style={{ width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transition: "all 0.3s" }} />
              </>
            ) : (
              <span style={{ position: "absolute", width: "25px", height: "3px", background: "#e1193a", borderRadius: "2px", transform: "rotate(45deg)" }} />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu" style={{ display: "block", padding: "0 15px 15px" }}>
            <ul className="nav_scroll" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><a href="#home" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.home}</a></li>
              <li><a href="#partner-area" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.partners}</a></li>
              <li><a href="#services" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.services}</a></li>
              <li><a href="#about" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.about}</a></li>
              <li><a href="#portfolio" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.projects}</a></li>
              <li><a href="#faq" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.faq}</a></li>
              <li><a href="#contact" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.contact}</a></li>
            </ul>
            <div
              className="sdg-language-switcher"
              style={{ display: "flex", gap: 8, padding: "15px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "10px" }}
              aria-label={c.languageLabel}
            >
              <button type="button" onClick={() => setLanguage("fr")} aria-pressed={language === "fr"} style={langButtonStyle(language === "fr")}>
                FR
              </button>
              <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} style={langButtonStyle(language === "en")}>
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}