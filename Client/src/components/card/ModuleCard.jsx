import React from "react";
import Card from "components/card";
import { Link } from "react-router-dom";

const ModuleCard = ({ extra, id }) => {
  return (
    <div>
      {" "}
      <Card
        extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}  border-2 border-gray-200`}
      >
        <div className="h-full w-96">
          <div className="pb-4">
            <img className=" h-12 w-12 rounded-full bg-gray-300" />
          </div>
          <div>
            <div className="p-![18px] flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
              <div>
                <p className="text-lg font-medium dark:text-white ">
                  The Hosting opportunity
                </p>
              </div>
            </div>
            <div className="mt-1 mb-2 flex justify-between">
              <div className="flex  items-center justify-center gap-1">
                <p className="text-md dark:text-white">2 Lessons </p>
                <p className="text-md dark:text-white">/ 10 min</p>
              </div>
            </div>
            <hr className=" border-[1px] mb-4 w-60 bg-gray-500 " />
          </div>

          <div className="mt-1 mb-40 flex flex-col gap-4">
            <Link to={`/course/${id}`}>Intro to Tabaani Platform</Link>
            <Link to={`/course/${id}`}>Intro to Tabaani Platform</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModuleCard;
