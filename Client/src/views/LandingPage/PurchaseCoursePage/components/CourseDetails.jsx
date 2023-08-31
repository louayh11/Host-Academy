import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaClock,FaMoneyBill,FaLayerGroup  } from "react-icons/fa";

const CourseDetails = () => {
  return (
    <div>
      <div className="flex items-end justify-between pb-8">
        <p className="text-[#000000] text-left text-2xl font-bold">
          NEW COURSES
        </p>
      </div>

      <div className="grid gap-8 pb-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {/* Course Details */}
        <div className="space-y-4">
          <h5 className="font-bold">Course Detail</h5>
          <div className="flex items-center">
          <div className="bg-yellow-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <IoMdCheckmark className="text-white" />
        </div>
          <p>Modules: 26</p>
          </div>
          <div className="flex items-center">
          <div className="bg-yellow-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <FaClock className="text-white" />
        </div>
          <p>Hours: 40</p>
          </div>
          <div className="flex items-center">
          <div className="bg-yellow-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <FaLayerGroup className="text-white" />
        </div>
          <p>Beginner</p>
          </div>
          <div className="flex items-center">
          <div className="bg-yellow-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <FaMoneyBill className="text-white" />
        </div>
          <p> Free</p>
          </div>
        </div>

        {/* Course Features */}
        <div className="space-y-4">
          <h5 className="font-bold">Course Features</h5>
          <div className="flex items-center">
          <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <IoMdCheckmark className="text-white" />
        </div>
          <p> Self-paced learning</p>
          </div>
          <div className="flex items-center">
          <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <IoMdCheckmark className="text-white" />
        </div>
          <p> Video tutorials</p>
          </div>
          <div className="flex items-center">
          <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <IoMdCheckmark className="text-white" />
        </div>
          <p> Unlimited access</p>
          </div>
          <div className="flex items-center">
          <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center mr-2">
          <IoMdCheckmark className="text-white" />
        </div>
          <p> Recognised certificate</p>
          </div>
         
        </div>

        {/* About This Course */}
        <div className="space-y-4">
          <h5 className="font-bold">About this course</h5>
          <p>
            Master the basics of digital marketing with our free course
            accredited by Interactive Advertising Bureau Europe and The Open
            University. There are 26 modules to explore, all created by Google
            trainers, packed full of practical exercises and real-world examples
            to help you turn knowledge into action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
