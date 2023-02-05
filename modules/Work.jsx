import { useEffect, useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { KEY_CODES } from '../lib/data';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Heading from '../components/Heading';
import Container from '../components/Container';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const Work = ({ jobs }) => {
	const [activeTabId, setActiveTabId] = useState(0);
	const [tabFocus, setTabFocus] = useState(null);
	const tabs = useRef([]);
	const prefersReducedMotion = usePrefersReducedMotion();

	console.table(jobs);

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
					className='inline-flex items-center pl-6 mb-6 space-x-3'
					id='heading'
				>
					<Heading type='h3' isMono color='text-primary-light'>
						Where I&apos;ve Worked
					</Heading>
				</div>
				<div className='flex max_sm:block md:min-h-[20rem]' aria-label='work experience content'>
					<section>
						<ul
							className='relative z-3 w-max p-0 m-0 pl-6 -ml-6 max_sm:flex max_sm:overflow-auto max_sm:w-[calc(100% + 100px)] max_sm:pl-12 max_sm:-ml-12 max_sm:mb-8 max_xs:w-(100% + 50px) max_xs:pl-6 max_xs:-ml-6'
							onKeyDown={(e) => onKeyDown(e)}
							aria-label='work experience tabs'
						>
						{jobs.map((job, index) => (
							<li key={index}>
								<button
									className={`flex items-center w-[14rem] h-full px-5 py-2 border-l-2 border-solid bg-transparent ${
										activeTabId === index ? 'text-primary-light border-primary-light' : 'text-white-base border-slate-700'
									} text-sm font-mono text-left hover:bg-primary-light hover:text-primary-light hover:bg-opacity-10 transition ease-in max_md:px-4 max_sm:min-w-[7.5rem] max_sm:py-1 max_sm:px-4 max_sm:border-l-0 max_sm:border-b-2 max_sm:text-center break-words`}
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
						className='sm:ml-5 relative w-full ml-0'
						aria-label='tab panels'
						id='tab-panels'
					>
						<div className='w-full h-auto p-5'>
							<ul>
								<li>
									<Heading type='h4' isMono={false} color='text-white-default'>
										<span>{jobs[activeTabId].title}</span>
										<span className='text-primary-light'>
											&nbsp;@&nbsp;
											<a href={jobs[activeTabId].url} target='_blank' rel="noreferrer">
												<span className='hover:underline'>
												{jobs[activeTabId].company}
												</span>
											</a>
										</span>
									</Heading>

									<p className='text-white-dark text-md mb-6 font-mono'>
									{jobs[activeTabId].range}
									</p>
									<hr className='border-white-base border-[1px]' />
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
									{/**

					/**<div className='stack-list'>
						{techstack &&
							techstack.map((tech, i) => (
								<a className='stack-icon' key={tech}>
									<Icon name={tech} />
									<div className='stack-icon-name'>{tech}</div>
								</a>
							))}
							</div>*/}
								</li>
							</ul>
						</div>
					</section>
				</div>
			</section>
		</Container>
	);
};

export default Work;
