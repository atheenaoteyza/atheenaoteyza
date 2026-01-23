import { useStats } from "@/context/StatsContext";

export default function GithubStatistics() {
  const { stats } = useStats();
  return (
    <div className="flex p-[.2rem] bg-gray-200 dark:bg-[hsl(0,0%,0%)] rounded-xl gap-[2px] lg:h-[8rem]">
      {/* GitHub Icon */}
      <div className="flex items-center m-4 ">
        <svg
          className="w-8 h-8 text-gray-600 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </div>
      {/* Repositories */}
      <div className="p-6 rounded-xl bg-[#ebedf0] dark:bg-[#161b22] flex-1 text-gray-900 dark:text-white">
        <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider text-center">
          Repositories
        </h3>
        <p className="text-2xl font-black mt-2 text-center">{stats.repos}</p>
      </div>

      {/* Commits */}
      <div className="p-6 rounded-xl bg-[#ebedf0] dark:bg-[#161b22]  flex-1 text-gray-900 dark:text-white ">
        <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider text-center">
          Commits (Year)
        </h3>
        <p className="text-2xl font-black mt-2 text-center">{stats.commits}</p>
      </div>

      {/* Pull Requests */}
      <div className="p-6 rounded-xl bg-[#ebedf0] dark:bg-[#161b22] flex-1 text-gray-900 dark:text-white">
        <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider text-center">
          Pull Requests
        </h3>
        <p className="text-2xl font-black mt-2 text-center">{stats.prs}</p>
      </div>
    </div>
  );
}
