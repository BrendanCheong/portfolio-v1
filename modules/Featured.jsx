import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import Container from '../components/Container';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import Heading from '../components/Heading';
import Line from '../components/Line';

gsap.registerPlugin(ScrollTrigger);

const Featured = ({ projects }) => {
	useEffect(() => {
		gsap.from('#work', {
			scrollTrigger: {
				trigger: '#work',
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
				id='work'
				style={{ minHeight: '80vh' }}
				className='flex flex-col justify-center py-20'
			>
				<div className='sm:inline-flex sm:items-center sm:space-x-3 mb-8 sm:mb-10'>
					<Heading
						type='h2'
						isMono
						color='text-primary-light'
						textSize='text-xl sm:text-2xl md:text-3xl'
						align='text-center sm:text-left'
					>
						Projects I’ve contributed
					</Heading>
					<Line width='md:w-32 lg:w-56' lineStyles='hidden md:block' />
				</div>
				<div className='flex flex-col'>
					{projects &&
						projects.map((project, i) => (
							<FeaturedProjectCard
								key={project.title}
								contentSide={i % 2 === 0 ? 'right' : 'left'}
								{...project}
							/>
						))}
				</div>
			</section>
		</Container>
	);
};

export default Featured;
