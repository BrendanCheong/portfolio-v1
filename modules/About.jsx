import Image from 'next/image';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Container from '../components/Container';
import Heading from '../components/Heading';
import MyStack from '../components/MyStack';
import { useEffect } from 'react';
import useBlurImage from '../hooks/useBlurImage';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container verticalPadding='py-28'>
			<section
				id='about'
				style={{ minHeight: '80vh' }}
				className='flex flex-col justify-center'
			>
				<div className='inline-flex items-center mb-6 space-x-3' id='heading'>
					<Heading type='h2' isMono color='text-primary-light'>
						About Me
					</Heading>
				</div>
				<div className='grid-col-1 lg:grid-cols-2 grid grid-rows-1 gap-8'>
					<div>
						<p className='text-white-dark sm:text-base sm:leading-7 mb-3 text-sm leading-6'>
							Hello! I&lsquo;m Brendan and I love to build things that live on
							the web. Currently, I&lsquo;m a third-year student at{' '}
							<a
								href='https://www.nus.edu.sg/'
								rel='noopener noreferrer'
								target='_blank'
								className='text-primary-light hover:underline'
							>
								NUS
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
						<p className='text-white-dark sm:text-base sm:leading-7 mb-3 text-sm leading-6'>
							I aspire toward a career that will allow me to channel my
							creativity through crafting beautiful software and engaging
							experiences. When I&lsquo;m not on the computer, I enjoy
							traveling, cooking, and petting dogs.
						</p>
						<p className='text-white-dark sm:text-base sm:leading-7 mb-3 text-sm leading-6'>
							Here are a few technologies I&lsquo;ve been working with recently:
						</p>
						<MyStack />
					</div>
					<div className='hover:-translate-y-2 sm:w-80 relative w-64 mx-auto transition ease-in transform'>
						<Image
							className='z-0 rounded-lg shadow-md'
							src='/profile_photo.png'
							alt='A photo of me'
							width={960}
							height={1280}
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
