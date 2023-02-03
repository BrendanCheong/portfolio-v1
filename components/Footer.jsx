import { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	useEffect(() => {
		gsap.from('#footerSocailItems a', {
			scrollTrigger: {
				trigger: '#footerSocailItems',
				start: 'top 102%',
			},
			opacity: 0,
			y: -10,
			stagger: 0.1,
			ease: 'expo.out',
			duration: 0.5,
			delay: 0.4,
		});
	}, []);
	return (
		<footer
			id='footer'
			className='bg-primary-dark font-poppins text-white-base border-b-2 border-primary-light flex flex-col items-center py-8 px-3 sm:px-4'
		>
			<div
				id='footerSocailItems'
				className='flex lg:hidden justify-center space-x-7 mb-5'
			>
				<a
					href='https://github.com/LayanJay'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiGithub className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
				<a
					href='https://twitter.com/__x__LEO__x__'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiTwitter className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
				<a
					href='https://www.linkedin.com/in/layan-jayasinghe-944746215/'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiLinkedin className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
				<a
					href='mailto:layanjayasinghe2@gmail.com'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiMail className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
			</div>
			<p className='text-xs sm:text-sm text-white-dark text-center'>
				Copyright © 2022 All Rights Reserved by Layan Jayasinghe
			</p>
		</footer>
	);
};

export default Footer;
