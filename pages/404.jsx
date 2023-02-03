import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		gsap.from('#pageNotFound', {
			opacity: 0,
			y: 40,
			ease: 'power3.out',
			duration: 1,
			delay: 0.3,
		});
	}, []);
	return (
		<Layout title='404: Not Found | Layan Jayasinghe'>
			<Container>
				<div
					id='pageNotFound'
					style={{ minHeight: '90vh' }}
					className='flex justify-center items-center'
				>
					<div className='flex flex-col items-center'>
						<h1 className='font-mono font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-light mb-4'>
							404
						</h1>
						<p className='font-medium sm:text-lg md:text-xl lg:text-2xl'>
							Page Not Found
						</p>
						<Button
							onClick={() => router.push('/')}
							margin='mx-auto my-16'
							padding='py-3 px-8 sm:py-4 sm:px-12'
						>
							Go Home
						</Button>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default NotFound;
