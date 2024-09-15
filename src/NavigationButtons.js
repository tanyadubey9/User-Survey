export default function NavigationButtons({ onPrevious, onNext, onSubmit, isLastQuestion, nextDisabled }) {
    return (
      <div className="flex gap-10 justify-evenly">
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-3" onClick={onPrevious} disabled={nextDisabled}>Previous</button>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-3" onClick={isLastQuestion ? onSubmit : onNext} disabled={nextDisabled}> {isLastQuestion ? "Submit" : "Next"} </button>
      </div>
    );
  }
  