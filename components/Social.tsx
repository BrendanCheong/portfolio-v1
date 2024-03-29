import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';

const Social = () => {
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const tl = gsap.timeline({ delay: 0.6 });

		tl.from('#socialItems a', {
			opacity: 0,
			y: -10,
			stagger: 0.1,
			ease: 'expo.out',
			duration: 0.5,
		});
	}, [prefersReducedMotion]);
	return (
		<div
			id='socialItems'
			className='bottom-32 left-8 lg:flex lg:flex-col lg:justify-center lg:space-y-7 fixed z-30 hidden'
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
	);
};

export default Social;
