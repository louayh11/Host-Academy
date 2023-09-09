import React from "react";
import Banner from "./components/Banner";
import CourseTitle from "./components/CourseTitle";
import CourseDetails from "./components/CourseDetails";
import HowItWorks from "./components/HowItWorks";
import Modules from "./components/Modules";
import StartCourse from "./components/StartCourse";
import { useCourses } from "../../../hooks/react-query/useCourses";
import { useParams } from "react-router-dom";
import Footer from "components/footer/Footer";



const PurchaseCourse = () => {
  const { id } = useParams();
  const { data: courses, isLoading } = useCourses();

  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  const course = courses.find((c) => c.id === id);


  if (!course) {
    return <p>Course not found</p>;
  }
  return (
    <div className="bg-white">
      <Banner />
      <div className="mt-8 px-8 lg:px-40 space-y-8">
        <CourseTitle CourseTitle={course.title} courseDescription={course.description} id={course.id}  />
        <CourseDetails chapters={course.chapters.length} price={course.price} level={course.level} courseDescription={course.description}/> 
        <HowItWorks/>
        <Modules chapters={course.chapters} chaptersLength={course.chapters.length} lessons={course.chapters.lessons} id={course.id}/>
        <StartCourse id={course.id} CourseTitle={course.title} courseDescription={course.description}  />
        <Footer/>
      </div>
    </div>
  );
};

export default PurchaseCourse;
