import React from 'react';
import Icon from '@components/Icon';

interface Skill {
	title: string;
}

interface SkillSectionProps {
	name: string;
	icons: Skill[];
}

const SkillSection = ({ name, icons }: SkillSectionProps) => {
	return (
		<>
			<section
				className='text-white-default pl-8 font-mono text-lg font-semibold text-left'
				id='bullet'
			>
				<h3>{name}</h3>
			</section>
			<ul className='flex flex-wrap pt-3 pl-12'>
				{icons.map((icon, index) => {
					return (
						<li
							key={index}
							className='hover:text-primary-light/100 text-primary-light/0 hover:text-opacity-100 relative z-0 flex flex-col justify-end content-end place-content-end w-10 h-10 mb-6 mr-4 transition-[opacity_.5s,color_.5s] text-center items-center'
						>
							<Icon name={icon.title} />
							<i className='-bottom-5 whitespace-nowrap absolute font-mono text-xs'>
								{icon.title}
							</i>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default SkillSection;
