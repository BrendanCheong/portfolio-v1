import { gsap } from 'gsap';
import { useEffect } from 'react';

const Email = () => {
	useEffect(() => {
		const tl = gsap.timeline({ delay: 0.6 });

		tl.from('#sideEmail', {
			opacity: 0,
			y: -15,
			ease: 'expo.out',
			duration: 0.5,
		});
	}, []);
	return (
		<div
			id='sideEmail'
			className='fixed bottom-56 -right-14 z-30 hidden lg:block'
		>
			<a
				className='font-mono text-sm hover:text-primary-light transition ease-in'
				href='mailto:layanjayasinghe2@gmail.com'
				aria-label='External link'
				rel='me noopener noreferrer'
				target='_blank'
			>
				<p className='transform rotate-90'>layanjayasinghe2@gmail.com</p>
			</a>
		</div>
	);
};

export default Email;
