import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
}

interface BookingModalProviderProps {
  children: ReactNode;
}

export function BookingModalProvider({ children }: BookingModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

interface BookingModalProps {
  bookingUrl?: string;
}

export function BookingModal({ bookingUrl = "https://cal.com/sdg-techs/30min" }: BookingModalProps) {
  const { isOpen, closeModal } = useBookingModal();

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={closeModal}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={closeModal} aria-label="Fermer">
          ×
        </button>
        <iframe
          src={bookingUrl}
          title="SDG Techs booking calendar"
          style={{ minWidth: "320px", width: "100%", height: "580px", border: 0 }}
        />
      </div>
    </div>
  );
}
