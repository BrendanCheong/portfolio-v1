import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import Container from '@components/Container';
import FeaturedProjectCard from '@components/FeaturedProjectCard';
import Heading from '@components/Heading';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';

// types
import { type Project } from '@interfaces/util';

interface FeatureProps {
	projects: Project[];
}

gsap.registerPlugin(ScrollTrigger);

const Featured = ({ projects }: FeatureProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		gsap.from('#projects', {
			scrollTrigger: {
				trigger: '#projects',
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
		<Container>
			<section
				id='projects'
				style={{ minHeight: '80vh' }}
				className='flex flex-col justify-center'
			>
				<div
					className='sm:inline-flex sm:items-center sm:space-x-3 sm:mb-10 mb-8 fter:content-[""] after:block after:relative after:w-[85%]
				after:h-[2px] after:bg-primary-light after:ml-8 after:mb-2 after:md:w-[20%]'
				>
					<Heading
						type='h2'
						isMono
						color='text-primary-light'
						textSize='text-xl sm:text-2xl md:text-3xl'
						align='text-center sm:text-left'
					>
						Apps I Made
					</Heading>
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
