import { useEffect, useRef, DependencyList } from 'react';
import * as d3 from 'd3';

export const useD3 = (
	renderFn: (
		selection: d3.Selection<HTMLElement, unknown, null, undefined>
	) => void,
	dependencies: DependencyList
) => {
	const ref = useRef<null | HTMLElement>(null);

	useEffect(() => {
		if (ref.current) {
			renderFn(d3.select(ref.current));
		}
		return () => {};
	}, [renderFn, ...dependencies]);

	return ref;
};
