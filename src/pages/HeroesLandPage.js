import { Box, Typography } from "@mui/material";
import DetailLeaderBoard from "../layouts/DetailLeaderBoard";
import React, { useContext } from "react";
import HeaderContent from "../layouts/HeaderContent";
import ListHeroesLand from "../layouts/ListHeroesLand";
import HeroesLandTab from "../components/Tab";
import IdeaAndReportBugHeroesLand from "../layouts/IdeaAndReportBugHeroesLand";
import NoDataDetail from "../layouts/NoDataDetail";
import LeaderBoardContext from "../LeaderBoardContext";

function HeroesLandPage() {
  const leaderBoardContext = useContext(LeaderBoardContext);

  const listTabs = [
    {
      index: "Idea",
      label: "Idea",
      content: <IdeaAndReportBugHeroesLand type="Idea" />,
    },
    {
      index: "ReportBug",
      label: "Report bug",
      content: <IdeaAndReportBugHeroesLand type="ReportBug" />,
    },
  ];

  return (
    <div className="grid grid-cols-5 h-screen">
      <Box
        sx={{
          background: "#1E193B",
          borderRight: "0.5px solid #FFFFFF",
        }}
        className="col-span-1 h-screen"
      >
        <ListHeroesLand />
      </Box>
      <Box sx={{ background: "#151B32" }} className="col-span-4 h-screen">
        {/* content */}
        <Box sx={{ height: "10%" }}>
          <HeaderContent />
        </Box>
        <Box
          className="flex"
          sx={{
            height: "35%",
            backgroundImage: "url(/image/heroesland.svg)",
            backgroundSize: "unset",
          }}
        >
          <Box
            sx={{
              width: "65%",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "800",
                color: "#ffffff",
                textAlign: "center",
                mt: "2rem",
              }}
            >
              BETA TEST
            </Typography>
          </Box>
          <Box
            sx={{
              width: "45%",
              backgroundImage: "url(/image/heroesland2.png)",
              backgroundRepeat: "round",
            }}
          ></Box>
        </Box>
        {leaderBoardContext?.leaderBoardData?.rank ? (
          <Box sx={{ height: "55%" }} className="flex p-4">
            {/* content */}
            <Box className="w-1/2 pr-2 h-full">
              {/* detail */}
              <DetailLeaderBoard />
            </Box>
            <Box
              className="w-1/2 h-full ml-2 rounded-xl text-white"
              sx={{
                background: "#1E193B",
                border: "1px solid #8F00FF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <HeroesLandTab listTabs={listTabs || []}></HeroesLandTab>
            </Box>
          </Box>
        ) : (
          <Box sx={{ height: "55%" }} className="p-12">
            <NoDataDetail />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default HeroesLandPage;
