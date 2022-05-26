import { Search, ReceiptLong } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Switchs } from "../components/Switch";
import React, { useContext } from "react";
import LeaderBoardContext from "../LeaderBoardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function HeaderContent() {
  const searchContext = useContext(LeaderBoardContext);

  return (
    <div
      className="flex justify-between h-full"
      style={{ background: "#151B32" }}
    >
      <div className="flex flex-col justify-center ml-4">
        <Paper
          sx={{
            paddingLeft: "12px",
            background: "#363D4F",
            borderRadius: "15px",
          }}
        >
          <InputBase
            value={searchContext.searchName}
            onChange={(e) => searchContext.setSearchName(e.target.value)}
            placeholder="Search name"
            className="w-64"
            sx={{ color: "#ffffff" }}
          />
          <IconButton
            className="absolute right-0"
            sx={{
              background: "linear-gradient(180deg, #FF22E9 0%, #8F00FF 100%)",
              fontSize: "4px",
              bottom: "1px",
            }}
            component="span"
            size="small"
          >
            <Search fontSize="small" sx={{ color: "#ffffff" }} />
          </IconButton>
        </Paper>
      </div>
      <div className="flex flex-col justify-center">
        {/* action */}
        <div className="flex">
          <div>
            <Switchs
              iconStart={
                <FontAwesomeIcon
                  color="#ffffff90"
                  style={{ fontSize: "13px" }}
                  icon={faEdit}
                />
              }
              iconCheck={
                <FontAwesomeIcon
                  color="#ffffff90"
                  style={{ fontSize: "13px" }}
                  icon={faEdit}
                />
              }
            />
          </div>
          <div className="mx-8">
            <Switchs
              iconStart={
                <ReceiptLong sx={{ fontSize: "16px", color: "#ffffff90" }} />
              }
              iconCheck={
                <ReceiptLong sx={{ fontSize: "16px", color: "#ffffff90" }} />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
