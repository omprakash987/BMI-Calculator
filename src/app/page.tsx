import Link from "next/link";

export default function Home() {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        BMI Calculator!
      </h1>
      <p className="text-2xl mt-20">
        Calculate your BMI using this handy calculator!
      </p>

      <div className="mt-8">
        <Link href="./bmi">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Calculate
          </button>
        </Link>
      </div>
    </div>
  );
}
  