import {
  getLeaderBoard,
  getLeaderBoardDetail,
  getLeaderBoardIdeaAndReportBugByType,
} from "../api/leaderboard";
const { useQuery } = require("react-query");

export const useFetchLeaderBoard = (query, search) => {
  return useQuery(
    ["leaderBoard", { page: query.page, limit: query.size, search }],
    async () => {
      let data = [];
      const requestQuery = {
        ...query,
        search,
      };
      await getLeaderBoard(requestQuery).then((res) => (data = res.data));
      return { data };
    }
  );
};

// export const useFetchLeaderBoard = (query, search) => {
//   const requestQuery = {
//     ...query,
//     search,
//   };
//   const { data, fetchNextPage, isLoading } = useInfiniteQuery(
//     ["leaderBoard"],
//     ({ pageParam = requestQuery }) => getLeaderBoard(pageParam),
//     {
//       getNextPageParam: (lastPage, pages) => {
//         console.log(requestQuery);
//         return requestQuery;
//       },
//     }
//   );
//   return { data, fetchNextPage, isLoading };
// };

export const useFetchLeaderBoarDetail = (query) => {
  return useQuery(
    ["leaderBoardDetail", { username: query.username }],
    async () => {
      let data = [];
      await getLeaderBoardDetail(query).then((res) => (data = res.data));
      return { data };
    }
  );
};

export const useFetchLeaderBoarIdeaAndReportBug = (query) => {
  return useQuery(
    [
      "leaderBoardIdeaAndReportBug",
      { username: query.username, type: query.type },
    ],
    async () => {
      let data = [];
      await getLeaderBoardIdeaAndReportBugByType(query).then(
        (res) => (data = res.data)
      );
      return { data };
    }
  );
};
