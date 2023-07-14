import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { allCoursesType } from '../../interfaces/courses';
import { SecurityWithLayout } from '../../layouts/security/security';
import Seo from '../../layouts/seo/seo';
import { SecurityPage } from '../../page-components';
import { GET_ALL_COURSES } from '../../services/courses.services';
import Lesson from '../../services/lesson.services';
import { getCourse } from '../../store/courses/course.slice';
import { getLesson, getLessons, loading } from '../../store/courses/lessons/lessons.slice';

const Security = ({ courseLesson }: LessonPageProps) => {
	const dispatch = useAppDispatch();
	const { course } = useAppSelector(state => state.course);
	const { lessons } = useAppSelector(state => state.lesson);
	const router = useRouter();

	useEffect(() => {
		dispatch(getCourse(courseLesson));
		const GetLessons = async () => {
			dispatch(loading(true));
			if (course) {
				const response = await Lesson.getLessons(course?._id as string);
				dispatch(getLessons(response));
				dispatch(loading(false));
			}
		};
		GetLessons();
	}, [course]);

	useEffect(() => {
		const LessonId = localStorage.getItem(course?.slug as string)
			? localStorage.getItem(course?.slug as string)
			: '';
		const link = `/security/${course?.slug}`;

		if (!LessonId) {
			const currentLesson = lessons[0];
			dispatch(getLesson(currentLesson));
			router.replace({ pathname: link, query: { lesson: currentLesson?._id } }, undefined, {
				shallow: false,
			});
		} else {
			const currentLesson = lessons.find(c => c._id === LessonId);
			dispatch(getLesson(currentLesson));
			router.replace({ pathname: link, query: { lesson: currentLesson?._id } }, undefined, {
				shallow: false,
			});
		}
	}, [course, lessons]);

	return (
		<Seo metaTitle='Dashboard'>
			<SecurityPage />
		</Seo>
	);
};

export default SecurityWithLayout(Security);

export const getServerSideProps: GetServerSideProps<LessonPageProps> = async ({ query }) => {
	const courseLesson = await GET_ALL_COURSES.GET_ONE(query.slug as string);
	return {
		props: {
			courseLesson,
		},
	};
};

export interface LessonPageProps extends Record<string, unknown> {
	courseLesson: allCoursesType;
}