
"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import ContactModal from "../models/ContactModel";

export type ModalType = "consultation" | "service" | "job" | "partnership";

type ModalContextValue = {
	openModal: (type: ModalType, options?: { serviceName?: string }) => void;
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

	const openModal = useCallback(
		(type: ModalType, options?: { serviceName?: string }) => {
			setFormType(type);
			setServiceName(options?.serviceName);
			setIsOpen(true);
		},
		[]
	);

	const closeModal = useCallback(() => setIsOpen(false), []);

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
		</ModalContext.Provider>
	);
}

