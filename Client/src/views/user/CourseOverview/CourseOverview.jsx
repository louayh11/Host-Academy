import React, { useEffect, useState } from "react";
import LessonCard from "./components/LessonCard";
import ChaptersCard from "components/card/ChaptersCard";
import { useParams } from "react-router-dom";
import Quiz from "../quizzPage/components/Quiz";
// import FinalExam from "../FinalExam";
import Ready from "../FinalExam/components/Ready";

const CourseOverview = () => {
  const [courseData, setCourseData] = useState("");
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [selectedQuizzIndex, setSelectedQuizzIndex] = useState("");
  const [nextLesson, setnextLesson] = useState("");
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [selectedFinalExamIndex, setSelectedFinalExamIndex] = useState("");
const [isFinalExamVisible, setIsFinalExamVisible] = useState(false);
const [updateChaptersCard, setUpdateChaptersCard] = useState(false);
const [progress, setProgress] = useState(null);


const handleFinalExamClick = (finalExamIndex) => {
  setSelectedFinalExamIndex();
  console.log(selectedFinalExamIndex)
  setIsFinalExamVisible(true);
};

useEffect(() => {
  setUpdateChaptersCard(true); // Trigger an update
}, [progress, selectedLessonIndex]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://host-academy-backend-production.up.railway.app/api/course/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://host-academy-backend-production.up.railway.app/api/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: user.uid,
            courseId: id
          })
        });

        const data = await response.json();

        setProgress(data.progress);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [progress,id,user.uid]);

  const handleChapterClick = (chapterIndex) => {
    setSelectedChapterIndex(chapterIndex);
    setSelectedLessonIndex(0);
  };

  const showLesson = () => {
    setIsQuizVisible(false);
    setIsFinalExamVisible(false);
  };

  const handleQuizzClick = (quizzIndex,nextLessonId) => {
    setnextLesson({nextLessonId});
    console.log(nextLesson)
    setSelectedQuizzIndex(quizzIndex);
    console.log(selectedQuizzIndex)
    setIsQuizVisible(true);
    setIsFinalExamVisible(false);
  };

  if (!courseData) {
    return <div>Loading...</div>;
  }

  const selectedChapter = courseData?.chapters[selectedChapterIndex];
  console.log("selectedChapter", selectedChapter);

  const selectedLesson = selectedChapter?.lessons[selectedLessonIndex];
  console.log("selectedLesson", selectedLesson);

  const lessonId = selectedLesson?.id;
  const nextLessonId = selectedChapter?.lessons[selectedLessonIndex+1]?.id;
  const index = selectedLessonIndex;

  const handleLessonClick = (lessonIndex) => {
    setSelectedLessonIndex(lessonIndex);
    const getProgressR=(a)=>{
    
      if(progress>a && progress-(a+10)>=0)
      return getProgressR(a+10)
      else
      return progress-a
        }
      
        const newProgress=getProgressR(0)
    if(lessonIndex>newProgress){
    setProgress(progress+1)
  }
  };

  return (
    <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-12">
      {/* Left Section*/}
      <div className="md:col-span-12 lg:col-span-4">
  {updateChaptersCard && courseData.chapters && courseData.chapters.length > 0 && (
    <ChaptersCard
      chapters={courseData.chapters}
      lessons={selectedLesson}
      onLessonClick={handleLessonClick}
      onChapterClick={handleChapterClick}
      onQuizzClick={handleQuizzClick}
      onFinalExamClick={handleFinalExamClick} 
      showLesson={showLesson}
      progress={progress}
    />
  )}
</div>


  
      <div className="md:col-span-12 lg:col-span-8">
        {/* Display LessonCard or QuizzCard based on selection */}
        {!isFinalExamVisible && !isQuizVisible && selectedLesson && (
          <LessonCard
            key={courseData?.id}
            CourseTitle={courseData?.title}
            LessonTitle={selectedLesson?.LessonTitle}
            content={selectedLesson?.LessonDescription}
            lessonVideo={selectedLesson?.lessonVideo}
            userpic={courseData?.instructor.userpic}
            onQuizzClick={handleQuizzClick}
            onFinalExamClick={handleFinalExamClick} 
          />
        )}
        {!isFinalExamVisible && isQuizVisible && <Quiz lessonId={lessonId} showLesson={showLesson} nextLessonId={nextLessonId} index={index} onLessonClick={handleLessonClick}/>}
        {isFinalExamVisible && <Ready id={id} />}

      </div>
    </div>
  );
};

export default CourseOverview;
