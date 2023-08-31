import React from "react";
import { useSubscribeToCourse } from "../../hooks/react-query/useCourses";

const PurchaseModal = ({
  closeModal,
  courseDescription,
  CourseTitle,
  CourseId,
}) => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const subscribeToCourseMutation = useSubscribeToCourse();

  const handleSubscribe = () => {
    const userId = user.uid;
    const courseId = CourseId;
    subscribeToCourseMutation.mutate({ userId, courseId });
  };

  if (subscribeToCourseMutation.isLoading) {
    return <p>Loading...</p>;
  }

  if (subscribeToCourseMutation.isSuccess) {
    return <p>Subscription successful!</p>;
  }

  if (subscribeToCourseMutation.isError) {
    return <p>Error occurred while subscribing.</p>;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-filter">
      <div className="w-96 rounded-lg border-2 border-gray-200 bg-white p-8">
        <div className="mb-4 flex items-center justify-between ">
          <h2 className="text-xl font-semibold">{CourseTitle}</h2>
          <button
            onClick={closeModal}
            className="text-xl font-bold text-yellow-500"
          >
            x
          </button>
        </div>
        <p>{courseDescription}</p>

        <button
          className="bg-[#000000] mt-4 rounded-md px-4 py-2 text-white"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
