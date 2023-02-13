import React from 'react';
import * as d3 from 'd3';
import Container from '../components/Container';
import { useD3 } from '../hooks/useD3';
import Heading from './Heading';

const Skills = () => {
	// create a ref to attach to the DOM
	// this D3 layout will create divs with background images that will be used as the skills icons
	// each div will have a class of 'skill-icon' and an id of the skill name
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
		const nodes = d3.range(skills.length + 1).map(() => {
			return { radius: 35 };
		});
		const root = nodes[0];

		root.radius = 0;
		root.fixed = true;

		const force = d3.layout
			.force()
			.gravity(0.15)
			.friction(0.9)
			.charge((_d, i) => {
				return i ? 0 : -2000;
			})
			.nodes(nodes)
			.size([width, height])
			.on('tick', () => {
				const q = d3.geom.quadtree(nodes);
				let i = 0;
				const n = nodes.length;

				while (++i < n) q.visit(collide(nodes[i]));

				svg
					.selectAll('#skill-icon')
					.style('left', (d) => {
						return `${d.x}px`;
					})
					.style('top', (d) => {
						return `${d.y}px`;
					});
			})
			.start();

		svg = d3
			.select('#D3')
			// .append('section')
			.attr('viewBox', '0 0 ' + width + ' ' + height)
			.attr('preserveAspectRatio', 'xMinYMin')
			.attr('style', () => {
				return `position: relative`;
			});

		svg
			.selectAll('#D3')
			.data(nodes.slice(1))
			.enter()
			.append('div')
			.attr('id', 'skill-icon')
			.style('height', '63px')
			.style('width', '63px')
			.style('border-radius', '100%')
			.style(
				'background-image',
				'url("https://bookface-images.s3.amazonaws.com/small_logos/d0e24465d91469fa05da337659e25131f5295e3d.png")'
			)
			.style('background-size', 'cover')
			.style('background-position', 'center center')
			.style('background-repeat', 'no-repeat')
			.style('transform', 'translate(-50%, -50%)')
			.style('position', 'absolute');

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
					<div className='h-full' ref={ref} id='D3'></div>
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
			</section>
		</Container>
	);
};

export default Skills;
