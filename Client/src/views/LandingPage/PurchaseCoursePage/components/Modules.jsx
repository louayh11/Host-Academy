import ModuleCard from "components/card/ModuleCard";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Modules = ({ chapters, chaptersLength, id }) => {
  const totalCards = chaptersLength;
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const cardNumbers = Array.from(
    { length: totalCards },
    (_, index) => index + 1
  );

  return (
    <div className="flex flex-col gap-8 pb-24">
      <h1 className="text-center text-2xl font-bold">Modules (26)</h1>

      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded py-1"
        >
          <FaChevronLeft />
        </button>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((module, index) => {
            console.log(module.lessons, "module");
            return (
              <ModuleCard
                key={index}
                id={id}
                chapterTitle={module.title}
                lessons={module.lessons}
              />
            );
          })}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded py-1"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Modules;
