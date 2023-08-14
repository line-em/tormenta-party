/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Remove from "@/assets/svgs/Remove";

const Modal = forwardRef(({ children, onClose }, ref) => {
	const isClickInsideRectangle = (e, element) => {
		const r = element.getBoundingClientRect();
		const isClickInsideElement =
			e.clientX > r.left &&
			e.clientX < r.right &&
			e.clientY > r.top &&
			e.clientY < r.bottom;
		const isClickInsideSelect = element.contains(e.target);
		return isClickInsideElement || isClickInsideSelect;
	};
	return (
		<dialog
			onClick={(e) =>
				ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
			}
			ref={ref}
		>
			<button onClick={onClose} className="modal-button">
				<Remove width={25} height={25} />
			</button>
			{children}
		</dialog>
	);
});

export default Modal;
