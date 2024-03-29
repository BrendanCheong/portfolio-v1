import { gsap } from 'gsap';
import { useEffect } from 'react';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';

const Email = () => {
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const tl = gsap.timeline({ delay: 0.6 });

		tl.from('#sideEmailContainer', {
			opacity: 0,
			y: -15,
			ease: 'expo.out',
			duration: 0.5,
		});
	}, [prefersReducedMotion]);
	return (
		<div
			id='sideEmailContainer'
			className='bottom-36 -right-14 lg:block fixed z-30 hidden'
		>
			<a
				className='hover:text-primary-light font-mono text-sm transition ease-in'
				href='mailto:brendancej1@gmail.com'
				aria-label='External link'
				rel='me noopener noreferrer'
				target='_blank'
				id='sideEmail'
			>
				<p className='transform rotate-90'>brendancej1@gmail.com</p>
			</a>
		</div>
	);
};

export default Email;
