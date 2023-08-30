import React from "react";
import CertificateLogo from "../../assets/img/Certificate/CertificateLogo.png";
import whiteLines from "../../assets/img/Certificate/whiteLines.png";
import signatureUrl from "../../assets/img/Certificate/signatureUrl.png";

const CertificateCard = ({
  displayName,
  courseTitle,
  courseDescription,
  completionDate,
}) => {
  return (
    <div className="relative h-96  rounded-lg bg-[#FEDD40] p-6 shadow-lg">
      <div>
        <div className="absolute right-0 top-0 h-[23rem] truncate">
          <img src={whiteLines} alt="White Lines" className="h-96" />
        </div>
        <div>
          <div className="absolute bottom-0 right-24  h-32 w-32">
            {CertificateLogo && (
              <img
                src={CertificateLogo}
                alt="Logo"
                className="mx-auto  object-contain"
              />
            )}{" "}
          </div>
        </div>
        <div>
          <div>
            <h1 className="mt-4 whitespace-normal text-3xl font-semibold uppercase text-gray-800">
              certificate
            </h1>
            <h1 className="mt-4 whitespace-normal text-3xl font-semibold uppercase text-gray-800">
              of appreciation
            </h1>
          </div>
          <h1 className="text-md mb-4 mt-2 whitespace-normal font-semibold uppercase text-gray-800">
            this Certificate is proudly presented to
          </h1>
          <p className="text-2xl font-bold uppercase text-gray-800">
            {displayName}
          </p>
          <hr className=" w-64 border-[1px] border-gray-800 opacity-50" />
          <h1 className="mt-4 text-sm font-semibold uppercase text-gray-800">
            Course Name : {courseTitle}
          </h1>
          <hr className=" mb-2 w-64 border-[1px] border-gray-800 opacity-50" />
          <p className="w-64 truncate text-sm uppercase text-gray-800">
            {courseDescription}
          </p>
        </div>
        <p className="text-lg font-bold text-gray-800">
          {new Date(completionDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className=" absolute bottom-8 left-6 ">
          <img
            src={signatureUrl}
            alt="Signature"
            className="mx-auto mt-4 h-8 w-24"
          />
          <hr className="w-36 border-[1px] border-gray-800 opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
