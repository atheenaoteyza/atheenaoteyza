import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex p-[.5rem] bg-background justify-between rounded-xl">
      <h1 className="text-l p-1 ">Atheena Oteyza</h1>
      <div className="flex gap-1">
        <button className="p-1 border rounded">View Resume</button>
        <ThemeToggle />
      </div>
      {/* <div className="flex items-center"> */}
      {/* <nav className="hidden sm:block">{/* add links here if needed </nav> */}
      {/* </div> */}
    </header>
  );
}
