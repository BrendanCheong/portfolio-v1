import Image from 'next/image';
import Heading from './Heading';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import useBlurImage from '../hooks/useBlurImage';

const FeaturedProjectCard = ({
	title,
	subTitle,
	description,
	image,
	imageWidth = 695,
	imageHeight,
	stack,
	url,
	github,
	contentSide = 'right',
}) => {
	return (
		<div className='relative flex items-center my-6 sm:my-8 md:my-16'>
			<div className={`grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4`}>
				<div
					className={`relative col-span-1 ${
						contentSide === 'right'
							? 'md:col-start-1 md:col-end-2'
							: 'md:col-start-2 md:col-end-3'
					}`}
				>
					<a
						href={url}
						aria-label='External link'
						rel='noopener noreferrer'
						target='_blank'
					>
						<div className='absolute w-full h-full bg-primary-dark  bg-opacity-90 md:bg-opacity-50 md:hover:bg-transparent rounded-md sm:rounded-lg shadow-2xl transition ease-in z-10' />
						<Image
							className='rounded-md sm:rounded-lg z-0'
							src={image}
							alt={title}
							layout='intrinsic'
							width={imageWidth}
							height={imageHeight}
							placeholder='blur'
							blurDataURL={useBlurImage(imageWidth, imageHeight)}
						/>
					</a>
				</div>
			</div>
			<div
				className={`absolute top-0 grid grid-cols-1 grid-rows-1 md:grid-cols-3 lg:grid-cols-5 gap-4 h-full`}
			>
				<div
					className={`col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center ${
						contentSide === 'right'
							? 'md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-6 md:items-end'
							: 'md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-4 md:items-start'
					} z-20 p-8`}
				>
					<a
						href={url}
						aria-label='External link'
						rel='noopener noreferrer'
						target='_blank'
					>
						<Heading
							type='h3'
							isClickable
							margin='mb-1 sm:mb-2'
							align={contentSide === 'left' ? 'text-left' : 'md:text-right'}
							color='text-white-default md:text-white-base hover:text-primary-light'
						>
							{title}
						</Heading>
					</a>

					<p
						className={`font-mono text-sm sm:text-base text-primary-light ${
							contentSide === 'left' ? 'text-left' : 'md:text-right'
						} mb-5`}
					>
						{subTitle}
					</p>

					<div className='md:bg-primary-base rounded-lg shadow-lg md:p-6 mb-4 sm:mb-5'>
						<p
							className={`text-white-base md:text-white-dark text-sm sm:text-base ${
								contentSide === 'left' ? 'text-left' : 'md:text-right'
							}`}
						>
							{description}
						</p>
					</div>
					<div
						className={`inline-flex items-center space-x-2 sm:space-x-4 font-mono text-xs sm:text-sm ${
							contentSide === 'left' ? 'text-left' : 'md:text-right'
						} text-white-dark mb-4 sm:mb-5`}
					>
						{stack && stack.map((item) => <p key={item}>{item}</p>)}
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
			</div>
		</div>
	);
};

export default FeaturedProjectCard;
