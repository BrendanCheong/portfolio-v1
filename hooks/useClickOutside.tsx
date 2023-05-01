import { useEffect, RefObject, useCallback } from 'react';

// https://usehooks.com/useOnClickOutside/

type Handler = (event: MouseEvent | TouchEvent) => void;

const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: Handler
): void => {
	const callbackHandler = useCallback(handler, []);

	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}

			callbackHandler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, callbackHandler]);
};

export default useOnClickOutside;
