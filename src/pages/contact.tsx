import { useTranslation } from 'react-i18next';
import { WithLayout } from '../layouts/layout';
import Seo from '../layouts/seo/seo';
import { ContactPage } from '../page-components';

const Contact = () => {
	const { t } = useTranslation();
	return (
		<Seo metaTitle={`Shaxzod | ${t('contact_title', { ns: 'seo' })}`}>
			<ContactPage />
		</Seo>
	);
};

export default WithLayout(Contact);
