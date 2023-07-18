import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { allCoursesType } from "../interfaces/courses";
import { WithLayout } from "../layouts/layout";
import Seo from "../layouts/seo/seo";
import { HomePage } from "../page-components";
import { GET_ALL_COURSES } from "../services/courses.services";
import { getCourses, loadingCourse } from "../store/courses/course.slice";

function Home(): JSX.Element {
  const { t } = useTranslation();
  const { isLoading } = useAppSelector((state) => state.course);
  const dispatch = useAppDispatch();

  const getAllCourses = async () => {
    dispatch(loadingCourse(true));
    const response = await GET_ALL_COURSES.GET();
    dispatch(getCourses(response));
    dispatch(loadingCourse(false));
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <Seo
      metaTitle={`Shaxzod | ${t<string>("home_title", { ns: "seo" })}`}
      metaDescription={t<string>("home_disc", { ns: "seo" })}
    >
      {isLoading ? <Loader /> : <HomePage />}
    </Seo>
  );
}

export default WithLayout(Home);

// export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ req }) => {
// 	const courses = await GET_ALL_COURSES.GET();
// 	return {
// 		props: {
// 			courses,
// 		},
// 	};
// };

// export interface HomePageProps extends Record<string, unknown> {
// 	courses: allCoursesType[];
// }
