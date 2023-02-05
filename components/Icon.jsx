import { IconBase } from 'react-icons';
import {
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
    IconPython,
    IconReact,
    IconSQL,

} from './Icons/IconUiPath';

const Icon = ({ name }) => {
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
		default:
			return <IconBase />;
	}
};

export default Icon;
