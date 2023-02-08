import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name="author" content="Brendan Cheong" />
					<meta
						name='description'
						content='Brendan Cheong is a full-stack developer who specializes in making user-friendly applications for the world.'
					/>
					<meta name='image' content='/logo.png' />
					<meta property='og:title' content='Brendan Cheong' />
					<meta
						property='og:description'
						content='Brendan Cheong is a full-stack developer who specializes in making user-friendly applications for the world.'
					/>
					<meta property='og:image' content='/logo.png' />
					<meta property="og:type" content="website" data-react-helmet="true" />
					<meta property="og:url" content="./" />
					<meta name='twitter:title' content='Brendan Cheong' />
					<meta
						name='twitter:description'
						content='Brendan Cheong is a full-stack developer who specializes in making user-friendly applications for the world.'
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
