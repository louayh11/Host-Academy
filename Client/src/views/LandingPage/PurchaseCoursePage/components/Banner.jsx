import React from "react";
import CourseBanner from "../../../../assets/img/Banners/CourseBanner.png";

const Banner = () => {
  return (
    <section className="w-full">
      {/* Background Image with Reduced Opacity */}
      <img src={CourseBanner} />
    </section>
  );
};

export default Banner;
