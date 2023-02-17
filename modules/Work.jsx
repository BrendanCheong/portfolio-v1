import { useEffect, useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { KEY_CODES } from '../lib/data';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Icon from '../components/Icon';
import Heading from '../components/Heading';
import Container from '../components/Container';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const Work = ({ jobs }) => {
	const [activeTabId, setActiveTabId] = useState(0);
	const [tabFocus, setTabFocus] = useState(null);
	const tabs = useRef([]);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		gsap.from('#work', {
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

	// if activeTabId changes, use gsap to fade the content in
	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		gsap.from(`#tab-panels`, {
			opacity: 0,
			y: 40,
			ease: 'power4.out',
			duration: 0.5,
			delay: 0.2,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTabId]);

	const focusTab = useCallback(() => {
		if (tabs.current[tabFocus]) {
			tabs.current[tabFocus].focus();
			return;
		}
		// If we're at the end, go to the start
		if (tabFocus >= tabs.current.length) {
			setTabFocus(0);
		}
		// If we're at the start, move to the end
		if (tabFocus < 0) {
			setTabFocus(tabs.current.length - 1);
		}
	}, [tabFocus]);

	// Only re-run the effect if tabFocus changes
	useEffect(() => focusTab(), [focusTab, tabFocus]);

	// Focus on tabs when using up & down arrow keys
	const onKeyDown = (e) => {
		switch (e.key) {
			case KEY_CODES.ARROW_UP: {
				e.preventDefault();
				setTabFocus(tabFocus - 1);
				break;
			}

			case KEY_CODES.ARROW_DOWN: {
				e.preventDefault();
				setTabFocus(tabFocus + 1);
				break;
			}

			default: {
				break;
			}
		}
	};

	return (
		<Container verticalPadding='pt-20'>
			<section
				id='work'
				style={{ minheight: '80vh' }}
				className='flex flex-col justify-center'
			>
				<div
					className='inline-flex items-center mb-6 space-x-3 fter:content-[""] after:block after:relative after:w-[20%]
					after:h-[2px] after:bg-primary-light after:ml-8 after:mb-2'
				>
					<Heading type='h2' isMono color='text-primary-light'>
						Where I&apos;ve Worked
					</Heading>
				</div>
				<div
					className='flex max_sm:block md:min-h-[20rem]'
					aria-label='work experience content'
				>
					<section
						className='md:w-1/3 box-content w-full mb-2 align-middle'
						id='work-tabs'
					>
						<ul
							className='z-3 max_sm:flex max_sm:overflow-x-scroll p-auto relative w-full'
							onKeyDown={(e) => onKeyDown(e)}
							aria-label='work experience tabs'
						>
							{jobs.map((job, index) => (
								<li key={index} className='md:mb-0 sm:md-0 mb-5'>
									<button
										className={`flex items-center w-full md:w-[95%] h-full px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 sm:border-b-0 sm:border-l-2 border-solid bg-transparent ${
											activeTabId === index
												? 'text-primary-light border-primary-light bg-primary-light bg-opacity-10'
												: 'text-white-base border-slate-700'
										} text-sm font-mono text-left hover:bg-primary-light hover:text-primary-light hover:bg-opacity-10 transition ease-in break-words overflow-hidden`}
										onClick={() => setActiveTabId(index)}
										ref={(el) => (tabs.current[index] = el)}
										role='tab'
										aria-label='tab button'
										aria-selected={activeTabId === index}
										aria-controls={`panel-${index}`}
									>
										{job.company}
									</button>
								</li>
							))}
						</ul>
					</section>
					<section
						className='sm:ml-5 md:w-2/3 relative w-full ml-0'
						aria-label='tab panels'
						id='tab-panels'
					>
						<div className='w-full h-auto'>
							<Heading type='h4' isMono={false} color='text-white-default'>
								<span>{jobs[activeTabId].title}</span>
								<span className='text-primary-light'>
									&nbsp;@&nbsp;
									<a
										href={jobs[activeTabId].url}
										target='_blank'
										rel='noreferrer'
									>
										<span className='hover:underline'>
											{jobs[activeTabId].company}
										</span>
									</a>
								</span>
							</Heading>

							<p className='text-white-dark text-md mb-6 font-mono'>
								{`${jobs[activeTabId].range}  •  ${jobs[activeTabId].role}`}
							</p>
							<hr className='border-white-base border-[1px] h-0 border-opacity-20' />
							<ul className='text-white-dark pt-6 m-0 text-base'>
								{jobs[activeTabId].content.map((bullet, index) => (
									<li
										key={index}
										className='pl-7 font-poppins relative mb-2'
										id='bullet'
									>
										<p>{bullet}</p>
									</li>
								))}
							</ul>
							<ul
								className='flex flex-wrap justify-start p-2 pt-6'
								id='stack-list'
								aria-label='stack-list'
							>
								{jobs[activeTabId].techstack.map((stack, index) => (
									<li
										key={index}
										className='hover:text-primary-light/100 text-primary-light/0 hover:text-opacity-100 relative z-0 flex flex-col items-start justify-end content-end place-content-end w-10 h-10 mb-6 mr-4 transition-[opacity_.5s,color_.5s]'
									>
										<Icon name={stack} />
										<i className='-bottom-5 whitespace-nowrap absolute font-mono text-xs'>
											{stack}
										</i>
									</li>
								))}
							</ul>
						</div>
					</section>
				</div>
			</section>
		</Container>
	);
};

export default Work;
