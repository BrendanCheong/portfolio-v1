import { IconBase } from 'react-icons';
import {
	IconPython,
	IconReact,
	IconUiPath,
	IconAWS,
	IconCSS,
	IconFastAPI,
	IconFigma,
	IconFlask,
	IconHTML,
	IconJavaScript,
	IconTypescript,
	IconNodeJS,
	IconVBNet,
	IconTailwind,
	IconNextJS,
	IconSQL,
	IconGraphQL,
	IconElasticSearch,
	IconMaterialUI,
	IconJava,
	IconGit,
	IconMongoDB,
} from '@components/Icons/index';

export default function Icon({ name }: { name: string }) {
	switch (name) {
		case 'UiPath':
			return <IconUiPath />;
		case 'AWS':
			return <IconAWS />;
		case 'CSS':
			return <IconCSS />;
		case 'FastAPI':
			return <IconFastAPI />;
		case 'Figma':
			return <IconFigma />;
		case 'Tailwind':
			return <IconTailwind />;
		case 'NextJS':
			return <IconNextJS />;
		case 'Flask':
			return <IconFlask />;
		case 'HTML':
			return <IconHTML />;
		case 'JavaScript':
			return <IconJavaScript />;
		case 'Typescript':
			return <IconTypescript />;
		case 'NodeJS':
			return <IconNodeJS />;
		case 'Python':
			return <IconPython />;
		case 'React':
			return <IconReact />;
		case 'SQL':
			return <IconSQL />;
		case 'VBNet':
			return <IconVBNet />;
		case 'GraphQL':
			return <IconGraphQL />;
		case 'ElasticSearch':
			return <IconElasticSearch />;
		case 'Material UI':
			return <IconMaterialUI />;
		case 'Java':
			return <IconJava />;
		case 'Git':
			return <IconGit />;
		case 'MongoDB':
			return <IconMongoDB />;
		default:
			return <IconBase />;
	}
}
