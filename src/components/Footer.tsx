import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    logoAlt: "SDG Techs - Agence marketing digital",
    companyDesc:
      "Agence marketing digital orientée résultats. 10+ ans d'expérience, Afrique, Europe, Asie, Canada.",
    headings: {
      services: { first: "S", rest: "ERVICES" },
      useful: { first: "L", rest: "IENS UTILES" },
      contacts: { first: "C", rest: "ONTACTS" },
    },
    services: {
      marketing: "Marketing Digital",
      websites: "Sites Web & Apps",
      seo: "SEO & Rédaction",
      design: "Graphisme",
      contact: "Contact",
    },
    links: {
      home: "Accueil",
      partners: "Partenaires",
      services: "Services",
      about: "À Propos",
      projects: "Projets",
      contact: "Contact",
    },
    regions: "Afrique, Asie, Europe, Canada",
    copyright: "Copyright © 2026. Tous droits réservés ",
    legalLine: "Mentions légales · Services · Carrières",
  },
  en: {
    logoAlt: "SDG Techs - Digital marketing agency",
    companyDesc:
      "Results-driven digital marketing agency. 10+ years of experience across Africa, Europe, Asia, and Canada.",
    headings: {
      services: { first: "S", rest: "ERVICES" },
      useful: { first: "U", rest: "SEFUL LINKS" },
      contacts: { first: "C", rest: "ONTACT" },
    },
    services: {
      marketing: "Digital Marketing",
      websites: "Websites & Apps",
      seo: "SEO & Content",
      design: "Design",
      contact: "Contact",
    },
    links: {
      home: "Home",
      partners: "Partners",
      services: "Services",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    regions: "Africa, Asia, Europe, Canada",
    copyright: "Copyright © 2026. All rights reserved ",
    legalLine: "Legal notice · Services · Careers",
  },
} as const;

export default function Footer() {
  const { language } = useI18n();
  const c = COPY[language];

  return (
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="widget-widgets-company-info white">
              <div className="techno-logo">
                <a className="logo_img" href="#home" title="SDG Techs">
                  <img src={IMG("logo.png")} alt={c.logoAlt} />
                </a>
              </div>
              <div className="company-info-desc">
                <p>
                  {c.companyDesc}
                </p>
              </div>
              <div className="company_icon">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="widget widget-nav-menu">
              <h4 className="widget-title"><span>{c.headings.services.first}</span>{c.headings.services.rest}</h4>
              <div className="menu-quick-link-content">
                <ul className="menu">
                  <li><a href="#services">{c.services.marketing}</a></li>
                  <li><a href="#services">{c.services.websites}</a></li>
                  <li><a href="#services">{c.services.seo}</a></li>
                  <li><a href="#services">{c.services.design}</a></li>
                  <li><a href="#contact">{c.services.contact}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="widget-footer-title">
              <h4 className="widget-title"><span>{c.headings.useful.first}</span>{c.headings.useful.rest}</h4>
            </div>
            <div className="footer-recent-post">
              <ul className="menu">
                <li><a href="#home">{c.links.home}</a></li>
                <li><a href="#partner-area">{c.links.partners}</a></li>
                <li><a href="#services">{c.links.services}</a></li>
                <li><a href="#about">{c.links.about}</a></li>
                <li><a href="#portfolio">{c.links.projects}</a></li>
                <li><a href="#contact">{c.links.contact}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div id="footer-widget-address">
              <h4 className="widget-title"><span>{c.headings.contacts.first}</span>{c.headings.contacts.rest}</h4>
              <div className="footer-inner">
                <div className="footer-socail-icon">
                  <i className="flaticon-call" />
                </div>
                <div className="footer-socail-info">
                  <p><span>+33 6 55 44 33 22</span></p>
                </div>
              </div>
              <div className="footer-inner">
                <div className="footer-socail-icon">
                  <i className="icon flaticon-email" />
                </div>
                <div className="footer-socail-info">
                  <p>contact@sdgtechs.com</p>
                </div>
              </div>
              <div className="footer-inner">
                <div className="footer-socail-icon">
                  <i className="icon flaticon-placeholder-1" />
                </div>
                <div className="footer-socail-info2">
                  <p>{c.regions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-lg-6 col-md-6">
            <div className="footer-bottom-content">
              <div className="footer-bottom-content-copy">
                <p>
                  {c.copyright}<span>SDG Techs</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-bottom-menu">
              <p>{c.legalLine}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
