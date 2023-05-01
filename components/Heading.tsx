interface HeadingProps {
	type?: 'h1' | 'h2' | 'h3' | 'h4';
	children: React.ReactNode;
	margin?: string;
	isMono?: boolean;
	color?: string;
	textSize?: string;
	align?: string;
	isClickable?: boolean;
}

const Heading = ({
	type = 'h1',
	children,
	margin = 'mb-3',
	isMono = false,
	color = 'text-white-base',
	textSize,
	align = 'text-left',
	isClickable = false,
}: HeadingProps) => {
	if (type === 'h1') {
		return (
			<h1
				className={`${isMono ? 'font-mono' : 'font-inter font-semibold'} ${
					textSize ? textSize : 'text-4xl sm:text-5xl md:text-7xl'
				} ${align} leading-snug ${margin} ${color} ${
					isClickable ? 'cursor-pointer' : 'cursor-default'
				} transition ease-in`}
			>
				{children}
			</h1>
		);
	} else if (type === 'h2') {
		return (
			<h2
				className={`${isMono ? 'font-mono' : 'font-inter font-semibold'} ${
					textSize ? textSize : 'text-2xl sm:text-3xl md:text-4xl'
				} ${align} ${margin} ${color} ${
					isClickable ? 'cursor-pointer' : 'cursor-default'
				} transition ease-in`}
			>
				{children}
			</h2>
		);
	} else if (type === 'h3') {
		return (
			<h3
				className={`${isMono ? 'font-mono' : 'font-inter font-semibold'} ${
					textSize ? textSize : 'text-xl sm:text-2xl md:text-3xl'
				} ${align} ${margin} ${color} ${
					isClickable ? 'cursor-pointer' : 'cursor-default'
				} transition ease-in`}
			>
				{children}
			</h3>
		);
	} else {
		return (
			<h4
				className={`${isMono ? 'font-mono' : 'font-inter font-semibold'} ${
					textSize ? textSize : 'sm:text-lg'
				} ${align} ${margin} ${color} ${
					isClickable ? 'cursor-pointer' : 'cursor-default'
				} transition ease-in`}
			>
				{children}
			</h4>
		);
	}
};

export default Heading;
