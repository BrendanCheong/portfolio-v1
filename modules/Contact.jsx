import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	useEffect(() => {
		gsap.from('#contact', {
			scrollTrigger: {
				trigger: '#contact',
				start: 'top 80%',
			},
			opacity: 0,
			y: 40,
			ease: 'power3.out',
			duration: 1,
			delay: 0.3,
		});
	}, []);
	return (
		<Container>
			<section
				id='contact'
				style={{ minHeight: '70vh' }}
				className='flex flex-col justify-center py-20'
			>
				<Heading
					type='h2'
					isMono
					color='text-primary-light'
					textSize='text-xl sm:text-2xl md:text-3xl'
					align='text-center'
					margin='mb-8'
				>
					Get In Touch
				</Heading>
				<p className='text-white-dark text-sm md:text-base text-center mb-1'>
					My inbox is always open.
				</p>
				<p className='text-white-dark text-sm md:text-base text-center max-w-lg mx-auto mb-1'>
					Whether you have something to talk about or just want to say hi, I’ll
					try my best to get back to you!
				</p>
				<a
					href='mailto:layanjayasinghe2@gmail.com'
					rel='noopener noreferrer'
					target='_blank'
					className='font-mono text-sm text-primary-light ring-1 ring-primary-light hover:bg-primary-light hover:bg-opacity-20 rounded-sm shadow-md transition ease-in mx-auto my-16 py-3 px-8 sm:py-4 sm:px-12'
				>
					Say Hi
				</a>
			</section>
		</Container>
	);
};

export default Contact;
