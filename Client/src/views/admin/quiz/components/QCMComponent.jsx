import React, { useState } from 'react';

const QCMComponent = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [rightAnswer, setRightAnswer] = useState([]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRightAnswerChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setRightAnswer(selectedOptions);
  };

  const handleSubmit = (lessonId) => {
    const newQuiz = {
      question: question,
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      rightAnswer: rightAnswer.map((index) => `option${parseInt(index)}`)
    };

    fetch('https://host-academy-backend-production.up.railway.app/api/quizzes/add/'+lessonId.lessonId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuiz)
    })
    .then(response => response.json())
    .then(data => {
      // Handle success response
      console.log('Quiz added successfully:', data);
      setQuestion('');
      setOptions(['', '', '', '']);
      setRightAnswer([]);
    })
    .catch(error => {
      // Handle error
      console.error('Error adding quiz:', error);
    });
  };

  return (
    <div>
      <div className="thats-right-great mt-5 mb-10 flex items-center justify-center pb-5 text-4xl font-normal">
        <h2>Multiple Choice (QCM)</h2>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col h-full w-1/2">
          <label className="w-full py-4 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300" htmlFor="qcm-question">Question:</label>
          <input
            type="text"
            id="qcm-question"
            className="relative h-14 text-xl bg-gray-100"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/2 flex items-center justify-center w-full">
          <label className="w-full py-4 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300" >Options:</label>
          <div className="mt-[-3rem]">
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={option}
                    className="text-xl px-20 bg-gray-100"
                    style={{ maxWidth: '100%' }} 
                    onChange={(event) => handleOptionChange(index, event.target.value)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mt-10 mb-10 justify-center items-center">
        <label htmlFor="qcm-right-answer" className=" items-center px-20 py-4 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300" >Right Answer:</label>
        <select
          id="qcm-right-answer"
          multiple
          className="text-xl px-20 bg-gray-100" 
          style={{ maxWidth: '100%' }} 
          value={rightAnswer}
          onChange={handleRightAnswerChange}
        >
          {options.map((option, index) => (
            <option key={index} value={index + 1}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="rounded-md shadow-sm flex justify-center" role="group">
        <button
          className="bg-blackTheme hover:bg-gray-700 text-white text-md px-20 rounded-xl pt-5 pb-5 mt-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QCMComponent;
