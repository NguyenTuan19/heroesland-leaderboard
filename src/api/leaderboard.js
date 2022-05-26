import { axiosInstance } from ".";
import {
  getLeaderBoardDetailMock,
  getLeaderBoardMock,
} from "./mockdata/leaderboard";

const getLeaderBoard = (query) => {
  getLeaderBoardMock();
  return axiosInstance.get(
    "/api/leader_board",
    { params: query },
    {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
    }
  );
};

const getLeaderBoardDetail = (query) => {
  getLeaderBoardDetailMock();
  return axiosInstance.get("/api/leader_board_detail", { params: query });
};

const getLeaderBoardIdeaAndReportBugByType = (query) => {
  return axiosInstance.get("/api/list_by_type", { params: query });
};

export {
  getLeaderBoard,
  getLeaderBoardDetail,
  getLeaderBoardIdeaAndReportBugByType,
};
