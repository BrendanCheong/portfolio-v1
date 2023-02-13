import Email from '../components/Email';
import Layout from '../components/Layout';
import Social from '../components/Social';
import { getProjects, getJobDescriptions } from '../lib/utils';
import About from '../modules/About';
import Work from '../modules/Work';
import Contact from '../modules/Contact';
import Featured from '../modules/Featured';
import HeroSection from '../modules/HeroSection';
import OtherProjects from '../modules/OtherProjects';
import Skills from '../components/Skills';

export const getStaticProps = () => {
	const allProjects = getProjects([
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
		'content'
	]);

	const allJobs = getJobDescriptions([
		'title',
		'role',
		'company',
		'range',
		'url',
		'techstack',
		'index',
		'content'
	]);

	return {
		props: { allProjects, allJobs },
	};
};

const Home = ({ allProjects, allJobs }) => {
	const featuredProjects = allProjects.filter(
		(post) => post.isFeatured === true
	);
	const otherProjects = allProjects.filter((post) => post.isFeatured !== true);

	// sort allJobs based on attribute 'index' by ascending order
	allJobs.sort((job1, job2) => (job1.index - job2.index));

	return (
		<Layout title='Brendan Cheong'>
			<Social />
			<Email />
			<HeroSection />
			<About />
			<Skills />
			<Work jobs={allJobs}/>
			<Featured projects={featuredProjects} />
			<OtherProjects projects={otherProjects} />
			<Contact />
		</Layout>
	);
};

export default Home;
