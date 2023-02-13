import React from 'react';
import * as d3 from 'd3';
import Container from '../components/Container';
import { useD3 } from '../hooks/useD3';

const Skills = () => {
	// create a ref to attach to the DOM
	// this D3 layout will create divs with background images that will be used as the skills icons
	// each div will have a class of 'skill-icon' and an id of the skill name
	// each div can collide with each other using elastic collision
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

	const ref = useD3((svg) => {
		const width = 250;
		const height = 250;

		const nodes = d3.range(20).map(() => {
			return { radius: 35 };
		});
		const root = nodes[0];

		root.radius = 0;
		root.fixed = true;

		const force = d3.layout
			.force()
			.gravity(0.1)
			.friction(0.8)
			.charge((_d, i) => {
				return i ? 0 : -2000;
			})
			.nodes(nodes)
			.size([500, 500])
			.on('tick', () => {
				const q = d3.geom.quadtree(nodes);
				let i = 0;
				const n = nodes.length;

				while (++i < n) q.visit(collide(nodes[i]));

				svg
					.selectAll('div')
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
			.attr('style', () => {
				return `width: 50%; height: 100%; position: relative`;
			});

		svg
			.selectAll('#D3')
			.data(nodes.slice(1))
			.enter()
			.append('div')
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
			var p1 = d3.mouse(this);
			root.px = p1[0];
			root.py = p1[1];
			force.resume();
		});
	}, []);

	return (
		<Container>
			<section className='w-[1000px] h-[500px] flex flex-row'>
				<div className='w-1/2 h-full bg-green-500'>
				</div>
				<div ref={ref} id='D3' className='flex items-start bg-red-500'>
				</div>
			</section>
		</Container>
	);
};

export default Skills;
