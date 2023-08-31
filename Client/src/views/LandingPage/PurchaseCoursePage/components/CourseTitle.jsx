import PurchaseModal from "components/Modals/PurchaseModal";
import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CourseTitle = ({ CourseTitle, courseDescription, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className="flex flex-col gap-5 rounded-md">
        <div className="bg-[#FBBC05] w-[13rem] px-4 py-2 text-white">
          INCLUDES CERTIFICATE
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-[#000000] text-left text-3xl font-bold">
            {CourseTitle}
          </h1>
          <p className="text-lg text-gray-600">{courseDescription}</p>
        </div>
        <button
          onClick={openModal}
          className="  rounded-[10px] bg-[#000000] mt-6 flex h-12 w-36 items-center justify-start gap-2 py-2.5 pl-4 pr-2 text-center text-sm font-medium capitalize leading-tight text-white"
        >
          Start Course
          <MdOutlineKeyboardArrowRight size={20} />
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

export default CourseTitle;
