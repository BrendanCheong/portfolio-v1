import Image from 'next/image';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link as ScrollLink } from 'react-scroll';
import Hamburger from './Hamburger';
import Menu from './Menu';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menu, setMenu] = useState('');

	const toggle = () => {
		if (!isOpen) {
			setMenu('opened');
		} else {
			setMenu('');
		}
		setIsOpen(!isOpen);
	};

	const handleLink = () => {
		setIsOpen(false);
		setMenu('');
	};

	useEffect(() => {
		const tl = gsap.timeline({ delay: 0.4 });

		tl.from(
			'#brandLogo',
			{ opacity: 0, duration: 0.3, ease: 'expo.in' },
			'start'
		).from('#navItems li', {
			opacity: 0,
			y: -10,
			stagger: 0.1,
			ease: 'expo.out',
			duration: 0.5,
		});
	}, []);
	return (
		<>
			<nav className='sticky top-0 z-50 flex items-center justify-between bg-primary-dark font-poppins text-white-base p-4 sm:p-6 md:px-10'>
				<div id='brandLogo' className='w-16 sm:w-20 md:w-24'>
					<ScrollLink
						className='cursor-pointer'
						to='home'
						smooth
						duration={500}
						offset={-100}
						isDynamic
						onClick={handleLink}
					>
						<Image
							src='/brand_assets/logo-v1.svg'
							alt='brand logo'
							layout='intrinsic'
							width={165}
							height={72}
						/>
					</ScrollLink>
				</div>
				<div>
					<ul id='navItems' className='flex space-x-14'>
						<li className='hidden md:block'>
							<ScrollLink
								className='transition ease-in font-mono hover:text-primary-light cursor-pointer'
								to='about'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								1. About
							</ScrollLink>
						</li>
						<li className='hidden md:block'>
							<ScrollLink
								className='transition ease-in font-mono hover:text-primary-light cursor-pointer'
								to='work'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								2. Work
							</ScrollLink>
						</li>
						<li className='hidden md:block'>
							<ScrollLink
								className='transition ease-in font-mono hover:text-primary-light cursor-pointer'
								to='contact'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								3. Contact
							</ScrollLink>
						</li>
						<li className='hidden md:block'>
							<a
								href='/layan_resume.pdf'
								rel='noopener noreferrer'
								target='_blank'
								className='font-mono text-sm text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 rounded-sm shadow-md transition ease-in py-2 px-4'
							>
								Resume
							</a>
						</li>
						<li className='block md:hidden'>
							<Hamburger
								onclick={toggle}
								classname={`hover:outline-none focus:outline-none menu ${menu}`}
							/>
						</li>
					</ul>
				</div>
			</nav>
			<Menu isOpen={isOpen} linkHandler={handleLink} />
		</>
	);
};

export default Nav;
