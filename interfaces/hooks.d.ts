export type ScrollDirection = 'up' | 'down';
export type UseScrollDirectionConfig = {
	initialDirection?: ScrollDirection;
	thresholdPixels?: number;
	off?: boolean;
};
export type Handler = (event: MouseEvent | TouchEvent) => void;
