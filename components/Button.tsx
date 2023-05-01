import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	padding?: string;
	width?: string;
	margin?: string;
}

const Button = ({
	onClick,
	children,
	padding = 'py-2 px-4',
	width = '',
	margin = '',
}: ButtonProps) => {
	return (
		<button
			className={`${padding} ${margin} ${width} font-mono text-sm text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 rounded-sm shadow-md transition ease-in`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
