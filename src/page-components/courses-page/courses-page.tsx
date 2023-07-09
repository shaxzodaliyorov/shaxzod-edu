import { Grid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../components';
import AllCoursesCard from '../../components/all-courses-card/all-courses-card';
import { useAppSelector } from '../../hooks/redux';

const CoursesPage = () => {
	const { t } = useTranslation();
	const { courses } = useAppSelector(state => state.course);
	return (
		<>
			<SectionTitle
				title={t('all_courses', { ns: 'home' })}
				subtitle={t('all_courses_sub_title', { ns: 'home' })}
			/>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
				}}
				gap={4}
				py={10}
			>
				{courses.map((item, index) => {
					return <AllCoursesCard key={index} item={item} />;
				})}
			</Grid>
		</>
	);
};

export default CoursesPage;
