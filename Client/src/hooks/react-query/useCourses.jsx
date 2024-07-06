import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const url = process.env.URL || "https://api-academy.tabaani.co";

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
          `https://api-academy.tabaani.co/api/user/${userId}/subscribed-courses`
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
          `https://api-academy.tabaani.co/api/user/${userId}/unfinished-courses`
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
        "https://api-academy.tabaani.co/api/subscribe",
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