import { Link as ScrollLink } from 'react-scroll';

const Menu = ({ isOpen, linkHandler }) => {
	return (
		<div
			className={`fixed z-50 right-0 backdrop-filter transform ${
				isOpen ? 'left-0 h-full w-full backdrop-blur-sm' : 'backdrop-blur-none'
			} transition-all duration-200 ease-in`}
		>
			<div
				className={`absolute z-10 right-6 transform ${
					isOpen ? 'translate-x-0' : 'translate-x-52'
				} transition-all duration-200 ease-in bg-primary-base rounded-md shadow-md px-10 pt-5 pb-8`}
			>
				<ul className='flex flex-col space-y-6'>
					<li className='flex justify-start'>
						<ScrollLink
							className='text-primary-light hover:underline font-mono transition ease-in cursor-pointer'
							to='about'
							smooth
							duration={500}
							offset={-100}
							isDynamic
							onClick={linkHandler}
						>
							About
						</ScrollLink>
					</li>
					<li className='flex justify-start'>
						<ScrollLink
							className='text-primary-light hover:underline font-mono transition ease-in cursor-pointer'
							to='work'
							smooth
							duration={500}
							offset={-100}
							isDynamic
							onClick={linkHandler}
						>
							Work
						</ScrollLink>
					</li>
					<li className='flex justify-start'>
						<ScrollLink
							className='text-primary-light hover:underline font-mono transition ease-in cursor-pointer'
							to='contact'
							smooth
							duration={500}
							offset={-100}
							isDynamic
							onClick={linkHandler}
						>
							Contact
						</ScrollLink>
					</li>
					<li className='flex justify-start'>
						<a
							href='/Brendan_Cheong_Resume.pdf'
							rel='noopener noreferrer'
							target='_blank'
							className='text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 px-4 py-2 font-mono text-sm transition ease-in rounded-sm shadow-md'
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
