import React from "react";
import Banner from "./components/Banner";
import CourseTitle from "./components/CourseTitle";
import CourseDetails from "./components/CourseDetails";
import HowItWorks from "./components/HowItWorks";
import Modules from "./components/Modules";

const PurchaseCourse = () => {
  return (
    <div>
      <Banner />
      <div className="mt-8 px-8 lg:px-40 space-y-8">
        <CourseTitle />
        <CourseDetails />
        <HowItWorks/>
        <Modules/>
      </div>
    </div>
  );
};

export default PurchaseCourse;
