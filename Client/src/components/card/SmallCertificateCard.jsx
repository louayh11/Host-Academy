import React from "react";
import CertificateLogo from "../../assets/img/Certificate/CertificateLogo.png";
import whiteLines from "../../assets/img/Certificate/whiteLines.png";
import signatureUrl from "../../assets/img/Certificate/signatureUrl.png";

const SmallCertificateCard = ({
  displayName,
  courseTitle,
  courseDescription,
  completionDate,
}) => {
  return (
    <div className="bg-[#FEDD40] relative h-60 w-full rounded-lg p-6 shadow-lg">
      <div>
        <div className="h-[14.5rem] absolute right-0 top-0 truncate">
          <img
            src={whiteLines}
            alt="White Lines"
            className="h-[14.5rem] pt-2"
          />
        </div>
        <div>
          <div className="right-[3rem] absolute top-11  h-32 w-32">
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
            <h1 className="text-md mt-4 whitespace-normal font-semibold uppercase text-gray-800">
              certificate
            </h1>
            <h1 className=" text-md whitespace-normal font-semibold uppercase text-gray-800">
              of appreciation
            </h1>
          </div>

          <p className="text-2xl font-bold uppercase text-gray-800">
            {displayName}
          </p>
          <hr className=" border-[1px] w-32 border-gray-800 opacity-50" />
          <h1 className="text-[0.5rem] mt-4 font-semibold uppercase text-gray-800">
            Course Name : {courseTitle}
          </h1>
          <hr className=" border-[1px] mb-2 w-24 border-gray-800 opacity-50" />
          <p className="w-64 truncate text-sm uppercase text-gray-800">
            {courseDescription}
          </p>
        </div>

        <div className=" absolute bottom-8 right-24 ">
          <img
            src={signatureUrl}
            alt="Signature"
            className="mx-auto mt-4 h-8 w-11 object-cover"
          />
          <hr className="border-[1px] w-24 border-gray-800 opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default SmallCertificateCard;
