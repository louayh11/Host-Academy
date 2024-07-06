import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useCourses } from "../../../../hooks/react-query/useCourses";
import CourseCard from "components/card/CourseCard";
import axios from "axios";
import { Link } from "react-router-dom";

const NewCourses = () => {
  const [currPage, setCurrPage] = useState(0);

  const { data: courses, isLoading } = useCourses();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api-academy.tabaani.co/api/categories"
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
      }
    };

    fetchCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);


  const itemsPerPage = 3;
  const totalPages = Math.ceil((courses?.length || 0) / itemsPerPage);

  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  return (
    <div className="mx-auto bg-white py-10  md:px-11 lg:px-24" id="about">
      <div className="flex items-end justify-between pb-8">
        <p className="text-[#000000] text-left text-2xl font-bold">
          NEW COURSES
        </p>
        <div className="mt-4 flex justify-center">

        <div className="flex items-center space-x-4">
  <Link to="/filter/all" className=" shadow-lg font-bold rounded-2xl bg-gray-100 px-6 py-3 text-[#000000]">
    All Courses
  </Link>
  {categories.map((category) => (
    <Link
      key={category.id}
      to={`/filter/${category.name}`}
      className="rounded-md  font-bold px-6 py-3 text-[#000000]"
    >
      {category.name}
    </Link>
  ))}
</div>

<button className="mx-2 ml-4 rounded-md bg-gray-200 px-2 py-2 text-[#000000]">
            <FiFilter size={24} color="silver" />
          </button>
        </div>
      </div>

      <div className="grid gap-8 px-12 pb-16 sm:grid-cols-2 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
        {courses
          ?.slice(currPage * itemsPerPage, (currPage + 1) * itemsPerPage)
          ?.map((course, id) => (
            <CourseCard
              key={id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              price={course.price}
              image={course.image}
              level={course.level}
              chapters={course.chapters.length}
            />
          ))}
      </div>
      <div className="mt-4 flex justify-center overflow-x-auto">
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            onClick={() => setCurrPage(i)}
            className={`${
              i === currPage ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
            } mx-2 h-3 w-3 cursor-pointer rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCourses;
