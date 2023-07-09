import { AllCourses, Hero, Status, Technology } from "../../components";
import { HomePageProps } from "./home-page.props";

const HomePage = ({ courses }: HomePageProps) => {
   return (
      <>
         <Hero />
         <Status />
         <AllCourses courses={courses} />
         <Technology />
      </>
   )
}

export default HomePage;