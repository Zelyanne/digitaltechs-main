import { useEffect, useRef } from "react";
import { IMG } from "../utils/images";
import { useI18n } from "../i18n";

const COPY = {
  fr: {
    slides: [
      { tagline: "BIENVENUE CHEZ SDG TECHS", title1: "Agence de", title2: "Marketing", highlight: "Digital" },
      { tagline: "AGENCE DE MARKETING DIGITAL", title1: "AMÉLIOREZ VOTRE", title2: "PRÉSENCE", highlight: "EN LIGNE" },
      { tagline: "BIENVENUE CHEZ SDG TECHS", title1: "Solutions", title2: "Digitales", highlight: "Innovantes" },
    ],
    cta: "DÉCOUVRIR PLUS",
  },
  en: {
    slides: [
      { tagline: "WELCOME TO SDG TECHS", title1: "Digital", title2: "Marketing", highlight: "Agency" },
      { tagline: "DIGITAL MARKETING AGENCY", title1: "BOOST YOUR", title2: "ONLINE", highlight: "PRESENCE" },
      { tagline: "WELCOME TO SDG TECHS", title1: "Innovative", title2: "Digital", highlight: "Solutions" },
    ],
    cta: "LEARN MORE",
  },
} as const;

export default function SliderSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const $ = (window as typeof window & { $?: { (el: Element): { owlCarousel: (o: object) => void; data: (k: string) => unknown; trigger: (e: string) => void; removeClass: (c: string) => void }; fn?: { owlCarousel?: unknown } } }).$;
    if (!carouselRef.current || !$?.fn?.owlCarousel) return;
    const $el = $(carouselRef.current);
    if ($el.data("owl.carousel")) {
      $el.trigger("destroy.owl.carousel");
      $el.removeClass("owl-loaded");
    }
    $el.owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 5500,
      autoplayTimeout: 5000,
      dots: false,
      nav: true,
      navText: ["<i class='flaticon-next'></i>", "<i class='flaticon-back'></i>"],
      responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1000: { items: 1 }, 1920: { items: 1 } },
    });
    return () => {
      try { $el.trigger("destroy.owl.carousel"); } catch { /* ignore */ }
    };
  }, [language]);

  return (
    <div id="home" ref={carouselRef} className="slider_list2 owl-carousel">
      {c.slides.map((slide, i) => (
        <div key={i} className={`slider-area slider${4 + (i % 3)} align-items-center d-flex`}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="slider-content2">
                  <h4>{slide.tagline}</h4>
                  <h1>{slide.title1}</h1>
                  <h1>
                    {slide.title2}{" "}
                    {slide.highlight ? <span className="color2">{slide.highlight}</span> : ""}
                  </h1>
                  <div className="slider-button2">
                    <a href="#about">
                      {c.cta}<i className="fas fa-check-square" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider-socail-icon2">
                <a href="#">LINKEDIN</a>
                <a href="#">TWITTER</a>
                <a href="#">FACEBOOK</a>
              </div>
              <div className="slider-shape-thumb">
                <div className="slider-shape-thumb-inner">
                  <img src={IMG("slider/shape-2.png")} alt="" />
                </div>
                <div className="slider-shape-thumb-inner1">
                  <img src={IMG("slider/shape-1.png")} alt="" />
                </div>
                <div className="slider-shape-thumb-inner2 rotateme">
                  <img src={IMG("slider/round3.png")} alt="" />
                </div>
                <div className="slider-shape-thumb-inner3">
                  <img src={IMG("slider/line.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
