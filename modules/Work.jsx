import { useEffect, useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Heading from '../components/Heading';
import Container from '../components/Container';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
	// const [activeTabId, setActiveTabId] = useState(0);
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
					<section className='max-w-[44rem]'>
						<ul
							className='relative z-3 w-max p-0 m-0 pl-6 -ml-6 max_sm:flex max_sm:overflow-auto max_sm:w-[calc(100% + 100px)] max_sm:pl-12 max_sm:-ml-12 max_sm:mb-8 max_xs:w-(100% + 50px) max_xs:pl-6 max_xs:-ml-6'
							onKeyDown={(e) => onKeyDown(e)}
							aria-label='work experience tabs'
						>
							<li>
								<button
									className={`flex items-center w-full h-11 px-5 py-1 border-l-2 border-solid border-primary-light bg-transparent ${
										true ? 'text-primary-light' : 'text-white-base'
									} text-sm font-mono text-left whitespace-nowrap hover:bg-primary-light hover:bg-opacity-20 transition ease-in max_md:px-4 max_sm:min-w-[7.5rem max_sm:py-1 max_sm:px-4 max_sm:border-l-0 max_sm:border-b-2 max_sm:text-center`}
									aria-label='tab button'
								>
									<span>Solar AI Technologies</span>
								</button>
							</li>
						</ul>
					</section>
					<section
						className='sm:ml-5 relative w-full ml-0'
						aria-label='tab panels'
					>
						<div className='w-full h-auto p-5'>
							<ul>
								<li>
									<Heading type='h4' isMono={false} color='text-white-default'>
										<span>Software Engineer Intern</span>
										<span className='text-primary-light'>
											&nbsp;@&nbsp;
											<a href='https://getsolar.ai'>
												<span className='hover:underline'>
													Solar AI Technologies
												</span>
											</a>
										</span>
									</Heading>

									<p className='text-white-dark mb-6 font-mono text-xs'>
										May 2022 - Aug 2022
									</p>
									<hr className='border-white-base border-[1px]' />
									<ul className='text-white-dark pt-6 m-0 text-sm'>
										<li className='pl-7 font-poppins relative mb-2' id='bullet'>
											<p>
											Built and launched a new customer portal, which allows over 100 customers to manage their solar installation and liaise with solar panel installers.
											</p>
										</li>
										<li className='pl-7 font-poppins relative mb-2' id='bullet'>
											<p>
											Developed high-performance serverless GraphQL APIs in Typescript backed by ElasticSearch and DynamoDB to provide consistent data flow for the business and customer portal.
											</p>
										</li>
										<li className='pl-7 font-poppins relative mb-2' id='bullet'>
											<p>
											Worked with the sales team to build an internal Customer Relationship Management (CRM) web application to manage over 200 customers contracts, which doubled their productivity.
											</p>
										</li>
									</ul>
									{/**<div dangerouslySetInnerHTML={{ __html: html }} />

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
