import { useTranslation } from 'react-i18next';
import { WithLayout } from '../layouts/layout';
import Seo from '../layouts/seo/seo';
import { AboutPage } from '../page-components';

const About = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={`Shaxzod | ${t('about_title', { ns: 'seo' })}`}
			metaDescription={t<string>('about_disc', { ns: 'seo' })}
		>
			<AboutPage />
		</Seo>
	);
};

export default WithLayout(About);
