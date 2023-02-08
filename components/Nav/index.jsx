import Image from 'next/image';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link as ScrollLink } from 'react-scroll';
import Hamburger from './Hamburger';
import Menu from './Menu';
import useScrollDirection from '../../hooks/useScrollDirection';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolledToTop, setScrolledToTop] = useState(true);
	const scrollDirection = useScrollDirection('down');
	const prefersReducedMotion = usePrefersReducedMotion();
	const [menu, setMenu] = useState('');

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50);
	};

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
		if (prefersReducedMotion) {
			return;
		}

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, [prefersReducedMotion]);
	return (
		<>
			<nav className={`font-poppins text-white-base sm:p-6 md:px-10 fixed top-0 z-50 flex items-center justify-between w-screen p-4
			${scrollDirection === 'up' && !scrolledToTop && 'h-[4.5rem] bg-opacity-90 shadow-2xl translate-y-0 shadow-zinc-900 bg-primary-dark duration-300 ease-in'}
			${scrollDirection === 'down' && !scrolledToTop && 'translate-y-[-4.5rem] h-[4.5rem] transform duration-300 ease-out'}
			`}>
				<div id='brandLogo' className='sm:w-20 md:w-24 w-16'>
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
					<ul id='navItems' className='space-x-14 flex'>
						<li className='md:block hidden'>
							<ScrollLink
								className='hover:text-primary-light font-mono transition ease-in cursor-pointer'
								to='about'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								1. About
							</ScrollLink>
						</li>
						<li className='md:block hidden'>
							<ScrollLink
								className='hover:text-primary-light font-mono transition ease-in cursor-pointer'
								to='work'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								2. Work
							</ScrollLink>
						</li>
						<li className='md:block hidden'>
							<ScrollLink
								className='hover:text-primary-light font-mono transition ease-in cursor-pointer'
								to='projects'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								3. Projects
							</ScrollLink>
						</li>
						<li className='md:block hidden'>
							<ScrollLink
								className='hover:text-primary-light font-mono transition ease-in cursor-pointer'
								to='contact'
								smooth
								duration={500}
								offset={-100}
								isDynamic
							>
								4. Contact
							</ScrollLink>
						</li>
						<li className='md:block hidden'>
							<a
								href='/Brendan_Cheong_Resume.pdf'
								rel='noopener noreferrer'
								target='_blank'
								className='text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 px-4 py-2 font-mono text-sm transition ease-in rounded-sm shadow-md'
							>
								Resume
							</a>
						</li>
						<li className='md:hidden block'>
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
