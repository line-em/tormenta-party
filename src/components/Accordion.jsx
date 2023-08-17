"use client";
import "@/styles/accordion.css";
import { useState } from "react";

const Accordion = ({ header, content, open = false }) => {
	const [isOpen, setIsOpen] = useState(open);

	const handleAccordionClick = (event) => {
		if (event.target.closest(".accordion-content")) {
			event.stopPropagation();
		} else {
			setIsOpen(!isOpen);
		}
	};

	return (
		<div className="accordion" onClick={handleAccordionClick}>
			{header}
			<article className="accordion-content" aria-expanded={isOpen}>
				{content}
			</article>
		</div>
	);
};

export default Accordion;
