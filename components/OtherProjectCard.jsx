import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Heading from './Heading';

const OtherProjectCard = ({ title, description, stack, url, github }) => {
	return (
		<section className='bg-primary-base rounded-lg shadow-lg transform hover:-translate-y-2 transition ease-in p-4 sm:px-6 sm:py-5 md:px-8 md:py-6 max-w-xl'>
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
							<FiGithub className='text-lg sm:text-xl text-white-base hover:text-primary-light transition ease-in' />
						</a>
					)}
					{url && (
						<a
							href={url}
							aria-label='External link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<FiExternalLink className='text-lg sm:text-xl text-white-base hover:text-primary-light transition ease-in' />
						</a>
					)}
				</div>
			</div>

			<p className='text-white-base text-sm leading-7 mb-3'>{description}</p>
			<div
				className={`inline-flex items-center space-x-2 sm:space-x-4 font-mono text-xs sm:text-sm text-white-dark`}
			>
				{stack && stack.map((item) => <p key={item}>{item}</p>)}
			</div>
		</section>
	);
};

export default OtherProjectCard;
