import { useEffect, useState } from "react";
import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "sdgtechs.theme";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // ignore storage errors
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const COPY = {
  fr: {
    logoAlt: "SDG Techs - Agence de transformation digitale",
    nav: {
      home: "Accueil",
      about: "À Propos",
      partners: "Partenaires",
      services: "Services",
      pricing: "Forfaits",
      projects: "Projets",
      faq: "FAQ",
      contact: "Contact",
    },
    callLabel: "WhatsApp",
    themeLabel: "Thème",
    themeToggle: "Basculer le thème",
    languageLabel: "Langue",
  },
  en: {
    logoAlt: "SDG Techs - Digital transformation agency",
    nav: {
      home: "Home",
      about: "About",
      partners: "Partners",
      services: "Services",
      pricing: "Pricing",
      projects: "Projects",
      faq: "FAQ",
      contact: "Contact",
    },
    callLabel: "WhatsApp",
    themeLabel: "Theme",
    themeToggle: "Toggle theme",
    languageLabel: "Language",
  },
} as const;

export default function Header() {
  const { language, setLanguage } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);
  const c = COPY[language];
  const logoSrc = IMG("logo.png");
  const desktopLogoStyle = { maxHeight: "46px", width: "auto" };

  const desktopNavLinkStyle = { margin: "18px 1px", padding: "8px 6px", fontSize: "13.5px", letterSpacing: "0.2px" };

  const languageSelectStyle =
    ({
      appearance: "none" as const,
      border: "1px solid rgba(255, 255, 255, 0.35)",
      background: "rgba(255, 255, 255, 0.12)",
      color: "#fff",
      borderRadius: 999,
      padding: "6px 24px 6px 10px",
      fontWeight: 800,
      fontSize: 12,
      lineHeight: 1,
      cursor: "pointer",
      minWidth: "56px",
      minHeight: "34px",
      height: "34px",
      backgroundImage:
        "linear-gradient(45deg, transparent 50%, #fff 50%), linear-gradient(135deg, #fff 50%, transparent 50%)",
      backgroundPosition: "calc(100% - 12px) 13px, calc(100% - 7px) 13px",
      backgroundSize: "5px 5px, 5px 5px",
      backgroundRepeat: "no-repeat",
    }) as const;

  const themeButtonStyle = (darkEnabled: boolean) =>
    ({
      appearance: "none",
      border: "1px solid rgba(255, 255, 255, 0.35)",
      background: darkEnabled ? "rgba(9, 15, 24, 0.82)" : "rgba(255, 255, 255, 0.12)",
      color: "#fff",
      borderRadius: 999,
      padding: 0,
      fontWeight: 800,
      fontSize: 15,
      lineHeight: 1,
      cursor: "pointer",
      minWidth: "34px",
      minHeight: "34px",
      width: "34px",
      height: "34px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
    }) as const;

  useEffect(() => {
    document.body.classList.toggle("sdg-dark-mode", themeMode === "dark");
    document.documentElement.setAttribute("data-theme", themeMode);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    } catch {
      // ignore storage errors
    }
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinkClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      <div id="sticky-header" className="techno_nav_manu style-two d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <a className="logo_img" href="#home" title="sdgtechs">
                  <img src={logoSrc} alt={c.logoAlt} style={desktopLogoStyle} />
                </a>
                <a className="main_sticky" href="#home" title="sdgtechs">
                  <img src={logoSrc} alt={c.logoAlt} style={desktopLogoStyle} />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <nav className="techno_menu text-center" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 34 }}>
                <ul className="nav_scroll" style={{ display: "flex", alignItems: "center", gap: "6px", listStyle: "none", margin: 0, padding: 0 }}>
                  <li>
                    <a href="#home" style={desktopNavLinkStyle}>{c.nav.home}</a>
                  </li>
                  <li>
                    <a href="#about" style={desktopNavLinkStyle}>{c.nav.about}</a>
                  </li>
                  <li>
                    <a href="#partner-area" style={desktopNavLinkStyle}>{c.nav.partners}</a>
                  </li>
                  <li>
                    <a href="#services" style={desktopNavLinkStyle}>{c.nav.services}</a>
                  </li>
                  <li>
                    <a href="#pricing" style={desktopNavLinkStyle}>{c.nav.pricing}</a>
                  </li>
                  <li><a href="#portfolio" style={desktopNavLinkStyle}>{c.nav.projects}</a></li>
                  <li>
                    <a href="#faq" style={desktopNavLinkStyle}>{c.nav.faq}</a>
                  </li>
                  <li><a href="#contact" style={desktopNavLinkStyle}>{c.nav.contact}</a></li>
                </ul>
                <div
                  className="sdg-header-call"
                  style={{ display: "inline-flex", alignItems: "center", gap: 12, flexShrink: 0, marginLeft: 8 }}
                >
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      background: themeMode === "dark"
                        ? "linear-gradient(135deg, #20334b 0%, #2d4967 100%)"
                        : "linear-gradient(135deg, #b53b47 0%, #b53b47 100%)",
                      border: themeMode === "dark" ? "1px solid rgba(228, 235, 243, 0.16)" : undefined,
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="flaticon-phone-call" style={{ fontSize: 16 }} />
                  </span>
                  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.1, color: "#fff" }}>
                    <span style={{ fontSize: 10, fontWeight: 600, opacity: 0.82 }}>{c.callLabel}</span>
                    <strong style={{ fontSize: 12.5, fontWeight: 800, whiteSpace: "nowrap" }}>+33746458691</strong>
                  </span>
                </div>
                <div
                  className="sdg-theme-switcher"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}
                  aria-label={c.themeLabel}
                >
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-pressed={themeMode === "dark"}
                    aria-label={c.themeToggle}
                    style={themeButtonStyle(themeMode === "dark")}
                  >
                    <i className={themeMode === "dark" ? "fas fa-moon" : "fas fa-sun"} aria-hidden="true" />
                  </button>
                </div>
                <div
                  className="sdg-language-switcher"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, position: "relative", flexShrink: 0 }}
                  aria-label={c.languageLabel}
                >
                  <select
                    value={language}
                    onChange={(event) => setLanguage(event.target.value as "fr" | "en")}
                    aria-label={c.languageLabel}
                    style={languageSelectStyle}
                  >
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                  </select>
                </div>
              </nav>
            </div>
            <div className="lines style-three">
              <div className="line" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-area d-block d-lg-none" style={{ display: "block" }}>
        <div className="mobile-menu-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px" }}>
          <div className="logo" style={{ flex: "0 0 auto" }}>
            <a href="#home" title="sdgtechs">
              <img src={logoSrc} alt={c.logoAlt} style={{ height: "30px", width: "auto" }} />
            </a>
          </div>
          <button
            type="button"
            className="sdg-mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              background: "rgba(255, 255, 255, 0.10)",
              border: "1px solid rgba(255, 255, 255, 0.24)",
              borderRadius: "10px",
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
                <span style={{ display: "block", width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transition: "all 0.3s" }} />
                <span style={{ display: "block", width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transition: "all 0.3s" }} />
                <span style={{ display: "block", width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transition: "all 0.3s" }} />
              </>
            ) : (
              <>
                <span style={{ display: "block", position: "absolute", width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transform: "rotate(45deg)" }} />
                <span style={{ display: "block", position: "absolute", width: "25px", height: "3px", background: "#fff", borderRadius: "2px", transform: "rotate(-45deg)" }} />
              </>
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu" style={{ display: "block", padding: "0 15px 15px" }}>
            <ul className="nav_scroll" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><a href="#home" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.home}</a></li>
              <li><a href="#about" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.about}</a></li>
              <li><a href="#partner-area" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.partners}</a></li>
              <li><a href="#services" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.services}</a></li>
              <li><a href="#pricing" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.pricing}</a></li>
              <li><a href="#portfolio" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.projects}</a></li>
              <li><a href="#faq" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.faq}</a></li>
              <li><a href="#contact" onClick={navLinkClick} style={{ display: "block", padding: "14px 0", color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{c.nav.contact}</a></li>
            </ul>
            <div
              className="sdg-theme-switcher"
              style={{ display: "flex", gap: 8, padding: "15px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "10px" }}
              aria-label={c.themeLabel}
            >
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={themeMode === "dark"}
                aria-label={c.themeToggle}
                style={themeButtonStyle(themeMode === "dark")}
              >
                <i className={themeMode === "dark" ? "fas fa-moon" : "fas fa-sun"} aria-hidden="true" />
              </button>
            </div>
            <div
              className="sdg-language-switcher"
              style={{ display: "flex", gap: 8, padding: "15px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "10px" }}
              aria-label={c.languageLabel}
            >
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as "fr" | "en")}
                aria-label={c.languageLabel}
                style={languageSelectStyle}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
