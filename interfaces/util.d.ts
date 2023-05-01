interface ItemData {
	[key: string]: string | string[] | number | undefined;
}

export type Project = {
	image: string;
	imageHeight: number;
	title: string;
	index: number;
	subTitle: string;
	description: string;
	stack: string[];
	url: string;
	github: string;
	isFeatured: boolean;
};

export type OtherProject = {
	title: string;
	description: string;
	stack: string[];
	url: string;
	github: string;
};

export type Job = {
	title: string;
	role: string;
	company: string;
	range: string;
	url: string;
	techstack: string[];
	index: number;
	content?: any;
};

export type Icon = {
	title: string;
	svg: string;
	radius: number;
	category: string;
	index?: number;
};
