import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='Layan Jayasinghe is a full-stack developer who specializes in building (and occasionally designing) exceptional digital experiences.'
					/>
					<meta name='image' content='/logo.png' />
					<meta property='og:title' content='Layan Jayasinghe' />
					<meta
						property='og:description'
						content='Layan Jayasinghe is a full-stack developer who specializes in building (and occasionally designing) exceptional digital experiences.'
					/>
					<meta property='og:image' content='/logo.png' />
					<meta name='twitter:creator' content='__x__LEO__x__' />
					<meta name='twitter:title' content='Layan Jayasinghe' />
					<meta
						name='twitter:description'
						content='Layan Jayasinghe is a full-stack developer who specializes in building (and occasionally designing) exceptional digital experiences.'
					/>
					<meta name='twitter:image' content='/logo.png' />

					<link
						rel='apple-touch-icon'
						sizes='144x144'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
