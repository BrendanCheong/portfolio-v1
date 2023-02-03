const Container = ({ children, virticalPadding = '' }) => {
	return (
		<section
			className={`max-w-6xl mx-auto container px-3 sm:px-6 md:px-20 ${virticalPadding}`}
		>
			{children}
		</section>
	);
};

export default Container;
