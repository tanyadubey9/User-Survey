import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import ThankYouScreen from './ThankYouScreen';
import SurveyQuestion from './SurveyQuestion';
import NavigationButtons from './NavigationButtons';
import './App.css';

const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" },
];


function App() {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sessionId] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];

  useEffect(() => {
    if (surveyCompleted) {
      setTimeout(() => {
        setSurveyCompleted(false);
        setCurrentQuestionIndex(0);
      }, 5000); 
    }
  }, [surveyCompleted]);

  const handleStart = () => setSurveyStarted(true);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
};

const handleNext = () => {
  if (answers[currentQuestion.id]) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    alert("Please answer the question before proceeding.");
  }
};

  const handlePrevious = () => setCurrentQuestionIndex(currentQuestionIndex - 1);

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit?")) {
      localStorage.setItem(sessionId, JSON.stringify({ answers, status: "COMPLETED" }));
      setSurveyCompleted(true);
    }
  };

  return (
    <div className="App">
      {!surveyStarted && !surveyCompleted && <WelcomeScreen onStart={handleStart} />}
      {surveyStarted && !surveyCompleted && (
        <>
          <SurveyQuestion question={questions[currentQuestionIndex]} answer={answers[questions[currentQuestionIndex].id]} onAnswerChange={handleAnswerChange} />
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
            nextDisabled={!currentAnswer}
          />
        </>
      )}
      
      {surveyCompleted && <ThankYouScreen />}
    </div>
  );
}

export default App;
