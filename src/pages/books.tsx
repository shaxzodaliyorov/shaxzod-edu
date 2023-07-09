import { useTranslation } from 'react-i18next';
import { WithLayout } from '../layouts/layout';
import Seo from '../layouts/seo/seo';
import { BooksPage } from '../page-components';
const Books = () => {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={`Shaxzod | ${t<string>('book_title', { ns: 'seo' })}`}
			metaDescription={t<string>('book_disc', { ns: 'seo' })}
		>
			<BooksPage />
		</Seo>
	);
};

export default WithLayout(Books);
