import React, { useContext } from "react";
import { Box, CircularProgress } from "@mui/material";
import LeaderBoardTable from "../components/Table";
import LeaderBoardContext from "../LeaderBoardContext";
import { useFetchLeaderBoarDetail } from "../hooks/useLeaderBoard";

const columns = [
  {
    id: "logType",
    label: "Type",
    sx: { width: "50%" },
  },
  {
    id: "point",
    label: "Point",
    sx: { width: "50%" },
  },
];

const styleTableCellHeader = {
  background:
    "linear-gradient(180deg, #1E193B 0%, rgba(30, 25, 59, 0.53) 100%);",
  fontFamily: "Inter",
  color: "#ffffff",
  textAlign: "center",
  borderBottom: "0.5px solid rgba(255, 34, 233, 0.5);",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  //padding: "10px 0",,
  position: "sticky",
};

const styleTableCell = {
  fontFamily: "Inter",
  color: "#ffffff",
  borderBottom: "none",
  background:
    "linear-gradient(180deg, #1E193B 0%, rgba(30, 25, 59, 0.53) 100%);",
  textAlign: "center",
  padding: "5px",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
};

function DetailLeaderBoard() {
  const leaderBoardContext = useContext(LeaderBoardContext);

  const { data, isLoading } = useFetchLeaderBoarDetail({
    username: leaderBoardContext.leaderBoardData?.username,
  });

  return (
    <div className={`h-full relative flex flex-col justify-between`}>
      <Box
        className="flex p-0.5 text-white rounded-xl"
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #8F00FF",
          background: "#1E193B",
          height: "25%",
        }}
      >
        <div className="w-1/5 font-semibold flex flex-col justify-center">
          <div className="text-center text-xs">Rank</div>
          <Box
            sx={{ borderRight: "1px solid #8F00FF" }}
            className="p-1 text-center text-2xl"
          >
            {leaderBoardContext.leaderBoardData?.rank}
          </Box>
        </div>
        <div className="w-1/5 font-semibold flex flex-col justify-center">
          <div className="text-center text-xs">Point</div>
          <Box
            sx={{ borderRight: "1px solid #8F00FF" }}
            className="p-1 text-center text-2xl"
          >
            {leaderBoardContext.leaderBoardData?.point}
          </Box>
        </div>
        <div className="w-3/5 flex flex-col justify-center text-white py-3 px-6">
          <div className="text-xs">
            <Box
              className="mb-2 flex"
              sx={{ borderBottom: "1px solid #8F00FF" }}
            >
              <div className="font-semibold w-3/12">User:</div>
              <div className="text-xs">
                {leaderBoardContext.leaderBoardData?.username}
              </div>
            </Box>
            <Box className="flex">
              <div className="font-semibold w-3/12">Wallet:</div>
              <div className="text-xs">
                {leaderBoardContext.leaderBoardData?.wallet_addr}
              </div>
            </Box>
          </div>
        </div>
      </Box>
      <Box
        className={`flex rounded-xl text-white p-0.5 ${
          isLoading ? "opacity-50" : ""
        }`}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #8F00FF",
          background: "#1E193B",
          height: "70%",
          marginTop: "5%",
        }}
      >
        <LeaderBoardTable
          columns={columns}
          rows={data?.data ?? []}
          sxTableCellHeader={styleTableCellHeader}
          sxTableCell={styleTableCell}
          sxTableContainer={{ height: "100%" }}
        />
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
    </div>
  );
}

export default DetailLeaderBoard;
