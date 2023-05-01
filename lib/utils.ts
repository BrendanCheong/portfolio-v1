// libraries
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// types
import { Project, ItemData, Job, Icon } from '@/interfaces/util';

const projectsDirectory = join(process.cwd(), 'projects');
const jobsDirectory = join(process.cwd(), 'jobs');
const iconDirectory = join(process.cwd(), 'archive/Icons');

export const getProjectSlugs = (): string[] => {
	return fs.readdirSync(projectsDirectory);
};

export const getJobSlugs = (): string[] => {
	return fs.readdirSync(jobsDirectory);
};

export const getIconSlugs = (): string[] => {
	return fs.readdirSync(iconDirectory);
};

export const getMarkdownBySlug = (
	slug: string,
	fields: string[] = [],
	directoryName: string
): ItemData | Project | Job | Icon => {
	const realSlug = slug.replace(/\.md$/, '');
	const directory = join(process.cwd(), directoryName);
	const fullPath = join(directory, `${realSlug}.md`);

	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items: ItemData = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content' && content) {
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

export const getProjects = (fields: string[] = []): Project[] => {
	const slugs = getProjectSlugs();
	const projects = slugs
		.map((slug) => getMarkdownBySlug(slug, fields, 'projects'))
		.sort((project1, project2) => {
			// Use nullish coalescing operator to set default value if index is undefined
			const index1 = project1.index ?? Number.MAX_SAFE_INTEGER;
			const index2 = project2.index ?? Number.MAX_SAFE_INTEGER;

			return index1 < index2 ? -1 : 1;
		});
	return projects as Project[];
};

export const getJobDescriptions = (fields: string[] = []): Job[] => {
	const slugs = getJobSlugs();
	const jobs = slugs.map((slug) => getMarkdownBySlug(slug, fields, 'jobs'));

	return jobs as Job[];
};

export const getIconContents = (fields: string[] = []): Icon[] => {
	const slugs = getIconSlugs();
	const icons = slugs.map((slug) =>
		getMarkdownBySlug(slug, fields, 'archive/Icons')
	);

	return icons as Icon[];
};

export const markdownToHtml = async (markdown: string): Promise<string> => {
	const result = await remark().use(html).process(markdown);
	return result.toString();
};
