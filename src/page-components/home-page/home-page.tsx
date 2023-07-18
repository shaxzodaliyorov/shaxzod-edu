import { AllCourses, Hero, Status, Technology } from "../../components";
import { HomePageProps } from "./home-page.props";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Status />
      <AllCourses />
      <Technology />
    </>
  );
};

export default HomePage;
