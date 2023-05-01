import { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/roboto-mono/200.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/roboto-mono/700.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Component {...pageProps} />
			<Analytics />
		</Fragment>
	);
}

export default MyApp;
