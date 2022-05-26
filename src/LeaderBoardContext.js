import { createContext, useState } from "react";

const LeaderBoardContext = createContext();

export const LeaderBoardProvider = ({ children }) => {
  const [leaderBoardData, setLeaderBoardData] = useState({});
  const [searchName, setSearchName] = useState("");
  return (
    <LeaderBoardContext.Provider
      value={{
        leaderBoardData,
        setLeaderBoardData,
        searchName,
        setSearchName,
      }}
    >
      {children}
    </LeaderBoardContext.Provider>
  );
};

export default LeaderBoardContext;
