import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">How it works</h1>
        <div className="grid gap-16 pb-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-16">
          {/* Course Details */}
          <div className="space-y-4 flex flex-col items-center">
            <h5 className="bg-blue-800 rounded-full flex items-center justify-center text-white text-lg w-11 h-11">
              1
            </h5>
            <div className="flex items-center">
              <p>Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz.</p>
            </div>
          </div>

          {/* Course Features */}
          <div className="space-y-4 flex flex-col items-center">
            <h5 className="bg-blue-800 rounded-full flex items-center justify-center text-white text-lg w-11 h-11">
              2
            </h5>
            <div className="flex items-center">
              <p>Pass the final 40-question exam and get certified.</p>
            </div>
          </div>

          {/* About This Course */}
          <div className="space-y-4 flex flex-col items-center">
            <h5 className="bg-blue-800 rounded-full flex items-center justify-center text-white text-lg w-11 h-11">
              3
            </h5>
            <p>
              Download and showcase your new qualification on LinkedIn and your CV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
