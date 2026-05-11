import { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from "react";

interface CalendlyModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CalendlyModalContext = createContext<CalendlyModalContextType | undefined>(undefined);

export function useCalendlyModal() {
  const context = useContext(CalendlyModalContext);
  if (!context) {
    throw new Error("useCalendlyModal must be used within CalendlyModalProvider");
  }
  return context;
}

interface CalendlyModalProviderProps {
  children: ReactNode;
}

export function CalendlyModalProvider({ children }: CalendlyModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <CalendlyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </CalendlyModalContext.Provider>
  );
}

interface CalendlyModalProps {
  calendlyUrl?: string;
}

export function CalendlyModal({ calendlyUrl = "https://calendly.com/sdg-techs/30min" }: CalendlyModalProps) {
  const { isOpen, closeModal } = useCalendlyModal();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const checkCalendly = setInterval(() => {
        if ((window as any).Calendly) {
          clearInterval(checkCalendly);
          (window as any).Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: containerRef.current,
            prefill: {},
            utm: {}
          });
        }
      }, 100);
      return () => clearInterval(checkCalendly);
    }
  }, [isOpen, calendlyUrl]);

  if (!isOpen) return null;

  return (
    <div className="calendly-modal-overlay" onClick={closeModal}>
      <div className="calendly-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="calendly-modal-close" onClick={closeModal} aria-label="Fermer">
          ×
        </button>
        <div 
          ref={containerRef} 
          style={{ minWidth: "320px", height: "580px" }}
        ></div>
      </div>
    </div>
  );
}