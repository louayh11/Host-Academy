import { useEffect, useState } from "react";

const useFilteredCourse = (by) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (by === "all") {
      fetch("https://host-academy-backend-production.up.railway.app/api/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fetch("https://host-academy-backend-production.up.railway.app/api/courses/category/" + by)
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
