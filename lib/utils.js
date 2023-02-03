import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDirectory = join(process.cwd(), 'projects');

export const getProjectSlugs = () => {
	return fs.readdirSync(projectsDirectory);
};

export const getProjectBySlug = (slug, fields = []) => {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(projectsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
};

export const getAllProjects = (fields = []) => {
	const slugs = getProjectSlugs();
	const projects = slugs
		.map((slug) => getProjectBySlug(slug, fields))
		// sort projects by date in descending order
		.sort((project1, project2) => (project1.index < project2.index ? -1 : 1));
	return projects;
};

export const markdownToHtml = async (markdown) => {
	const result = await remark().use(html).process(markdown);
	return result.toString();
};
