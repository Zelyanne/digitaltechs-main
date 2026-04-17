import { useEffect, useRef } from "react";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    contactKicker: "Contact",
    contactTitle1: "CONTACTEZ-NOUS",
    contactTitle2: "NOTRE AGENCE DIGITALE",
    placeholders: {
      name: "Votre nom*",
      email: "Votre email*",
      phone: "Téléphone",
      message: "Message*",
    },
    send: "Envoyer",
    faqKicker: "QUESTIONS FRÉQUENTES",
    faqTitle: "COMMENT POUVONS-NOUS ",
    faqTitleHighlight: "VOUS AIDER ?",
    faqIntro:
      "Trouvez les réponses aux questions les plus courantes sur nos services et notre accompagnement.",
    faqs: [
      {
        q: "Quels services marketing digital proposez-vous ?",
        a: "Nous proposons du marketing digital, gestion des médias sociaux, création de sites web et applications, graphisme, emailing, rédaction web & SEO/SEA, assistance virtuelle et bien d'autres services sur mesure.",
      },
      {
        q: "Sur quels territoires intervenez-vous ?",
        a: "SDG Techs accompagne ses clients en Afrique, Europe, Asie et Canada. Nos experts sont présents pour vous aider où que vous soyez.",
      },
      {
        q: "Comment se déroule un premier projet avec vous ?",
        a: "Nous commençons par un échange pour comprendre vos objectifs, puis nous proposons une stratégie sur-mesure. Chaque projet est conduit par des spécialistes certifiés avec des outils d'intelligence artificielle.",
      },
      {
        q: "Proposez-vous des stratégies Google Ads ?",
        a: "Oui, nous sommes une agence Google Ads et gérons vos campagnes publicitaires pour maximiser votre visibilité en ligne et générer des leads qualifiés.",
      },
      {
        q: "Comment mesurer les résultats de nos campagnes ?",
        a: "Nous fournissons des reportings réguliers et des tableaux de bord transparents. Nos stratégies génèrent des résultats rapides et mesurables adaptés à vos objectifs.",
      },
    ],
  },
  en: {
    contactKicker: "Contact",
    contactTitle1: "CONTACT US",
    contactTitle2: "OUR DIGITAL AGENCY",
    placeholders: {
      name: "Your name*",
      email: "Your email*",
      phone: "Phone",
      message: "Message*",
    },
    send: "Send",
    faqKicker: "FAQ",
    faqTitle: "HOW CAN WE ",
    faqTitleHighlight: "HELP YOU?",
    faqIntro:
      "Find answers to the most common questions about our services and support.",
    faqs: [
      {
        q: "What digital marketing services do you offer?",
        a: "We offer digital marketing, social media management, website and app creation, design, email marketing, content & SEO/SEM, virtual assistance, and many other tailor-made services.",
      },
      {
        q: "Where do you operate?",
        a: "SDG Techs supports clients across Africa, Europe, Asia, and Canada. Our experts can help wherever you are.",
      },
      {
        q: "How does a first project with you work?",
        a: "We start with a call to understand your goals, then we propose a tailored strategy. Each project is led by certified specialists using AI tools.",
      },
      {
        q: "Do you manage Google Ads strategies?",
        a: "Yes. We run and optimize your Google Ads campaigns to maximize online visibility and generate qualified leads.",
      },
      {
        q: "How do you measure campaign results?",
        a: "We provide regular reporting and transparent dashboards. Our strategies deliver fast, measurable results aligned with your objectives.",
      },
    ],
  },
} as const;

export default function FAQSection() {
  const accordionRef = useRef<HTMLUListElement>(null);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const $ = (window as Window & { $?: (...args: unknown[]) => any }).$;
    if (!$ || !accordionRef.current) return;

    const $accordion = $(accordionRef.current);
    $accordion.find("li:eq(0) a").addClass("active").next().slideDown();

    const handleClick = function (this: HTMLElement, j: { preventDefault: () => void }) {
      const $this = $(this);
      const dropDown = $this.closest("li").find("p");
      $this.closest(".accordion").find("p").not(dropDown).slideUp();

      if ($this.hasClass("active")) {
        $this.removeClass("active");
      } else {
        $this.closest(".accordion").find("a.active").removeClass("active");
        $this.addClass("active");
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    };

    $accordion.find("a").on("click", handleClick);
    return () => {
      $accordion.find("a").off("click", handleClick);
    };
  }, [language]);

  return (
    <div className="faq-area style-two">
      <div className="container">
        <div className="row padding-top">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="contact-form-box style-three">
              <div id="contact" className="contact-form-title white">
                <h5>{c.contactKicker}</h5>
                <h3>{c.contactTitle1}</h3>
                <h3>{c.contactTitle2}</h3>
              </div>
              <form action="https://formspree.io/f/mojnraqq" method="POST" id="dreamit-form">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="from-box">
                      <input type="text" name="name" placeholder={c.placeholders.name} required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="from-box">
                      <input type="email" name="email" placeholder={c.placeholders.email} required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="from-box">
                      <input type="tel" name="phone" placeholder={c.placeholders.phone} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-box">
                      <textarea name="message" id="message" placeholder={c.placeholders.message} />
                    </div>
                  </div>
                </div>
                <div className="from-box2 pt-30">
                  <button type="submit">
                    {c.send} <i className="fas fa-check-square" />
                  </button>
                </div>
              </form>
              <div id="status" />
            </div>
          </div>
          <div id="faq" className="col-lg-7 col-md-7 col-sm-12 responsive">
            <div className="row background_color">
              <div className="col-lg-12">
                <div className="dreamit-section-title text-left">
                  <h5 className="color2">{c.faqKicker}</h5>
                  <h1>
                    {c.faqTitle}
                    <span className="color2">{c.faqTitleHighlight}</span>
                  </h1>
                  <p className="text-pt">
                    {c.faqIntro}
                  </p>
                </div>
                <ul ref={accordionRef} className="accordion">
                  {c.faqs.map((item, i) => (
                    <li key={i}>
                      <a href="#">{item.q}</a>
                      <p>{item.a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
