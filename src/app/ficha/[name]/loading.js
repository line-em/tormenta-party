import D20 from "@/assets/svgs/d20";

const Loading = () => {
	return (
		// <section className="align-start">
		<>
			<section
				className="spinner-headless no-padding no-shadow row"
				// style={{ width: "100%" }}
			>
				<D20 width={50} height={50} />
			</section>
			<h2>Rolando os dados...</h2>
		</>
		// </section>
	);
};

export default Loading;
