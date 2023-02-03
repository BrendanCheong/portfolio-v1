import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Nav />
			<main className='relative min-h-screen bg-primary-dark font-poppins text-white-base'>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
