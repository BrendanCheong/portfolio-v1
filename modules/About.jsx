import Image from 'next/image';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Line from '../components/Line';
import MyStack from '../components/MyStack';
import { useEffect } from 'react';
import useBlurImage from '../hooks/useBlurImage';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useEffect(() => {
		gsap.from('#about', {
			scrollTrigger: {
				trigger: '#about',
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
				id='about'
				style={{ minHeight: '80vh' }}
				className='flex flex-col justify-center'
			>
				<div className='inline-flex items-center space-x-3 mb-6'>
					<Heading type='h2' isMono color='text-primary-light'>
						About Me
					</Heading>
					<Line />
				</div>
				<div className='grid grid-rows-1 grid-col-1 lg:grid-cols-2 gap-8'>
					<div>
						<p className='text-white-dark text-sm sm:text-base leading-6 sm:leading-7 mb-3'>
							Hello! I&lsquo;m Layan and I love to build things that live on the
							web. Currently, I&lsquo;m a third-year student at{' '}
							<a
								href='https://www.sliit.lk/'
								rel='noopener noreferrer'
								target='_blank'
								className='text-primary-light hover:underline'
							>
								SLIIT
							</a>{' '}
							pursuing a degree in{' '}
							<a
								href='https://www.sliit.lk/computing/programmes/software-engineering-degree/'
								rel='noopener noreferrer'
								target='_blank'
								className='text-primary-light hover:underline'
							>
								Information Technology specialization in Software Engineering
							</a>
							.
						</p>
						<p className='text-white-dark text-sm sm:text-base leading-6 sm:leading-7 mb-3'>
							I aspire toward a career that will allow me to channel my
							creativity through crafting beautiful software and engaging
							experiences. When I&lsquo;m not on the computer, I enjoy
							traveling, cooking, and petting dogs.
						</p>
						<p className='text-white-dark text-sm sm:text-base leading-6 sm:leading-7 mb-3'>
							Here are a few technologies I&lsquo;ve been working with recently:
						</p>
						<MyStack />
					</div>
					<div className='transform hover:-translate-y-2 transition ease-in w-64 sm:w-80 mx-auto'>
						<Image
							className='rounded-lg shadow-md z-0'
							src='/profile_photo.png'
							alt='A photo of me'
							width={450}
							height={450}
							layout='intrinsic'
							placeholder='blur'
							blurDataURL={useBlurImage(450, 450)}
						/>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default About;
