import React from "react";
import './SurveyQuestion.css';

export default function SurveyQuestion({ question, answer, onAnswerChange}) {
    const renderRatingOptions = () => {
        const options = Array.from({ length: question.scale }, (_, i) => i + 1);
        return options.map((option) => (
            <div
                key={option}
                className={`rating-box ${answer === option ? 'selected' : ''} md:w-10 md:h-10 w-8 h-8 font-semibold border-2 border-[#cccccc] rounded-md flex items-center justify-center cursor-pointer transition-colors duration-300 hover:border-[#333]`}
                onClick={() => onAnswerChange(question.id, option)}
            >
                {option}
            </div>
        ));
    };
    return (
        <div className="w-full">
            <div className="mx-auto my-10 bg-[#c88cf0] w-4/5 h-[550px] flex flex-col justify-center items-center gap-8 border-2 border-white rounded-lg">
                <h2 className="text-2xl font-semibold text-violet-950">{question.text}</h2>
                {question.type === "rating" ? (
                    <div className="rating-container flex flex-wrap justify-center gap-2">{renderRatingOptions()}</div>
                ) : (
                    <textarea className="rounded-xl border-2 border-violet-600 w-2/5 h-24 p-2"
                        value={answer || ""}
                        onChange={(e) => onAnswerChange(question.id, e.target.value)}
                    />
                )}
            </div>
        </div>
    );
}
