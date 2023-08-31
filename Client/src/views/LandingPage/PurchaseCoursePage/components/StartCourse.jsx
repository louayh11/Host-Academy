import PurchaseModal from "components/Modals/PurchaseModal";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const StartCourse = ({ id, CourseTitle, courseDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="mb-40 flex flex-col items-center justify-center gap-5 rounded-md">
        <h1 className="text-[#000000] text-center text-2xl">
          Start today and get a certificate in Fundamentals of {CourseTitle}
        </h1>

        {/*<Link to={`/user/course/${id}`}>
          <button className="rounded-[10px] bg-[#000000] flex items-center justify-start gap-2 py-2.5 pl-4 pr-2 text-center text-sm font-medium capitalize leading-tight text-white">
            Start Course <MdOutlineKeyboardArrowRight size={20} />
          </button>
  </Link>*/}
        <button
          onClick={openModal}
          className="rounded-[10px] bg-[#000000] flex items-center justify-start gap-2 py-2.5 pl-4 pr-2 text-center text-sm font-medium capitalize leading-tight text-white"
        >
          Start Course <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>

      {isModalOpen && (
        <PurchaseModal
          closeModal={closeModal}
          courseDescription={courseDescription}
          CourseTitle={CourseTitle}
          CourseId={id}
        />
      )}
    </div>
  );
};

export default StartCourse;
