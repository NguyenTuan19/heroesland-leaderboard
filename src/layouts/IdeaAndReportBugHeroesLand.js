import React, { useContext } from "react";
import { Box, CircularProgress } from "@mui/material";
import LeaderBoardTable from "../components/Table";
import LeaderBoardContext from "../LeaderBoardContext";
import { useFetchLeaderBoarIdeaAndReportBug } from "../hooks/useLeaderBoard";

const columns = [
  {
    id: "no",
    label: "No",
  },
  {
    id: "content",
    label: "Content",
  },
  {
    id: "point",
    label: "Point",
  },
  {
    id: "time",
    label: "Time",
  },
];

const styleTableCellHeader = {
  fontFamily: "Inter",
  color: "#ffffff",
  textAlign: "center",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  borderBottom: ".5px solid #FF22E9",
  background: "#17132E",
  //padding: "10px 0",,
  position: "sticky",
};

const styleTableCell = {
  fontFamily: "Inter",
  color: "#ffffff",
  borderBottom: "none",
  borderRifht: "1px solid blue",
  background:
    "linear-gradient(180deg, #1E193B 0%, rgba(30, 25, 59, 0.53) 100%);",
  textAlign: "center",
};

function IdeaAndReportBugHeroesLand({ type }) {
  const leaderBoardContext = useContext(LeaderBoardContext);

  const { data, isLoading } = useFetchLeaderBoarIdeaAndReportBug({
    username: leaderBoardContext.leaderBoardData?.username,
    type: type,
  });
  console.log(
    "🚀 ~ file: IdeaAndReportBugHeroesLand.js ~ line 55 ~ IdeaAndReportBugHeroesLand ~ data",
    data
  );

  return (
    <Box className={`${isLoading ? "opacity-50" : ""} relative`}>
      <LeaderBoardTable
        columns={columns}
        rows={data?.data | []}
        sxTableCellHeader={styleTableCellHeader}
        sxTableCell={styleTableCell}
      ></LeaderBoardTable>
      {isLoading && (
        <CircularProgress
          size={60}
          sx={{
            color: "rgb(144, 202, 249)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        />
      )}
    </Box>
  );
}

export default IdeaAndReportBugHeroesLand;
