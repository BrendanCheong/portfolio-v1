import React, { useState, useEffect, useRef, useCallback } from 'react';
import { KEY_CODES } from '../lib/data';

const SelectionPanel = ({ activeTabId, onClickEffect }) => {
	const [tabFocus, setTabFocus] = useState(null);
	const tabs = useRef([]);

	// TODO: Re-package this code to be reused in Work.jsx component as well
	// TODO: Refactor tab buttons to be a component
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
		<div>
			<ul
				className='z-3 max_sm:flex max_sm:overflow-x-scroll p-auto md:w-1/2 relative w-full overflow-x-hidden'
				aria-label='skill section tabs'
				onKeyDown={(e) => onKeyDown(e)}
			>
				<li className='md:mb-0 sm:md-0 mb-5'>
					<button
						className={`flex items-center w-full md:w-[95%] h-full px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 sm:border-b-0 sm:border-l-2 border-solid bg-transparent ${
							activeTabId === 0
								? 'text-primary-light border-primary-light bg-primary-light bg-opacity-10'
								: 'text-white-base border-slate-700'
						} text-sm font-mono text-left hover:bg-primary-light hover:text-primary-light hover:bg-opacity-10 transition ease-in break-words overflow-hidden`}
						onClick={() => onClickEffect(0)}
						ref={(el) => (tabs.current[0] = el)}
						role='tab'
						aria-label='skill tab button'
						aria-selected={activeTabId === 0}
						aria-controls={`language panel-${0}`}
					>
						Languages
					</button>
				</li>
				<li className='md:mb-0 sm:md-0 mb-5'>
					<button
						className={`flex items-center w-full md:w-[95%] h-full px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 sm:border-b-0 sm:border-l-2 border-solid bg-transparent ${
							activeTabId === 1
								? 'text-primary-light border-primary-light bg-primary-light bg-opacity-10'
								: 'text-white-base border-slate-700'
						} text-sm font-mono text-left hover:bg-primary-light hover:text-primary-light hover:bg-opacity-10 transition ease-in break-words overflow-hidden`}
						onClick={() => onClickEffect(1)}
						ref={(el) => (tabs.current[1] = el)}
						role='tab'
						aria-label='skill tab button'
						aria-selected={activeTabId === 1}
						aria-controls={`frameworks panel-${1}`}
					>
						Frameworks & Tools
					</button>
				</li>
			</ul>
		</div>
	);
};

export default SelectionPanel;
