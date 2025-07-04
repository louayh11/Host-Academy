import { useEffect, useState } from "react";

const useFilteredCourse = (by) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (by === "all") {
      fetch("http://localhost:5000/api/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fetch("http://localhost:5000/api/courses/category/" + by)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [by]);

  return courses;
};
export default useFilteredCourse;
