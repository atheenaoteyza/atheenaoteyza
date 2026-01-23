import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex px-[.2rem] py-[.2rem] pl-[1rem] lg:h-[2.5rem] bg-gray-200 dark:bg-[hsl(0,0%,0%)] justify-between rounded-xl">
      {" "}
      <h1 className="text-l font-bold p-1 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-gray-600 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        Oteyza, Atheena Luis
      </h1>
      <div className="flex gap-1">
        <button className="p-1 rounded dark:bg-[#161b22] cursor-pointer">
          View Resume
        </button>
        <ThemeToggle />
      </div>
      {/* <div className="flex items-center"> */}
      {/* <nav className="hidden sm:block">{/* add links here if needed </nav> */}
      {/* </div> */}
    </header>
  );
}
