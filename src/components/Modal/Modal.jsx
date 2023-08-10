import { forwardRef } from "react";

const Modal = forwardRef(({ children, onClose }, ref) => {
	const isClickInsideRectangle = (e, element) => {
		const r = element.getBoundingClientRect();
		console.log(r);
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
			<button onClick={onClose}>oi</button>
		</dialog>
	);
});

export default Modal;
