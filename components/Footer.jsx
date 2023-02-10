import { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	useEffect(() => {
		gsap.from('#footerSocialItems a', {
			scrollTrigger: {
				trigger: '#footerSocialItems',
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
			className='bg-primary-dark font-poppins text-white-base border-primary-light sm:px-4 flex flex-col items-center px-3 py-8 border-b-2'
		>
			<div
				id='footerSocialItems'
				className='lg:hidden space-x-7 flex justify-center mb-5'
			>
				<a
					href='https://github.com/BrendanCheong'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiGithub className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
				<a
					href='https://www.instagram.com/brendancheongwastaken/'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiInstagram className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
				<a
					href='https://www.linkedin.com/in/brendan-cheong-ern-jie/'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiLinkedin className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
				<a
					href='mailto:brendancej1@gmail.com'
					aria-label='External link'
					rel='me noopener noreferrer'
					target='_blank'
				>
					<FiMail className='text-lg sm:text-xl text-white-dark hover:text-primary-light transform hover:-translate-y-0.5 transition ease-in' />
				</a>
			</div>
			<p className='sm:text-sm text-white-dark text-xs text-center'>
				{`Copyright © ${new Date().getFullYear()} All Rights Reserved by Brendan Cheong.`}
			</p>
		</footer>
	);
};

export default Footer;
