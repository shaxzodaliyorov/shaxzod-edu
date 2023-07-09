import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux';
import { allCoursesType } from '../interfaces/courses';
import { WithLayout } from '../layouts/layout';
import Seo from '../layouts/seo/seo';
import { HomePage } from '../page-components';
import { GET_ALL_COURSES } from '../services/courses.services';
import { getCourse } from '../store/courses/course.slice';

function Home({ courses }: HomePageProps): JSX.Element {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const router = useRouter();
	
	return (
		<Seo
			metaTitle={`Shaxzod | ${t<string>('home_title', { ns: 'seo' })}`}
			metaDescription={t<string>('home_disc', { ns: 'seo' })}
		>
			<HomePage courses={courses} />
		</Seo>
	);
}

export default WithLayout(Home);

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ req }) => {
	const courses = await GET_ALL_COURSES.GET();
	return {
		props: {
			courses,
		},
	};
};

export interface HomePageProps extends Record<string, unknown> {
	courses: allCoursesType[];
}
