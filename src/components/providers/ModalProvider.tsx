
"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import ContactModal from "../models/ContactModel";
import ServiceModel from "../models/ServiceModel";

export type ModalType = "consultation" | "service" | "job" | "partnership";

type ModalContextValue = {
  openModal: (
    type: ModalType,
    options?: { serviceName?: string; serviceId?: string }
  ) => void;
  closeModal: () => void;
  isModalOpen: boolean;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<ModalType>("consultation");
  const [serviceName, setServiceName] = useState<string | undefined>(undefined);
  // service modal control (shows service details separate from contact form)
  const [serviceModalId, setServiceModalId] = useState<string | null>(null);

  const openModal = useCallback(
    (
      type: ModalType,
      options?: { serviceName?: string; serviceId?: string }
    ) => {
      setFormType(type);
      setServiceName(options?.serviceName);
      // if a serviceId is provided and type is 'service', open the service modal
      if (type === "service" && options?.serviceId) {
        setServiceModalId(options.serviceId);
      } else {
        setIsOpen(true);
      }
    },
    []
  );

  const closeModal = useCallback(() => setIsOpen(false), []);

  const closeServiceModal = useCallback(() => setServiceModalId(null), []);

  const value = useMemo(
    () => ({ openModal, closeModal, isModalOpen: isOpen }),
    [openModal, closeModal, isOpen]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        formType={formType}
        serviceName={serviceName}
      />
      <ServiceModel
        isOpen={Boolean(serviceModalId)}
        onClose={closeServiceModal}
        serviceId={serviceModalId}
      />
    </ModalContext.Provider>
  );
}

