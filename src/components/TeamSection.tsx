import { useEffect, useRef } from "react";
import { IMG } from "../utils/images";
import tchoboImg from "../../tchobo.webp";
import alexisImg from "../../IMG_20250207_173742.jpg";
import jeromeImg from "../../fadonougbo jerome.png";
import joelImg from "../../Joel dahoue.png";
import { useI18n } from "../i18n";

type TeamMember = {
  img: string;
  name: string;
  role: { fr: string; en: string };
  objectPosition?: string;
  imgScale?: number;
};

const members: TeamMember[] = [
  { img: "resource/team1.png", name: "Gislain Sokponwe", role: { fr: "CEO SDG TECHS • Bénin", en: "CEO SDG TECHS • Benin" } },
  { img: "resource/team2.png", name: "Jean-Bernard Batina", role: { fr: "Développeur web & Digital Marketeur • France", en: "Web Developer & Digital Marketer • France" } },
  { img: "resource/team5.png", name: "Florian Grosjean", role: { fr: "Meta Buyer Expert • France", en: "Meta Buyer Expert • France" } },
  { img: "resource/team4.png", name: "Eya Azizou", role: { fr: "Inbound Marketing Experte • Belgique", en: "Inbound Marketing Expert • Belgium" } },
  { img: "resource/team3.png", name: "Shams Raju", role: { fr: "Développeur WordPress & Web Designer • Inde", en: "WordPress Developer & Web Designer • India" } },
  { img: "resource/team13.png", name: "Alexandre Mc Kinnon", role: { fr: "Business Developer Expert • Canada", en: "Business Development Expert • Canada" } },
  { img: "resource/team15.png", name: "Ado Nawainaou", role: { fr: "Experte en Stratégie & Marketing Digital • Cameroun", en: "Strategy & Digital Marketing Expert • Cameroon" } },
  { img: "resource/team14.png", name: "Lucien Savi", role: { fr: "Graphic Designer • France", en: "Graphic Designer • France" } },
  { img: "resource/team6.png", name: "Claude Nyake", role: { fr: "Consultante Inbound Marketing • Cameroun", en: "Inbound Marketing Consultant • Cameroon" } },
  { img: "resource/team7.png", name: "Amina Dambaba", role: { fr: "Copywriter Experte • Bénin", en: "Expert Copywriter • Benin" } },
  { img: "resource/team8.png", name: "Bernard", role: { fr: "Photographe & Vidéaste Expert • Bénin", en: "Expert Photographer & Videographer • Benin" } },
  { img: "resource/team9.png", name: "Junior Waylee", role: { fr: "Graphic Designer Expert • Côte d'Ivoire", en: "Expert Graphic Designer • Côte d'Ivoire" } },
  { img: "resource/team10.png", name: "Lucas Goudou", role: { fr: "Customer Support Expert • Bénin", en: "Customer Support Expert • Benin" } },
  { img: "resource/team11.png", name: "Franck Ameganvi", role: { fr: "Administrateur Système et Réseau Informatique • Bénin", en: "IT Systems & Network Administrator • Benin" } },
  { img: "resource/team12.png", name: "Pascal Alidjinou", role: { fr: "Chargé de Communication / Voix off / Montage Audio • France", en: "Communications / Voice-over / Audio Editing • France" } },
  { img: "resource/team16.png", name: "Onesime Malkiel Adje", role: { fr: "Senior Software Developer • Bénin", en: "Senior Software Developer • Benin" } },
  { img: tchoboImg, name: "Achille Tchobo", role: { fr: "Développeur senior WordPress, PHP / Magento I & II", en: "Senior WordPress Developer, PHP / Magento I & II" } },
  { img: alexisImg, name: "Alexis Othily", role: { fr: "AI Engineer • IA & Automatisation", en: "AI Engineer • AI & Automation" }, objectPosition: "55% 6%", imgScale: 1.18 },
  { img: jeromeImg, name: "Fadonougbo Jerome", role: { fr: "Business Developer • USA", en: "Business Developer • USA" } },
  { img: joelImg, name: "Joel Dahoue", role: { fr: "Business Developer • USA", en: "Business Developer • USA" } },
];

const COPY = {
  fr: {
    kicker: "NOTRE ÉQUIPE",
    title: "DÉCOUVREZ NOS ",
    titleHighlight: "EXPERTS",
  },
  en: {
    kicker: "OUR TEAM",
    title: "MEET OUR ",
    titleHighlight: "EXPERTS",
  },
} as const;

export default function TeamSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const initCarousel = () => {
      const $ = (window as unknown as typeof window & {
        $?: {
          (el: Element): {
            hasClass: (c: string) => boolean;
            owlCarousel: (o: object) => void;
            data: (k: string) => unknown;
            trigger: (e: string) => void;
            removeClass: (c: string) => void;
          };
          fn?: { owlCarousel?: unknown };
        };
      }).$;
      if (!$?.fn?.owlCarousel || !carouselRef.current) return;
      const $el = $(carouselRef.current);

      if ($el.data("owl.carousel")) {
        try {
          $el.trigger("destroy.owl.carousel");
          $el.removeClass("owl-loaded");
        } catch {
          // ignore
        }
      }

      $el.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        dotsEach: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1000: { items: 4 },
          1400: { items: 4 },
          1920: { items: 4 },
        },
      });
    };
    const timer = setTimeout(initCarousel, 150);
    return () => {
      clearTimeout(timer);
      const $ = (window as unknown as typeof window & {
        $?: {
          (el: Element): {
            hasClass: (c: string) => boolean;
            owlCarousel: (o: object) => void;
            data: (k: string) => unknown;
            trigger: (e: string) => void;
            removeClass: (c: string) => void;
          };
          fn?: { owlCarousel?: unknown };
        };
      }).$;
      if ($ && carouselRef.current) {
        const $el = $(carouselRef.current);
        if ($el.data("owl.carousel")) {
          try {
            $el.trigger("destroy.owl.carousel");
            $el.removeClass("owl-loaded");
          } catch {
            // ignore
          }
        }
      }
    };
  }, [language]);

  return (
    <div id="team" className="team-area style-two pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title style-two text-center">
              <h5>{c.kicker}</h5>
              <h1>
                {c.title}
                <span>{c.titleHighlight}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div ref={carouselRef} className="team-list owl-carousel">
              {members.map((m, i) => (
                <div key={i} className="col-lg-12 col-sm-12">
                <div className="dreamit-single-team-box2">
                  <div className="single-team-thumb" style={{ 
                    height: "350px",
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(180deg, #ffffff 0%, #f2f4f9 100%)",
                    border: "1px solid rgba(41, 38, 67, 0.10)",
                    borderRadius: "22px",
                    padding: 0,
                  }}>
                    <img 
                      src={m.img.startsWith("resource/") ? IMG(m.img) : m.img} 
                      alt={m.name} 
                      style={{ 
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: m.objectPosition ?? "50% 18%",
                        transform: m.imgScale ? `scale(${m.imgScale})` : undefined,
                        transformOrigin: m.imgScale ? "center" : undefined,
                      }} 
                    />
                  </div>
                  <div className="team-content">
                    <div className="team-title"><h3>{m.name}</h3></div>
                    <div className="team-text"><p>{m.role[language]}</p></div>
                  </div>
                  {/* <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#"><span><i className="fab fa-facebook-f" /></span></a>
                      <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                    </div>
                    <div className="team-icon">
                      <span><i className="flaticon-share" /></span>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
