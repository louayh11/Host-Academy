import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaClock, FaMoneyBill, FaLayerGroup } from "react-icons/fa";

const CourseDetails = ({ chapters, price, level, courseDescription }) => {
  return (
    <div>
      <div className="grid gap-8 pb-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {/* Course Details */}
        <div className="space-y-4">
          <h5 className="font-bold">Course Detail</h5>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500">
              <IoMdCheckmark className="text-white" />
            </div>
            <p>Modules: {chapters}</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500">
              <FaClock className="text-white" />
            </div>
            <p>Hours: {/*totalDuration*/}</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500">
              <FaLayerGroup className="text-white" />
            </div>
            <p>{level}</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500">
              <FaMoneyBill className="text-white" />
            </div>
            <p>{price}</p>
          </div>
        </div>

        {/* Course Features */}
        <div className="space-y-4">
          <h5 className="font-bold">Course Features</h5>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
              <IoMdCheckmark className="text-white" />
            </div>
            <p> Self-paced learning</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
              <IoMdCheckmark className="text-white" />
            </div>
            <p> Video tutorials</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
              <IoMdCheckmark className="text-white" />
            </div>
            <p> Unlimited access</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
              <IoMdCheckmark className="text-white" />
            </div>
            <p> Recognised certificate</p>
          </div>
        </div>

        {/* About This Course */}
        <div className="space-y-4">
          <h5 className="font-bold">About this course</h5>
          <p>{courseDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
