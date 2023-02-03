import { useEffect } from 'react';
import { gsap } from 'gsap';
import Container from '../components/Container';
import Heading from '../components/Heading';

const HeroSection = () => {
	useEffect(() => {
		gsap.from('#home', {
			opacity: 0,
			y: 40,
			ease: 'power3.out',
			duration: 1,
			delay: 0.3,
		});
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
						Hi there, I am
					</Heading>
					<Heading type='h1' margin='mb-4 sm:mb-8'>
						Layan Jayasinghe.
					</Heading>
					<Heading type='h3' margin='mb-5' color='text-white-dark'>
						Fullstack Developer & UI/UX Designer
					</Heading>
					<p className='mb-14 sm:text-lg text-white-dark max-w-xl'>
						I&lsquo;m a professional Fullstack developer with UI/UX designing
						skills. Currently, I&lsquo;m based in Colombo, Sri Lanka.
					</p>

					<a
						href='/layan_resume.pdf'
						rel='noopener noreferrer'
						target='_blank'
						className='font-mono text-sm text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 rounded-sm shadow-md transition ease-in mx-auto my-16 py-3 px-8 sm:py-4 sm:px-12'
					>
						Resume
					</a>
				</div>
			</div>
		</Container>
	);
};

export default HeroSection;
