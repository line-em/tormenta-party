"use client";
import "@/styles/accordion.css";
import { useState } from "react";

const Accordion = ({
	header,
	content,
	open = false,
	absolute = false,
	prefersClick = false
}) => {
	const [isOpen, setIsOpen] = useState(open);

	const handleMouseOver = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	if (prefersClick) {
		return (
			<div className="accordion" onClick={() => setIsOpen(!isOpen)}>
				{header}
				<article
					className={`accordion-content ${absolute ? "absolute" : ""}`}
					aria-expanded={isOpen}
				>
					{content}
				</article>
			</div>
		);
	}

	return (
		<div
			className="accordion"
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
		>
			{header}
			<article
				className={`accordion-content ${absolute ? "absolute" : ""}`}
				aria-expanded={isOpen}
			>
				{content}
			</article>
		</div>
	);
};

export default Accordion;
