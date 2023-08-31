import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StartCourse = () => {
  return (
    <div>
      <div className="mb-40 flex flex-col items-center justify-center gap-5 rounded-md">
        <h1 className="text-[#000000] text-center text-2xl">
          Start today and get a certificate in Fundamentals of Hosting{" "}
        </h1>

        <button className=" rounded-[10px] bg-[#000000] mt-6 flex h-12 w-36 items-center justify-start gap-2 py-2.5 pl-4 pr-2 text-center text-sm font-medium capitalize leading-tight text-white">
          Start Course
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default StartCourse;
