import LockButton from "../LockButton/LockButton";

const Footer = ({ isLocked, setIsLocked, onSubmit }) => {
	return (
		<footer>
			<LockButton isLocked={isLocked} setIsLocked={setIsLocked} />
			<button type="submit">Save</button>
		</footer>
	);
};

export default Footer;
