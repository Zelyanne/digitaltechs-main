import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const COPY = {
  fr: { aria: "Remonter en haut" },
  en: { aria: "Scroll to top" },
} as const;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { language } = useI18n();
  const c = COPY[language];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-area">
      <div className="top-wrap">
        <div className="go-top-btn-wraper">
          <div
            className={`go-top go-top-button ${visible ? "active" : ""}`}
            onClick={scrollToTop}
            onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
            role="button"
            tabIndex={0}
            aria-label={c.aria}
          >
            <i className="fas fa-arrow-up" />
            <i className="fas fa-arrow-up" />
          </div>
        </div>
      </div>
    </div>
  );
}
