import Head from 'next/head';
import Footer from '@components/Footer';
import Nav from '@components/Nav';

interface LayoutProps {
	title: string;
	children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
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
