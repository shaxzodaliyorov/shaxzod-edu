import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../hooks/redux";
import { allCoursesType } from "../interfaces/courses";
import { WithLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { CoursesPage } from "../page-components";
import { GET_ALL_COURSES } from "../services/courses.services";
import { getCourses, loadingCourse } from "../store/courses/course.slice";

const Courses = ({courses}:CoursePageProps) => {
  const { t } = useTranslation();
  

  return (
    <Seo
      metaTitle={`Shaxzod | ${t<string>("all_courses", { ns: "seo" })}`}
      metaDescription={t<string>("course_dic", { ns: "seo" })}
    >
      <CoursesPage />
    </Seo>
  );
};

export default WithLayout(Courses);

export const getServerSideProps: GetServerSideProps<CoursePageProps> = async () => {
	const courses = await GET_ALL_COURSES.GET();
	return {
		props: {
			courses,
		},
	};
};

export interface CoursePageProps extends Record<string, unknown> {
	courses: allCoursesType[];
}
