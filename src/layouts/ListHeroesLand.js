import { Box, CircularProgress } from "@mui/material";
import LeaderBoardTable from "../components/Table";
import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { ArrowDownward, Mouse } from "@mui/icons-material";
import { useFetchLeaderBoard } from "../hooks/useLeaderBoard";
import InfiniteScroll from "react-infinite-scroll-component";
import LeaderBoardContext from "../LeaderBoardContext";

const columns = [
  {
    id: "rank",
    label: "Rank",
    sx: { width: "20%" },
  },
  {
    id: "username",
    label: "User",
    sx: { width: "60%" },
  },
  {
    id: "point",
    label: "Point",
    sx: { width: "20%" },
  },
];

const styleTableCell = {
  fontFamily: "Inter",
  color: "#ffffff",
  borderBottom: "none",
  // background:
  //   "linear-gradient(180deg, #1E193B 0%, rgba(30, 25, 59, 0.53) 100%);",
  textAlign: "center",
};

const styleTableCellHeader = {
  borderBottom: "1px solid #FF22E9",
  fontWeight: "700",
  background:
    "linear-gradient(180deg, #1E193B 0%, rgba(30, 25, 59, 0.53) 100%);",
  fontFamily: "Inter",
  color: "#ffffff",
  textAlign: "center",
  padding: "0",
  position: "sticky",
};

function ListHeroesLand() {
  const [pagination, setPagination] = useState({ page: 1, size: 20 });
  const [search, setSearch] = useState("");
  const { data, isLoading } = useFetchLeaderBoard(pagination, search);
  const [list, setList] = useState([]);
  const leaderBoardContext = useContext(LeaderBoardContext);

  useEffect(() => {
    setPagination((p) => ({ ...p, page: 1 }));
    setSearch(leaderBoardContext.searchName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderBoardContext.searchName]);

  useEffect(() => {
    if (pagination.page === 1) {
      setList(data?.data ?? []);
    } else {
      setList(list.concat(data?.data ?? []));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  const nextPage = () => {
    setPagination((pagination) => ({
      ...pagination,
      page: pagination.page + 1,
    }));
  };

  const handleClickRow = (row) => {
    leaderBoardContext.setLeaderBoardData(row);
  };

  return (
    <Box
      className="h-full flex flex-col justify-between"
      sx={{
        background: "#1E193B",
        color: "#ffffff",
      }}
    >
      <div className="px-4">
        <div className="text-xl font-extrabold leading-6 text-center py-5">
          <span className="title">Leader Board</span>
        </div>
        <div
          id="test"
          style={{ height: "calc(100vh - 120px)", overflow: "auto" }}
          className=""
        >
          <InfiniteScroll
            dataLength={list?.length}
            next={nextPage}
            hasMore={true}
            scrollableTarget="test"
          >
            <LeaderBoardTable
              columns={columns}
              rows={list ?? []}
              hover={true}
              activeCell={true}
              sxTableCellHeader={styleTableCellHeader}
              sxTableCell={styleTableCell}
              // sxTableContainer={{
              //   height: "calc(100vh - 120px)",
              //   overflow: "auto",
              // }}
              handleClickRow={handleClickRow}
            />
          </InfiniteScroll>
        </div>
        <Box
          className="my-2 p-2 flex justify-center"
          sx={{ borderTop: "1px solid #FF22E9" }}
        >
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress size={25} />
            </Box>
          ) : (
            <div>
              <Mouse sx={{ color: "#ffffff" }} />
              <ArrowDownward sx={{ color: "#ffffff" }} />
            </div>
          )}
        </Box>
      </div>
    </Box>
  );
}

export default React.memo(ListHeroesLand);
