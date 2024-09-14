export default function WelcomeScreen({ onStart }) {
    return (
      <div className="w-full">
        <div className="mx-auto my-10 bg-[#c88cf0] w-4/5 h-[650px] flex flex-col justify-center items-center gap-8 border-2 border-white rounded-lg">
        <h1 className="font-bold text-4xl">Welcome to Our Shop!</h1>
        <button type="button" onClick={onStart} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center my-3">Start Survey</button>
        </div>
      </div>
    );
  }
  