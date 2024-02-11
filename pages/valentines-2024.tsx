import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useWindowSize } from '@hooks/useWindowSize';

enum VALENTINE_2024_CONSTANTS {
	NO_BUTTON_ROTATION = 900,
	NO_BUTTON_DURATION = 1,
	NO_BUTTON_SIZE_MULTIPLIER = 20,
	NO_BUTTON_SIZE_OFFSET = 16,
	NO_BUTTON_MAX_COUNT = 6,
}

const Valentine2024 = () => {
	const [noPressedCount, setNoPressedCount] = useState(0);
	const [isYesClicked, setIsYesClicked] = useState(false);
	const noButtonRef = useRef<HTMLButtonElement>(null);
	const { width } = useWindowSize();

	const getNoButtonText = () => {
		const phrases = [
			'Are you sure?',
			'Really sure?',
			'Think again!',
			'Last chance!',
			'Surely not?',
			'You might regret this!',
			'Give it another thought!',
			'Are you absolutely certain?',
			'This could be a mistake!',
			'Cmon say Yes! You know you want to! ;)',
			'Change of heart?',
			"Wouldn't you reconsider?",
			"You're breaking my heart 😭",
		];

		return phrases[Math.min(noPressedCount, phrases.length - 1)];
	};

	const handleNoClicked = () => {
		if (noPressedCount === VALENTINE_2024_CONSTANTS.NO_BUTTON_MAX_COUNT) {
			gsap.to(noButtonRef.current, {
				rotation: VALENTINE_2024_CONSTANTS.NO_BUTTON_ROTATION,
				transformOrigin: 'center center',
				x: width,
				duration: VALENTINE_2024_CONSTANTS.NO_BUTTON_DURATION,
			});
		}
		setNoPressedCount((count) => count + 1);
	};

	const yesButtonFontSize =
		noPressedCount * VALENTINE_2024_CONSTANTS.NO_BUTTON_SIZE_MULTIPLIER +
		VALENTINE_2024_CONSTANTS.NO_BUTTON_SIZE_OFFSET;

	return (
		<div className='-mt-16 flex h-screen flex-col items-center justify-center'>
			{isYesClicked ? (
				<>
					<Image
						src='https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif'
						alt='Valentine-2024'
						width={220}
						height={200}
						layout='intrinsic'
					/>
					<h1 className='my-4 text-2xl font-dm font-bold'>
						Yay! Happy Valentine&apos;s day 😍
					</h1>
				</>
			) : (
				<>
					{' '}
					<Image
						src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
						alt='Valentine-2024'
						width={220}
						height={200}
						layout='intrinsic'
					/>
					<h1 className='my-4 text-3xl font-dm font-bold'>
						Will You be my Valentines?
					</h1>
					<div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
						<button
							role='button'
							aria-label='Click to say yes'
							className='flex cursor-pointer items-center rounded-md border-2 border-black bg-[#C4A1FF] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
							style={{ fontSize: `${yesButtonFontSize}px` }}
							onClick={() => setIsYesClicked(true)}
						>
							Yes
						</button>
						<button
							role='button'
							aria-label='Click to say no'
							className='flex cursor-pointer items-center rounded-md border-2 border-black bg-red-500 px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
							onClick={handleNoClicked}
							ref={noButtonRef}
						>
							{noPressedCount === 0 ? 'No' : getNoButtonText()}
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Valentine2024;
