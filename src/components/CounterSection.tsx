import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";

type CounterKey = "projects" | "members" | "satisfaction";

const COPY = {
  fr: {
    labels: {
      projects: "Projets réalisés",
      members: "Membres actifs",
      satisfaction: "Taux de satisfaction",
    },
  },
  en: {
    labels: {
      projects: "Projects completed",
      members: "Active team members",
      satisfaction: "Satisfaction rate",
    },
  },
} as const;

const COUNTERS = [
  { icon: "flaticon-code", value: 250, suffix: "+", labelKey: "projects" as const, format: "none" },
  { icon: "flaticon-temporary-agency", value: 95, suffix: "+", labelKey: "members" as const, format: "none" },
  { icon: "fas fa-award", value: 100, suffix: "%", labelKey: "satisfaction" as const, format: "none" },
] as const satisfies readonly { icon: string; value: number; suffix: string; labelKey: CounterKey; format: string }[];

function useCounterInView(target: number, format: string, duration = 1000) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || animated.current) return;
        animated.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const p = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - p) * (1 - p);
          const v = Math.round(target * eased);
          setDisplay(v);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, format]);

  return { ref, display: format === "comma" ? display.toLocaleString() : String(display) };
}

type CounterItemProps = {
  c: { icon: string; value: number; suffix: string; label: string; format: string };
};

function CounterItem({ c }: CounterItemProps) {
  const { ref, display } = useCounterInView(c.value, c.format);

  return (
    <div ref={ref} className="col-lg-3 col-md-6 col-sm-12">
      <div className="techno-single-counter-box">
        <div className="single-counter-box-inner">
          <div className="counter-icon">
            <i className={c.icon} />
          </div>
          <div className="counter-text">
            <h1 className="counter">{display}</h1>
            {c.suffix && <span>{c.suffix}</span>}
          </div>
          <div className="counter-title">
            <h4>{c.label}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CounterSection() {
  const { language } = useI18n();
  const labels = COPY[language].labels;
  const counters = COUNTERS.map((c) => ({
    icon: c.icon,
    value: c.value,
    suffix: c.suffix,
    label: labels[c.labelKey],
    format: c.format,
  }));

  return (
    <div className="counter-area style-three">
      <div className="container">
        <div className="row counter-to">
          {counters.map((c, i) => (
            <CounterItem key={i} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
