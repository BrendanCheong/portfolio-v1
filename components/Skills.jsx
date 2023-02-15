import React, { useState } from 'react';
import * as d3 from 'd3';
import Container from '../components/Container';
import { useD3 } from '../hooks/useD3';
import Heading from './Heading';
import { range } from '../lib/functions';

const Skills = () => {
	// create a ref to attach to the DOM
	// this D3 layout will create divs with background images that will be used as the skills icons
	// each div will have a class of 'skill-bubble' and an id of the skill name
	// each div can collide with each other using elastic collision
	const skills = [
		'React',
		'Next.js',
		'Node.js',
		'MongoDB',
		'SQL',
		'Typescript',
		'Java',
		'Python',
		'HTML',
		'CSS',
		'C++',
		'Javascript',
		'Git',
		'Figma',
		'AWS',
		'GraphQL',
		'FastAPI',
		'TailwindCSS',
	];

	const nodes = d3.range(skills.length + 1).map(() => {
		return { radius: 35 };
	});
	const [D3nodes, setD3Nodes] = useState(nodes);
	const [toggle, setToggle] = useState(false);

	// create a function that setsD3Nodes but with one less node
	const removeNode = () => {
		d3.selectAll('#skill-bubble').remove();
		setD3Nodes(D3nodes.slice(0, -1));
	};

	const collide = (node) => {
		const r = node.radius + 1;
		const nx1 = node.x - r;
		const nx2 = node.x + r;
		const ny1 = node.y - r;
		const ny2 = node.y + r;
		return (quad, x1, y1, x2, y2) => {
			if (quad.point && quad.point !== node) {
				let x = node.x - quad.point.x;
				let y = node.y - quad.point.y;
				let l = Math.sqrt(x * x + y * y);
				const r = node.radius + quad.point.radius;
				if (l < r) {
					l = ((l - r) / l) * 0.1;
					node.x -= x *= l;
					node.y -= y *= l;
					quad.point.x += x;
					quad.point.y += y;
				}
			}
			return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
		};
	};

	const width = 400;
	const height = 300;

	const ref = useD3((svg) => {
		// const nodes = d3.range(skills.length + 1).map(() => {
		// 	return { radius: 35 };
		// });
		const root = D3nodes[0];

		root.radius = 0;
		root.fixed = true;

		console.log('D3 render');

		const force = d3.layout
			.force()
			.gravity(0.05)
			.friction(0.2)
			.charge((_data, i) => {
				return i ? 0 : -2000;
			})
			.nodes(D3nodes)
			.size([width, height])
			.on('tick', () => {
				const q = d3.geom.quadtree(D3nodes);
				const n = D3nodes.length;

				range(0, n).forEach((_element, i) => {
					q.visit(collide(D3nodes[i]));
				});

				svg
					.selectAll('#skill-bubble')
					.style('left', (data) => {
						return `${data.x}px`;
					})
					.style('top', (data) => {
						return `${data.y}px`;
					});
			})
			.start();

		svg = d3
			.select('#D3')
			.attr('preserveAspectRatio', 'xMinYMin')

		svg
			.selectAll('#D3')
			.data(D3nodes.slice(1))
			.enter()
			.append('div')
			.attr('id', 'skill-bubble')
			.attr('class', 'h-16 w-16 rounded-full translate-x-[-50%] translate-y-[-50%] absolute hover:text-primary-light/100 text-primary-light/0 hover:text-opacity-100 z-0 hover:z-50')
			.html(`<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 30 30'
			width='63px'
			height='63px'
			class='text-white-dark hover:text-primary-light fill-current transition-[opacity_.5s,color_.5s]'
		>
			<path d='M25.428,3.333C25.238,3.121,24.967,3,24.683,3H5.317C5.033,3,4.762,3.121,4.572,3.333c-0.19,0.212-0.28,0.495-0.249,0.777 l2.202,19.823c0.044,0.403,0.329,0.74,0.719,0.851l7.48,2.137c0.09,0.026,0.183,0.039,0.275,0.039s0.185-0.013,0.275-0.039 l7.48-2.137c0.39-0.111,0.674-0.448,0.719-0.851L25.676,4.11C25.708,3.828,25.618,3.545,25.428,3.333z M20.629,10.43h-8.93 l0.212,2.542h8.503l-0.638,7.51L15.003,22l-0.047-0.015l-4.72-1.505L9.978,17.42h2.312l0.101,1.189l2.637,0.581l2.591-0.582 l0.275-3.213h-8.09L9.178,8h11.659L20.629,10.43z' />
		</svg>`)
		.append('i')
		.attr('class', 'font-poppins text-sm')
		.attr('id', 'skill-name')
		.html('diverse');

		svg.on('mousemove', function () {
			const p1 = d3.mouse(this);
			root.px = p1[0];
			root.py = p1[1];
			force.resume();
		});
	}, []);

	return (
		<Container>
			<section className='flex flex-row items-start w-full h-full pb-10'>
				<div className='basis-5/12 md:block flex-grow-0 flex-shrink-0 order-last hidden ml-5'>
					<div className='relative h-full' ref={ref} id='D3'></div>
				</div>
				<div>
					<div className='pb-5 space-y-2'>
						<Heading type='h2' isMono color='text-primary-light'>
							My Skills
						</Heading>
						<p className='text-md font-poppins inline-block'>
							Here are some Frameworks and Languages I&apos;ve worked with
							recently
						</p>
					</div>
					<div className=''>
						<p>
							YC has been investing in the later stage rounds of our alumni
							since 2015. These are the high-growth companies that have received
							significant additional investment or more in funding from YC.{' '}
							<a
								href='/blog/y-combinator-top-companies-aug-2022'
								target='_target'
							>
								how we compile these lists
							</a>
							.)
						</p>
						<p>
							Discover more YC companies in the{' '}
							<a href='/companies'>Startup Directory</a> and find jobs at the
							best YC startups on <a href='/jobs'>Work at a Startup</a>.
						</p>
					</div>
				</div>
				<button className='w-10 h-10 bg-red-500 rounded-md' onClick={() => removeNode()}>
					Test
				</button>
			</section>
		</Container>
	);
};

export default Skills;
