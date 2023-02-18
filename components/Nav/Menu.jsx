import { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import useOnClickOutside from '../../hooks/useClickOutside';

const Menu = ({ isOpen, linkHandler }) => {

	const wrapperRef = useRef();
	useOnClickOutside(wrapperRef, linkHandler);

	return (
		<div
			className={`fixed z-50 right-0 backdrop-filter transform pt-10 ${
				isOpen ? 'left-0 h-full w-full backdrop-blur-sm' : 'backdrop-blur-none'
			} transition-all duration-200 ease-in`}
		>
			<div
				className={`absolute z-10 right-6 transform ${
					isOpen ? 'translate-x-0' : 'translate-x-52'
				} transition-all duration-200 ease-in bg-primary-base rounded-md shadow-md px-10 pt-5 pb-8`}
				ref={wrapperRef}
			>
				<ul className='flex flex-col space-y-6'>
					<li className='flex justify-start'>
						<ScrollLink
							className='text-primary-light hover:underline font-mono transition ease-in cursor-pointer'
							to='about'
							smooth
							duration={200}
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
							to='skills'
							smooth
							duration={200}
							offset={-100}
							isDynamic
							onClick={linkHandler}
						>
							Skills
						</ScrollLink>
					</li>
					<li className='flex justify-start'>
						<ScrollLink
							className='text-primary-light hover:underline font-mono transition ease-in cursor-pointer'
							to='work'
							smooth
							duration={200}
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
							to='projects'
							smooth
							duration={200}
							offset={-100}
							isDynamic
							onClick={linkHandler}
						>
							Projects
						</ScrollLink>
					</li>
					<li className='flex justify-start'>
						<ScrollLink
							className='text-primary-light hover:underline font-mono transition ease-in cursor-pointer'
							to='contact'
							smooth
							duration={200}
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
