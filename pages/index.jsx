import Email from '../components/Email';
import Layout from '../components/Layout';
import Social from '../components/Social';
import { getAllProjects } from '../lib/utils';
import About from '../modules/About';
import Contact from '../modules/Contact';
import Featured from '../modules/Featured';
import HeroSection from '../modules/HeroSection';
import OtherProjects from '../modules/OtherProjects';

export const getStaticProps = () => {
	const allProjects = getAllProjects([
		'title',
		'subTitle',
		'description',
		'isFeatured',
		'image',
		'imageHeight',
		'stack',
		'url',
		'github',
		'index',
	]);

	return {
		props: { allProjects },
	};
};

const Home = ({ allProjects }) => {
	const featuredProjects = allProjects.filter(
		(post) => post.isFeatured === true
	);
	const otherProjects = allProjects.filter((post) => post.isFeatured !== true);

	return (
		<Layout title='Layan Jayasinghe'>
			<Social />
			<Email />
			<HeroSection />
			<About />
			<Featured projects={featuredProjects} />
			<OtherProjects projects={otherProjects} />
			<Contact />
		</Layout>
	);
};

export default Home;
