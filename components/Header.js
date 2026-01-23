import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex p-[.2rem] bg-gray-200 dark:bg-[hsl(0,0%,0%)] justify-between rounded-xl">
      {" "}
      <h1 className="text-l p-1 ">Atheena Oteyza</h1>
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
