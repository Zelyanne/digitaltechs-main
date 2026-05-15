import { useI18n } from "../i18n";
import { useBookingModal } from "./BookingModal";
import darkLogo from "../../sdg__1_-removebg-preview.png";

const COPY = {
  fr: {
    aboutTitle: "À propos",
    aboutText:
      "SDG Techs est une agence de transformation digitale orientée résultats. Nous construisons des systèmes d'acquisition et d'automatisation pour générer des leads, des ventes et de la croissance mesurable.",
    cta: "Prendre rendez-vous",
    contactTitle: "Contacts",
    contact: {
      email: "contact@sdgtechs.com",
      phone: "+33746458691",
      regions: "Afrique, Asie, Europe, Canada",
      hours: "Lun-Ven : 09:00 à 18:00 · Dimanche : fermé",
    },
  },
  en: {
    aboutTitle: "About us",
    aboutText:
      "SDG Techs is a results-driven digital transformation agency. We build acquisition and automation systems to generate leads, sales, and measurable growth.",
    cta: "Book a call",
    contactTitle: "Contact info",
    contact: {
      email: "contact@sdgtechs.com",
      phone: "+33746458691",
      regions: "Africa, Asia, Europe, Canada",
      hours: "Mon-Fri: 09:00 to 18:00 · Sunday: Closed",
    },
  },
} as const;

export default function Sidebar() {
  const { language } = useI18n();
  const c = COPY[language];
  const { openModal } = useBookingModal();

  return (
    <div className="xs-sidebar-group info-group">
      <div className="xs-overlay xs-bg-black" />
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a href="#" className="close-side-widget">
              <i className="far fa-times-circle" />
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="nav-logo">
                  <a href="#home">
                    <img src={darkLogo} alt="SDG Techs" />
                  </a>
                </div>
                <div className="content-box">
                  <h2>{c.aboutTitle}</h2>
                  <p className="text">
                    {c.aboutText}
                  </p>
                  <button onClick={openModal} className="theme-btn btn-style-two">
                    <span>{c.cta}</span> <i className="fas fa-heart" />
                  </button>
                </div>
                <div className="contact-info">
                  <h2>{c.contactTitle}</h2>
                  <ul className="list-style-one">
                    <li>
                      <span className="icon flaticon-email" />{c.contact.email}
                    </li>
                    <li>
                      <span className="flaticon-phone-call" />{c.contact.phone}
                    </li>
                    <li>
                      <span className="icon flaticon-placeholder-1" />
                      {c.contact.regions}
                    </li>
                    <li>
                      <span className="flaticon-clock-2" />{c.contact.hours}
                    </li>
                  </ul>
                </div>
                <ul className="social-box">
                  <li className="facebook">
                    <a href="https://www.facebook.com/sdgtechnologie" target="_blank" rel="noreferrer" className="fab fa-facebook-f" />
                  </li>
                  <li className="instagram">
                    <a href="https://www.instagram.com/sdg_technologie/" target="_blank" rel="noreferrer" className="fab fa-instagram" />
                  </li>
                  <li className="twitter">
                    <a href="https://x.com/sdgtech9" target="_blank" rel="noreferrer" className="fa-brands fa-x-twitter" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
