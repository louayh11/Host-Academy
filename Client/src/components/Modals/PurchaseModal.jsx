import React from "react";
import { useNavigate } from "react-router-dom";
import { useSubscribeToCourse } from "../../hooks/react-query/useCourses";
import Alert from "components/shared/Alert";

const PurchaseModal = ({
  closeModal,
  courseDescription,
  CourseTitle,
  CourseId,
}) => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const subscribeToCourseMutation = useSubscribeToCourse();
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    const userId = user.uid;
    const courseId = CourseId;

    try {
      await subscribeToCourseMutation.mutateAsync({ userId, courseId });
      navigate(`/user/course/${courseId}`);
    } catch (error) {
      console.error(
        "An error occurred while subscribing to the course:",
        error
      );
    }
  };

  if (subscribeToCourseMutation.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative w-96 rounded-lg border-2 border-gray-200 bg-white p-8">
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
      {subscribeToCourseMutation.isError && (
        <Alert
          type="error"
          message="An error occurred. Please try again later."
          className="z-60 absolute top-0 mt-4"
        />
      )}
      {subscribeToCourseMutation.isSuccess && (
        <Alert
          type="success"
          message="Subscription successful!"
          className="absolute top-0 mt-4"
        />
      )}
    </div>
  );
};

export default PurchaseModal;
