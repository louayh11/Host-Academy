import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const url = process.env.URL || "http://localhost:5000";

export const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/api/courses`);
      console.log("courses", data);
      return data;
    },
  });
};

export const useSubscribedCourses = (userId) => {
  return useQuery({
    queryKey: ["subscribedCourses", userId],
    queryFn: async () => {
      try {
        // Make sure the API endpoint is constructed correctly
        const { data } = await axios.get(
          `http://localhost:5000/api/user/${userId}/subscribed-courses`
        );

        // Log the fetched data to check if it's coming as expected
        console.log("Fetched subscribed courses:", data);

        return data; // Return the fetched data
      } catch (error) {
        console.error("Error fetching subscribed courses:", error);
        throw error; // Rethrow the error to be handled by React Query
      }
    },
  });
};

export const useSubscribeToCourse = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ courseId, userId }) => {
      await axios.post(
        "http://localhost:5000/api/subscribe",
        { userId, courseId },
        {
          withCredentials: true,
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] });
      },
    }
  );
};
