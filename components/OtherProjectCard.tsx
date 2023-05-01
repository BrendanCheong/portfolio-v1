import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Heading from '@components/Heading';

interface OtherProjectCardProps {
	title: string;
	description: string;
	stack: string[];
	url?: string;
	github?: string;
}

const OtherProjectCard = ({
	title,
	description,
	stack,
	url,
	github,
}: OtherProjectCardProps) => {
	return (
		<section className='bg-primary-base hover:-translate-y-2 sm:px-6 sm:py-5 md:px-8 md:py-6 max-w-xl p-4 transition ease-in transform rounded-lg shadow-lg'>
			<div className='flex items-center justify-between mb-3'>
				<div className='mt-3'>
					<Heading
						type='h4'
						isClickable
						color='text-white-default hover:text-primary-light'
					>
						{url ? (
							<a
								href={url}
								aria-label='External link'
								rel='noopener noreferrer'
								target='_blank'
							>
								{title}
							</a>
						) : (
							title
						)}
					</Heading>
				</div>
				<div className='inline-flex items-center space-x-4'>
					{github && (
						<a
							href={github}
							aria-label='Github link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<FiGithub className='sm:text-xl text-white-base hover:text-primary-light text-lg transition ease-in' />
						</a>
					)}
					{url && (
						<a
							href={url}
							aria-label='External link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<FiExternalLink className='sm:text-xl text-white-base hover:text-primary-light text-lg transition ease-in' />
						</a>
					)}
				</div>
			</div>

			<p className='text-white-base mb-3 text-sm leading-7'>{description}</p>
			<div className='sm:space-x-4 sm:text-sm text-white-dark inline-flex items-center space-x-2 font-mono text-xs'>
				{stack && stack.map((item) => <p key={item}>{item}</p>)}
			</div>
		</section>
	);
};

export default OtherProjectCard;
