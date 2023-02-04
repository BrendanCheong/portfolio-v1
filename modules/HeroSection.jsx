import { useEffect } from 'react';
import { gsap } from 'gsap';
import Container from '../components/Container';
import Heading from '../components/Heading';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const HeroSection = () => {

	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {

		if (prefersReducedMotion) {
			return;
		}

		gsap.from('#home', {
			opacity: 0,
			y: 40,
			ease: 'power3.out',
			duration: 1,
			delay: 0.3,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container>
			<div
				id='home'
				style={{ minHeight: '90vh' }}
				className='flex items-center'
			>
				<div>
					<Heading isMono type='h4' color='text-primary-light'>
						Hi there, I&apos;m
					</Heading>
					<Heading type='h1' margin='mb-4 sm:mb-8'>
						Brendan
					</Heading>
					<Heading type='h3' margin='mb-5' color='text-white-dark'>
						I like making cool apps
					</Heading>
					<p className='mb-14 sm:text-lg text-white-dark max-w-xl'>
						I&lsquo;m a professional Fullstack developer with UI/UX designing
						skills. I&lsquo;m based in Singapore. Where the sun always shines! (most of the time)
					</p>

					<a
						href='https://www.linkedin.com/in/brendan-cheong-ern-jie/'
						rel='noopener noreferrer'
						target='_blank'
						className='text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 sm:py-4 sm:px-12 px-8 py-3 mx-auto my-16 font-mono text-sm transition ease-in rounded-sm shadow-md'
					>
						Hit me up on LinkedIn!
					</a>
				</div>
			</div>
		</Container>
	);
};

export default HeroSection;
