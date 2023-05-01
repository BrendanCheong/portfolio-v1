import { useState, useEffect } from 'react';

//types
import { ScrollDirection, UseScrollDirectionConfig } from '@interfaces/hooks';

const SCROLL_UP: ScrollDirection = 'up';
const SCROLL_DOWN: ScrollDirection = 'down';

const useScrollDirection = ({
	initialDirection = SCROLL_UP,
	thresholdPixels = 0,
	off = false,
}: UseScrollDirectionConfig = {}): ScrollDirection => {
	const [scrollDir, setScrollDir] = useState<ScrollDirection>(initialDirection);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.scrollY;

			if (Math.abs(scrollY - lastScrollY) < thresholdPixels) {
				ticking = false;
				return;
			}

			setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		!off
			? window.addEventListener('scroll', onScroll)
			: setScrollDir(initialDirection);

		return () => window.removeEventListener('scroll', onScroll);
	}, [initialDirection, thresholdPixels, off]);

	return scrollDir;
};

export default useScrollDirection;
