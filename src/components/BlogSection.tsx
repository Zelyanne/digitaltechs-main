import { useEffect, useRef } from "react";
import { IMG } from "../utils/images";

const posts = [
  { img: "resource/blog2.jpg", date: "10 juillet 2025", author: "SDG Tech", title: "Stratégies marketing digital pour booster votre chiffre d'affaires", style: "style_two" },
  { img: "resource/blog3.jpg", date: "10 juillet 2025", author: "SDG Tech", title: "SEO et référencement naturel : les bonnes pratiques en 2025", style: "" },
  { img: "resource/blog1.jpg", date: "10 juillet 2025", author: "SDG Tech", title: "Réseaux sociaux : comment atteindre vos objectifs marketing", style: "" },
  { img: "resource/blog2.jpg", date: "10 juillet 2025", author: "SDG Tech", title: "Création de site web et applications sur mesure", style: "style_two" },
  { img: "resource/blog2.jpg", date: "10 juillet 2025", author: "SDG Tech", title: "Google Ads et campagnes publicitaires performantes", style: "style_two" },
];

export default function BlogSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

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
      autoplayTimeout: 10000,
      dots: true,
      dotsEach: false,
      center: false,
      nav: false,
      navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1000: { items: 2 },
        1400: { items: 2 },
        1920: { items: 2 },
      },
    });
    return () => {
      try { $el.trigger("destroy.owl.carousel"); } catch { /* ignore */ }
    };
  }, []);

  return (
    <div id="blog" className="blog_area style-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="dreamit-section-title2 text-left">
              <h1>ACTUALITÉS</h1>
              <h1>SDG <span>TECH</span></h1>
              <p>
                Retrouvez nos articles sur le marketing digital, le SEO, les réseaux sociaux et les dernières tendances pour développer votre business en ligne.
              </p>
              <div className="blog-button">
                <a href="#">
                  TOUS LES ARTICLES <span><i className="fas fa-check-square" /></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div ref={carouselRef} className="blog-list owl-carousel">
              {posts.map((p, i) => (
                <div key={i} className="single_blog">
                  <div className="single_blog_thumb">
                    <a href="blog-details.html">
                      <img src={IMG(p.img)} alt="" />
                    </a>
                  </div>
                  <div className={p.style ? `single_blog_content ${p.style}` : "single_blog_content"}>
                    <div className="post-categories">
                      <a href="#">
                        <span><i className="far fa-calendar-alt" /></span>{p.date}
                      </a>
                    </div>
                    <div className="techno_blog_meta">
                      <a href="#"><i className="far fa-user-circle" /> Par {p.author}</a>
                    </div>
                    <div className="blog_page_title">
                      <h4>
                        <a href="blog-details.html">{p.title}</a>
                      </h4>
                    </div>
                    <div className="blog_button">
                      <a href="#"><i className="flaticon flaticon-right-arrow" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
