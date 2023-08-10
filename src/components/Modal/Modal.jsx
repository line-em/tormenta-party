import { forwardRef } from "react";

const Modal = forwardRef(({ children, onClose }, ref) => {
	const isClickInsideRectangle = (e, element) => {
		const r = element.getBoundingClientRect();
		return (
			e.clientX > r.left &&
			e.clientX < r.right &&
			e.clientY > r.top &&
			e.clientY < r.bottom
		);
	};

	return (
		<dialog
			onClick={(e) =>
				ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
			}
			ref={ref}
		>
			{children}
			<button onClick={onClose}>Fechar</button>
		</dialog>
	);
});

export default Modal;
