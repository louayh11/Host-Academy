import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//----------------------------hooks----------------------//
import { useSubscribedCourses } from "../../../hooks/react-query/useCourses";
import useFetchCourses from "../../../hooks/courseHook";
//----------------------------cards----------------------//
import UnfinishedCoursesCard from "components/card/UnfinishedCoursesCard";
import CourseCard from "components/card/CourseCard";

const Courses = () => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const userId = user.uid;
  console.log("userId", userId);

  const {
    data: subscribedCourses,
    isLoading,
    isError,
  } = useSubscribedCourses(userId);
  console.log("xxxxxxxxxxxxx", subscribedCourses);
  const AllCourses = useFetchCourses();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(subscribedCourses?.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  {
    /*const visibleCourses = subscribedCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );*/
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading courses.</div>;
  }

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5">
      <div className="col-span-2 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mx-auto py-10">
          <div className="flex items-center justify-between pb-8 pr-2">
            <p className="text-left text-2xl font-bold text-[#000000] dark:text-white">
              YOUR COURSES
            </p>
            <div className="flex items-center">
              {currentPage > 1 && (
                <button
                  className="rounded-full bg-gray-200 px-6 py-2"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <FaChevronLeft />
                </button>
              )}
              {currentPage < totalPages && (
                <button
                  className="rounded-full bg-gray-200 px-6 py-2"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <FaChevronRight />
                </button>
              )}
            </div>
          </div>
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
            {subscribedCourses?.map((subscribed, id) => (
              <div key={id} className="pr-2">
                <UnfinishedCoursesCard
                  id={subscribed?.id}
                  title={subscribed?.title}
                  image={subscribed?.image}
                  difficulty={subscribed?.level}
                  instructor={subscribed?.instructor.fullName}
                  userpic={subscribed?.instructor.userpic}
                  progress={subscribed?.progress}
                  lessons={subscribed.chapters.map(
                    (chapter) => chapter?.lessons?.length
                  )}
                  chapters={subscribed?.chapters?.length}
                />
              </div>
            ))}
                 </div>*/}
        </div>

        <div className="mb-4 mt-5 flex flex-col justify-between md:flex-row md:items-center">
          <h4 className="text-2xl font-bold dark:text-white">
            Your Next courses
          </h4>
        </div>
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {subscribedCourses.courses?.map((subscribed, id) => (
            <CourseCard
              key={id}
              id={subscribed?.id}
              title={subscribed?.title}
              image={subscribed?.image}
              level={subscribed?.level}
              instructor={subscribed?.instructor.fullName}
              userpic={subscribed?.instructor.userpic}
              progress={subscribed?.progress}
              lessons={subscribed.chapters.map(
                (chapter) => chapter?.lessons?.length
              )}
              chapters={subscribed?.chapters?.length}
              price={subscribed?.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
