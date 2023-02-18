import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDirectory = join(process.cwd(), 'projects');
const jobsDirectory = join(process.cwd(), 'jobs');
const iconDirectory = join(process.cwd(), 'archive/Icons');

export const getProjectSlugs = () => {
	return fs.readdirSync(projectsDirectory);
};

export const getJobSlugs = () => {
	return fs.readdirSync(jobsDirectory);
};

export const getIconSlugs = () => {
	return fs.readdirSync(iconDirectory);
};

export const getMarkdownBySlug = (slug, fields = [], directoryName) => {
	const realSlug = slug.replace(/\.md$/, '');
	const directory = join(process.cwd(), directoryName);
	const fullPath = join(directory, `${realSlug}.md`);

	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content' && content) {
			/**
			 * Assuming that content is a list of bullet points marked by a '*' and space
			 */
			const bulletPoints = content
				.split('\n')
				.filter((s) => s.trim())
				.map((s) => s.slice(2).trim());
			items[field] = bulletPoints;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
};

export const getProjects = (fields = []) => {
	const slugs = getProjectSlugs();
	const projects = slugs
		.map((slug) => getMarkdownBySlug(slug, fields, 'projects'))
		// sort projects by date in descending order
		.sort((project1, project2) => (project1.index < project2.index ? -1 : 1));
	return projects;
};

export const getJobDescriptions = (fields = []) => {
	const slugs = getJobSlugs();
	const jobs = slugs.map((slug) => getMarkdownBySlug(slug, fields, 'jobs'));

	return jobs;
};

export const getIconContents = (fields = []) => {
	const slugs = getIconSlugs();
	const icons = slugs.map((slug) => getMarkdownBySlug(slug, fields, 'archive/Icons'));

	return icons;
};

export const markdownToHtml = async (markdown) => {
	const result = await remark().use(html).process(markdown);
	return result.toString();
};
