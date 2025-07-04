import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const url = process.env.REACT_APP_API_URL || process.env.URL || "https://host-academy-backend-production.up.railway.app";

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
        const { data } = await axios.get(
          `${url}/api/user/${userId}/subscribed-courses`
        );

        return data;
      } catch (error) {
        console.error("Error fetching subscribed courses:", error);
        throw error;
      }
    },
  });
};

export const useUnfinishedCourses = (userId) => {
  return useQuery({
    queryKey: ["unfinishedCourses", userId],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${url}/api/user/${userId}/unfinished-courses`
        );

        return data;
      } catch (error) {
        console.error("Error fetching unfinishedCourses:", error);
        throw error;
      }
    },
  });
};

export const useSubscribeToCourse = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ courseId, userId }) => {
      await axios.post(
        `${url}/api/subscribe`,
        { userId, courseId },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
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