import React, { useState } from "react";
import chapterIcon from "../../assets/icons/chapter/Vector.png";
import tick from "../../assets/icons/tick.png";

const ChaptersCard = ({
  chapters = [],
  onLessonClick,
  onChapterClick,
  onQuizzClick,
  onFinalExamClick,
  showLesson,
  progress,
}) => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (index) => {
    if (openChapter === index) {
      setOpenChapter(null);
    } else {
      setOpenChapter(index);
    }
  };

  const calculateEnabledChapters = () => {
    const enabledChapters = [];
    let totalProgress = progress;
    for (let i = 0; i < chapters.length; i++) {
      // const chapter = chapters[i];
      const chapterProgress = Math.min(totalProgress, 9); // Max 10 progress per chapter
      if (chapterProgress >= 0) {
        enabledChapters.push(i);
      } else {
        break; // No need to check further chapters
      }
      totalProgress -= 10; // Deduct the progress used for this chapter
    }
    return enabledChapters;
  };

  const enabledChapters = calculateEnabledChapters();
  const getProgressR=(a)=>{
    
    if(progress>a && progress-(a+10)>=0)
    return getProgressR(a+10)
    else
    return progress-a
      }
    
      const newProgress=getProgressR(0)

  return (
    <div className="shadow- rounded-2xl bg-white p-4 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Course Overview</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} className="mb-4 border-b border-gray-300 pb-4">
            <div className="flex items-center justify-between">
              <div className=" flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                    enabledChapters.includes(index)
                      ? "bg-[#ffaf20]"
                      : "bg-gray-300"
                  }`}
                >
                  <img
                    alt="Avatar"
                    className="h-[2.5rem] w-[2.5rem] rounded-lg object-contain"
                    src={chapterIcon}
                  />
                </div>
                <span
                  className={`whitespace-wrap text-xl font-bold ${
                    enabledChapters.includes(index)
                      ? "text-black cursor-pointer"
                      : "cursor-not-allowed text-gray-400"
                  }`}
                  onClick={() => {
                    if (enabledChapters.includes(index)) {
                      toggleChapter(index);
                    }
                  }}
                >
                  {chapter.title}
                </span>
              </div>

              <button
                type="button"
                className={`p-1 ${
                  enabledChapters.includes(index)
                    ? null
                    : "cursor-not-allowed text-gray-400"
                }`}
                onClick={() => {
                  if (enabledChapters.includes(index)) {
                    toggleChapter(index);
                  }
                }}
              >
                {openChapter === index ? (
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                )}
              </button>
            </div>
            {openChapter === index && (
              <ul className="mt-2">
                {chapter.lessons && chapter.lessons.length > 0 ? (
                  chapter.lessons.map((lesson, lessonIndex) => {
                    let nextLessonId = null;

                    if (lessonIndex < chapter.lessons.length - 1) {
                      const nextLesson = chapter.lessons[lessonIndex + 1];
                      nextLessonId = nextLesson.id;
                    }

                    const chapterIndex = enabledChapters.indexOf(index);
                    const isLessonEnabled =
                      progress >= chapterIndex * 10 + lessonIndex;
                    const isChapterCompleted =
                      progress >= chapterIndex * 10 + 10;

                    return lesson && lesson.LessonTitle ? (
                      lesson && lesson.LessonTitle ? (
                        <li
                          key={lessonIndex}
                          className={`py-2 pl-4 ${
                            isLessonEnabled
                              ? "cursor-pointer py-2 pl-4"
                              : "cursor-not-allowed text-gray-400"
                          }`}
                          onClick={() => {
                            if (isLessonEnabled) {
                              onChapterClick(index);
                              onLessonClick(lessonIndex);
                            }
                          }}
                        >
                          <span
                            className={`py-2 pl-4 ${
                              isLessonEnabled
                                ? "flex cursor-pointer flex-row justify-between py-2 pl-4 hover:text-yellow-500"
                                : "cursor-not-allowed text-gray-400"
                            }`}
                            onClick={() => {
                              if (isLessonEnabled) showLesson();
                            }}
                          >
                            {lesson.LessonTitle}
                          </span>

                          {/* Quizzes */}
                          <ul className=" mt-2 list-disc  pl-4">


                            <div className="flex flex-row justify-between">
                              <p
                                className={`${
                                  !(newProgress > lessonIndex) && isLessonEnabled && !isChapterCompleted
                                    ? "flex cursor-pointer flex-row justify-between hover:text-yellow-500"
                                    : !isLessonEnabled
                                    ? "cursor-not-allowed text-gray-200"
                                    : "cursor-not-allowed text-gray-900"
                                }`}
                                key={lessonIndex}
                                onClick={() => {
                                  if (!(newProgress > lessonIndex) && isLessonEnabled && !isChapterCompleted)
                                    onQuizzClick(lessonIndex, nextLessonId);
                                }}
                              >
                                Quick Quiz {lessonIndex}
                              </p>
                              {newProgress > lessonIndex && isLessonEnabled && !isChapterCompleted && (
                                <img
                                  src={tick}
                                  alt="done"
                                  className="my-1 ml-2 h-4 w-4 text-green-500"
                                />
                              )}
                            </div>
                          </ul>
                        </li>
                      ) : null
                    ) : null;
                  })
                ) : (
                  <li>No lessons available for this chapter.</li>
                )}
              </ul>
            )}
          </li>
        ))}
        <li
          key="final-assessment"
          onClick={() => {
            onFinalExamClick();
          }}
          className="cursor-pointer py-2"
        >
          <span className="hover:text-red-500">Final Assessment</span>
        </li>
      </ul>
    </div>
  );
};

export default ChaptersCard;
