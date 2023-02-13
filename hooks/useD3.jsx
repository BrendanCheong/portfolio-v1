import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const useD3 = (renderFn, dependencies) => {
	const ref = useRef();

	useEffect(() => {
		renderFn(d3.select(ref.current));
		return () => {};

	}, [renderFn, dependencies]);

	return ref;
};
