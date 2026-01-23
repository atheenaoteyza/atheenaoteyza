import { useContext, createContext } from "react";

const StatsContext = createContext(null);

export function StatsProvider({ children, stats, calendarData }) {
  const value = {
    stats,
    calendarData, // Add it here
  };
  return (
    <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
  );
}

export function useStats() {
  const context = useContext(StatsContext);
  if (context === undefined) {
    throw new Error("useStats must be used within the StatsProvider");
  }
  return context;
}
