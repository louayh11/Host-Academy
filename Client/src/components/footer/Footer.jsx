import SmallCertificateCard from "components/card/SmallCertificateCard";

const Footer = () => {
  return (
    <div className="pb-8 pt-3  xl:flex-row">
      <div>  
        <div className="flex flex-col gap-8">
        <div className="grid gap-16 pb-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {/* Course Features */}
          <div className="space-y-4 flex flex-col ">
          <h5 className=" text-black text-lg uppercase text-left font-bold">
          Membership Certificate
            </h5>
            <div className="">
              <SmallCertificateCard/>
            </div>
          </div>

          {/* About This Course */}
          <div className="space-y-4 flex flex-col ">
          <h5 className=" text-black text-lg uppercase text-left font-bold">
            categories
            </h5>
            <ul className="flex flex-col gap-2">
            <li>ideation</li>
            <li>Business</li>
            <li>Finance & Accounting</li>
            <li>IT & Software</li>
            <li>tour managment</li>
            <li>Personal Development</li>
            <li>Design experiences</li>
            <li>Marketing</li>
            <li>Lifestyle</li>
            <li>Photography & Video</li>
            <li>security</li>
            </ul>
          </div>
             {/* About This Course */}
             <div className="space-y-4 flex flex-col ">
          <h5 className=" text-black text-lg uppercase text-left font-bold">
          quick access
            </h5>
            <ul className="flex flex-col gap-2">
            <li>What We Offer</li>
            <li>Careers</li>
            <li>Leadership</li>
            <li>About</li>
            <li>Catalog</li>
            <li>Degrees</li>
            <li>For Enterprise</li>
            <li>For Government</li>
            <li>For Campus</li>
            <li>Become a Partner</li>
            <li>Terms</li>
            <li>Accessibility</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
          <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
            privacy policy | terms & conditions
          </p>
        </h5>
        <div>
          <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
            <li>
              <a
                target="blank"
                href="#"
                className="text-base font-medium text-gray-600 hover:text-gray-600"
              >
                all copyright (c) {1900 + new Date().getYear()} reserved
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
