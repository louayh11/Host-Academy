import React from "react";
import NewCourses from "./NewCourses";
import { useState } from "react";
import useFetchCourses from "hooks/courseHook";
import { useEffect } from "react";
import axios from "axios";
import { FiFilter } from "react-icons/fi";
import CourseCard from "components/card/CourseCard";
import { Link, useParams } from "react-router-dom";
import useFilteredCourse from "hooks/filteredCourseHook";
import LandingNavBar from "components/LandingNavbar";

const FilteredCourses = () => {
  const { by } = useParams();
  const [currPage, setCurrPage] = useState(0);
  const AllCourses = useFilteredCourse(by);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [filteredCourses, setFilteredCourses] = useState([]); // New state for filtered courses

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://host-academy-backend-production.up.railway.app/api/categories"
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

  useEffect(() => {
    // Filter courses based on the search query
    const filtered = AllCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchQuery, AllCourses]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(AllCourses.length / itemsPerPage);
  const activeCategory = by === "all" ? "all courses" : by;

  return (
    <div>
      <div className="mx-auto bg-white py-10  md:px-11 lg:px-24" id="about">
        <div className="flex justify-center">
          <div className="w-[40%] items-center">
            <h1 className="thats-right-great mt-5 mb-10 pb-5 text-4xl font-bold">
              Search Between <span className="text-red-500">100</span> Courses
              And Find Your Favorite Course
            </h1>
          </div>
        </div>

        <div className="search flex w-full flex-row justify-center">
          <input
            type="text"
            className="w-[50%] rounded rounded border border-gray-300 py-1.5 px-4"
            placeholder="Search Anything"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
        </div>
        <div className="flex items-end justify-between pb-8 my-8">
          <p className="text-left text-2xl font-bold text-[#000000]">COURSES</p>
          <div className="mt-4 flex justify-center">
          <div className="flex items-center space-x-5">
          <Link
            to="/filter/all"
            className={`rounded-md  font-bold px-6 py-3  ${
              activeCategory === "all courses"
                ? "shadow-lg rounded-2xl bg-gray-100  text-[#000000]"
                : null
            }`}
          >
            All Courses
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/filter/${category.name}`}
              className={`rounded-md  font-bold px-6 py-3  ${
                activeCategory === category.name
                ? "shadow-lg rounded-2xl bg-gray-100 text-[#000000]"
                : null
              }`}
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
          {filteredCourses
            .slice(currPage * itemsPerPage, (currPage + 1) * itemsPerPage)
            .map((course, id) => (
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
    </div>
  );
};

export default FilteredCourses;
