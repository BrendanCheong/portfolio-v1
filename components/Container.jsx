const Container = ({ children, verticalPadding = '' }) => {
	return (
		<section
			className={`max-w-6xl mx-auto container px-3 sm:px-6 md:px-20 ${verticalPadding}`}
		>
			{children}
		</section>
	);
};

export default Container;
