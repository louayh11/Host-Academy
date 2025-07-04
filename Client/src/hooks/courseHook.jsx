import { useEffect, useState } from "react";

const useFetchCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://host-academy-backend-production.up.railway.app/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return courses;
};
//sss
export default useFetchCourses;
